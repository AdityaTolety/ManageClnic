const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: String,
  contact: String,
  medicalHistory: String,
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;