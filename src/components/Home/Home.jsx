import React from 'react'
import './home.scss';
import Nav from '../Main/Nav';
import Carousel from '../Carousel/Carousel';

function Home() {
  return (
    <div id='home'>
      <div className="bg">
        <div className="poly"></div>
      </div>
        <Carousel/>
    </div>
  )
}

export default Home
