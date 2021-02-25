import React from 'react'
import './App.css'
import { IDataCharacters } from './App'
import { isMobile } from 'react-device-detect'
import cn from 'classnames'

type CharactersItems = {
  data: IDataCharacters[];
  scroll: number;
}

const Characters = ({data, scroll} : CharactersItems) => {

  const carouselClass = cn('carousel-item', {'carousel-mobile': isMobile});
  const imageClass =  cn('image', {'mobile-image':isMobile});
  const nicknameClass =  cn('nickname', {'mobile-nickname':isMobile});
  const birthClass =  cn('birth', {'mobile-birth':isMobile});
  
  return (
    <>
    {data?.map((item: IDataCharacters, index: number) => (
        <li className={carouselClass} key={index} style={{transform: `translateX(${scroll}%)`}}>
            <img className={imageClass} src={item.img} />
            <p className={nicknameClass}>{item.nickname}</p>
            <p className={birthClass}>Birthday: {item.birthday} </p>
            <p className={nicknameClass}>{item.name}</p>
        </li>
    ))}
    </>
  );
}

export default Characters;
