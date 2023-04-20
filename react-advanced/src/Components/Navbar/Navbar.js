import React, { useState, useEffect } from 'react'
import './Navbar.css'

export default function 
() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);
        
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])

  return (
    <div>
        <nav>
            {(toggleMenu || width > 500) &&
            <ul className="liste">
                <li className="items">Accueil</li>
                <li className="items">Services</li> 
                <li className="items">Contact</li>
            </ul>
            }
            <button onClick={toggleNav} className="btn">Bouton</button>
        </nav>
    </div>
  )
}
