import React from "react";
import Image from '../../img/productoArray'

const FotoProducto = () => {
  return (
    <>
      <main role="main" className="flex-shrink-0 mt-5">
        <div className="album py-5 bg-transparent">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img src={Image[0]} className="img-thumbnail" alt="foto" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img src={Image[1]} className="img-thumbnail" alt="foto" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img src={Image[2]} className="img-thumbnail" alt="foto" />
                </div>
              </div>

              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img src={Image[3]} className="img-thumbnail" alt="foto" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img src={Image[4]} className="img-thumbnail" alt="foto" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img src={Image[5]} className="img-thumbnail" alt="foto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default FotoProducto;
