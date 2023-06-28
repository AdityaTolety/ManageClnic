import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Sidebar.css';

function Sidebar({ onLogout, onPatientsClick }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    onLogout();
  };

  const handlePatients = () => {
    onPatientsClick();
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="toggle-button" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="sidebar-links">
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
        <Link to="patients" smooth={true} duration={500} onClick={handlePatients}>Patients</Link>
        </li>
        <li>
          <Link to="appointments" smooth={true} duration={500}>Appointments</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;