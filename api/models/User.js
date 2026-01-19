const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false // Don't return password by default
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  studentId: {
    type: String,
    unique: true,
    sparse: true
  },
  role: {
    type: String,
    enum: ['student', 'faculty', 'admin'],
    default: 'student'
  },
  program: {
    type: String,
    enum: ['PharmD', 'MD', 'Nursing', 'MPH', 'MHA'],
    default: 'PharmD'
  },
  cohortYear: {
    type: Number,
    default: new Date().getFullYear()
  },
  avatar: String,
  phoneNumber: String,
  campus: {
    type: String,
    enum: ['Riyadh', 'Jeddah', 'Al-Ahsa'],
    default: 'Riyadh'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  lastLogin: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(passwordAttempt) {
  return await bcrypt.compare(passwordAttempt, this.password);
};

// Method to get public profile
userSchema.methods.getPublicProfile = function() {
  const { password, ...publicProfile } = this.toObject();
  return publicProfile;
};

module.exports = mongoose.model('User', userSchema);
