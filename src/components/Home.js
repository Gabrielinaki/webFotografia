import React from 'react';
import '../styles/Home.css';
import Image1 from '../fotosInicio/17.jpg';
import Image2 from '../fotosInicio/02.jpg';
import Image3 from '../fotosInicio/DSC_0645.jpg';
import Image4 from '../fotosInicio/subir_20300ppi.jpg';
import Image5 from '../fotosInicio/subir_201.jpg';
import Image6 from '../fotosInicio/14.jpg';


const Home = () => {
    return (
      <React.Fragment>
        <main className="home-main">
        <hr className="divider" />
          <section className="text-center p-5">
            <div className="container">
              <h1 className="jumbotron-heading ">Mis trabajos</h1>
              <p className="lead text-muted">Alegria, comodidad, belleza.</p>
            </div>
          </section>
          <div className="album py-2 bg-transparent">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card mb-4 shadow-sm">
                    <img src={Image1} className="img-thumbnail" alt="foto"/> 
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img src={Image2} className="img-thumbnail"  alt="foto"/> 
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img src={Image3} className="img-thumbnail" alt="foto"/> 
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img src={Image4} className="img-thumbnail" alt="foto"/> 
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img src={Image5} className="img-thumbnail" alt="foto"/> 
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img src={Image6} className="img-thumbnail" alt="foto"/> 
                  </div>
                </div>
              </div>
            </div>
            <hr className="featurette-divider" />
          </div>
        </main>
      </React.Fragment>
    );
}

export default Home;