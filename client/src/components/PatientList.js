import React from "react";
import Patient from "../models/Patient";

class PatientList extends React.Component {
    state = {
      patients: [],
    };
  
    // componentDidMount() {
    //   // Get a list of all the patients from the database
    //   Patient.find({}, (patients) => {
    //     this.setState({ patients });
    //   });
    // }
  
    render() {
      return (
        <div>
          <h1>Patient List</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Medical History</th>
              </tr>
            </thead>
            <tbody>
              {this.state.patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.name}</td>
                  <td>{patient.contact}</td>
                  <td>{patient.medicalHistory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    }
  }
  
  export default PatientList;