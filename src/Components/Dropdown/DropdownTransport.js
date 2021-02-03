import React, { useState } from "react"
import { Link } from 'react-router-dom'
import './Dropdown.css'
import DropdownCars from './DropdowmCars'
import DropdownCommercial from './DropdownCommercial'
import DropdownMoto from './DropdownMoto'

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const [hoverCars, setHoverCars] = useState(false);

    const onMouseEnterCars = () => {
        setHoverCars(true);
    };

    const onMouseLeaveCars = () => {
        setHoverCars(false);
    }

    const [hoverCommercial, setHoverCommercial] = useState(false);

    const onMouseEnterCommercial = () => {
        setHoverCommercial(true);
    };

    const onMouseLeaveCommercial = () => {
        setHoverCommercial(false);
    }

    const [hoverMoto, setHoverMoto] = useState(false);

    const onMouseEnterMoto = () => {
        setHoverMoto(true);
    };

    const onMouseLeaveMoto = () => {
        setHoverMoto(false);
    }

    return (
        <>
        <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            <li onMouseEnter={onMouseEnterCars} onMouseLeave={onMouseLeaveCars}>
                <Link className='dropdown-link' to='/' onClick={() => 
                setClick(false)}>
                    Легковые
                </Link>
                {hoverCars && <DropdownCars />}
            </li>
            <li onMouseEnter={onMouseEnterCommercial} onMouseLeave={onMouseLeaveCommercial}>
                <Link className='dropdown-link' to='/' onClick={() => 
                setClick(false)}>
                    Коммерческие
                </Link>
                {hoverCommercial && <DropdownCommercial />}
            </li>
            <li onMouseEnter={onMouseEnterMoto} onMouseLeave={onMouseLeaveMoto}>
                <Link className='dropdown-link' to='/' onClick={() => 
                setClick(false)}>
                    Мото
                </Link>
                {hoverMoto && <DropdownMoto />}
            </li>
        </ul>
        </>
    )
}

export default Dropdown;