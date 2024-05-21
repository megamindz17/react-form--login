import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Register() {


  return (
      <div className="flex justify-end items-center bg-login w-full h-screen ">
      <div className="flex justify-end items-end min-w-10 p-[100px] mr-[120px] ">
        <div>
          <form className=" flex flex-col  items-center  p-6 shadow-md w-[390px] h-[540px]  text-white rounded-[35px] backdrop-blur-[8px] bg-white/10 ">
            <h2 className=" text-white font-semibold text-4xl mb-4 text-center mt-[15px]">
              Registration
            </h2>

            <div className=" mt-10  mb-4">
              <input
                type="text"
                className=" bg-transparent border-b-2 border-black-500  w-[280px] px-3 py-2 placeholder:text-white focus:top-[10]    "
                placeholder="Email"
              />
            </div>
            <div className="mt-3 mb-4">
              <input
                type="username"
                className="bg-transparent border-b-2 border-black-500  w-[280px] px-3 py-2  text-white placeholder:text-whitek placeholder-slate-400"
                placeholder="Username"

              />
            </div>
            <div className="mt-3 mb-4">
              <input
                type="password"
                className="bg-transparent border-b-2 border-black-500  w-[280px] px-3 py-2  text-white placeholder:text-white placeholder-slate-400"
                placeholder="Password"

              />
            </div>
            <button
              type="submit"
              className="w-[180px] h-[45px] bg-blue-600 text-white py-2 rounded-[30px] hover:bg-blue-400 mt-[30px]"
            >
             <Link to="/"> Submit</Link>
            </button>

          <p  className='mt-5'>Register With</p>

            <div className="flex justify-around gap-8 mt-6 text-3xl font-semibold ">
              <FaFacebook />
              <FaGithub />
              <BiLogoGmail />
            </div>
         
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register