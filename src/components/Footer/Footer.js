import React from 'react'
import  './Footer.css'
import Logo from './Logo';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <Logo />
        <div className='footer__connectInfo'>
          <div>г. Москва, Цветной б-р, 40</div>
          <div>+7 495 771 21 11</div>
          <div>info@skan.ru</div>
          <p>Copyright. 2022</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
