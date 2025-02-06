import React from 'react'
import './Banner.css'
import Img from '../../assets/Banner.png'
import { Link } from 'react-router-dom'
import fb from '../../assets/FB.png'
import ins from '../../assets/Ins.png'
import lin from '../../assets/LN.png'
import x from '../../assets/X.png'


const Banner = () => {
  return (
    <div>
        <div className="all_banner">
            <div className="container">
                <div className="mina_all">
                    
                    <div className="left">
                       <img src={Img} alt="bannerimg" />
                    </div>

                    <div className="right">
                      <h1 className='b'>Hubble</h1>
                      <h2>Bike</h2>
                      <p>Hire a bike to any destination and share with friends,
                      Please use the app to order a bike from any where in Brimingham...</p>
                      <button><Link to={'#'}>Hire a Bike</Link></button>

                     <div className="links flex gap-[98px] mt-[119px]">
                        <Link to={"#"}><img src={fb} alt="facebook" /></Link>
                        <Link to={"#"}><img src={ins} alt="instagram" /></Link>
                        <Link to={"#"}><img src={lin} alt="linkedin" /></Link>
                        <Link to={"#"}><img src={x} alt="x" /></Link>
                      </div>
                    </div>

                   
                  
                </div>

                <div className="count flex rounded-[80px] justify-start bg-[#314D50] rounded-[80px]flex py-[23px] px-[90px] gap-[121px]">
                            <div className="counter">
                            <h2>750 W</h2>
                            <h3>Motor</h3>
                            </div>
                            <div className="counter">
                            <h2>3 Hours</h2>
                            <h3>Charging Time</h3>
                            </div>
                            <div className="counter">
                            <h2>25mph</h2>
                            <h3>Per Hour</h3>
                            </div>
                            <div className="counter">
                            <h2>48V</h2>
                            <h3>Battery</h3>
                            </div>
                   </div>
            </div>
        </div>
    </div>
  )
}

export default Banner