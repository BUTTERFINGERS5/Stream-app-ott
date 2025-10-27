import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';

const Navbar = () => {
  const navRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!navRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>My List</li>
          <li>Browse by genre</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons" />
        <p>Kids</p>
        <img src={bell_icon} alt="" className="icons" />

        <div className="navbar-profile" onClick={toggleDropdown}>
          <img src={profile_img} alt="Profile" className="profile" />
          <img
            src={caret_icon}
            alt="Caret"
            className={`caret ${showDropdown ? 'rotate' : ''}`}
          />
          {showDropdown && (
            <div className="dropdown">
              <p onClick={handleLogout}>Sign Out</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
