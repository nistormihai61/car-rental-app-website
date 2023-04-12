import React from 'react'
import "../styles/book.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Book = () => {
    return (
        <>

            <div className='book-section'>

                <div><h1> Book a car</h1></div>


                <div className='book-container'>

                    <div className="book__card1 ">

                        <div><FontAwesomeIcon icon={faCar} color="#f92707"/> Select Your Car Type</div>

                        <select >
                            <option>Select your car type </option>
                            <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                            <option value="VW Golf 6">VW Golf 6</option>
                            <option value="Toyota Camry">Toyota Camry</option>
                            <option value="BMW 320 ModernLine">BMW 320 ModernLine </option>
                            <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                            <option value="VW Passat CC">VW Passat CC</option>
                        </select>

                    </div>


                    <div className="book__card2">

                        <div> <FontAwesomeIcon icon={faLocationDot} color="#f92707" /> Pick-up Location</div>

                        <select >
                            <option>Chose a location </option>
                            <option>Belgrade</option>
                            <option>Novi Sad</option>
                            <option>Nis</option>
                            <option>Kragujevac</option>
                            <option>Subotica</option>
                        </select>

                    </div>


                    <div className="book__card3">

                        <div> <FontAwesomeIcon icon={faLocationDot} color="#f92707" />  Drop Of Location</div>

                        <select >
                            <option>Chose a location</option>
                            <option>Belgrade</option>
                            <option>Novi Sad</option>
                            <option>Nis</option>
                            <option>Kragujevac</option>
                            <option>Subotica</option>
                        </select>

                    </div>


                    <div className="book__card4">

                        <div> <FontAwesomeIcon icon={faCalendarDays} color="#f92707" /> Date Pick-up</div>

                        <input

                            type="date"
                        ></input>

                    </div>


                    <div className="book__card5">

                        <div> <FontAwesomeIcon icon={faCalendarDays} color="#f92707" /> Date Drop-off</div>

                        <input

                            type="date"
                        ></input>

                    </div>


                    <div className="book__card6">

                        <button>Search disponibility</button>

                    </div>


                </div>


            </div>

        </>
    )
}

export default Book
