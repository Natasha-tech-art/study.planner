import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">StudySmart</div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/subjects">Subjects</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  ); 
}; 

export default Navbar;