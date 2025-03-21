import React from "react";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Armchair } from "lucide-react";
import { Search } from "lucide-react";

export default function TopNavbar() {
  return (
    // navigation bar

    <div className="bg-orange-400  py-6">

      {/* nav bar */}

      <div className="flex justify-between w-11/12 md:w-8/12  mx-auto">
        {/* logo and title */}

        <div className="flex items-center space-x-2">
          <Armchair size={38} className="text-yellow-300" />
          <p className="text-2xl font-semibold text-white">Marketo<span className="text-yellow-300">.</span> </p>
        </div>
        {/* input and searchbar */}
        <div className=" hidden sm:block">
        <div className="flex items-center">
          <div>
            <input
              type="search"
              placeholder="Find your product"
              className="border border-white outline-none py-2 rounded-l-sm bg-white pl-4 w-100 text-md font-semibold"
            />
           </div>
          <div className="bg-black py-1  px-0.5 border-none border-black rounded-r-sm hover:bg-green-500 duration-700 cursor-pointer ">
            <Search size={18} className="text-white  my-2 mx-4 " />
          </div>

          </div>

        </div>
        {/*  nav-logo */}
        
        <div className=" space-x-4 text-white hidden lg:flex ">
        
          <Heart size={28} />

         {/* <sub className="-ml-7"><span className="bg-gray-100 py-1  px-2  border-white border-2 rounded-l-full rounded-r-full "><sup className="text-black font-semibold ">0</sup></span></sub> */}

         

        
          <ShoppingCart size={28} /> 
          
          {/* <sub className="-ml-7"><span className="bg-black px-2 py-1 rounded-l-full rounded-r-full border-2 border-white"><sup className="text-white  font-semibold pt-4  ">0</sup></span></sub> */}

        </div>
      </div>
    </div>
  );
}
