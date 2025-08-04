import React from 'react'
import './nav.scss';

import { Link } from 'react-router-dom';

function Nav() {


  return (
    <div id='nav'>
      <ul className="nav">
        <li className="name"><Link to='/' id='home'>JAA</Link></li>
        <li className="home"><Link to='/' id='home'>Home</Link></li>
        <li className="category">
          <span>Category</span>
          <div className="lists">
            <Link to='/basketball' id='basketball'>Basketball</Link>
            <Link to='/volleyball' id='volleyball'>Volleyball</Link>
          </div>
        </li>
        <li className='gallery'>Gallery</li>
        <li className="contact">Contact</li>
      </ul>
    </div>
  )
}

export default Nav
