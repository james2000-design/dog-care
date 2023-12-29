import React from 'react'
import '../Section1/hero.css'
import dog from '../../../Images/Dog1.png'

const Hero = () => {
  return (
    <div className='content1'>
        <div className="text-content">
            <div className="sub1">
                <p className='amok'>
                    Your dog running amok in the dirty?<br /><br />
                    Book Your doggy <br/>spa day!
                </p>

                <div className="button">
                    <button className='btn1'>Book Appointment</button>
                </div>
            </div>

            <div className="pic">
                <img src={dog} alt="Dog" className='dog-img' width={'100%'}/>
            </div>
        </div>
        
    </div>
  )
}

export default Hero