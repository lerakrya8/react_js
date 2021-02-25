import React, { useState, useEffect } from 'react'
import isMobile from 'react-device-detect'
import Carousel from './Carousel'
import './App.css'
import Characters from './Characters'
import Episodes from './Episodes'
import { ApiCharacters } from './Constants/ApiCharacters'
import { ApiEpisodes } from './Constants/ApiEpisodes'

export interface IDataCharacters {
  img: string;
  nickname: string;
  birthday: string;
  name: string;
}

export interface IDataEpisodes {
  title: string;
  season: string;
  episode: string;
  air_date: string;
  characters: Array<string>;
}

const App = () => {
  const [data, setData] = useState<IDataEpisodes[]>([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async() => {
    const response = await fetch(ApiEpisodes);
    const result = await response.json();
    setData(result);
  };


  const [dataChar, setDataChar] = useState<IDataCharacters[]>([]);
  useEffect(() => {
    loadCharData();
  }, []);

  const loadCharData = async() => {
    const response = await fetch(ApiCharacters);
    const result = await response.json();
    setDataChar(result);
  };

  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  
  return (
    <>
    <Carousel items={dataChar} scroll={x} setScroll={setX}>
      <Characters data={dataChar} scroll={x}/> 
    </Carousel>
    <Carousel items={data} scroll={y} setScroll={setY}>
      <Episodes data={data} scroll={y} /> 
    </Carousel>
    </>
  )};

export default App;
