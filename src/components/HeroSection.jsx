import React from 'react'
import myImage from "../../public/sofa.jpg"
export default function HeroSection() {
  return (
    <div>
      
        <div>
            <img className='relative h-[50vh] sm:h-[70vh] md:h-[110vh]   w-full  object-cover' src={myImage} alt="sofa" />
            <div className='absolute space-y-6  center top-50 md:top-110 left-10 mt-10 md:mt-0  sm:left-[35vw]'>
                <p className='font-semibold text-yellow-600 text-2xl'>Get 40% Off</p>
                <div>
                  <p className='font-semibold text-2xl md:text-5xl text-white '>Get your amazing sofa now</p>
                  </div>
                
                <button className='bg-orange-500 font-semibold py-2 px-6 hover:bg-orange-800 duration-500 cursor-pointer'>Buy Now</button>
            </div>

        </div>


    </div>
  )
}
