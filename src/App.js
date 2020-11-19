import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";

import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

import Home from "./components/home/Home";
import Retratos from "./components/retratos/Retratos";
import AboutMe from "./components/aboutme/Aboutme";
import Contacto from "./components/contacto/Contacto";
import FotoProducto from "./components/fotoProducto/FotoProducto";
import Paisajes from "./components/paisajes/Paisajes";

const App = () => {
  return (
    <Router>
      <div>
        <Menu />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/retratos" component={Retratos} />
          <Route path="/fotoProducto" component={FotoProducto} />
          <Route path="/paisajes" component={Paisajes} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
        <Helmet bodyAttributes={{ style: "background-color : #ECDEDB" }} />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
