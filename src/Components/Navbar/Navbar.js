import React, { useState } from "react"
import { Link } from 'react-router-dom'
import './Navbar.css'
import DropdownSpares from '../Dropdown/DropdownSpares'
import DropdownTransport from '../Dropdown/DropdownTransport'
import NavMenu from './NavMenu'

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdownTransport, setDropdownTransport] = useState(false);
    const [dropdownSpares, setDropdownSpares] = useState(false);

    const handleClick = () => setClick(!click)
    const closeModileMenu = () => setClick(false);

    const onMouseEnterTransport = () => {
        setDropdownTransport(true);
    };

    const onMouseLeaveSpares = () => {
        setDropdownSpares(false);
    };   
    
    const onMouseEnterSpares = () => {
        setDropdownSpares(true);
    };

    const onMouseLeaveTransport = () => {
        setDropdownTransport(false);
    };  

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
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <NavMenu click={click} closeMobileMenu={closeModileMenu} />
            </nav>
            <div className='navbar-end'>
            <ul className={click ? 'nav-mobile-menu active' : 'nav-mobile-menu'}>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnterTransport}
                        onMouseLeave={onMouseLeaveTransport}
                    >
                        <Link to='/' className='nav-menu-links'>
                            Транспорт <i className='fas fa-caret-down' />
                        </Link>
                        {dropdownTransport && <DropdownTransport />}
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnterSpares}
                        onMouseLeave={onMouseLeaveSpares}
                    >
                        <Link to='/' className='nav-menu-links'>
                            Запчасти <i className='fas fa-caret-down' />
                        </Link>
                        {dropdownSpares && <DropdownSpares />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-menu-links'>
                            ПроАвто
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-menu-links'>
                            Журнал
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;