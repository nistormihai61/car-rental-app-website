import React, { useState } from 'react'
import "../styles/pickCar.scss"



const PickCar = () => {

    const [photo, setPhoto] = useState(<img src="./images/pick-car/audia1.jpg" alt="" />)


    return (
        <>

            <div className='pickCar-text'>
                <h3>Vehicle Models</h3>
                <h2>Our rental fleet</h2>
                <p>
                    Choose from a variety of our amazing vehicles to rent for your
                    next adventure or business trip
                </p>

            </div>


            <div className="pickCar-section">


                <div className='pickCar__buttons'>

                    <button onClick={() => setPhoto(<img src="./images/pick-car/audia1.jpg" alt="" />)}>Audi A1 S-Line</button>
                    <button onClick={() => setPhoto(<img src="./images/pick-car/golf6.jpg" alt="" />)}>Golf 6</button>
                    <button onClick={() => setPhoto(<img src="./images/pick-car/toyotacamry.jpg" alt="" />)}>Toyota Camry</button>
                    <button onClick={() => setPhoto(<img src="./images/pick-car/bmw320.jpg" alt="" />)}>BMW 320 ModernLine</button>
                    <button onClick={() => setPhoto(<img src="./images/pick-car/benz.jpg" alt="" />)}>Mercedes Benz_GLK</button>
                    <button onClick={() => setPhoto(<img src="./images/pick-car/passatcc.jpg" alt="" />)}>VW Passat CC</button>
                </div>

                <div className="pickCar__img">
                    {photo}
                    <button>Reserve Now</button>
                </div>


            </div>


        </>
    )
}

export default PickCar
