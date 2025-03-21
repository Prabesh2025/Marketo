import React from 'react'
import { MoveRight } from 'lucide-react';

export default function MyFooter() {
  return (
    <footer className='mt-20 border-t border-b border-gray-200 bg-gray-100 py-10 '>
   
       <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-y-10 xl:space-y-0 items-start justify-between mx-auto w-10/12'>
           {/* firstchild */}
          <div className='space-y-3'>
            <h2 className='text-2xl'>Contact Info</h2>
            <p className='text-xl opacity-70'>Find a location nearest you.</p>
            <h4 className='font-semibold'>Hotline:</h4>
            <p className='text-xl opacity-70'>(+00) 123 - 4568</p>
            <h4 className='font-semibold'>Address:</h4>
            <p className='text-xl opacity-70 font-sans'>512 Howard Street #19 San <br />Francisco.USA.</p>
          </div>

           {/* second child */}
          <div  className='space-y-3'> 
            <h2 className='text-2xl'>Quick Links</h2>
            <p className='opacity-70 cursor-pointer font-sans hover:opacity-100'>My Account</p>
            <p className='opacity-70 cursor-pointer font-sans hover:opacity-100'>Cart</p>
            <p className='opacity-70 cursor-pointer font-sans hover:opacity-100'>Wishlist</p>
            <p className='opacity-70 cursor-pointer font-sans hover:opacity-100'>Product Compare</p>
          </div>

            {/* third child */}
          
          <div  className='space-y-3'> 
            <h2 className='text-2xl'>Information</h2>
            <p className='opacity-70 cursor-pointer font-sans hover:opacity-100'>Privacy Policy</p>
            <p className='opacity-70 cursor-pointer font-sans hover:opacity-100'>Refund Policy</p>
            <p className='opacity-70 cursor-pointer font-sans hover:opacity-100'>Shipping & Return</p>
            <p className='opacity-70 cursor-pointer font-sans hover:opacity-100'>Terms & Conditions</p>
          </div>
          

          {/* fourth child */}
          <div className='space-y-3'>
            <h2 className='text-2xl'>Let's Get In Touch</h2>
            <p className='font-sans'>Subscribe to our newsletter to receive news <br /> on update.</p>
            <div className=' flex items-center'>
             <input type="email" placeholder='Enter your email' className='border outline-none bg-white border-gray-300 rounded-sm py-2 md:px-22 pl-4 text-lg hover:shadow-md'  />
             
                <MoveRight className=' absolute sm:ml-45 md:ml-80 ml-50  cursor-pointer' />
              
            </div>
          </div>

       </div>

    </footer>
  )
}
