import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/images/home-page/slider1.png";

import { AiFillHeart } from "react-icons/ai";

export default function LatestSlider() {
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
    <div>
      <div className=" max-w-[1320px] mx-auto overflow-hidden p-4  Slider_sick">
        <h2 className="text-[32px] font-semibold my-5">LATEST IN</h2>
        <Slider {...settings}>
          <div className=" px-2">
            <a href="">
              <div className="product_images relative">
                <img
                  className="w-full h-[462px]"
                  src={slider1}
                  alt="product-img"
                />
                <span className=" absolute top-4 right-4 text-[#E60028] text-2xl ">
                  <AiFillHeart />{" "}
                </span>
                <span className="  absolute top-4 left-4 text-[#E60028] text-base font-medium bg-white px-2 ">
                  NEW IN
                </span>
              </div>

              <div className="product-card-details">
                <h3 className="product-card-title">
                  <a href="" className="text-base">
                    Black Biker Leather Jacket
                  </a>
                </h3>
                <div className="product-card-price">
                  <span className="text-2xl">$SAR 110</span>
                </div>
              </div>
            </a>
          </div>
          <div className=" px-2">
            <a href="">
              <div className="product_images relative">
                <img
                  className="w-full h-[462px]"
                  src={slider1}
                  alt="product-img"
                />
                <span className=" absolute top-4 right-4 text-[#E60028] text-2xl ">
                  <AiFillHeart />{" "}
                </span>
                <span className="  absolute top-4 left-4 text-[#E60028] text-base font-medium bg-white px-2 ">
                  NEW IN
                </span>
              </div>

              <div className="product-card-details">
                <h3 className="product-card-title">
                  <a href="" className="text-base">
                    Black Biker Leather Jacket
                  </a>
                </h3>
                <div className="product-card-price">
                  <span className="text-2xl">$SAR 110</span>
                </div>
              </div>
            </a>
          </div>
          <div className=" px-2">
            <a href="">
              <div className="product_images relative">
                <img
                  className="w-full h-[462px]"
                  src={slider1}
                  alt="product-img"
                />
                <span className=" absolute top-4 right-4 text-[#E60028] text-2xl ">
                  <AiFillHeart />{" "}
                </span>
                <span className="  absolute top-4 left-4 text-[#E60028] text-base font-medium bg-white px-2 ">
                  NEW IN
                </span>
              </div>

              <div className="product-card-details">
                <h3 className="product-card-title">
                  <a href="" className="text-base">
                    Black Biker Leather Jacket
                  </a>
                </h3>
                <div className="product-card-price">
                  <span className="text-2xl">$SAR 110</span>
                </div>
              </div>
            </a>
          </div>
          <div className=" px-2">
            <a href="">
              <div className="product_images relative">
                <img
                  className="w-full h-[462px]"
                  src={slider1}
                  alt="product-img"
                />
                <span className=" absolute top-4 right-4 text-[#E60028] text-2xl ">
                  <AiFillHeart />{" "}
                </span>
                <span className="  absolute top-4 left-4 text-[#E60028] text-base font-medium bg-white px-2 ">
                  NEW IN
                </span>
              </div>

              <div className="product-card-details">
                <h3 className="product-card-title">
                  <a href="" className="text-base">
                    Black Biker Leather Jacket
                  </a>
                </h3>
                <div className="product-card-price">
                  <span className="text-2xl">$SAR 110</span>
                </div>
              </div>
            </a>
          </div>
          <div className=" px-2">
            <a href="">
              <div className="product_images relative">
                <img
                  className="w-full h-[462px]"
                  src={slider1}
                  alt="product-img"
                />
                <span className=" absolute top-4 right-4 text-[#E60028] text-2xl ">
                  <AiFillHeart />{" "}
                </span>
                <span className="  absolute top-4 left-4 text-[#E60028] text-base font-medium bg-white px-2 ">
                  NEW IN
                </span>
              </div>

              <div className="product-card-details">
                <h3 className="product-card-title">
                  <a href="" className="text-base">
                    Black Biker Leather Jacket
                  </a>
                </h3>
                <div className="product-card-price">
                  <span className="text-2xl">$SAR 110</span>
                </div>
              </div>
            </a>
          </div>
          <div className=" px-2">
            <a href="">
              <div className="product_images relative">
                <img
                  className="w-full h-[462px]"
                  src={slider1}
                  alt="product-img"
                />
                <span className=" absolute top-4 right-4 text-[#E60028] text-2xl ">
                  <AiFillHeart />{" "}
                </span>
                <span className="  absolute top-4 left-4 text-[#E60028] text-base font-medium bg-white px-2 ">
                  NEW IN
                </span>
              </div>

              <div className="product-card-details">
                <h3 className="product-card-title">
                  <a href="" className="text-base">
                    Black Biker Leather Jacket
                  </a>
                </h3>
                <div className="product-card-price">
                  <span className="text-2xl">$SAR 110</span>
                </div>
              </div>
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
}
