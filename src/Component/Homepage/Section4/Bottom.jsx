import React from 'react'
import '../Section4/bottom.css'
import pet from '../../../Images/pet.png'
import pet2 from '../../../Images/pet2.png'
import pet3 from '../../../Images/Pet3.png'

const Bottom = () => {
  return (
    <div>

<div className="carrier">
            Animal Carry Ons
        </div>
        <div className="cast">
            <div className="mere">
                <img src={pet2} alt="" className='cast-img'/>
                <p className="mere-text">
                    Leather Dog Collars with Gold Name Tag <br /> Luxe Animal Spa 
                </p>
                <p className="prices">CA $325.00</p>
            </div>
            <div className="mere">
                <img src={pet} alt="" className='cast-img'/>

                <p className="mere-text">
                    Pink and White Diamond Encrusted Dog Collar <br /> Luxe Animal Spa 
                </p>
                <p className="prices">CA $1225.00</p>
            </div>
            <div className="mere">
                <img src={pet3} alt="" className='cast-img' />

                <p className="mere-text">
                    Large 3000kt Silver Diamond Collar <br /> Luxe Animal Spa 
                </p>
                <p className="prices">CA $1500.00</p>
            </div>
        </div>
        <button className='ons'>See More Carry Ons</button>
    </div>
  )
}

export default Bottom