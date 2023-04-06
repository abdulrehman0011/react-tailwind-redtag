import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pro1 from "../assets/images/plp/pro1.png";
import slider1 from "../assets/images/home-page/slider1.png";
import Clock from "../assets/images/Clock.svg";
import Delivery from "../assets/images/Delivery.svg";
import ClickCollect from "../assets/images/Click&Collect.svg";
import Secure from "../assets/images/Secure.svg";
import COD from "../assets/images/COD.svg";
import Returns from "../assets/images/Returns.svg";

 
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
    };
    return (
      <>
        <div className=" max-w-[1320px] mx-auto overflow-hidden p-4   ">
          <div className="grid grid-cols-12 gap-6 pdp_sliders">
            <div className="  col-span-6  ">
              <div className="grid grid-cols-12 gap-2">
                <div className="  col-span-2 nav_slider ">
                  <Slider
                    className="py-5 "
                    asNavFor={this.state.nav1}
                    ref={(slider) => (this.slider2 = slider)}
                    slidesToShow={5}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    vertical={true}
                  >
                    <div className="slider_nav_item">
                      <img src={pro1} alt="" />
                    </div>
                    <div className="slider_nav_item">
                      <img src={pro1} alt="" />
                    </div>
                    <div className="slider_nav_item">
                      <img src={pro1} alt="" />
                    </div>
                    <div className="slider_nav_item">
                      <img src={pro1} alt="" />
                    </div>
                    <div className="slider_nav_item">
                      <img src={pro1} alt="" />
                    </div>
                    <div className="slider_nav_item">
                      <img src={pro1} alt="" />
                    </div>
                    <div className="slider_nav_item">
                      <img src={pro1} alt="" />
                    </div>
                  </Slider>
                </div>
                <div className="  col-span-10   slider_for_items_slides ">
                  <Slider
                    asNavFor={this.state.nav2}
                    ref={(slider) => (this.slider1 = slider)}
                  >
                    <div className="slider-for_item">
                      <a href={pro1} data-fancybox="gallery">
                        <img src={pro1} alt="" />
                      </a>
                    </div>
                    <div className="slider-for_item">
                      <a href={pro1} data-fancybox="gallery">
                        <img src={pro1} alt="" />
                      </a>
                    </div>
                    <div className="slider-for_item">
                      <a href={pro1} data-fancybox="gallery">
                        <img src={pro1} alt="" />
                      </a>
                    </div>
                    <div className="slider-for_item">
                      <a href={pro1} data-fancybox="gallery">
                        <img src={pro1} alt="" />
                      </a>
                    </div>
                    <div className="slider-for_item">
                      <a href={pro1} data-fancybox="gallery">
                        <img src={pro1} alt="" />
                      </a>
                    </div>
                    <div className="slider-for_item">
                      <a href={pro1} data-fancybox="gallery">
                        <img src={pro1} alt="" />
                      </a>
                    </div>
                    <div className="slider-for_item">
                      <a href={pro1} data-fancybox="gallery">
                        <img src={pro1} alt="" />
                      </a>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>

            <div className="  col-span-6  ">
              <div className="   ">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex">
                    <div className="bg-[#FEA50A]   mr-3  rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                      Buy 1 Get 1 <span className="font-semibold">Free</span>
                    </div>
                    <span className="text-[#E60028] text-sm  font-medium">
                      Sale ends in 3 hrs : 05 mins
                    </span>
                  </div>
                  <div>
                    <span className="text-xl">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                </div>
                <h1 className="text-2xl font-medium mb-3">
                  Navy Ribbed Bodycon Dress With Belt
                </h1>
                <div className="flex justify-between items-center mb-3 ">
                  <div className="flex">
                    <span className=" text-[32px]   text-[#E60028] font-bold">
                      SAR 105
                    </span>
                    <span className=" text-[32px]   text-[#535357] font-medium line-through ml-4">
                      SAR 160
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className=" text-xs  ">
                      Earn <span className="font-semibold">RT 40</span> points
                    </span>
                    <span className="border   border-black text-[8px] mx-1 rounded-full w-4 h-4  flex justify-center  items-center  ">
                      <i className="fas fa-info  "></i>
                    </span>
                  </div>
                </div>
                <div className="flex items-center border-b border-[#C8C8C8] pb-5">
                  <p className="text-sm ">
                    Split in 4 payments of
                    <span className="font-semibold">AED </span> 260. No fees.
                  </p>
                  <span className="border   border-black text-[8px] mx-1 rounded-full w-4 h-4  flex justify-center  items-center  ">
                    <i className="fas fa-info  "></i>
                  </span>
                </div>
                <div className="relative pdp_sliders_colors my-3 w-[100%] overflow-hidden  md:block  hidden">
                  <p className="text-sm font-bold my-3">COLOR</p>

                  <Slider {...settings}>
                    <div className="product_images p-1 relative">
                      <img
                        className="w-full h-full object-cover"
                        src={slider1}
                        alt="product-img"
                      />
                    </div>
                    <div className="product_images p-1 relative">
                      <img
                        className="w-full h-full object-cover"
                        src={slider1}
                        alt="product-img"
                      />
                    </div>
                    <div className="product_images p-1 relative">
                      <img
                        className="w-full h-full object-cover"
                        src={slider1}
                        alt="product-img"
                      />
                    </div>
                    <div className="product_images p-1 relative">
                      <img
                        className="w-full h-full object-cover"
                        src={slider1}
                        alt="product-img"
                      />
                    </div>
                    <div className="product_images p-1 relative">
                      <img
                        className="w-full h-full object-cover"
                        src={slider1}
                        alt="product-img"
                      />
                    </div>
                    <div className="product_images p-1 relative">
                      <img
                        className="w-full h-full object-cover"
                        src={slider1}
                        alt="product-img"
                      />
                    </div>
                    <div className="product_images p-1 relative">
                      <img
                        className="w-full h-full object-cover"
                        src={slider1}
                        alt="product-img"
                      />
                    </div>
                    <div className="product_images p-1 relative">
                      <img
                        className="w-full h-full object-cover"
                        src={slider1}
                        alt="product-img"
                      />
                    </div>
                  </Slider>
                </div>
                <div>
                  <div className="flex justify-between items-center my-3">
                    <p className="text-sm font-bold  ">SIZE</p>
                    <div className="flex  items-center">
                      <span>
                        <i className="fas fa-ruler-horizontal mx-3 text-base"></i>
                      </span>
                      <a href="" className="text-sm font-bold underline ">
                        Size Guide
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap ">
                    <div>
                      <a
                        href=""
                        className="text-xs border flex justify-center items-center border-[#C8C8C8]  w-[59px] h-[48px] m-1 hover:text-white hover:bg-black duration-100"
                      >
                        36 UK
                      </a>
                    </div>
                    <div>
                      <a
                        href=""
                        className="text-xs border flex justify-center items-center  border-[#C8C8C8]  w-[59px] h-[48px] m-1 hover:text-white hover:bg-black duration-100"
                      >
                        37 UK
                      </a>
                      <span className="text-sm text-[#E60028] w-[59px] ">
                        2 Left
                      </span>
                    </div>
                    <div>
                      <a
                        href=""
                        className="text-xs border flex justify-center items-center border-[#C8C8C8]  w-[59px] h-[48px] m-1 hover:text-white hover:bg-black duration-100"
                      >
                        38 UK
                      </a>
                      <span className="text-sm text-[#E60028] w-[59px] ">
                        Out Of <br /> Stock
                      </span>
                    </div>
                    <div>
                      <a
                        href=""
                        className="text-xs border flex justify-center items-center border-[#C8C8C8]  w-[59px] h-[48px] m-1 hover:text-white hover:bg-black duration-100"
                      >
                        40 UK
                      </a>
                    </div>
                    <div>
                      <a
                        href=""
                        className="text-xs border flex justify-center items-center border-[#C8C8C8]  w-[59px] h-[48px] m-1 hover:text-white hover:bg-black duration-100"
                      >
                        42 UK
                      </a>
                    </div>
                    <div>
                      <a
                        href=""
                        className="text-xs border flex justify-center items-center border-[#C8C8C8]  w-[59px] h-[48px] m-1  text-white bg-black duration-100"
                      >
                        44 UK
                      </a>
                    </div>
                    <div>
                      <a
                        href=""
                        className="text-xs border flex justify-center items-center border-[#C8C8C8]  w-[59px] h-[48px] m-1 hover:text-white hover:bg-black duration-100"
                      >
                        46 UK
                      </a>
                    </div>
                  </div>
                  <div className="  text-center flex justify-center items-center flex-col sm:px-6 mt-5">
                    <button
                      type="submit"
                      className="mt-4 inline h-[48px]    md:min-w-[370px] min-w-[100%]  rounded-3xl bg-black text-white text-sm"
                    >
                      CREATE ACCOUNT
                    </button>
                  </div>
                  <div className=" flex items-center mt-5">
                    <span className="text-[17px] mx-1">
                      <i className="fas fa-truck-moving"></i>
                    </span>
                    <p className="text-sm "> Delivery by 13/09/2021</p>
                    <span className="border   border-black text-[8px] mx-1 rounded-full w-4 h-4  flex justify-center  items-center  ">
                      <i className="fas fa-info  "></i>
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold py-3">DESCRIPTION</h3>
                    <p className="text-base">
                      Nullam sit amet laoreet urna. Donec quis erat feugiat,
                      ultrices ero nec, tincidunt nislacus nec tellus
                    </p>
                    <ul className="text-base">
                      <li className="text-base p-1">
                        Sed bibendum eu sapien eleifend feugiat Cras
                        efficiturerat.
                      </li>
                      <li className="text-base p-1">
                        Sed bibendum eu sapien eleifend feugiataliquam.
                      </li>
                      <li className="text-base p-1">
                        Sed bibendum eu sapien eleifend feugiat Cras
                        efficiturerat.
                      </li>
                    </ul>
                    <a
                      href=""
                      className="text-sm  border-b text-black border-black py-[2px]"
                    >
                      + Read more
                    </a>
                  </div>

                  <div id="accordionExample5 " className=" mt-3">
                    <div className=" accordion-item bg-white  border-[#C8C8C8] border-t border-b">
                      <h2 className="mb-0" id="headingOne5">
                        <button
                          className=" accordion-button
collapsed
relative
flex
items-center
w-full
py-4
px-5
 text-left
bg-white
border-0
rounded-none
transition
focus:outline-none
text-base"
                          type="button"
                          data-te-collapse-init
                          data-te-target="#collapseOne5"
                          aria-expanded="true"
                          aria-controls="collapseOne5"
                        >
                          Delivery & returns
                          <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapseOne5"
                        className="!visible"
                        data-te-collapse-item
                        data-te-collapse-show
                        aria-labelledby="headingOne5"
                      >
                        <div className="py-4 px-5">
                          <strong>
                            This is the first item's accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center py-3">
                    <h3 className="text-xl font-bold ">OUR PROMISES</h3>
                    <span className="border   border-black text-[8px] mx-1 rounded-full w-4 h-4  flex justify-center  items-center  ">
                      <i className="fas fa-info  "></i>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-100px flex text-center justify-center items-center flex-col p-3">
                      <img src={Clock} alt="" />
                      <span className="text-base font-medium mt-1  ">
                        Anywhere <br /> Delivery
                      </span>
                    </div>
                    <div className="w-100px flex text-center justify-center items-center flex-col p-3">
                      <img src={Delivery} alt="" />
                      <span className="text-base font-medium mt-1  ">
                        Anywhere
                        <br /> Delivery
                      </span>
                    </div>
                    <div className="w-100px flex text-center justify-center items-center flex-col p-3">
                      <img src={ClickCollect} alt="" />
                      <span className="text-base font-medium mt-1  ">
                        Click & <br />
                        Collect
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center ">
                    <div className="w-100px flex text-center justify-center items-center flex-col p-3 ">
                      <img src={Secure} alt="" />
                      <span className="text-base font-medium mt-1  ">
                        Secure <br />
                        Payment
                      </span>
                    </div>
                    <div className="w-100px flex text-center justify-center items-center flex-col p-3">
                      <img src={COD} alt="" />
                      <span className="text-base font-medium mt-1  ">
                        Cash on
                        <br /> Delivery
                      </span>
                    </div>
                    <div className="w-100px flex text-center justify-center items-center flex-col p-3">
                      <img src={Returns} alt="" />
                      <span className="text-base font-medium mt-1  ">
                        Easy
                        <br />
                        Returns
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

     

      </>
    );
  }
}
