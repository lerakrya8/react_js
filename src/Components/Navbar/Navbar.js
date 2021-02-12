import React, { useState } from "react"
import { Link } from 'react-router-dom'
import './Navbar.css'

import Dropdown from '../Dropdown/Dropdown'
import NavMenu from './NavMenu'
import { Cars } from '../Constants/Cars'
import { Commercial } from '../Constants/Commercial'
import { Moto } from '../Constants/Moto'
import { Spares } from '../Constants/Spares'
import { Transport } from '../Constants/Transport'

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdownTransport, setDropdownTransport] = useState(false);
    const [dropdownSpares, setDropdownSpares] = useState(false);
    const [dropdownCars, setDropdownCars] = useState(false);
    const [dropdownCommersial, setDropdownCommersial] = useState(false);
    const [dropdownMoto, setDropdownMoto] = useState(false);

    const handleClick = () => setClick(!click)
    const closeModileMenu = () => setClick(false);

    const onMouseEnterTransport = () => {
        setDropdownTransport(true);
    };
    
    const onMouseLeaveTransport = () => {
        setDropdownTransport(false);
    }; 
    
    const onMouseEnterSpares = () => {
        setDropdownSpares(true);
    };

    const onMouseLeaveSpares = () => {
        setDropdownSpares(false);
    }; 
    
    const onMouseEnterCars = () => {
        setDropdownCars(true);
    };

    const onMouseLeaveCars = () => {
        setDropdownCars(false);
    };

    const onMouseEnterCommercial = () => {
        setDropdownCommersial(true);
    };

    const onMouseLeaveCommercial = () => {
        setDropdownCommersial(false);
    };

    const onMouseEnterMoto = () => {
        setDropdownMoto(true);
    };

    const onMouseLeaveMoto = () => {
        setDropdownMoto(false);
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
                    <i className='fas fa-bars' />
                </div>
                <NavMenu click={click} closeMobileMenu={closeModileMenu} />
                <ul className='nav-menu-wide'>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnterCars}
                        onMouseLeave={onMouseLeaveCars}
                    >
                        <Link to='/' className='nav-links' onClick={closeModileMenu}>
                        Легковые
                        </Link>
                        {dropdownCars && <Dropdown dropdownMenu={Cars}/>}
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnterCommercial}
                        onMouseLeave={onMouseLeaveCommercial}
                    >
                        <Link to='/' className='nav-links' onClick={closeModileMenu}>
                        Коммерческие 
                        </Link>
                        {dropdownCommersial && <Dropdown dropdownMenu={Commercial} />}
                    </li>
                    <li className='nav-item'
                    onMouseEnter={onMouseEnterMoto}
                    onMouseLeave={onMouseLeaveMoto}
                    >
                        <Link to='/' className='nav-links' onClick={closeModileMenu}>
                        Мото
                        </Link>
                        {dropdownMoto && <Dropdown dropdownMenu={Moto} />}
                    </li>
                    <li className='nav-item'
                    onMouseEnter={onMouseEnterSpares}
                    onMouseLeave={onMouseLeaveSpares}
                    >
                        <Link to='/' className='nav-links' onClick={closeModileMenu}>
                        Запчасти
                        </Link>
                        {dropdownSpares && <Dropdown dropdownMenu={Spares} />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeModileMenu}>
                        Отчеты ПроАвто
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeModileMenu}>
                        Журнал
                        </Link>
                    </li>
                </ul>    
                <ul className='button-menu'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeModileMenu}>
                        Форумы
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeModileMenu}>
                        Дилерам
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links sell' onClick={closeModileMenu}>
                        <i className='fas fa-plus' /> Продать
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeModileMenu}>
                        Войти
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className='navbar-end'>
                <ul className={click ? 'nav-mobile-menu active' : 'nav-mobile-menu'}>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnterTransport}
                        onMouseLeave={onMouseLeaveTransport}
                    >
                        <Link to='/' className='nav-menu-links'>
                            Транспорт
                        </Link>
                        {dropdownTransport && <Dropdown dropdownMenu={Transport} />}
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnterSpares}
                        onMouseLeave={onMouseLeaveSpares}
                    >
                        <Link to='/' className='nav-menu-links'>
                            Запчасти 
                        </Link>
                        {dropdownSpares && <Dropdown dropdownMenu={Spares} />}
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