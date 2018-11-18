import React from 'react'
import {NavLink} from 'react-router-dom';

import './index.css';

export default function NavBar() {
  return (
    <div>
      <ul className='nav'>
          <NavLink to='/' activeStyle={{color: 'white', textDecoration: 'none'}}>Home</NavLink>
          <NavLink to='/' activeStyle={{color: 'white', textDecoration: 'none'}}>Login</NavLink>
          <NavLink to='/' activeStyle={{color: 'white', textDecoration: 'none'}}>SignOut</NavLink>

      </ul>
    </div>
  )
}
