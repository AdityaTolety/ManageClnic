import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {

  const [active, setActive] = useState(false);

  const handleClick = () => {
      setActive(!active);
  }; 


  return (
    <nav>
    <div className="logo">Dental Care</div>
    <ul className="nav-links">
      <li>
        <Link to="about" smooth={true} duration={500}>About</Link>
      </li>
      <li>
        <a href="#">Login</a>
      </li>
      <li>
      <Link
            to="book-appointment"
            smooth={true}
            duration={500}
            className={active ? 'book-appointment active' : 'book-appointment'}
            onClick={handleClick}
          >
            Book Appointment
          </Link>
      </li>
      
    </ul>
  </nav>
  );
}

export default Navbar;