import React from "react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { User } from "lucide-react";
import { LockKeyhole } from "lucide-react";

export default function GalleryPage() {
  return (
    <div id="login" className="py-20 ">
      <div className=" w-4/12 mx-auto shadow-xl border rounded-sm bg-white border-gray-200 p-10 space-y-6  ">
        <p className=" text-xl sm:text-4xl text-blue-400 font-bold text-center">Login </p>
        <div className=" grid  -ml-4  p-8 space-x-2 space-y-10">
          <div className="flex flex-col  space-y-2">
            <label htmlFor="" className="text-sm sm:text-lg font-semibold">
              User name
            </label>
            <input
              type="text"
              placeholder=" Type your username "
              className="border-b-2 border-gray-200 px-4 py-2  w-20 sm:w-30 md:w-48 lg:w-70 xl:w-90 text-gray-500 outline-none text-sm font-semibold"
            />
            <p className="-mt-8 -ml-2">
              <User size={18} className="text-gray-400" />
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-sm sm:text-lg font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Type your password"
              className="border-b-2 border-gray-200 px-4 py-2 w-20 sm:w-30 md:w-48 lg:w-70 xl:w-90  text-gray-500 outline-none  text-sm font-semibold"
            />
            <p className="-mt-8 -ml-2">
              <LockKeyhole size={18} className="text-gray-400 " />
            </p>
          </div>
        </div>
        <div id="login_btn" className="flex justify-center items-center mt-10 ">
          <button className=" text-white text-sm font-semibold sm:px-10 px:30  py-2  w-10 cursor-pointer  ">
            LOGIN
          </button>
        </div>
        <p className="text-sm font-semibold text-center text-blue-500 cursor-pointer">
          Forget password?
        </p>
        <p className="text-sm font-semibold text-center text-gray-500 cursor-pointer mt-12">
          Or Sign Up Using{" "}
        </p>

        <div className=" hidden sm:flex justify-center gap-4 mt-4 cursor-pointer ">
          <Facebook
            size={50}
            className="border rounded-b-full rounded-t-full rounded-l-full rounded-r-full py-2 px-2 bg-blue-900 text-white"
          />
          <Twitter
            size={50}
            className="border rounded-b-full rounded-t-full rounded-l-full rounded-r-full py-2 px-2  bg-blue-500 text-white"
          />

          <svg
            className="border rounded-b-full rounded-t-full rounded-l-full rounded-r-full py-2 px-2  bg-blue-800 text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 48 48"
          >
            <path
              fill="#ffc107"
              d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
            />
            <path
              fill="#ff3d00"
              d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
            />
            <path
              fill="#4caf50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
            />
            <path
              fill="#1976d2"
              d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
            />
          </svg>
        </div>

        <div className="mt-20 space-y-4">
          <p className="text-sm font-semibold text-center text-gray-500 cursor-pointer">
            Or Sign Up Using{" "}
          </p>
          <p className="text-sm font-semibold text-center  cursor-pointer text-blue-500">
            {" "}
            Sign Up{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
