import React from 'react'
import './carousel.scss';

function Carousel() {
  return (
    <div id='carousel'>
      <div className="intro">
        <h1>Welcome to JAA Sportswear Home of Premium Jerseys</h1>
        <h3>
            Step into a world where style meets performance. Whether you're repping your favorite team or building your own, our jerseys are designed for ultimate comfort, bold looks, and unbeatable quality. From classic styles to custom creations, we've got the perfect fit for fans and athletes alike.
        </h3>
      <h2>Game on. Gear up. Stand out.</h2>
      </div>
      <div className="preview">
        <div className="poly"></div>
      </div>
    </div>
  )
}

export default Carousel
