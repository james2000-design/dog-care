import React from 'react'
import '../Section2/body.css'
import Anthony from '../../../Images/anthony.png'

const Body = () => {
  return (
    <div>
        <div className="trend">
            <span>Trending Spa Package</span>
        </div>

        <div className="Trend-content">
            {/* Image */}
            <div className="Ann-image">
                <img src={Anthony} alt="Photo" width={'100%'}/>
            </div>
            <div className="note">
                <p className='doggy'>Doggy  facial and fur <br />cleanse treatment<br/> <span>$269</span></p>
                <p>
                    Dogs receives facial with our vegan,cruelty free face products and cleansing of a dirt left hiding in their fur<br/>
                    (comes with a take home face product and animal trats).
                </p>
                <button className='crest'>See More Spa Products</button>

            </div>
        </div>
    </div>
  )
}

export default Body