import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logoweb.png';
import icon from '../list.svg';
import '../styles/Menu.css';


const Menu = () => {
    return (
        <header className="navbar">
    <nav className="menu">
         <Link to="/" id="logo-menu"><img  src={logo} alt="logo"/></Link>
      <ul className="nav-list">
        <li><Link to="/" >Inicio</Link></li>
        <li><Link to="/retratos">Retratos</Link></li>
        <li><Link to="/fotoproducto">Foto producto</Link></li>
        <li><Link to="/paisajes">Paisajes</Link></li>
        <li><Link to="/aboutme">Sobre mi</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
            <input type="checkbox" id="btn-menu" />
            <label for="btn-menu"><img src={icon} alt="boton menu"/></label>
    </nav>
  </header>
 
  
    );
  }

  export default Menu;
  