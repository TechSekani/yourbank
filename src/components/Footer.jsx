import React from 'react'
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon
  } from "@heroicons/react/24/solid";
import { logo } from '../assets/images'

const Footer = () => {
  return (
    <footer className=' bg-[#1c1c1c] mt-16 py-16 px-4  md:p-16 md:px-[90px] flex flex-col gap-8 items-center'>
        <img src={logo} alt="YourBank logo" className=' w-[40%] md:w-[12%]' />
        <div className=" flex gap-5">
            <h4>Home</h4>
            <h4>Careers</h4>
            <h4>About</h4>
            <h4>Security</h4>
        </div>
        <div className=" w-full flex flex-wrap justify-center gap-8 p-6 border-t border-b border-[#232323] [&>*]:flex [&>*]:gap-2 opacity-70">
            <a href="mailto:yourbank@gmail.com">
               <EnvelopeIcon width={16} color={'#CAFF33'} /> yourbank@gmail.com</a>
            <a href="tel:+2345678901">
               <PhoneIcon width={16} color={'#CAFF33'} /> 2345678901</a>
            <p>
               <MapPinIcon width={16} color={'#CAFF33'} /> Somewhere in the World</p>
        </div>
        <div className=" flex justify-between opacity-70 w-full p-4 border border-[#232323] bg-[#1a1a1a] rounded-full">
            <div className="">
                
            </div>
            <small>YourBank All Rights Reserved</small>
            <small>Privacy Policy | Terms of Service</small>
        </div>
    </footer>
  )
}

export default Footer