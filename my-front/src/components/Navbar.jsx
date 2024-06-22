import React, { useState, useEffect, useRef } from 'react';
import './styles/Navbar.css';
import loggedIn from '../logo/loggedIn.png';
import login from '../logo/login.png';
import signup from '../logo/signup.png';
import { useAuth } from '../AuthContext';

const Navbar = () => {
  const menuRef = useRef(null);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open state
  };

  const handleSignupClick = () => {
    window.location.href = '/signup';
  };

  const handleLoginClick = () => {
    window.location.href = '/login';
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    window.location.href = '/#about';
    setTimeout(() => {
      document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleLogout = (e) => {
    e.stopPropagation(); // Prevent menu from closing immediately
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setMenuOpen(false); // Close the menu after logout
    window.location.href = '/';
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className='Navbar_layout'>
        <h1>Chill Surf</h1>
        <div className='Navbar_element'>
          <a href="/">Home</a>
          <a href="/#about" onClick={handleAboutClick}>About</a>
          {isLoggedIn && <a href="/dashboard">Dashboard</a>}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            {isLoggedIn ? (
              <img className='loggedIn' src={loggedIn} alt="menu" />
            ) : (
              <>
                <img className='logIn' src={signup} alt="menu" onClick={handleSignupClick} />
                <img className='signIn' src={login} alt="menu" onClick={handleLoginClick} />
              </>
            )}
          </div>

          {menuOpen && isLoggedIn && (
            <ul ref={menuRef} className="dropdown">
              <li>
                <a href="/settings">Settings</a>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
              <li>
                <a href="/mypage">My Page</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
