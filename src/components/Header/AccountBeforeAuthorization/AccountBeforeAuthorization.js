import React from 'react';
import './AccountBeforeAuthorization.css';
import verticalSlash from './verticalSlash.svg';
import { useNavigate } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }
  return (
    <button className='accountPanel__button' type="button" onClick={handleClick}>
      Войти
    </button>
  );
}

const AccountBeforeAuthorization = () => {
  return (
    <div className='accountPanel'>
        <a className='accountPanel__link' href='xxx'>Зарегистрироваться</a>
        <img className='accountPanel__verticalSlash' src={verticalSlash} alt='verticalSlash' />
        <LoginButton />
    </div> 
  )
}

export default AccountBeforeAuthorization;
