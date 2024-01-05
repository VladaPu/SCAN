import React from 'react'
import './Logo.css';
import logo from './logo.svg';

const Logo = () => {
  return (
    <div className='logo'>
        <img src={logo} alt='logo'/>
    </div>
  )
}

export default Logo
