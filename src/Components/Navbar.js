import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="navbar">
      <div className="logo">MassMaster</div>

      <div className="responsive-icons" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={menuOpen ? faXmark : faBars}
          size="xl"
          className="menu-icon"
        />
      </div>

      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li>Photos</li>
        <li>Videos</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
