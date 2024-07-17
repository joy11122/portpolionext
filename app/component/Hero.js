import React from 'react'
import Social from './Social'

const Hero = () => {
    return (
        <>
<div className='hero'>
    <div className='left'>
        <span className='fw-bold text-black'>Hi im joy</span>
        <h1 className="text-success fw-bold display-2">Frontend Designer</h1>
        <p className='text-black '>Lorem ipsum dolor sit amet consectetur maiores nostrum voluptatum ad et alias consequuntur, temporibus fugiat commodi necessitatibus debitis. Repellendus, earum recusandae.</p>
        <Social/>
      <div>
       <button className='btn btn-primary rounded-5 me-2'>Show More</button>
       <button className='btn btn-danger rounded-5'>Subscribe</button>
       
      </div>
    </div>
  
</div>

        </>
    )
}

export default Hero
