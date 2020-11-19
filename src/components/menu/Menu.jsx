import React from 'react';
import logo from '../../logoweb.png';


const Menu = () => {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container">
    <a className="navbar-brand" href="/"><img width="220" height="120"  src={logo} alt="logo"/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/" id="inicio"> Inicio </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/retratos" id="retratos"> Retratos </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/fotoproducto" id="productos"> Foto producto </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/paisajes" id="paisajes"> Paisajes </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/aboutme" id="sobremi"> Sobre mi </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contacto" id="contacto">Contacto </a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
 
      </div>
    );
  }

  export default Menu;
  