import React, { useEffect, useRef, useState } from 'react';

import './background.scss'
function Background(props) {
    const {location} = props;
    const home = useRef(null);
  

    useEffect(()=>{
        const homeMarker = home.current.querySelector('.background');
        console.log(location)
        if(location=="/"){
            homeMarker.classList.add('active')
        }
        else{
            homeMarker.classList.remove('active')
        }
      },[location])
  return (
    <div className="homebg" ref={home}>
        <div className='background active' id='background' >
            <div className="bg">
            <div className="poly"></div>
            </div>
    </div>
    </div>
  )
}

export default Background
