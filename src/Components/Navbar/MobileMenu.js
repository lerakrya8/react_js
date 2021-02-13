import React, { useState, useCallback, useMemo } from "react"
import Dropdown from '../Dropdown/Dropdown'
import { Link } from 'react-router-dom'
import { Transport } from '../Constants/Transport'
import { Spares } from '../Constants/Spares'
import './Navbar.css'

function MobileMenu() {
    const [dropdownTransport, setDropdownTransport] = useState(false);
    const [dropdownSpares, setDropdownSpares] = useState(false);

    const toggleTransport = useCallback(
        () => {
            setDropdownTransport(prev => !prev)
        },
        [],
    );

    const toggleSpares = useCallback(
        () => {
            setDropdownSpares(prev => !prev)
        },
        [],
    );

    const MainMenuItems = useMemo(() => (
        [
            {
                title: 'Легковые',
                path: '/',
                cName: 'nav-menu-links',
                isDropdown: true,
                toShow: dropdownTransport,
                onHoverSth: toggleTransport,
                el: <Dropdown dropdownMenu={Transport}/>
            },
            {
                title: 'Запчасти',
                path: '/',
                cName: 'nav-menu-links',
                isDropdown: true,
                toShow: dropdownSpares,
                onHoverSth: toggleSpares,
                el: <Dropdown dropdownMenu={Spares}/>
            },
            {
                title: 'ПроАвто',
                path: '/',
                cName: 'nav-menu-links',
                isDropdown: false
            },
            {
                title: 'Журнал',
                path: '/',
                cName: 'nav-menu-links',
                isDropdown: false
            },
        ]
    ), [dropdownTransport, dropdownSpares]);
    
    return (
        <>
            {MainMenuItems.map((item, index) =>
                item.isDropdown ? 
                    <li className='nav-item' key={index}
                    onMouseEnter={item.onHoverSth}
                    onMouseLeave={item.onHoverSth}
                    >
                        <Link to={item.path} className={item.cName}>
                        {item.title}
                        </Link>
                        {item.toShow && item.el}
                    </li>
                : 
                <li className='nav-item' key={index}>
                <Link to={item.path} className={item.cName}>
                {item.title}
                </Link>
            </li>
            )}      
        </>
    )
}

export default MobileMenu;