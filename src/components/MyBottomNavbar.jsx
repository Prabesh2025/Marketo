import React from 'react'

export default function MyBottomNavbar() {
  return (
    <div className=' bg-gray-50 border-b border-gray-100 shadow-md '>

      <div className='flex md:justify-between justify-around items-center mx-auto w-10/12 py-6'>

       <div className='md:text-4xl text-2xl font-bold cursor-pointer text-gray-900'>
        <p>foesta.</p>
       </div>

       <div className='md:flex hidden items-center text-gray-500 space-x-6 font-semibold cursor-pointer text-sm '>

        <p className='hover:text-black'>Home</p>
        <p className='hover:text-black'>Demos</p>
        <p className='hover:text-black'>Templates</p>
        <p className='hover:text-black'>Docs</p>
        <p className='hover:text-black'>Support</p>

       </div>

       <div className='  rounded-4xl md:py-y md:px-8 lg:py-4 lg:px-10 px-6 py-2  cursor-pointer font-semibold  text-white bg-black   shadow-xl  hover:bg-white hover:text-black duration-500 '>
        <button>Purchase now</button>
       </div>


       </div>
       

    </div>
  )
}
