 import React from 'react'
 import women from '../assets/images/home-page/women.png'
 export default function DressBanner() {
   return (
     <div>
 
    <div className="max-w-[1320px] mx-auto p-4">
      <div className="relative">
        <img src={women} className="w-full  lg:h-[560px] md:h-[400px] h-[350px] object-cover" alt="" />
        <div className="w-[291px] absolute top-1/2 right-12 lg:right-28    -translate-y-1/2">
          <h2 className="text-[40px] font-bold text-black">Dress Express</h2>
          <p className="text-base my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscingunt ut labore
            eliqua.
          </p>
          <button
            className="h-[48px] min-w-[140px] rounded-3xl bg-black text-white flex justify-center items-center text-center text-sm">
            Shop Now
          </button>
        </div>
      </div>
    </div>
 
     </div>
   )
 }
 