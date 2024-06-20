import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar">
      {!isHomePage && <h2>&lt;Jhavakar Thillainathan /&gt;</h2>}
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
        <a href="/Jhavakar_Thillainathan_CV.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
