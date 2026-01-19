const mongoose = require('mongoose');

const clinicalDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  // Hours tracking
  hours: {
    today: { type: Number, default: 0 },
    week: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    rotation: { type: Number, default: 0 },
    rotationTotal: { type: Number, default: 320 }
  },
  // IPPE Rotations
  ippes: [{
    title: String,
    site: String,
    color: String,
    hours: {
      completed: Number,
      total: Number
    },
    grade: { type: String, default: 'A' },
    startDate: Date,
    endDate: Date,
    preceptor: String,
    status: { type: String, enum: ['completed', 'ongoing', 'pending'], default: 'pending' }
  }],
  // Activities/Tasks
  activities: [{
    title: String,
    detail: String,
    done: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    completedAt: Date
  }],
  // Attendance tracking
  attendance: {
    logs: [{
      date: String,
      note: String,
      status: { type: String, enum: ['Excellent', 'Good', 'Acceptable', 'Needs Improvement'] },
      archived: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now }
    }],
    present: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    professionalism: { type: Number, default: 4.5, min: 0, max: 5 }
  },
  // UI State
  ui: {
    ippesCollapsed: { type: Boolean, default: false }
  },
  lastUpdated: { type: Date, default: Date.now }
});

// Update lastUpdated timestamp
clinicalDataSchema.pre('save', function(next) {
  this.lastUpdated = Date.now();
  next();
});

module.exports = mongoose.model('ClinicalData', clinicalDataSchema);
