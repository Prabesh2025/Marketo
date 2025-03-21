import React from "react";
import { ChevronRight } from "lucide-react";
import pageImage from "../../public/pageimg.png";
import visionImage from "../../public/pageimg2.png";
import teamImage from "../../public/team_1.png";
import team22Image from "../../public/team_2.png";
import team33Image from "../../public/team_3.png";
import team44Image from "../../public/team_4.png";
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';

export default function Pages() {
  return (
    <div>
      {/* topnavbar  */}
      <div className="bg-gray-50 ">
        <div className=" w-9/12 mx-auto mt-4 flex justify-start items-center py-6 pl-8  space-x-4">
          <p className="font-semibold text-sm opacity-65">Home</p>
          <ChevronRight size={20} className="py-1" />
          <p className="font-semibold text-sm opacity-90"> About Us</p>
        </div>
      </div>

      <div>
        {/* 1stherosection */}
        <div className=" grid lg:grid-cols-2 xl:ml-50  w-11/12 xl:w-10/12 mx-auto mt-12 ">
          <div>
            <p className="xl:block hidden text-9xl font-bold opacity-5 xl:-mb-12 ">
              HISTORY
            </p>
            <div className=" ml-3  space-y-6">
              <p className="  text-blue-700 text-sm font-semibold ">
                OUR HISTORY
              </p>
              <h2 className="font-bold text-4xl">
                Creative and renovate fashion <br /> trends
              </h2>
              <p className=" hidden lg:block opacity-80 text-sm ">
                Collaboratively administrate empowered markets via plug-and-play
                maintain networks. Dynamically usable procrastinate B2B users
                after installed base <br /> benefits. Dramatically visualize
                customer directed convergence without <br /> revolutionary ROI.
              </p>
            </div>

            <div className="flex text-start space-x-6 mt-12 ml-6">
              <p className="text-sm opacity-85">
                {" "}
                <span className="text-blue-700 text-4xl font-semibold">
                  12
                </span>{" "}
                <br />
                Years Experience
              </p>

              <p className="text-sm opacity-85">
                {" "}
                <span className="text-blue-700 text-4xl font-semibold">
                  20K
                </span>{" "}
                <br />
                Happy Customers
              </p>

              <p className="text-sm opacity-85">
                {" "}
                <span className="text-blue-700 text-4xl font-semibold">
                  100%
                </span>
                <br />
                Clients Satisfaction
              </p>
            </div>
          </div>

          <div className="mt-20">
            <img src={pageImage} alt="bag" height={420} width={420} />
          </div>
        </div>
      </div>
      {/* second herosection  */}
      <div className="bg-gray-50 pb-15  mt-20 ">
        <div className=" grid lg:grid-cols-2 xl:ml-50  w-11/12 xl:w-8/12 mx-auto mt-12 ">
          <div className="mt-20">
            <img src={visionImage} alt="bag" height={440} width={440} />
          </div>

          <div>
            <p className="hidden xl:block text-9xl font-bold opacity-5 xl:-mb-12 ">
              VISION
            </p>
            <div className=" ml-3  space-y-6">
              <p className="text-blue-700 text-sm font-semibold ">Our vision</p>
              <h2 className="font-bold text-4xl">We are marketpress</h2>
              <p className="hidden xl:block opacity-80 text-sm ">
                Dynamically procrastinate B2C users after installed base
                benefits. Dramatically visualize customer directed convergence
                without revolutionary ROI.
              </p>
            </div>

            <div className="  font-semibold opacity-80 text-start space-y-2 mt-12 md:ml-10">
              <p className="text-sm"> Credibly innovate granular internal</p>

              <p className="text-sm"> Grantedly underconstructions reloaded</p>

              <p className="text-sm ">
                {" "}
                Interactively procrastinate high-payoff
              </p>
              <p className="text-sm ">
                Completely synergize resource taxing relationships
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Teammember Details  */}
      <div className="w-8/12 mx-auto mt-15">
        <p className="font-semibold text-sm text-blue-600">ANGELS</p>
        <h1 className="font-bold text-4xl opacity-85">Meet with our Team</h1>
      </div>
      {/* teammemberImage  */}
      <div>
        <div className="w-9/12 mx-auto mt-10 text-center grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-y-20 space-x-6">
          <div className=" ">
            <div className="absolute  flex space-x-2 mt-38 ml-20    ">
            <Facebook size={18}/>
            <Twitter size={18} />
            <Instagram size={18} />
            </div>
            <img src={teamImage} alt="team" className="hover:opacity-60 " />
            
            <p className="font-semibold text-sm text-blue-600 mt-10">FOUNDER</p>
            <p className="font-bold text-lg opacity-85 mt-4">Tony Williamson</p>
          
          </div>
          <div>
            <img src={team22Image} alt="team" />
            <p className="font-semibold text-sm text-blue-600 mt-10">CEO</p>
            <p className="font-bold text-lg opacity-85 mt-4">William Hanah</p>
          </div>

          <div>
            <img src={team33Image} alt="team" />
            <p className="font-semibold text-sm text-blue-600 mt-10">ADVISOR</p>
            <p className="font-bold text-lg opacity-85 mt-4">JInglo Jelian</p>
          </div>

          <div>
            <img src={team44Image} alt="team" />
            <p className="font-semibold text-sm text-blue-600 mt-10">
              DESIGNER
            </p>
            <p className="font-bold text-lg opacity-85 mt-4">Jony Smith</p>
          </div>

          <div>
            <img src={team22Image} alt="team" />
            <p className="font-semibold text-sm text-blue-600 mt-10">FOUNDER</p>
            <p className="font-bold text-lg opacity-85 mt-4">Tony Williamson</p>
          </div>

          <div>
            <img src={team33Image} alt="team" />
            <p className="font-semibold text-sm text-blue-600 mt-10">CEO</p>
            <p className="font-bold text-lg opacity-85 mt-4">William Hanah</p>
          </div>

          <div>
            <img src={team44Image} alt="team" />
            <p className="font-semibold text-sm text-blue-600 mt-10">ADVISOR</p>
            <p className="font-bold text-lg opacity-85 mt-4">JInglo Jelian</p>
          </div>

          <div>
            <img src={teamImage} alt="team" />
            <p className="font-semibold text-sm text-blue-600 mt-10">
              DESIGNER
            </p>
            <p className="font-bold text-lg opacity-85 mt-4"> Jony Smithn</p>
          </div>
        </div>
      </div>

      {/* signup form  */}

      <div className="bg-gray-50 py-24">
        <div className="w-9/12 mx-auto grid lg:grid-cols-2">
          <div className="space-y-2">
            <p className="text-2xl font-semibold">Newsletter & Get Updates</p>
            <p className="text-sm font-semibold opacity-60">
              Sign up for our newsletter to get up-to-date from us
            </p>
          </div>
          {/* signup button  */}
          <div>
            <input
              type="email"
              placeholder="Enter Your Mail Here....."
              className="text-sm font-semibold bg-white border border-gray-200 outline-none rounded-l-sm w-50 sm:w-60 xl:w-90 lg:w-75 h-10 sm:h-11.5 pl-10"
            />
            <button className=" mt-10 xl:mt-0 font-semibold text-sm border border-l-0 rounded-r-sm h-10.5 sm:h-12 w-18 xl:w-25 text-white bg-blue-700 cursor-pointer hover:bg-green-400 duration-600">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
