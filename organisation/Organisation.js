const mongoose = require('mongoose');

const OrganisationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Organisation name required'],
    unique: true,
  },
  year: {
    type: Number,
    required: [true, 'Organisation established year required'],
    min: [1500, 'The year provided is too low'],
    max: [2020, 'The year provided is too high'],
  },
  revenue: {
    type: Number,
    required: true,
    min: [0, 'Revenue can\'t be negative'],
  },
});
mongoose.model('Organisation', OrganisationSchema);

module.exports = mongoose.model('Organisation');
