import React from 'react'
import shirtcoll from '../assets/images/home-page/shirt-coll.png'
import womenshirt from '../assets/images/home-page/womenshirt.png'
import product2 from '../assets/images/home-page/product2.png'

export default function CollectionShop() {
  return (
    <div>
        <div className=" max-w-[1320px] mx-auto p-4">
      <h2 className="text-[32px] font-semibold my-5">SHOP BY COLLECTION</h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
        <div>
          <div className="lg:h-[631px] h-[400px] overflow-hidden">
            <img className="h-full w-full object-cover" src={shirtcoll} alt="" />
          </div>
          <div className="mt-5">
            <h2 className="text-2xl font-semibold text-center">Tops</h2>
            <div className="flex justify-center mt-5">
              <a href=""
                className="text-sm border-[#c8c8c8] border min-w-[161px] hover:bg-black hover:text-white flex justify-center items-center font-bold rounded-full h-[37px]">Shop
                Now</a>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:h-[631px] h-[400px] overflow-hidden">
            <img className="h-full w-full object-cover" src={womenshirt} alt="" />
          </div>
          <div className="mt-5">
            <h2 className="text-2xl font-semibold text-center">Tops</h2>
            <div className="flex justify-center mt-5">
              <a href=""
                className="text-sm border-[#c8c8c8] border min-w-[161px] hover:bg-black hover:text-white flex justify-center items-center font-bold rounded-full h-[37px]">Shop
                Now</a>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:h-[631px] h-[400px] overflow-hidden">
            <img className="h-full w-full object-cover" src={product2} alt="" />
          </div>
          <div className="mt-5">
            <h2 className="text-2xl font-semibold text-center">Tops</h2>
            <div className="flex justify-center mt-5">
              <a href=""
                className="text-sm border-[#c8c8c8] border min-w-[161px] hover:bg-black hover:text-white flex justify-center items-center font-bold rounded-full h-[37px]">Shop
                Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
