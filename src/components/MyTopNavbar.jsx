import React from 'react'
import { X } from 'lucide-react';

export default function MyTopNavbar() {
  return (
    <div>
      
    <div className='flex justify-around items-center bg-slate-950 w-auto  py-2 md:py-4 mx-auto'>
      <div>
       <p className='md:px-40 lg:px-80 px-0 text-white font-semibold md:text-0.5xl text-center '>Foesta Start a free trial and enjoy 1 months of Shopify for $1/month <span className='text-pink-500 font-bold cursor-pointer'>Get it now</span> </p> 
      </div>
     <div>
       <X className='text-gray-500 md:mx-6 mx-2 mt-3 md:mt-0  cursor-pointer'/>
     </div>

    </div>


    </div>
  )
}
