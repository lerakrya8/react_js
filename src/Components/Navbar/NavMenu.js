import React from "react"
import { Link } from 'react-router-dom'
import './Navbar.css'

function NavMenu({items, closeModuleMenu}) {

    return (
        <>
            {items.map((item, index) => {
                return (
                    <li className='nav-item' key={index}>
                        <Link className={item.cName} to={item.path} onClick={closeModuleMenu}>
                            {item.isIcon ? item.icon : ''} {item.title}
                        </Link>
                    </li>
                )
            })}
        </>
    )
}

export default NavMenu;