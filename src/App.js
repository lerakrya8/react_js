import React, { useState, useEffect } from 'react'
import Carousel from './Carousel'
import './App.css'

const App = () => {
  const apiEpisodes = 'https://www.breakingbadapi.com/api/episodes';
  const apiCharacters = 'https://www.breakingbadapi.com/api/characters';
  
  return (
    <>
    <Carousel api={apiCharacters} nameCarousel={'characters'} />
    <Carousel api={apiEpisodes} nameCarousel={'episodes'} />
    </>
  )};

export default App;
