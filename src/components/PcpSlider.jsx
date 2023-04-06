import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pro1 from "../assets/images/plp/pro1.png";
import pro2 from "../assets/images/plp/pro2.png";
import pro3 from "../assets/images/plp/pro3.png";
 
export default function PcpSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 7,
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
          slidesToShow: 7,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-[1320px] mx-auto overflow-hidden p-4  Slider_sick_pcp">
        <h2 className="text-[32px] font-semibold my-5">LATEST IN</h2>
        <Slider {...settings}>
          <div className=" px-2">
            <a
              href=""
              class=" flex justify-center items-center text-center flex-col "
            >
              <img
                class="rounded-full md:w-[120px] md:h-[120px]   w-[90px] h-[90px] object-cover"
                src={pro1}
                alt=""
              />
              <p class="text-base  m-auto ">Jackets</p>
            </a>
          </div>
          <div className=" px-2">
            <a
              href=""
              class=" flex justify-center items-center text-center flex-col "
            >
              <img
                class="rounded-full md:w-[120px] md:h-[120px]   w-[90px] h-[90px] object-cover"
                src={pro1}
                alt=""
              />
              <p class="text-base  m-auto ">Jackets</p>
            </a>
          </div>
          <div className=" px-2">
            <a
              href=""
              class=" flex justify-center items-center text-center flex-col "
            >
              <img
                class="rounded-full md:w-[120px] md:h-[120px]   w-[90px] h-[90px] object-cover"
                src={pro2}
                alt=""
              />
              <p class="text-base  m-auto ">Jackets</p>
            </a>
          </div>
          <div className=" px-2">
            <a
              href=""
              class=" flex justify-center items-center text-center flex-col "
            >
              <img
                class="rounded-full md:w-[120px] md:h-[120px]   w-[90px] h-[90px] object-cover"
                src={pro3}
                alt=""
              />
              <p class="text-base  m-auto ">Jackets</p>
            </a>
          </div>
          <div className=" px-2">
            <a
              href=""
              class=" flex justify-center items-center text-center flex-col "
            >
              <img
                class="rounded-full md:w-[120px] md:h-[120px]   w-[90px] h-[90px] object-cover"
                src={pro1}
                alt=""
              />
              <p class="text-base  m-auto ">Jackets</p>
            </a>
          </div>
          <div className=" px-2">
            <a
              href=""
              class=" flex justify-center items-center text-center flex-col "
            >
              <img
                class="rounded-full md:w-[120px] md:h-[120px]   w-[90px] h-[90px] object-cover"
                src={pro2}
                alt=""
              />
              <p class="text-base  m-auto ">Jackets</p>
            </a>
          </div>
          <div className=" px-2">
            <a
              href=""
              class=" flex justify-center items-center text-center flex-col "
            >
              <img
                class="rounded-full md:w-[120px] md:h-[120px]   w-[90px] h-[90px] object-cover"
                src={pro3}
                alt=""
              />
              <p class="text-base  m-auto ">Jackets</p>
            </a>
          </div>
          <div className=" px-2">
            <a
              href=""
              class=" flex justify-center items-center text-center flex-col "
            >
              <img
                class="rounded-full md:w-[120px] md:h-[120px]   w-[90px] h-[90px] object-cover"
                src={pro1}
                alt=""
              />
              <p class="text-base  m-auto ">Jackets</p>
            </a>
          </div>
          <div className=" px-2">
            <a
              href=""
              class=" flex justify-center items-center text-center flex-col "
            >
              <img
                class="rounded-full md:w-[120px] md:h-[120px]   w-[90px] h-[90px] object-cover"
                src={pro2}
                alt=""
              />
              <p class="text-base  m-auto ">Jackets</p>
            </a>
          </div>
          <div className=" px-2">
            <a
              href=""
              class=" flex justify-center items-center text-center flex-col "
            >
              <img
                class="rounded-full md:w-[120px] md:h-[120px]   w-[90px] h-[90px] object-cover"
                src={pro1}
                alt=""
              />
              <p class="text-base  m-auto ">Jackets</p>
            </a>
          </div>
          <div className=" px-2">
            <a
              href=""
              class=" flex justify-center items-center text-center flex-col "
            >
              <img
                class="rounded-full md:w-[120px] md:h-[120px]   w-[90px] h-[90px] object-cover"
                src={pro1}
                alt=""
              />
              <p class="text-base  m-auto ">Jackets</p>
            </a>
          </div>
          <div className=" px-2">
            <a
              href=""
              class=" flex justify-center items-center text-center flex-col "
            >
              <img
                class="rounded-full md:w-[120px] md:h-[120px]   w-[90px] h-[90px] object-cover"
                src={pro1}
                alt=""
              />
              <p class="text-base  m-auto ">Jackets</p>
            </a>
          </div>
          <div className=" px-2">
            <a
              href=""
              class=" flex justify-center items-center text-center flex-col "
            >
              <img
                class="rounded-full md:w-[120px] md:h-[120px]   w-[90px] h-[90px] object-cover"
                src={pro1}
                alt=""
              />
              <p class="text-base  m-auto ">Jackets</p>
            </a>
          </div>
        </Slider>
      </div>
    </>
  );
}
