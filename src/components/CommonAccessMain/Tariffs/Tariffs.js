import React from 'react';
import './Tariffs.css';
import TariffCards from './TariffCards';

const Tariffs = () => {
  return (
    <div className='tariff'>
      <h1 className='tariff__title'>
        наши тарифы
      </h1>
      <TariffCards />
    </div>
  )
}

export default Tariffs
