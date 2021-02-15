import React, { useState, useEffect } from 'react'
import './App.css'

function Characters() {
  const [characters, setCharacters] = useState([]);
 
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async() => {
    const response = await fetch('https://www.breakingbadapi.com/api/characters');
    const data = await response.json();
    setCharacters(data);
  };


  const [x, setX] = useState(0);
  const prevItem = () => x === 0 ? setX(0) : setX(x + 100);
  const nextItem = () => x === -100 * (characters.length - 4) ? setX(x) : setX(x - 100);

  return (
    <>
    <ul className='carousel'>
      {characters.map((item, index) => (
          <li className='carousel-item' key={index} style={{transform: `translateX(${x}%)`}}>
            <img className='image' src={item.img} />
            <p className='nickname'>{item.nickname}</p>
            <p className='birth'>Birthday: {item.birthday} </p>
            <p className='name'>{item.name}</p>
          </li>
      ))}

      <div className='prev-item' onClick={prevItem}>
        <i className="fas fa-chevron-circle-left"></i>
      </div>
      <div className='next-item' onClick={nextItem}>
        <i className="fas fa-chevron-circle-right"></i>
      </div>
    </ul>
    </>
  );
}

export default Characters;
