import React from 'react'
import burger from '../assets/burger.png'
const CuponCode = () => {
  return (
    <>
        <div className="burger">
        <img src={burger} alt="Burger wallpaper" className="burgers" />
        </div>
        <div className="Coupontext">Coupon Code</div>
        <div className="tickets">
            <div className="twenty">
                <img src="" alt="20%" className="tw" />
            </div>
            <div className="thirtyfive">
                <img src="" alt="35%" className="th" />
            </div>
            <div className="ten">
                <img src="" alt="10%" className="te" />
            </div>
            <div className="fifty">
                <img src="" alt="50%" className="fif" />
            </div>
        </div>
    </>
  )
}

export default CuponCode
