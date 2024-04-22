import React from 'react'
import icon1 from '../images/Group.svg'
import icon2 from '../images/Vector (1).png'
import icon3 from '../images/Vector (2).png';
import icon4 from '../images/Vector.png'

const Footer = () => {
  return (
    <div>
        <div className="foter">
            <h1>&copy;2022 all rights reserved.</h1>
            <div className="icon">
<img src={icon1} alt="" />
<img src={icon2} alt="" />
<img src={icon3} alt="" />
<img src={icon4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer