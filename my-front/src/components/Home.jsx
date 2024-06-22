import React from 'react';
import About from './About';
import './styles/Home.css';

const Home = () => {
  const surfImage = require('../images/surfHome.jpg');

  const scrollToAbout = () => {
    document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>  
        <div className="home-cover">
            <h1 className='home-title'>Welcome to Surfspot Explorer</h1>
            <div className="home">
                <div className="home-content">
                <h1>Discover the Best Surf Spots</h1>
                <p>Whether you’re a seasoned surfer or just catching your first wave, </p>
                <p>Surfspot Explorer is here to help you find the perfect surf spots </p>
                <p>and make the most of your surfing adventures. We provide detailed information,</p> 
                <p>real-time updates, and a vibrant community to support your passion for surfing.</p>
                <div className="home-button-container">
                    <button className="home-button" onClick={scrollToAbout}>About</button>
                    <button className="home-button" onClick={() => window.location.href = '/signup'}>Sign Up</button>
                    <button className="home-button" onClick={() => window.location.href = '/login'}>Log In</button>
                </div>
                </div>
                <div className="home-image-container">
                <img src={surfImage} alt="Surfing" className="home-image" />
                </div>
            </div>  
        </div>
        <div id="about-section"> 
            <About />
        </div>      
    </>
  );
};

export default Home;
