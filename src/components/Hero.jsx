import React from 'react'
import "../styles/hero.scss"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'




function Hero() {

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0)});
  };

  const scrollToBook = () => {
    window.scrollTo( { 
        top:(0,1870)
      }
      );
  }

  return (
    <>
      <div className="hero-section">

        <div className='hero__content'>

          <h4>Plan your trip now </h4>
          <h1>
            Save <span>money</span> with our car rental
          </h1>
          <p>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>

          <div className="hero-content__btns">
            <Link className='hero-content__btns__bookRide'
              onClick={scrollToBook}
            > Book Ride </Link>

            <Link className='hero-content__btns__learnMore'
              to="/about"
            > Learn More <FontAwesomeIcon icon={faCircleChevronDown} /> </Link>

            </div>


       </div>

        <div className='hero__polo'>
          <img src="./images/hero/polo.png" alt="" />
          <img src="./images/hero/city.png" alt="" />
        </div>

        <div className='scroll-up' onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAngleUp} beat  />
          
         </div>



      </div>
    </>
  )
}

export default Hero
