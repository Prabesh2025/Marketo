import React from "react";
import { MapPin } from "lucide-react";
import { MoveRight } from "lucide-react";

export default function Footer() {
  return (
    // footer section
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  w-11/12 md:w-10/12 space-y-12 mx-auto py-18 mt-12">
        {/* first child */}
        <div className="space-y-4">
          <p className="text-3xl opacity-55">Got Question? Call us 24/7</p>
          <p className="text-3xl font-semibold text-gray-600">[80] 1017 197</p>
          <p className="text-sm italic opacity-70">
            17 Princess Road, London, Greater London <br /> NW1 8JR, UK
          </p>
          <button className=" flex items-center space-x-2 text-sm font-semibold bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-green-500 duration-700 cursor-pointer">
            {" "}
            <MapPin size={16} /> <span>View on Map </span>{" "}
          </button>
        </div>
        {/* second child */}
        <div className="space-y-4">
          <p className="text-2xl opacity-65">We Using</p>
          <p className="text-xl font-semibold">Safe Payments</p>
          <p className="text-sm font-semibold">Secured by:</p>
        </div>
        {/* third child */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <p className="text-sm opacity-70">Support Center</p>
          <p className="text-sm opacity-70">Term & Conditions</p>
          <p className="text-sm opacity-70">Shipping</p>
          <p className="text-sm opacity-70">Privacy Policy</p>
          <p className="text-sm opacity-70">Help</p>
          <p className="text-sm opacity-70">Products Return</p>
          <p className="text-sm opacity-70">FAQS</p>
        </div>
        {/* fourth child */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Our Stores</h2>
          <p className="text-sm opacity-70">New York</p>
          <p className="text-sm opacity-70">London SF</p>
          <p className="text-sm opacity-70">Cockfosters BP</p>
          <p className="text-sm opacity-70">Los Angeles</p>
          <p className="text-sm opacity-70">Chicago</p>
          <p className="text-sm opacity-70">Las Vegas</p>
          <p className="text-sm opacity-70">Albarto</p>
        </div>
        {/* fifth child */}
        <div>
          <button className="bg-amber-600 mt-40 ml-10 font-semibold flex items-center space-x-2 text-sm cursor-pointer py-4 px-8 rounded-md hover:bg-black hover:text-white md:rotate-270 duration-700">
            {" "}
            <span>BACK TOP</span> <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
}
