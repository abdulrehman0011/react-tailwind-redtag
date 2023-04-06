import React from 'react'
import banner from '../assets/images/home-page/banner.png'

export default function Hero() {
  return (
    <div>
          <section className="mt-9">
    <div className="max-w-[1320px] mx-auto p-4">
      <div className="relative">
        <img src={banner} className="  w-full lg:h-[560px] md:h-[400px] h-[350px] object-cover" alt="" />
        <div className="w-[291px] absolute top-1/2 lg:left-28 left-12  -translate-y-1/2">
          <h2 className="text-[40px] font-bold text-black">Collection</h2>
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
  </section>

  
      
    </div>
  )
}
