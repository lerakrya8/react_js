import React, { useState, useEffect } from 'react'
import './App.css'

function Buttons({prevItem, nextItem}) {

  return (
    <>
      <div className='prev-item' onClick={prevItem}>
        <i className="fas fa-chevron-circle-left"></i>
      </div>
      <div className='next-item' onClick={nextItem}>
        <i className="fas fa-chevron-circle-right"></i>
      </div>
    </>
  );
}

export default Buttons;
