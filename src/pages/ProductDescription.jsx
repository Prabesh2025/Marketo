import React from 'react'
import myImg from "../../public/chair1.png"
import { Heart } from 'lucide-react';
import { ArrowLeftRight } from 'lucide-react';

export default function ProductDescription() {
  return (
    <div>
      
             <div className='grid lg:grid-cols-2 w-10/12 mx-auto mt-15  '>
             
                         {/* product img  */}
               <div>
              
                <img src={myImg} alt="chair" height={450} width={450} />
               </div>
                {/* product description  */}

               <div>

                 <div className='space-y-4 pt-8'>
                     <h2 className='font-semibold text-xl'>Heavy Duty Antis</h2>
                     <p className='text-sm font-semibold opacity-75'>SKU: N/A <br />
                     Category: <span className='cursor-pointer text-blue-600 hover:text-blue-800'> Innovative Furnitures</span> </p>
                     <p className='text-sm font-bold opacity-75'>About the product</p>
                     <p className='text-sm font-semibold opacity-75'>All Exclusive Comes with Marketo them. More power with Extended Features. Multiple niche demos with huge extensive options</p>
                     <p className='text-orange-500 font-semibold '>$4,000.00</p>

                 </div>

                 <div className='sm:flex sm:justify-start mt-10 space-x-10 space-y-4 ml-20 '>
                    <div className='  opacity-75'>
                      <button  className='border border-r-0 border-gray-300 px-4 py-2 cursor-pointer bg-gray-100'>-</button>
                      
                      <input type='text' placeholder='1' className='border border-gray-300 pl-6 w-15 outline-none py-2'/>
                      <button  className='border border-gray-300 border-l-0 px-3.5 py-2 cursor-pointer bg-gray-100'>+</button>
                    </div>

                      <button className='border rounded-sm  sm:px-10 py-3 px-8 sm:mb-10   font-bold text-sm text-white bg-violet-400 hover:bg-orange-300 duration-500 cursor-not-allowed '>Add to cart</button>

                 </div>
                 <div className='flex justify-start sm:space-x-10 space-x-4 mt-10 ml-20'>
                      <button className='border rounded-sm border-gray-300 py-3 px-6'>
                       <Heart size={14} className='text-orange-500 hover:text-green-600 cursor-pointer' />
                      </button>
                    
                    <button className='border rounded-sm border-gray-300 py-3 px-6'>
                      <ArrowLeftRight size={16} className='opacity-70 cursor-pointer  ' />
                    </button>

                 </div>

               </div>

             </div>

    </div>
  )
}
