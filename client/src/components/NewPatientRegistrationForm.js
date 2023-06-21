import React from "react";
import Patient from "../models/Patient";

class NewPatientRegistrationForm extends React.Component {
  state = {
    name: "",
    contact: "",
    medicalHistory: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Create a new patient and save it to the database
    const patient = new Patient({
      name: this.state.name,
      contact: this.state.contact,
      medicalHistory: this.state.medicalHistory,
    });
    patient.save();
  };

  render() {
    return (
      <div>
        <h1>New Patient Registration</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="contact" placeholder="Contact" />
          <input type="text" name="medicalHistory" placeholder="Medical History" />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default NewPatientRegistrationForm;