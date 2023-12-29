import React from 'react'
import '../Section3/script.css'
import collars1 from '../../../Images/Collars1.png'
import collars2 from '../../../Images/Collars2.png'
import collars3 from '../../../Images/Collars3.png'

const Script = () => {
  return (
    <div>
        <div className="carry">
            Dog Collars
        </div>
        <div className="display">
            <div className="set">
                <img src={collars1} alt="" className='display-img'/>
                <p className="set-text">
                    Leather Dog Collars with Gold Name Tag <br /> Luxe Animal Spa 
                </p>
                <p className="price">CA $325.00</p>
            </div>
            <div className="set">
                <img src={collars2} alt="" className='display-img'/>

                <p className="set-text">
                    Pink and White Diamond Encrusted Dog Collar <br /> Luxe Animal Spa 
                </p>
                <p className="price">CA $1225.00</p>
            </div>
            <div className="set">
                <img src={collars3} alt="" className='display-img' />

                <p className="set-text">
                    Large 3000kt Silver Diamond Collar <br /> Luxe Animal Spa 
                </p>
                <p className="price">CA $1500.00</p>
            </div>
        </div>
        <button className='see'>See More Dog Collars</button>

    </div>
  )
}

export default Script