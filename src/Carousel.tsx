import React, { ReactNode , useState} from 'react'
import './App.css'
import Buttons from './Buttons';
import {IDataCharacters, IDataEpisodes } from './App'
import { isMobile } from 'react-device-detect';

type CarouselItems = {
  items: IDataCharacters[] | IDataEpisodes[];
  children: ReactNode;
  scroll: number;
  setScroll: (parametr: number) => void;
}

const Carousel = ({items, children, scroll, setScroll} : CarouselItems) => {

const [hideLeftClick, setHideLeftClick] = useState<boolean>(false); 
const [hideRightClick, setHideRightClick] = useState<boolean>(true); 

  const prevItem = () => {
    let scrollValue: number = 0;
    scrollValue = isMobile ? 200 : 300;
    setHideRightClick(true);
    scroll + scrollValue === 0 ? setHideLeftClick(false) : setHideLeftClick(true);
    if (scroll === 0) {;
      setHideLeftClick(false);
      return setScroll(0);
    }
    return setScroll(scroll + scrollValue);
  };

  const nextItem = () =>  {
    let scrollValue: number = 0;
    scrollValue = isMobile ? 200 : 300;
    setHideLeftClick(true);
    const endOfScroll = -1 * (scrollValue) * (Math.ceil(items.length / (scrollValue/100)) - 1);
    scroll - scrollValue === endOfScroll ? setHideRightClick(false) : setHideRightClick(true);
    if(scroll === endOfScroll) {
      setHideRightClick(false);
      return setScroll(endOfScroll);
    }
    return setScroll(scroll - scrollValue);
  };

  let touchEventStart: number = 0;
  let touchEventPosition: number = 0;

  const touchStart = (event: React.TouchEvent) => {
    touchEventStart = event.changedTouches[0].clientX;
  }

  const touchMove = (event: React.TouchEvent) => {
    touchEventPosition = event.changedTouches[0].clientX;
  }

  const touchEnd = (event: React.TouchEvent) => {
    const distance = Math.abs(touchEventStart) - touchEventPosition;
    distance > 0 ? nextItem() : prevItem();
  }

  return (
    <>
    <ul className='carousel' onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
      {children}
      <Buttons prevItem={prevItem} nextItem={nextItem} hideLeftClick={hideLeftClick} hideRightClick={hideRightClick} />
    </ul>
    </>
  );
}

export default Carousel;
