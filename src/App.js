import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import './App.css';

import Menu from "./components/Menu";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Retratos from "./components/Retratos";
import AboutMe from "./components/Aboutme";
import Contacto from "./components/Contacto";
import Producto from "./components/FotoProducto";
import Paisajes from "./components/Paisajes";

const App = () => {
  return (
    <Router>
      <div>
        <Menu />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/retratos" component={Retratos} />
          <Route path="/fotoProducto" component={Producto} />
          <Route path="/paisajes" component={Paisajes} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
        {/* <Helmet bodyAttributes={{ style: "background-color : #ECDEDB" }} /> */}

        <Footer />
      </div>
    </Router>
  );
};

export default App;
