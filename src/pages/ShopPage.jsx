import React from 'react'
import { ArrowUpRight } from 'lucide-react';

export default function ShopPage() {
  return (
    <div className=' w-8/12 mx-auto mt-12 shadow-xl border-40 rounded-sm border-gray-200 p-10 space-y-6 '>
                  <p className='text-3xl font-semibold text-start'>Love to hear from you,<br /> Get in touch👋 </p>
              <div className=' grid lg:grid-cols-2 -ml-4  p-8 space-x-2 space-y-10'>                  
                    

                   <div className='flex flex-col  space-y-2'>
                    <label htmlFor="" className='text-lg font-semibold'>Your name</label>
                    <input type="text" placeholder='Prabesh Neupane ' className='border-2 border-gray-100 bg-gray-50 px-2 py-2 outline-none text-sm font-semibold' />
                   </div>

                   <div className='flex flex-col space-y-2'>
                    <label htmlFor="" className='text-lg font-semibold'>Your email</label>
                    <input type="text" placeholder='abcdef@gmail.com' className='border-2 border-gray-100 bg-gray-50 px-2 py-2 outline-none text-sm font-semibold' />
                   </div>
                              
                   <div className='flex flex-col space-y-2'>
                    <label htmlFor="" className='text-lg font-semibold'>What you are interested</label>
                    <input type="text" placeholder=' Degsin and Branding' className='border-2 border-gray-100 bg-gray-50 px-2 py-2 outline-none text-sm font-semibold' />
                   </div>
                      

                   <div className='flex flex-col space-y-2'>
                    <label htmlFor="" className='text-lg font-semibold'>Project Budget</label>
                    <input type="number" placeholder='Select your budget' className='border-2 border-gray-100 bg-gray-50 px-2 py-2 outline-none text-sm font-semibold' />
                   </div>

                   

                   
                       
                    
              </div>


              <div className='flex flex-col space-y-1'>
                    <label htmlFor="" className='text-lg font-semibold'>Message</label>
                    <textarea name="" id="" placeholder='Let tell us know your project about'  className='border-2 border-gray-100 bg-gray-50 px-2 py-1 outline-none h-30 text-sm font-semibold'></textarea>
                   </div>

                   <div className='flex items-center mt-10'>
                      <button className='bg-black text-white font-semibold px-10 sm:px-30 py-2 rounded-sm hover:bg-gray-800 duration-500 cursor-pointer  '>Just send</button>
                      <ArrowUpRight   size={18} className='text-white sm:-ml-29 -ml-10 '/>
                   </div>

    </div>
  )
}
