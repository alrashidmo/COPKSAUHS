const express = require('express');
const router = express.Router();
const ClinicalData = require('../models/ClinicalData');
const { verifyToken } = require('../middleware/auth');
const { sendLowHoursAlert, sendTaskReminder } = require('../services/emailService');

// Get user's clinical data
router.get('/', verifyToken, async (req, res) => {
  try {
    let clinicalData = await ClinicalData.findOne({ userId: req.userId });
    
    if (!clinicalData) {
      // Create default clinical data if doesn't exist
      clinicalData = new ClinicalData({
        userId: req.userId,
        ippes: [
          {
            title: 'IPPE I - Community Pharmacy',
            site: 'Al-Dosary Pharmacy',
            color: '#0f766e',
            hours: { completed: 160, total: 160 },
            grade: 'A',
            startDate: new Date('2024-01-01'),
            endDate: new Date('2024-03-31'),
            preceptor: 'Dr. Sarah Al-Mansoori',
            status: 'completed'
          }
        ],
        activities: [],
        attendance: {
          logs: [],
          present: 0,
          total: 0,
          professionalism: 4.5
        }
      });
      await clinicalData.save();
    }

    res.json({
      success: true,
      data: clinicalData
    });
  } catch (error) {
    console.error('Get clinical data error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching clinical data' 
    });
  }
});

// Add hours
router.post('/hours', verifyToken, async (req, res) => {
  try {
    const { hours } = req.body;

    if (!hours || hours <= 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Hours must be greater than 0' 
      });
    }

    let clinicalData = await ClinicalData.findOne({ userId: req.userId });
    if (!clinicalData) {
      clinicalData = new ClinicalData({ userId: req.userId });
    }

    clinicalData.hours.today += parseFloat(hours);
    clinicalData.hours.week += parseFloat(hours);
    clinicalData.hours.rotation += parseFloat(hours);

    await clinicalData.save();

    res.json({
      success: true,
      message: 'Hours logged successfully',
      data: clinicalData.hours
    });
  } catch (error) {
    console.error('Add hours error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error logging hours' 
    });
  }
});

// Add activity
router.post('/activities', verifyToken, async (req, res) => {
  try {
    const { title, detail } = req.body;

    if (!title || !detail) {
      return res.status(400).json({ 
        success: false, 
        message: 'Title and detail are required' 
      });
    }

    let clinicalData = await ClinicalData.findOne({ userId: req.userId });
    if (!clinicalData) {
      clinicalData = new ClinicalData({ userId: req.userId });
    }

    clinicalData.activities.push({
      title,
      detail,
      done: false,
      createdAt: new Date()
    });

    await clinicalData.save();

    res.status(201).json({
      success: true,
      message: 'Activity added successfully',
      data: clinicalData.activities
    });
  } catch (error) {
    console.error('Add activity error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error adding activity' 
    });
  }
});

// Toggle activity
router.patch('/activities/:id/toggle', verifyToken, async (req, res) => {
  try {
    const clinicalData = await ClinicalData.findOne({ userId: req.userId });
    if (!clinicalData) {
      return res.status(404).json({ 
        success: false, 
        message: 'Clinical data not found' 
      });
    }

    const activity = clinicalData.activities.id(req.params.id);
    if (!activity) {
      return res.status(404).json({ 
        success: false, 
        message: 'Activity not found' 
      });
    }

    activity.done = !activity.done;
    if (activity.done) {
      activity.completedAt = new Date();
    }

    await clinicalData.save();

    res.json({
      success: true,
      message: 'Activity updated',
      data: clinicalData.activities
    });
  } catch (error) {
    console.error('Toggle activity error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error updating activity' 
    });
  }
});

// Add attendance
router.post('/attendance', verifyToken, async (req, res) => {
  try {
    const { date, note, status } = req.body;

    if (!date || !note || !status) {
      return res.status(400).json({ 
        success: false, 
        message: 'Date, note, and status are required' 
      });
    }

    let clinicalData = await ClinicalData.findOne({ userId: req.userId });
    if (!clinicalData) {
      clinicalData = new ClinicalData({ userId: req.userId });
    }

    clinicalData.attendance.logs.push({
      date,
      note,
      status,
      archived: false,
      createdAt: new Date()
    });

    clinicalData.attendance.total += 1;
    if (status !== 'Needs Improvement') {
      clinicalData.attendance.present += 1;
    }

    await clinicalData.save();

    res.status(201).json({
      success: true,
      message: 'Attendance logged',
      data: clinicalData.attendance
    });
  } catch (error) {
    console.error('Add attendance error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error logging attendance' 
    });
  }
});

module.exports = router;
