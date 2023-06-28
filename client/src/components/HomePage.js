import React from "react";
import PatientList from "./PatientList";
import NewPatientRegistrationForm from "./NewPatientRegistrationForm";
import Navbar from "./Navbar/Navbar";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Home Page</h1>
        <PatientList />
        <NewPatientRegistrationForm />
      </div>
    );
  }
}

export default HomePage;