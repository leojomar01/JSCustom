import React from 'react'
import './nav.scss';
function Nav() {
  return (
    <div id='nav'>
      <ul className="nav">
        <li className="name">Name</li>
        <li className="home"><a href="/">Home</a></li>
        <li className="category">
          <span>Category</span>
          <div className="lists">
            <a href="/basketball">Basketball</a>
            <a href="">Volleyball</a>
            <a href="">T-Shirts</a>
            <a href="">Polo shirts</a>

          </div>
        </li>
        <li className='gallery'>Gallery</li>
        <li className="contact">Contact</li>
      </ul>
    </div>
  )
}

export default Nav
