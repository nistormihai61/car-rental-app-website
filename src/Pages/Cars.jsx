import React from 'react'
import Footer from '../components/Footer'
import "../styles/cars.scss"

const Cars = () => {
  return (
    <div>
          <div className='cars__title'>
              <h2>Our cars</h2>
              <h3>Our fleet</h3>

          </div>

          <div className='cars-box'>
              <div className="cars-card">

                  <div className="cars-container__photo">
                      <img src="./images/cars/audi-box.png" alt="" />
                  </div>

                  <div className="cars-container__text">
                      <h3>Audi</h3>
                      <p>Model: A1</p>
                  </div>
              </div>


              <div className="cars-card">

                  <div className="cars-container__photo">
                      <img src="./images/cars/benz-box.png" alt="" />
                  </div>

                  <div className="cars-container__text">
                      <h3>Mercedes Benz</h3>
                      <p>Model" GLK</p>
                  </div>
              </div>
              <div className="cars-card">


                  <div className="cars-container__photo">
                      <img src="./images/cars/bmw-box.png" alt="" />
                  </div>

                  <div className="cars-container__text">
                      <h3>BMW</h3>
                      <p>Model: 320</p>
                  </div>
              </div>
              <div className="cars-card">


                  <div className="cars-container__photo">
                      <img src="./images/cars/golf6-box.png" alt="" />
                  </div>

                  <div className="cars-container__text">
                      <h3>Volkswagen</h3>
                      <p>Model: golf 6</p>
                  </div>
              </div>
              <div className="cars-card">


                  <div className="cars-container__photo">
                      <img src="./images/cars/passat-box.png" alt="" />
                  </div>

                  <div className="cars-container__text">
                      <h3>Volkswagen</h3>
                      <p>Model: passat</p>
                  </div>
              </div>


              <div className="cars-card">

                  <div className="cars-container__photo">
                      <img src="./images/cars/toyota-box.png" alt="" />
                  </div>

                  <div className="cars-container__text">
                      <h3>Toyota</h3>
                      <p>Model: Corolla</p>
                  </div>
              </div>


          </div>


      <Footer />
    </div>
  )
}

export default Cars
