import React, { useState} from "react"
import { Link } from 'react-router-dom'
import './Navbar.css'

import NavMenu from './NavMenu'
import MainMenu from '../Navbar/MainManu'
import { NavMenuItems } from '../Constants/NavMenuItems'
import { NavButtonsItems } from '../Constants/NavButtonItems'
import MobileMenu from '../Navbar/MobileMenu'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    const closeModileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    auto.ru
                </Link>
                <Link to='/' className='add-request'>
                    <i className='fas fa-plus' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className='fas fa-bars' />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <NavMenu items ={NavMenuItems} closeMobileMenu={closeModileMenu} />
                </ul>
                <MainMenu closeModuleMenu={closeModileMenu} />
                <ul className='button-menu'>
                    <NavMenu items ={NavButtonsItems} closeMobileMenu={closeModileMenu} />
                </ul>
            </nav>
            <div className='navbar-end'>
                <ul className={click ? 'nav-mobile-menu active' : 'nav-mobile-menu'}>
                    <MobileMenu />
                </ul>
            </div>
        </>
    )
}

export default Navbar;