import React, { useState } from 'react'
import './App.css'
import { IDataEpisodes } from './App'
import cn from 'classnames'
import { isMobile } from 'react-device-detect'

type EpisodesItems = {
  data: IDataEpisodes[];
  scroll: number;
}

const Episodes = ({data, scroll} : EpisodesItems) => {

  const carouselClass = cn('carousel-item', {'carousel-mobile': isMobile});
  const titleClass = cn('title', {'title-mobile': isMobile});
  const charactersClass = cn('characters', {'characters-mobile': isMobile});
  const pClass = cn({'mobile': isMobile});

  return (
    <>
    {data.map((item: IDataEpisodes, index: number) => (
        <li className={carouselClass} key={index}  style={{transform: `translateX(${scroll}%)`}}>
            <p className={titleClass}>{item.title}</p>
            <p className={pClass}>Season: {item.season} </p>
            <p className={pClass}>Episode: {item.episode}</p>
            <p className={pClass}>Data: {item.air_date}</p>
            <p className={charactersClass}>Characters: {item.characters.join(', ')}</p>
        </li>   
     ))}
    </>
  );
}

export default Episodes;
