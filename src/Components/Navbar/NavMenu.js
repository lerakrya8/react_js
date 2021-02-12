import React from "react"
import { NavMenuItems } from '../Constants/NavMenuItems'
import { Link } from 'react-router-dom'
import './Navbar.css'

function NavMenu({click, closeModuleMenu}) {

    return (
        <>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {NavMenuItems.map((item, index) => {
                return (
                    <li className='nav-item' key={index}>
                        <Link className={item.cName} to={item.path} onClick={closeModuleMenu}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default NavMenu;