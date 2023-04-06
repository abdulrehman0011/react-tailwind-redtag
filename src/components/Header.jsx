import React from 'react';
import BrandLogo from '../assets/images/logo.svg';
import Userfont from '../assets/images/User (1).svg';
import Cart from '../assets/images/Cart.svg';
import Search from '../assets/images/Search.svg';
import bedsheet from '../assets/images/home-page/bedsheet.png';
 


export default function Header() {
  return (
    <div>
        <header>
    <div className="bg-black text-white p-2 text-center">
      <p className="lg:text-base md:text-sm">
        Free Shipping Worldwide on all Orders over SAR 250
      </p>
    </div>

    <div>
      <div className="container mx-auto py-5 px-3">
        <div className="lg:flex flex-wrap justify-between">
          <div className="lg:flex md:flex mt-2 items-center">
            <div className="flex justify-between items-center">
              <div className="w-[141px]    mt-2 mr-3">
                <img src={BrandLogo} className="w-full" alt="" />
              </div>
              <div className="lg:hidden flex">
                <a href=""><img src={Userfont} className="mr-3 w-[24px] h-[24px]" alt="" /></a>
                <a href=""><img src={Cart} className="mr-3 w-[24px] h-[24px]" alt="" /></a>
                <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" className="h-6 w-6 cursor-pointer md:hidden block"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

              </div>

            </div>

            <div className="flex  mt-2">
              <a href=""
                className="text-sm border-[#c8c8c8] border min-w-[104px] h-[36px] flex justify-center items-center mr-3 text-white hover:bg-white hover:text-black bg-black rounded-full">WOMEN</a>
              <a href=""
                className="text-sm border-[#c8c8c8] border min-w-[104px] h-[36px] flex justify-center items-center mr-3 hover:bg-black hover:text-white rounded-full">MEN</a>
              <a href=""
                className="text-sm border-[#c8c8c8] border min-w-[104px] h-[36px] flex justify-center items-center mr-3 hover:bg-black hover:text-white rounded-full">KIDS</a>
            </div>
          </div>

          <div className="flex items-center">
            <div>
              <form action=""
                className="mr-3 w-full min-w-[306px] relative border-[#C8C8C8] border rounded-full lg:flex items-center h-[40px] px-3 hidden">
                <img src={Search} className="w-[24px] h-[24px]" alt="" />
                <input type="search" className="bg-transparent outline-none w-full" />
              </form>
            </div>

            <div className=" lg:flex items-center hidden ml-3">
              <a href=""><img src={Userfont} className="mr-3 w-[24px] h-[24px]" alt="" /></a>
              <a href=""><img src={Cart} className="mr-3 w-[24px] h-[24px]" alt="" /></a>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="lg:bg-[#F4F4F4]">
      <nav className="w-full flex flex-wrap items-center container lg:justify-start justify-end mx-auto px-4">
        <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
            
            <li className="hoverable z-10">
              <a href="#" className="relative block pr-[50px] py-4 text-base">
                Women</a>

              <div className="p-6 mega-menu mb-16 sm:mb-0 bg-white text-blackshadow-xl z-50">
                <div className="container mx-auto w-full flex flex-wrap justify-between">
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                </div>
              </div>
            </li>
            
            <li className="hoverable z-10">
              <a href="#" className="relative block pr-[50px] py-4 text-base">
                Men</a>

              <div className="p-6 mega-menu mb-16 sm:mb-0 bg-white text-blackshadow-xl z-50">
                <div className="container mx-auto w-full flex flex-wrap justify-between">
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                </div>
              </div>
            </li>
           
            <li className="hoverable z-10">
              <a href="#" className="relative block pr-[50px] py-4 text-base">
                Boys</a>

              <div className="p-6 mega-menu mb-16 sm:mb-0 bg-white text-blackshadow-xl z-50">
                <div className="container mx-auto w-full flex flex-wrap justify-between">
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                </div>
              </div>
            </li>
           
            <li className="hoverable z-10">
              <a href="#" className="relative block pr-[50px] py-4 text-base">
                Girls</a>

              <div className="p-6 mega-menu mb-16 sm:mb-0 bg-white text-blackshadow-xl z-50">
                <div className="container mx-auto w-full flex flex-wrap justify-between">
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                </div>
              </div>
            </li>
            
            <li className="hoverable z-10">
              <a href="#" className="relative block pr-[50px] py-4 text-base">
                Homewares</a>

              <div className="p-6 mega-menu mb-16 sm:mb-0 bg-white text-blackshadow-xl z-50">
                <div className="container mx-auto w-full flex flex-wrap justify-between">
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                </div>
              </div>
            </li>
           
            <li className="hoverable z-10">
              <a href="#" className="relative block pr-[50px] py-4 text-base">
                Collections</a>

              <div className="p-6 mega-menu mb-16 sm:mb-0 bg-white text-blackshadow-xl z-50">
                <div className="container mx-auto w-full flex flex-wrap justify-between">
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                </div>
              </div>
            </li>
            
            <li className="hoverable z-10">
              <a href="#" className="relative block pr-[50px] py-4 text-base">
                Best Deals</a>

              <div className="p-6 mega-menu mb-16 sm:mb-0 bg-white text-blackshadow-xl z-50">
                <div className="container mx-auto w-full flex flex-wrap justify-between">
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>

                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                </div>
              </div>
            </li>
           
            <li className="hoverable z-10">
              <a href="#" className="relative block bg-[#E60028] text-white px-4 py-4 text-base">
                Sale</a>

              <div className="p-6 mega-menu mb-16 sm:mb-0 bg-white text-blackshadow-xl z-50">
                <div className="container mx-auto w-full flex flex-wrap justify-between">
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                  <ul className="px-4 w-full md:w-[100] lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <li className="lg:block hidden">
                      <img className="h-full w-full" src={bedsheet} alt="" />
                    </li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                    <li><a href="">Lorem, ipsum.</a></li>
                  </ul>
                </div>
              </div>
            </li>
           
          </ul>
        </div>
      </nav>
    </div>
  </header>
    </div>
  )
}
