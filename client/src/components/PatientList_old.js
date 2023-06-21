import React, { Component } from 'react';
import PatientService from './services/PatientService.js';

class PatientList extends Component {

  state = {
    patients: []
  };

  componentDidMount() {
    const patientService = new PatientService();
    patientService.getPatients().then(patients => {
      this.setState({ patients });
    });
  }

  render() {
    const { patients } = this.state;
    return (
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            <strong>{patient.name}</strong>
            <p>{patient.age}</p>
            <p>{patient.gender}</p>
            <p>{patient.contact}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default PatientList;