import React from 'react'
import hourse from '../assets/images/home-page/hourse.png'
import boy from '../assets/images/home-page/boy.png'
import child from '../assets/images/home-page/child.png'
import bedsheet from '../assets/images/home-page/bedsheet.png'
 

export default function SeeStyle() {
  return (
    <div>
     <div className="  max-w-[1320px] mx-auto p-4">
      <h2 className="text-[32px] font-semibold my-5">SEE OUR STYLE</h2>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-5">
        <div>
          <div className="h-[300px] lg:h-[440px]  relative">
            <img className="h-full w-full object-cover" src={hourse} alt="" />
            <h3
              className="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase text-[40px] font-bold text-white z-10">
              women
            </h3>
            <div className="bg-black/5 absolute top-0 left-0 z-0 py-4 w-full h-full"></div>
          </div>
        </div>
        <div>
          <div className="h-[300px] lg:h-[440px]  relative">
            <img className="h-full w-full object-cover" src={boy} alt="" />
            <h3
              className="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase text-[40px] font-bold text-white z-10">
              men
            </h3>
            <div className="bg-black/5 absolute top-0 left-0 z-0 py-4 w-full h-full"></div>
          </div>
        </div>

        <div>
          <div className="h-[300px] lg:h-[440px]  relative">
            <img className="h-full w-full object-cover" src={child} alt="" />
            <h3
              className="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase text-[40px] font-bold text-white z-10">
              kids
            </h3>
            <div className="bg-black/5 absolute top-0 left-0 z-0 py-4 w-full h-full"></div>
          </div>
        </div>
        <div>
          <div className="h-[300px] lg:h-[440px]  relative">
            <img className="h-full w-full object-cover" src={bedsheet} alt="" />
            <h3
              className="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase text-[40px] font-bold text-white z-10">
              home
            </h3>
            <div className="bg-black/5 absolute top-0 left-0 z-0 py-4 w-full h-full"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
