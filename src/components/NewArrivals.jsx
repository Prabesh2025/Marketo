import React from "react";
import { Heart } from "lucide-react";
import productImage from "../../public/chair1.png";
import proImage from "../../public/table1.jpg";
import ductImage from "../../public/chair2.png";
import pImage from "../../public/sofa1.png";
import { NavLink } from "react-router";

export default function NewArrivals() {
  return (
    <div>
      <div className="w-10/12 mx-auto mt-5 mb-5">
        <div className="flex  md:space-x-180 py-1 border-b border-gray-300 ">
          <div>
            <p className="font-semibold text-xl ">New Arrivals </p>
          </div>

          <div className="xl:flex hidden space-x-6 cursor-pointer font-semibold opacity-60">
            <p className=" text-orange-500 border-b-2 :border-orange-500">
              On Sell
            </p>
            <p className=" hover:text-orange-500 hover:border-b-2 hover:border-orange-500">
              Hot Sell
            </p>
            <p className=" hover:text-orange-500 hover:border-b-2 hover:border-orange-500">
              Trend
            </p>
            <p className=" hover:text-orange-500 hover:border-b-2 hover:border-orange-500">
              Best Sell
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:space-x-6 space-y-2 mt-4">
          {/* 1st arrival img */}

          <NavLink to="/product-detail/rtj" className="group border border-gray-300 py-10 px-2 space-y-1 hover:border-orange-300 cursor-pointer    duration-300 hover:shadow-md">
            <div className="flex justify-end">
              <Heart className="opacity-0 group-hover:opacity-100 text-orange-500" />
            </div>

            <div className="flex justify-center">
               <img  src={productImage} alt="chair" />
            </div>

            <p className="text-sm font-semibold opacity-70">
              Innovative Furnitures
            </p>
            <p className="text-lg font-semibold">Heavy Duty Antis</p>
            <p className="text-orange-500 text-xl font-semibold ml-2">
              $4,000.00
            </p>
          </NavLink>

          {/* 2nd arrival img  */}

          <NavLink to="/product-detail/2" className="group border border-gray-300 py-10 px-2 space-y-1 hover:border-orange-300 cursor-pointer duration-300 hover:shadow-md">
            <div className="flex justify-end">
              <Heart className="opacity-0 group-hover:opacity-100 text-orange-500" />
            </div>

            <div className="flex justify-center">
              <img src={proImage} alt="table" />
            </div>

            <p className="text-sm font-semibold opacity-70">
              Innovative Furnitures
            </p>
            <p className="text-lg font-semibold">Heavy Duty Antis</p>
            <p className="text-orange-500 text-xl font-semibold ml-2">
              $2,000.00
            </p>
          </NavLink>

          {/* 3rd arrival img */}

          <NavLink to="/product-detail/3" className="group border border-gray-300 py-8 px-2 space-y-1 hover:border-orange-300 cursor-pointer duration-300 hover:shadow-md">
            <div className="flex justify-end">
              <Heart className="opacity-0 group-hover:opacity-100 text-orange-500" />
            </div>

            <div className="flex justify-center">
              <img src={ductImage} alt="chair2" />
            </div>

            <p className="text-sm font-semibold opacity-70">
              Innovative Furnitures
            </p>
            <p className="text-lg font-semibold">Zinglo Wheel</p>
            <p className="text-orange-500 text-xl font-semibold ml-2">
              $3,000.00
            </p>
          </NavLink>

          {/* 4th arrival img */}

          <div className="group border border-gray-300 py-8 px-2 space-y-1 hover:border-orange-300 cursor-pointer duration-300 hover:shadow-md" >
            <div className="flex justify-end">
              <Heart className="opacity-0 group-hover:opacity-100 text-orange-500" />
            </div>

            <div className="flex justify-center">
              <img src={pImage} alt="sofa" />
            </div>

            <p className="text-sm font-semibold opacity-70">
              Innovative Furnitures
            </p>
            <p className="text-lg font-semibold">Zinglo Wheel</p>
            <p className="text-orange-500 text-xl font-semibold ml-2">
              $5,000.00
            </p>
          </div>


             {/* fifth arrivals img  */}
          <div className="group border border-gray-300 py-8 px-2 space-y-1 hover:border-orange-300 cursor-pointer duration-300 hover:shadow-md">
            <div className="flex justify-end">
              <Heart className="opacity-0 group-hover:opacity-100 text-orange-500" />
            </div>

            <div className="flex justify-center">
              <img src={pImage} alt="sofa" />
            </div>

            <p className="text-sm font-semibold opacity-70">
              Innovative Furnitures
            </p>
            <p className="text-lg font-semibold">Zinglo Wheel</p>
            <p className="text-orange-500 text-xl font-semibold ml-2">
              $5,000.00
            </p>
          </div>
          
            {/* sixth arrival img */}
          <div className="group border border-gray-300 py-8 px-2 space-y-1 hover:border-orange-300 cursor-pointer duration-300 hover:shadow-md">
            <div className="flex justify-end">
              <Heart className="opacity-0 group-hover:opacity-100 text-orange-500" />
            </div>

            <div className="flex justify-center">
              <img src={pImage} alt="sofa" />
            </div>

            <p className="text-sm font-semibold opacity-70">
              Innovative Furnitures
            </p>
            <p className="text-lg font-semibold">Zinglo Wheel</p>
            <p className="text-orange-500 text-xl font-semibold ml-2">
              $5,000.00
            </p>
          </div>
          


        </div>
      </div>
    </div>
  );
}
