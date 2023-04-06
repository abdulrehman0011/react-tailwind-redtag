import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/images/home-page/slider1.png";
import { AiFillHeart } from "react-icons/ai";
import pro3 from "../assets/images/plp/pro3.png";
import pro1 from "../assets/images/plp/pro1.png";
import pro2 from "../assets/images/plp/pro2.png";

export default function Slider2() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-[1320px] mx-auto overflow-hidden p-4  Slider_sick">
        <h2 className="text-[32px] font-semibold my-5">LATEST IN</h2>
        <Slider {...settings}>
          <div className="p-2">
            <a href="">
              <div
                id="carouselExampleCaptions"
                className="relative"
                data-te-carousel-init
                data-te-carousel-slide
              >
                <div
                  className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4   list-none hidden justify-center p-0"
                  data-te-carousel-indicators
                >
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                    data-te-slide-to="0"
                    data-te-carousel-active
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                    data-te-slide-to="1"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                    data-te-slide-to="2"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-active
                    data-te-carousel-item
                  >
                    <img
                      src={pro3}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-item
                  >
                    <img
                      src={pro1}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-item
                  >
                    <img
                      src={pro2}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>

                  <span className=" absolute top-4 right-4 text-[#E60028] text-2xl ">
                    <AiFillHeart />
                  </span>
                  <span className="  absolute top-4 left-4 text-[#E60028] text-base font-medium bg-white px-2 ">
                    NEW IN
                  </span>
                </div>
                <button
                  className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-te-target="#carouselExampleCaptions"
                  data-te-slide="prev"
                >
                  <span className="inline-block h-8 w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Previous
                  </span>
                </button>
                <button
                  className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-te-target="#carouselExampleCaptions"
                  data-te-slide="next"
                >
                  <span className="inline-block h-8 w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Next
                  </span>
                </button>
              </div>
              <div class="plp_product_content">
                <div class="bg-[#FEA50A] mt-5 rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                  Buy 1 Get 1 <span class="font-semibold">Free</span>{" "}
                </div>
                <p class="text-base my-3">Black High-Neck Bodycon Dress</p>

                <div class="flex">
                  <span class="md:text-2xl text-xl text-[#E60028] font-bold">
                    SAR 105
                  </span>
                  <span class="md:text-2xl text-xl text-[#535357] font-medium line-through ml-4">
                    SAR 160
                  </span>
                </div>
                <div class="flex justify-center mt-5">
                  <a
                    href=""
                    class="text-sm border-[#c8c8c8] border min-w-[220px]  hover:bg-black hover:text-white flex justify-center items-center font-bold rounded-full h-[37px]"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </a>
          </div>
          <div className="p-2">
            <a href="">
              <div
                id="carouselExampleCaptions1"
                className="relative"
                data-te-carousel-init
                data-te-carousel-slide
              >
                <div
                  className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4   list-none hidden justify-center p-0"
                  data-te-carousel-indicators
                >
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions1"
                    data-te-slide-to="0"
                    data-te-carousel-active
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions1"
                    data-te-slide-to="1"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions1"
                    data-te-slide-to="2"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-active
                    data-te-carousel-item
                  >
                    <img
                      src={pro3}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-item
                  >
                    <img
                      src={pro1}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-item
                  >
                    <img
                      src={pro2}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>

                  <span className=" absolute top-4 right-4 text-[#E60028] text-2xl ">
                    <AiFillHeart />
                  </span>
                  <span className="  absolute top-4 left-4 text-[#E60028] text-base font-medium bg-white px-2 ">
                    NEW IN
                  </span>
                </div>
                <button
                  className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-te-target="#carouselExampleCaptions1"
                  data-te-slide="prev"
                >
                  <span className="inline-block h-8 w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Previous
                  </span>
                </button>
                <button
                  className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-te-target="#carouselExampleCaptions1"
                  data-te-slide="next"
                >
                  <span className="inline-block h-8 w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Next
                  </span>
                </button>
              </div>
              <div class="plp_product_content">
                <div class="bg-[#FEA50A] mt-5 rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                  Buy 1 Get 1 <span class="font-semibold">Free</span>{" "}
                </div>
                <p class="text-base my-3">Black High-Neck Bodycon Dress</p>

                <div class="flex">
                  <span class="md:text-2xl text-xl text-[#E60028] font-bold">
                    SAR 105
                  </span>
                  <span class="md:text-2xl text-xl text-[#535357] font-medium line-through ml-4">
                    SAR 160
                  </span>
                </div>
                <div class="flex justify-center mt-5">
                  <a
                    href=""
                    class="text-sm border-[#c8c8c8] border min-w-[220px]  hover:bg-black hover:text-white flex justify-center items-center font-bold rounded-full h-[37px]"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </a>
          </div>
          <div className="p-2">
            <a href="">
              <div
                id="carouselExampleCaptions2"
                className="relative"
                data-te-carousel-init
                data-te-carousel-slide
              >
                <div
                  className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4   list-none hidden justify-center p-0"
                  data-te-carousel-indicators
                >
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions2"
                    data-te-slide-to="0"
                    data-te-carousel-active
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions2"
                    data-te-slide-to="1"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions2"
                    data-te-slide-to="2"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-active
                    data-te-carousel-item
                  >
                    <img
                      src={pro3}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-item
                  >
                    <img
                      src={pro1}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-item
                  >
                    <img
                      src={pro2}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>

                  <span className=" absolute top-4 right-4 text-[#E60028] text-2xl ">
                    <AiFillHeart />
                  </span>
                  <span className="  absolute top-4 left-4 text-[#E60028] text-base font-medium bg-white px-2 ">
                    NEW IN
                  </span>
                </div>
                <button
                  className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-te-target="#carouselExampleCaptions2"
                  data-te-slide="prev"
                >
                  <span className="inline-block h-8 w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Previous
                  </span>
                </button>
                <button
                  className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-te-target="#carouselExampleCaptions2"
                  data-te-slide="next"
                >
                  <span className="inline-block h-8 w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Next
                  </span>
                </button>
              </div>
              <div class="plp_product_content">
                <div class="bg-[#FEA50A] mt-5 rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                  Buy 1 Get 1 <span class="font-semibold">Free</span>{" "}
                </div>
                <p class="text-base my-3">Black High-Neck Bodycon Dress</p>

                <div class="flex">
                  <span class="md:text-2xl text-xl text-[#E60028] font-bold">
                    SAR 105
                  </span>
                  <span class="md:text-2xl text-xl text-[#535357] font-medium line-through ml-4">
                    SAR 160
                  </span>
                </div>
                <div class="flex justify-center mt-5">
                  <a
                    href=""
                    class="text-sm border-[#c8c8c8] border min-w-[220px]  hover:bg-black hover:text-white flex justify-center items-center font-bold rounded-full h-[37px]"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </a>
          </div>
          <div className="p-2">
            <a href="">
              <div
                id="carouselExampleCaptions3"
                className="relative"
                data-te-carousel-init
                data-te-carousel-slide
              >
                <div
                  className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4   list-none hidden justify-center p-0"
                  data-te-carousel-indicators
                >
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions3"
                    data-te-slide-to="0"
                    data-te-carousel-active
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions3"
                    data-te-slide-to="1"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions3"
                    data-te-slide-to="2"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-active
                    data-te-carousel-item
                  >
                    <img
                      src={pro3}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-item
                  >
                    <img
                      src={pro1}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-item
                  >
                    <img
                      src={pro2}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>

                  <span className=" absolute top-4 right-4 text-[#E60028] text-2xl ">
                    <AiFillHeart />
                  </span>
                  <span className="  absolute top-4 left-4 text-[#E60028] text-base font-medium bg-white px-2 ">
                    NEW IN
                  </span>
                </div>
                <button
                  className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-te-target="#carouselExampleCaptions3"
                  data-te-slide="prev"
                >
                  <span className="inline-block h-8 w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Previous
                  </span>
                </button>
                <button
                  className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-te-target="#carouselExampleCaptions3"
                  data-te-slide="next"
                >
                  <span className="inline-block h-8 w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Next
                  </span>
                </button>
              </div>
              <div class="plp_product_content">
                <div class="bg-[#FEA50A] mt-5 rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                  Buy 1 Get 1 <span class="font-semibold">Free</span>{" "}
                </div>
                <p class="text-base my-3">Black High-Neck Bodycon Dress</p>

                <div class="flex">
                  <span class="md:text-2xl text-xl text-[#E60028] font-bold">
                    SAR 105
                  </span>
                  <span class="md:text-2xl text-xl text-[#535357] font-medium line-through ml-4">
                    SAR 160
                  </span>
                </div>
                <div class="flex justify-center mt-5">
                  <a
                    href=""
                    class="text-sm border-[#c8c8c8] border min-w-[220px]  hover:bg-black hover:text-white flex justify-center items-center font-bold rounded-full h-[37px]"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </a>
          </div>
          <div className="p-2">
            <a href="">
              <div
                id="carouselExampleCaptions4"
                className="relative"
                data-te-carousel-init
                data-te-carousel-slide
              >
                <div
                  className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4   list-none hidden justify-center p-0"
                  data-te-carousel-indicators
                >
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions4"
                    data-te-slide-to="0"
                    data-te-carousel-active
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions4"
                    data-te-slide-to="1"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions4"
                    data-te-slide-to="2"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-active
                    data-te-carousel-item
                  >
                    <img
                      src={pro3}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-item
                  >
                    <img
                      src={pro1}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-item
                  >
                    <img
                      src={pro2}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>

                  <span className=" absolute top-4 right-4 text-[#E60028] text-2xl ">
                    <AiFillHeart />
                  </span>
                  <span className="  absolute top-4 left-4 text-[#E60028] text-base font-medium bg-white px-2 ">
                    NEW IN
                  </span>
                </div>
                <button
                  className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-te-target="#carouselExampleCaptions4"
                  data-te-slide="prev"
                >
                  <span className="inline-block h-8 w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Previous
                  </span>
                </button>
                <button
                  className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-te-target="#carouselExampleCaptions4"
                  data-te-slide="next"
                >
                  <span className="inline-block h-8 w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Next
                  </span>
                </button>
              </div>
              <div class="plp_product_content">
                <div class="bg-[#FEA50A] mt-5 rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                  Buy 1 Get 1 <span class="font-semibold">Free</span>{" "}
                </div>
                <p class="text-base my-3">Black High-Neck Bodycon Dress</p>

                <div class="flex">
                  <span class="md:text-2xl text-xl text-[#E60028] font-bold">
                    SAR 105
                  </span>
                  <span class="md:text-2xl text-xl text-[#535357] font-medium line-through ml-4">
                    SAR 160
                  </span>
                </div>
                <div class="flex justify-center mt-5">
                  <a
                    href=""
                    class="text-sm border-[#c8c8c8] border min-w-[220px]  hover:bg-black hover:text-white flex justify-center items-center font-bold rounded-full h-[37px]"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </a>
          </div>{" "}
          <div className="p-2">
            <a href="">
              <div
                id="carouselExampleCaptions5"
                className="relative"
                data-te-carousel-init
                data-te-carousel-slide
              >
                <div
                  className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4   list-none hidden justify-center p-0"
                  data-te-carousel-indicators
                >
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions5"
                    data-te-slide-to="0"
                    data-te-carousel-active
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions5"
                    data-te-slide-to="1"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-te-target="#carouselExampleCaptions5"
                    data-te-slide-to="2"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-active
                    data-te-carousel-item
                  >
                    <img
                      src={pro3}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-item
                  >
                    <img
                      src={pro1}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none lg:h-[462px] md:h-[350px] sm:h-[350px] h-[250px]"
                    data-te-carousel-item
                  >
                    <img
                      src={pro2}
                      className="block w-full  h-full object-cover"
                      alt="..."
                    />
                  </div>

                  <span className=" absolute top-4 right-4 text-[#E60028] text-2xl ">
                    <AiFillHeart />
                  </span>
                  <span className="  absolute top-4 left-4 text-[#E60028] text-base font-medium bg-white px-2 ">
                    NEW IN
                  </span>
                </div>
                <button
                  className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-te-target="#carouselExampleCaptions5"
                  data-te-slide="prev"
                >
                  <span className="inline-block h-8 w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Previous
                  </span>
                </button>
                <button
                  className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-te-target="#carouselExampleCaptions5"
                  data-te-slide="next"
                >
                  <span className="inline-block h-8 w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Next
                  </span>
                </button>
              </div>
              <div class="plp_product_content">
                <div class="bg-[#FEA50A] mt-5 rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                  Buy 1 Get 1 <span class="font-semibold">Free</span>{" "}
                </div>
                <p class="text-base my-3">Black High-Neck Bodycon Dress</p>

                <div class="flex">
                  <span class="md:text-2xl text-xl text-[#E60028] font-bold">
                    SAR 105
                  </span>
                  <span class="md:text-2xl text-xl text-[#535357] font-medium line-through ml-4">
                    SAR 160
                  </span>
                </div>
                <div class="flex justify-center mt-5">
                  <a
                    href=""
                    class="text-sm border-[#c8c8c8] border min-w-[220px]  hover:bg-black hover:text-white flex justify-center items-center font-bold rounded-full h-[37px]"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </a>
          </div>
        </Slider>
      </div>
    </>
  );
}
