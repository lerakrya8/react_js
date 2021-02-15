import React, { useState, useEffect } from 'react'
import './App.css'
import Buttons from './Buttons';

function Characters({api, nameCarousel}) {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async() => {
    const response = await fetch(api);
    const result = await response.json();
    setData(result);
  };

  const [x, setX] = useState(0);
  const prevItem = () => x === 0 ? setX(0) : setX(x + 100);
  const nextItem = () => x === -100 * (data.length - 4) ? setX(x) : setX(x - 100);

  return (
    <>
    <ul className='carousel'>
      {data.map((item, index) => (
            nameCarousel === 'episodes' ? 
            <li className='carousel-item' key={index} style={{transform: `translateX(${x}%)`}}>
                <p className='title'>{item.title}</p>
                <p>Season: {item.season} </p>
                <p>Episode: {item.episode}</p>
                <p>Data: {item.air_date}</p>
                <p className='characters'>Characters: {item.characters.join(', ')}</p> 
            </li>
                :
            <li className='carousel-item' key={index} style={{transform: `translateX(${x}%)`}}>
                <img className='image' src={item.img} />
                <p className='nickname'>{item.nickname}</p>
                <p className='birth'>Birthday: {item.birthday} </p>
                <p className='name'>{item.name}</p>
            </li>
        ))}
      <Buttons prevItem={prevItem} nextItem={nextItem}/>
    </ul>
    </>
  );
}

export default Characters;
