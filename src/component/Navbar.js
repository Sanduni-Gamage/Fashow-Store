import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);
      return (
        <>
          <nav className='navbar'id="header">
            <div className='navbar-container'>
              <Link to='/Shophome' className='navbar-logo' onClick={closeMobileMenu}>
                FASHOW STORE MANAGING
                <i className='fab fa-typo3' />
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
    
              
    
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/shop' className='nav-links' onClick={closeMobileMenu}>
                  Add To Shop
                  </Link>
                </li>
                
                  <li className='nav-item'>
              <Link
                to='/show'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Show Store
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/online'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Direct to Online Store
              </Link>
            </li>

            
</ul>
          </div>
     
    
     </nav>
   </>
 );
}

export default Navbar;