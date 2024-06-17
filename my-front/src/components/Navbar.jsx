import {React, useState} from 'react'
import '../styles/Navbar.css'


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {setMenuOpen(!menuOpen)}
    const closeMenu = () => {setMenuOpen(false)}

    return (
        <nav>
            <div>
                <h1>Chill Surf</h1>
                <div>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/dashboard">Dashboard</a>
                </div>
                <div className="menu" onClick={toggleMenu}>
                    <image src="https://img.icons8.com/ios/50/000000/menu--v1.png" alt="menu"/>
                </div>
            
            </div>

        </nav>
    )
}

export default Navbar
