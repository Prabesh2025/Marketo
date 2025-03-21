import React from "react";
import { Logs } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { AlignJustify } from "lucide-react";

export default function BottomNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    // bottom navigation bar

    <div className=" flex md:justify-between justify-end  border-b border-gray-300 shadow-md">
      <div className="flex justify-between   w-11/12 md:w-8/12 mx-auto py-4 md:py-4 ">
        <div className="flex items-center ml-10 md:ml-0 space-x-2 border-l border-r border-gray-200  md:mr-10">
          <Logs />
          <p>All Categories</p>
          <ChevronDown />
        </div>
        <div className=" md:flex hidden  ">
          <div className="flex md:items-center  md:justify-between space-x-6">
            <div className="flex items-center">
              <NavLink
                to="/"
                className="hover:text-orange-500 duration-300 cursor-pointer "
              >
                Home
              </NavLink>
              <ChevronDown size={18} className="mt-1" />
            </div>

            <div className="flex  items-center">
              <NavLink
                to="/Pages"
                className="hover:text-orange-500 duration-300 cursor-pointer"
              >
                Pages
              </NavLink>
              <ChevronDown size={18} className="mt-1" />
            </div>

            <div className="flex items-center">
              <NavLink
                to="/shop"
                className="hover:text-orange-500 duration-300 cursor-pointer"
              >
                Shop
              </NavLink>
              <ChevronDown size={18} className="mt-1" />
            </div>
            <div className="flex items-center">
              <NavLink
                to="/blog"
                className="hover:text-orange-500 duration-300 cursor-pointer"
              >
                Blog
              </NavLink>
              <ChevronDown size={18} className="mt-1" />
            </div>
            <div className="flex items-center">
              <NavLink
                to="/gallery"
                className="hover:text-orange-500 duration-300 cursor-pointer"
              >
                Gallery
              </NavLink>
              <ChevronDown size={18} className="mt-1" />
            </div>
          </div>
        </div>

        <div className=" hidden lg:block  hover:bg-black hover:text-white px-10 py-4 duration-700 cursor-pointer border-l border-r border-gray-200 ml-10">
          <p className="text-sm font-semibold text-orange-500">BLACK FRIDAY</p>
          <p className="text-xs text-center">Get 45% off!</p>
        </div>

        <>
          <button  className="md:hidden block" onClick={toggleDrawer}>
            <AlignJustify />
          </button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="bla bla bla"
          >
            <div>
              <div className="flex flex-col md:items-center  md:justify-between space-x-6">
                <div className="flex items-center">
                  <NavLink
                    to="/"
                    className="hover:text-orange-500 duration-300 cursor-pointer "
                  >
                    Home
                  </NavLink>
                  <ChevronDown size={18} className="mt-1" />
                </div>

                <div className="flex  items-center">
                  <NavLink
                    to="/Pages"
                    className="hover:text-orange-500 duration-300 cursor-pointer"
                  >
                    Pages
                  </NavLink>
                  <ChevronDown size={18} className="mt-1" />
                </div>

                <div className="flex items-center">
                  <NavLink
                    to="/shop"
                    className="hover:text-orange-500 duration-300 cursor-pointer"
                  >
                    Shop
                  </NavLink>
                  <ChevronDown size={18} className="mt-1" />
                </div>
                <div className="flex items-center">
                  <NavLink
                    to="/blog"
                    className="hover:text-orange-500 duration-300 cursor-pointer"
                  >
                    Blog
                  </NavLink>
                  <ChevronDown size={18} className="mt-1" />
                </div>
                <div className="flex items-center">
                  <NavLink
                    to="/gallery"
                    className="hover:text-orange-500 duration-300 cursor-pointer"
                  >
                    Gallery
                  </NavLink>
                  <ChevronDown size={18} className="mt-1" />
                </div>
              </div>
            </div>
          </Drawer>
        </>
      </div>
    </div>
  );
}
