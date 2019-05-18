const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Integer,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema);
