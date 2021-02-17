import React, { useState, useEffect } from 'react'
import Carousel from './Carousel'
import './App.css'
import Characters from './Characters'
import Episodes from './Episodes'
import { ApiCharacters } from './Constants/ApiCharacters'
import { ApiEpisodes } from './Constants/ApiEpisodes'

const loadData = async(api, setData) => {
  const response = await fetch(api);
  const result = await response.json();
  setData(result);
};


const App = () => {
  
  const [data, setData] = useState([]);
 
  useEffect(() => {
    loadData(ApiEpisodes, setData);
  }, []);


  const [dataChar, setDataChar] = useState([]);
 
  useEffect(() => {
    loadData(ApiCharacters, setDataChar);
  }, []);


  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  return (
    <>
    <Carousel items={dataChar} scroll={y} setScroll={setY}>
      <Characters data={dataChar} scroll={y}/> 
    </Carousel>
    <Carousel items={data} scroll={x} setScroll={setX}>
      <Episodes data={data} scroll={x}/> 
    </Carousel>
    </>
  )};

export default App;
