import React from 'react'
import Banner from "../assets/images/Banner Image.png";
import Video from "../assets/images/Video Icon.svg";

export default function VideoBg() {
  return (
    <>
       <div class="max-w-[1320px]   mx-auto p-3">
            <div class="relative">
                <img class="w-full h-auto " src= {Banner} alt=""/>
                <button>
                    <img class="w-[100px] h[100px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        src={Video} alt=""/>
                </button>
            </div>

            <div class="flex justify-between items-center   flex-wrap">
                <h3>Sweatshirts & Hoodies</h3>
                <a href=""
                    class="text-sm border-[#c8c8c8] border min-w-[161px] hover:bg-black hover:text-white flex justify-center items-center font-bold rounded-full h-[37px]">Shop
                    Now</a>
            </div>


        </div>
    </>
  )
}
