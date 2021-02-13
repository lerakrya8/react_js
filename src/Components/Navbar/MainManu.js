import React, { useState, useCallback, useMemo } from "react"
import Dropdown from '../Dropdown/Dropdown'
import { Link } from 'react-router-dom'
import { Cars } from '../Constants/Cars'
import { Commercial } from '../Constants/Commercial'
import { Moto } from '../Constants/Moto'
import { Spares } from '../Constants/Spares'
import './Navbar.css'

function MainMenu({closeModuleMenu}) {
    const [dropdownSpares, setDropdownSpares] = useState(false);
    const [dropdownCars, setDropdownCars] = useState(false);
    const [dropdownCommersial, setDropdownCommersial] = useState(false);
    const [dropdownMoto, setDropdownMoto] = useState(false);

    const toggleSpares = useCallback(
        () => {
            setDropdownSpares(prev => !prev)
        },
        [],
    );

    const toggleCars = useCallback(
        () => {
            setDropdownCars(prev => !prev)
        },
        [],
    );

    const toggleCommercial = useCallback(
        () => {
            setDropdownCommersial(prev => !prev)
        },
        [],
    );

    const toggleMoto = useCallback(
        () => {
            setDropdownMoto(prev => !prev)
        },
        [],
    );

    const MainMenuItems = useMemo(() => (
        [
            {
                title: 'Легковые',
                path: '/',
                cName: 'nav-links',
                isDropdown: true,
                toShow: dropdownCars,
                onHoverSth: toggleCars,
                el: <Dropdown dropdownMenu={Cars}/>
            },
            {
                title: 'Коммерческие',
                path: '/',
                cName: 'nav-links',
                isDropdown: true,
                toShow: dropdownCommersial,
                onHoverSth: toggleCommercial,
                el: <Dropdown dropdownMenu={Commercial}/>
            },
            {
                title: 'Мото',
                path: '/',
                cName: 'nav-links',
                isDropdown: true,
                toShow: dropdownMoto,
                onHoverSth: toggleMoto,
                el: <Dropdown dropdownMenu={Moto}/>
            },
            {
                title: 'Запчасти',
                path: '/',
                cName: 'nav-links',
                isDropdown: true,
                toShow: dropdownSpares,
                onHoverSth: toggleSpares,
                el: <Dropdown dropdownMenu={Spares}/>
            },
            {
                title: 'Отчеты ПроАвто',
                path: '/',
                cName: 'nav-links',
                isDropdown: false
            },
            {
                title: 'Журнал',
                path: '/',
                cName: 'nav-links',
                isDropdown: false
            },
        ]
    ), [dropdownCars, dropdownCommersial, dropdownMoto, dropdownSpares]);
    
    return (
        <>
        <ul className='nav-menu-wide'>
            {MainMenuItems.map((item, index) => item.isDropdown ? 
                    <li className='nav-item' key={index}
                    onMouseEnter={item.onHoverSth}
                    onMouseLeave={item.onHoverSth}
                    >
                        <Link to={item.path} className={item.cName} onClick={closeModuleMenu}>
                        {item.title}
                        </Link>
                        {item.toShow && item.el}
                    </li>
                : 
                <li className='nav-item' key={index}>
                <Link to={item.path} className={item.cName} onClick={closeModuleMenu}>
                {item.title}
                </Link>
            </li>
            )}      
        </ul>
        </>
    )
}

export default MainMenu;