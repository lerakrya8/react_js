import React from 'react'
import './App.css'

function Episodes({data, scroll}) {

  return (
    <>
    {data.map((item, index) => (
        <li className='carousel-item' key={index} style={{transform: `translateX(${scroll}%)`}}>
            <p className='title'>{item.title}</p>
            <p>Season: {item.season} </p>
            <p>Episode: {item.episode}</p>
            <p>Data: {item.air_date}</p>
            <p className='characters'>Characters: {item.characters.join(', ')}</p>
        </li>   
     ))}
    </>
  );
}

export default Episodes;
