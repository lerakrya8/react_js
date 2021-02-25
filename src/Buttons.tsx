import React from 'react'
import { isMobile } from 'react-device-detect';
import './App.css'

type ButtonsItems = {
  prevItem: () => void;
  nextItem: () => void;
  hideLeftClick: boolean;
  hideRightClick: boolean;
}

const Buttons = ({prevItem, nextItem, hideLeftClick, hideRightClick} : ButtonsItems) => {

  return (
    <>
      <div className= { hideLeftClick && !isMobile ? 'prev-item' : 'close-item' } onClick={prevItem}>
        <i className="fas fa-chevron-circle-left"></i>
      </div>
      <div className={ hideRightClick && !isMobile ? 'next-item' : 'close-item' } onClick={nextItem}>
        <i className="fas fa-chevron-circle-right"></i>
      </div>
    </>
  );
}

export default Buttons;
