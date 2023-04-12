import React from 'react'
import Footer from '../components/Footer'
import "../styles/team.scss"


const Team = () => {
  return (
    <>
      <div className='team__title'>
        <h2>Our Team</h2>
        <h3>Our Collegs</h3>

      </div>

      <div className='team-box'>
        <div className="team-card">

          <div className="team-container__photo">
            <img src="./images/team/1.png" alt="" />
          </div>

          <div className="team-container__text">
            <h3>Luke Miller</h3>
            <p>Salesman</p>
          </div>
        </div>


        <div className="team-card">

          <div className="team-container__photo">
            <img src="./images/team/2.png" alt="" />
          </div>

          <div className="team-container__text">
            <h3>Michael Diaz</h3>
            <p>Busines Owner</p>
          </div>
        </div>
        <div className="team-card">


          <div className="team-container__photo">
            <img src="./images/team/3.png" alt="" />
          </div>

          <div className="team-container__text">
            <h3>Briana Ross</h3>
            <p>Photographer</p>
          </div>
        </div>
        <div className="team-card">


          <div className="team-container__photo">
            <img src="./images/team/4.png" alt="" />
          </div>

          <div className="team-container__text">
            <h3>Lauren Rivera</h3>
            <p>Car Detalilist</p>
          </div>
        </div>
        <div className="team-card">


          <div className="team-container__photo">
            <img src="./images/team/5.png" alt="" />
          </div>

          <div className="team-container__text">
            <h3>Martin Rizz</h3>
            <p>Mechanic</p>
          </div>
        </div>


        <div className="team-card">

          <div className="team-container__photo">
            <img src="./images/team/6.png" alt="" />
          </div>

          <div className="team-container__text">
            <h3>Caitlyn Hunt</h3>
            <p>Manager</p>
          </div>
        </div>


      </div>



      <Footer />
    </>
  )
}

export default Team
