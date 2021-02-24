const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    name: String
}, { versionKey: false });

var Job = mongoose.model('Job', jobSchema, 'jobs');

module.exports = Job;