import {React, useState, useEffect} from 'react'
import './styles/Navbar.css'
import loggedIn from '../logo/loggedIn.png';
import login from '../logo/login.png'
import signup from '../logo/signup.png'


const Navbar = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {setMenuOpen(!menuOpen)}
    const closeMenu = () => {setMenuOpen(false)}
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            setIsLoggedIn(true);
        }else{
            setIsLoggedIn(false);
        }
    }, []);

    const handleSignupClick = () => {
        window.location.href = '/signup'
    };
    
    const handleLoginClick = () => {
        window.location.href = '/login'
    };

    const handleAboutClick = (e) => {
        e.preventDefault();
        window.location.href = '/#about';
        setTimeout(() => {
          document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
        }, 100);
      };
    

    return (
        <nav>
            <div className='Navbar_layout'>
                <h1>Chill Surf</h1>
                <div className='Navbar_element'>
                    <a href="/">Home</a>
                    <a href="/#about" onClick={handleAboutClick}>About</a>
                    {isLoggedIn? (<a href="/dashboard">Dashboard</a>) : null}
                    <div className="menu" onClick={toggleMenu}>
                        {isLoggedIn? (<img className='loggedIn' src={loggedIn} alt="menu"/>)
                        :   (
                        <>
                            <img className='logIn' src={signup} alt="menu" onClick={handleSignupClick}/>
                            <img className='signIn' src={login} alt="menu" onClick={handleLoginClick}/>
                        </>)}
                    </div>  
                </div>            
            </div>
            

        </nav>
    )
}

export default Navbar
