import React from 'react'

export default function BlogPage() {
  return (
    <div className='w-8/12 mx-auto mt-12 shadow-xl'>

              <div className='border border-gray-300 p-8 space-y-6 '>
                       
                    <p className='text-3xl font-semibold text-center'>Create New Product</p>

                   <div className='flex flex-col space-y-1'>
                    <label htmlFor="" className='text-xl font-semibold'>Product Name</label>
                    <input type="text" placeholder='eg:Haldiram Bhujiya' className='border border-gray-300 px-2 py-1 outline-none' />
                   </div>

                   <div className='flex flex-col space-y-1'>
                    <label htmlFor="" className='text-xl font-semibold'>Product Category</label>
                    <input type="text" placeholder='eg:Dalmot' className='border border-gray-300 px-2 py-1 outline-none' />
                   </div>
                              
                   <div className='flex flex-col space-y-1'>
                    <label htmlFor="" className='text-xl font-semibold'>Product Price</label>
                    <input type="number" placeholder='eg:500' className='border border-gray-300 px-2 py-1 outline-none' />
                   </div>
                      

                   <div className='flex flex-col space-y-1'>
                    <label htmlFor="" className='text-xl font-semibold'>Product Color</label>
                    <input type="text" placeholder='eg:Red' className='border border-gray-300 px-2 py-1 outline-none' />
                   </div>

                   <div className='flex flex-col space-y-1'>
                    <label htmlFor="" className='text-xl font-semibold'>Product Weight</label>
                    <input type="text" placeholder='eg:1kg' className='border border-gray-300 px-2 py-1 outline-none' />
                   </div>

                   <div className='flex flex-col space-y-1'>
                    <label htmlFor="" className='text-xl font-semibold'>Product Description</label>
                    <input type="text" placeholder='eg:Highly in demand' className='border border-gray-300 px-2 py-1 outline-none' />
                   </div>

                   <div className='flex flex-col space-y-1'>
                    <label htmlFor="" className='text-xl font-semibold'>Product Image</label>
                    <input type="file" placeholder='eg:Select your image' className='border border-gray-300 px-2 py-1 outline-none' />
                   </div>
                       
                    <div className='flex justify-end'>
                      <button className='bg-orange-500 text-white font-semibold px-8 py-2 rounded-sm hover:bg-orange-700 duration-500 cursor-pointer  animate-bounce hover:animate-none'>Order Now</button>
                   </div>
              </div>
      

    </div>
  )
}
