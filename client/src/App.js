//import logo from './logo.svg';
import React from "react";

import './App.css';
import LoginPage from './components/LoginPage';
//import Navbar from './components/Navbar/Navbar';
import PatientList from './components/PatientList';
import NewPatientRegistrationForm from './components/NewPatientRegistrationForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = (username, password) => {
    // Make an API call to login the user
    if (username === "Admin" && password === "Admin") {
      console.log("Inside Handle Login");
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <PatientList />
          <NewPatientRegistrationForm />
        </div>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
