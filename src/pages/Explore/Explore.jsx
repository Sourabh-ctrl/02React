import React from 'react'
import bg from "../../assets/image2.png";
import lambo from '../../assets/lambo.jpeg'
import './Explore.css'
import assets from '../../assets/assets';



const Explore = () => {
  return (
    <>
    <img src={bg} className="background fade-in" alt="" />
    <div className='image '>

    <img src={lambo} className='img' alt="" />
    <img src={assets.image1} className='img' alt="" />
    <img src={assets.image2} className='img' alt="" />
    <img src={assets.image3} className='img' alt="" />
    <img src={assets.image4} className='img' alt="" />
    <img src={assets.image5} className='img' alt="" />
    <img src={assets.image6} className='img' alt="" />
    <img src={assets.image7} className='img' alt="" />
    <img src={assets.image8} className='img' alt="" />
    <img src={assets.image9} className='img' alt="" />
    <img src={assets.image4} className='img' alt="" />
    <img src={assets.image5} className='img' alt="" />
    <img src={assets.image2} className='img' alt="" />
    

    </div>
    </>
  )
}

export default Explore