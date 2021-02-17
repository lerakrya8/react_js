import React, { useState, useEffect, Children } from 'react'
import './App.css'
import Buttons from './Buttons';

function Carousel({items, scroll, setScroll, children}) {
  const prevItem = () => {
    let scrollValue = 300;
    if (window.innerWidth < 450) {
        scrollValue = 200;
    }
    return scroll === 0 ? setScroll(0) : setScroll(scroll + scrollValue);
  };

  const nextItem = () =>  {
    let scrollValue = 300;
    if (window.innerWidth < 450) {
        scrollValue = 200;
    }
    return scroll === -1 * (scrollValue) * (Math.ceil(items.length / (scrollValue/100)) - 1) ? setScroll(scroll) : setScroll(scroll - scrollValue);
  };

  return (
    <>
    <ul className='carousel'>
      {children}
      <Buttons prevItem={prevItem} nextItem={nextItem}/>
    </ul>
    </>
  );
}

export default Carousel;
