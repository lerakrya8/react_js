import React from 'react'
import './App.css'

function Characters({data, scroll}) {
  
  return (
    <>
    {data?.map((item, index) => (
        <li className='carousel-item' key={index} style={{transform: `translateX(${scroll}%)`}}>
            <img className='image' src={item.img} />
            <p className='nickname'>{item.nickname}</p>
            <p className='birth'>Birthday: {item.birthday} </p>
            <p className='name'>{item.name}</p>
        </li>
    ))}
    </>
  );
}

export default Characters;
