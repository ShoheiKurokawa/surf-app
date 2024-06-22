import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-cover">
        <h2>About Us</h2>
        <p>Welcome to Surfspot Explorer, your ultimate guide to discovering the best surf spots around the world. Whether you're a seasoned pro or just starting out, our platform provides everything you need to plan your next surf adventure.</p>
        
        <div className='about-parts'>
          <h3>Our Mission</h3>
          <p>Our mission is to make surfing accessible and enjoyable for everyone. We believe in the power of the ocean to bring people together, and we aim to inspire and equip surfers of all levels to explore new waves and share their experiences.</p>
        </div>

        <div className='about-parts'>
          <h3>What We Offer</h3>
          <ul>
            <li><strong>Comprehensive Surf Spot Database:</strong> Explore our extensive database of surf spots, complete with detailed information on wave conditions, best seasons, and local tips.</li>
            <li><strong>Real-Time Weather Updates:</strong> Stay informed with the latest weather and wave forecasts, ensuring you catch the best waves every time.</li>
            <li><strong>User Reviews and Ratings:</strong> Read reviews and ratings from fellow surfers to help you choose the perfect spot for your next session.</li>
            <li><strong>Interactive Maps:</strong> Use our interactive maps to find surf spots near you and plan your route.</li>
            <li><strong>Community Connection:</strong> Connect with a vibrant community of surfers, share your experiences, and get tips from the pros.</li>
          </ul>
        </div>

        <div className='about-parts'>
          <h3>Join Us</h3>
          <p>Join Surfspot Explorer today and become part of a community that shares your passion for surfing. Sign up for free and start exploring the world's best surf spots!</p>
          
          <div className="about-button-container">
            <button className="about-button" onClick={() => window.location.href = '/signup'}>Sign Up</button>
            <button className="about-button" onClick={() => window.location.href = '/login'}>Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
