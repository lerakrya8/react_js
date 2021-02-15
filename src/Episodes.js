import React, { useState, useEffect } from 'react'
import './App.css'

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
 
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async() => {
    const response = await fetch('https://www.breakingbadapi.com/api/episodes');
    const data = await response.json();
    setEpisodes(data);
  };


  const [x, setX] = useState(0);
  const prevItem = () => x === 0 ? setX(0) : setX(x + 100);
  const nextItem = () => x === -100 * (episodes.length - 4) ? setX(x) : setX(x - 100);

  return (
    <>
    <ul className='carousel'>
      {episodes.map((item, index) => (
          <li className='carousel-item' key={index} style={{transform: `translateX(${x}%)`}}>
            <p className='title'>{item.title}</p>
            <p>Season: {item.season} </p>
            <p>Episode: {item.episode}</p>
            <p>Data: {item.air_date}</p>
            <p className='characters'>Characters: {item.characters.join(',')}</p>
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

export default Episodes;
