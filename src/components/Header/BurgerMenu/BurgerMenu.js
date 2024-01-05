import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './BurgerMenu.css';
import Logo from '../../Footer/Logo';
import burger from './burger.svg';
import { useNavigate } from "react-router-dom";

function LoginButton() {
  function handleClick() {
    navigate("/login");
  }
  const navigate = useNavigate();

  return (
    <button variant="outline-success" className='button' onClick={handleClick}>
      Войти
    </button>
  );
}  
function ReturnMain() {
  function handleClick(evt) {
    navigate("/");
  }
  const navigate = useNavigate();

  return (
    <Nav.Link href="/" onClick={handleClick}>Главная</Nav.Link>
  );
}  

function BurgerMenu() {
  const expand = false
  return (    
        
        <Navbar key={expand}  expand={expand} className="mb-3 BurgerMenu">
          <Container fluid  >
            <Navbar.Toggle  bg="*"  aria-controls={`offcanvasNavbar-expand-${expand}`} className='own BurgerMenu border-0 shadow-none'>
              <img src={burger} alt='burger' />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className='burgerMenu__header closeButton d-flex'>
                <Logo />
              </Offcanvas.Header>
              <Offcanvas.Body className='burgerMenu__body'>
                
                <Nav className="text-center nav">
                  <ReturnMain />
                  <Nav.Link href="###" style={{pointerEvents: 'none'}}>Тарифы</Nav.Link>
                  <Nav.Link href="###" style={{pointerEvents: 'none'}}>FAQ</Nav.Link>
                </Nav>
                <a className='burgerMenu__link' href='XXX' >Зарегистрироваться</a>
                <LoginButton />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar> 
  );
}

export default BurgerMenu;
