import React from 'react'
import Footer from '../components/Footer'
import "../styles/cars.scss"

const Cars = () => {
  return (
    <div>
          <div className='cars__title'>
              <h2>Our cars</h2>
              <h3>Our Collegs</h3>

          </div>

          <div className='cars-box'>
              <div className="cars-card">

                  <div className="cars-container__photo">
                      <img src="./images/cars/audi-box.png" alt="" />
                  </div>

                  <div className="cars-container__text">
                      <h3>Luke Miller</h3>
                      <p>Salesman</p>
                  </div>
              </div>


              <div className="cars-card">

                  <div className="cars-container__photo">
                      <img src="./images/cars/benz-box.png" alt="" />
                  </div>

                  <div className="cars-container__text">
                      <h3>Michael Diaz</h3>
                      <p>Busines Owner</p>
                  </div>
              </div>
              <div className="cars-card">


                  <div className="cars-container__photo">
                      <img src="./images/cars/bmw-box.png" alt="" />
                  </div>

                  <div className="cars-container__text">
                      <h3>Briana Ross</h3>
                      <p>Photographer</p>
                  </div>
              </div>
              <div className="cars-card">


                  <div className="cars-container__photo">
                      <img src="./images/cars/golf6-box.png" alt="" />
                  </div>

                  <div className="cars-container__text">
                      <h3>Lauren Rivera</h3>
                      <p>Car Detalilist</p>
                  </div>
              </div>
              <div className="cars-card">


                  <div className="cars-container__photo">
                      <img src="./images/cars/passat-box.png" alt="" />
                  </div>

                  <div className="cars-container__text">
                      <h3>Martin Rizz</h3>
                      <p>Mechanic</p>
                  </div>
              </div>


              <div className="cars-card">

                  <div className="cars-container__photo">
                      <img src="./images/cars/toyota-box.png" alt="" />
                  </div>

                  <div className="cars-container__text">
                      <h3>Caitlyn Hunt</h3>
                      <p>Manager</p>
                  </div>
              </div>


          </div>


      <Footer />
    </div>
  )
}

export default Cars
