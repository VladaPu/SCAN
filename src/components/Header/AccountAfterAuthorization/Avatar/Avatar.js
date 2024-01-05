import React from 'react'
import {useNavigate} from 'react-router-dom';
import avatar from './avatar.svg'
import './Avatar.css';
import { signOut } from '../../../../store/slices/profile';
import { useDispatch } from 'react-redux';
function ExitButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  function handleClick() {
    navigate("/login");
    dispatch(signOut());
  }
  return (
    <button className='avatar__button' type="button" onClick={handleClick}>
      Выйти
    </button>
  );
}
const Avatar = () => {
  return (
    <div className='avatar'>
      <div className='avatar__content'>
        <span>Алексей А.</span>
        <ExitButton />
      </div>
      <div className='avatar__img'>
        <img src={avatar} alt='avatar'/>
      </div>
    </div>
  )
}

export default Avatar
