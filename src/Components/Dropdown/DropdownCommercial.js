import React, { useState } from "react"
import { Link } from 'react-router-dom'
import './Dropdown.css'
import { Commercial } from './Commercial'

function DropdownCars() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
        <ul onClick={handleClick}
            className={click ? 'dropdown-menu-commercial clicked' : 'dropdown-menu-commercial'}>
                {Commercial.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => 
                            setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
        </ul>
        </>
    )
}

export default DropdownCars;