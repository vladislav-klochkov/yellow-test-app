import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../utils/authUtil';

import logoIcon from '../../images/logo_icon.png';
import barIcon from '../../images/bars_icon.png';
import './styles.css';
import MobileMenu from '../MobileMenu';

const Home = ({ children, isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <div>
    {isMobileMenuOpen && (<MobileMenu setMobileMenuOpen={setIsMobileMenuOpen} />)}

    <header>
      <Link className="logo-icon" to="/" onClick={() => setIsMobileMenuOpen(false)}>
        <img src={logoIcon} alt="logo_icon"/>
      </Link>

      {isAuthenticated() && (
        <nav className="nav-list">
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Jogs</Link>
            </li>
            <li>
              <Link to="/info" onClick={() => setIsMobileMenuOpen(false)}>Info</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact us</Link>
            </li>
            <li>
              <Link className="logout-icon" to="/login" />
            </li>
          </ul>

          <button className="bar-icon">
            <img src={barIcon} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} alt="bar_icon"/>
          </button>
        </nav>
      )}
    </header>

    {children}
  </div>
);

export default Home;
