import {React, useState} from 'react'
import './styles/Navbar.css'


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {setMenuOpen(!menuOpen)}
    const closeMenu = () => {setMenuOpen(false)}

    return (
        <nav>
            <div className='Navbar_layout'>
                <h1>Chill Surf</h1>
                <div className='Navbar_element'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/dashboard">Dashboard</a>
                    <div className="menu" onClick={toggleMenu}>
                    <image src="https://img.icons8.com/ios/50/000000/menu--v1.png" alt="menu"/>
            </div>
                </div>            
            </div>
            

        </nav>
    )
}

export default Navbar
