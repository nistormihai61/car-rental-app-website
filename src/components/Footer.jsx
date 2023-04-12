import React from 'react'
import "../styles/footer.scss"

const Footer = () => {
  return (
    <div>

  
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Rental
              </li>

              <li>
            
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
              </li>

              <li>
            <span> (123) -456-789 </span>
              </li>

              <li>
            <span>carrental@gmail.com</span>
              </li>

            </ul>


            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                New York
              </li>
              <li>
                Careers
              </li>
              <li>
                Mobile
              </li>
              <li>
                Blog
              </li>
              <li>
                How we work
              </li>

            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                Subscribe your Email address for latest news & updates.
              </li>
              <li>
                <input  placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>

          <div className='copyright'><span>@Copyright</span></div>
      
    </div>
  )
}

export default Footer
