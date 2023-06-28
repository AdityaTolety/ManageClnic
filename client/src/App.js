//import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';
import LoginPage from './components/LoginPage';
//import Navbar from './components/Navbar/Navbar';
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import PatientList from './components/PatientList';
import NewPatientRegistrationForm from './components/NewPatientRegistrationForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [showPatientsList, setShowPatientsList] = useState(false);
  const [showNewPatientForm, setShowNewPatientForm] = useState(false);

  const handleLogin = (username, password) => {
    // Make an API call to login the user
    if (username === "Admin" && password === "Admin") {
      console.log("Inside Handle Login");
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    console.log("handleLogout called");
    setIsLoggedIn(false);
  };

  const handlePatientsClick = () => {
    setShowPatientsList(true);
    setShowNewPatientForm(false);
  };

  const handleNewPatientClick = () => {
    setShowNewPatientForm(true);
    setShowPatientsList(false);
  };

  return (
    // <div>
    //   {isLoggedIn ? (
    //     <HomePage />
    //   ) : (
    //     <LoginPage onLogin={handleLogin} />
    //   )}
    // </div>
    <div className="App">
        {isLoggedIn ? (
          <div>
          <Sidebar onLogout={handleLogout} onPatientsClick={handlePatientsClick} />
          {/* <HomePage /> */}
          {showPatientsList && <PatientList />}
          {showNewPatientForm && <NewPatientRegistrationForm />}
        </div>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
