import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
   
    <nav className="nav-wrapper teal lighten-2">
        <div className="container">
          <Link to="/" className="brand-logo">
            My Blog
          </Link>
          <ul className="right">
            <li>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
   
  );
};

export default Navbar;