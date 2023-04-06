import React from "react";
import Shipping from "../assets/images/Free Shipping Availed.svg";
import Deliveryhome from "../assets/images/icons/Home Delivery.svg";
import Collect from "../assets/images/icons/Click&Collect.svg";
import pro1 from "../assets/images/plp/pro1.png";
import Share from "../assets/images/Share.svg";

export default function Delivery() {
  return (
    <>
      <div class="max-w-[1320px]  mx-auto md:p-9 p-6 pb-0-0">
        <div>
          <a href="" class="text-sm font-medium">
            Home /
          </a>
          <span class="text-xs   font-light">Shopping Bag</span>
        </div>
      </div>

      <div class="max-w-[1320px] mx-auto p-3">
        <div class=" bg-[#e5f2ea] py-10 flex justify-center items-center text-center">
          <img class="w-[40px]" src={Shipping} alt="" />
          <h5 class="text-black  md:text-[20px] text-base font-bold">
            Congrats! You’ve earned free shipping
          </h5>
        </div>

        <div class="grid grid-cols-12 p-3 gap-6">
          <div class="lg:col-span-5  col-span-12 ">
            <div>
              <h2 class="text-2xl font-bold  mb-3">1. CONTACT INFORMATION</h2>
              <p class="text-sm  ">
                Already have an account?{" "}
                <a href="" class="underline">
                  LOG IN
                </a>
              </p>
              <input
                type="text"
                placeholder="Email"
                class="border border-[#C8C8C8] rounded-lg w-full h-[48px] p-3 my-5"
              />
              <h2 class="text-2xl font-bold mb-3"> 2. DELIVERY METHOD</h2>
              <ul class="border rounded-md border-[#C8C8C8]  ">
                <li class="p-5 border-b border-[#C8C8C8] ">
                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]   ">
                    <input
                      class="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-black checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-black checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[1] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-black checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault01"
                    />
                    <label
                      class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      for="radioDefault01"
                    >
                      <div class="flex items-start">
                        <img
                          class="w-[32px] h-[32px]"
                          src={Deliveryhome}
                          alt=""
                        />
                        <div class="ml-2">
                          <p class="text-base font-bold ">Home Delivery</p>
                          <p class="text-sm ">
                            Free Delivery On Accessories above AED 100 & large
                            items above AED 600
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>
                </li>
                <li class="p-5 ">
                  <div class="mb-[0.125rem] block min-h-[1.5rem]   pl-[1.5rem]">
                    <input
                      class="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-black checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-black checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[1] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-black checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault01"
                    />
                    <label
                      class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      for="radioDefault01"
                    >
                      <div class="flex items-start">
                        <img class="w-[32px] h-[32px]" src={Collect} alt="" />
                        <div class="ml-2">
                          <p class="text-base font-bold ">Click & Collect</p>
                          <p class="text-sm ">Collect your order in-store</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </li>
              </ul>

              <div class="border-b border-t border-[#C8C8C8] p-3 my-5">
                <p class="text-[20px] text-black opacity-[.3] font-bold">
                  3.Payment method
                </p>
              </div>
            </div>
          </div>
          <div class="lg:col-span-7 col-span-12">
            <div class="grid grid-cols-12 gap-3 border-b py-4 border-[#C8C8C8]">
              <div class="col-span-3 m-auto">
                <img
                  src={pro1}
                  class="w-full md:h-[255px] h-[120px] object-cover"
                  alt=""
                />
              </div>
              <div class="col-span-9">
                <div class="flex justify-between items-center flex-wrap">
                  <div class="bg-[#FEA50A] mt-5 rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                    Buy 1 Get 1 <span class="font-semibold">Free</span>{" "}
                  </div>
                </div>
                <div class="flex justify-between items-center mt-5 flex-wrap">
                  <div>
                    <h1 class="md:text-2xl text-lg">
                      Pink Knitted Textured Trouser
                    </h1>
                    <p class="text-base">Size : 10</p>
                    <p class="text-base">Color : Black</p>
                  </div>
                  <div>
                    <p class="md:text-2xl text-lg text-[#E60028] font-bold text-right">
                      SAR 60
                    </p>
                    <p class="md:text-base text-sm    line-through text-right">
                      SAR 110
                    </p>
                  </div>
                </div>

                <div class="flex justify-between items-center mt-5 flex-wrap">
                  <p class="text-[#E60028] text-sm">Last Item!</p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 gap-3 border-b py-4 border-[#C8C8C8]">
              <div class="col-span-3 m-auto">
                <img
                  src={pro1}
                  class="w-full md:h-[255px] h-[120px] object-cover"
                  alt=""
                />
              </div>
              <div class="col-span-9">
                <div class="flex justify-between items-center flex-wrap">
                  <div class="bg-[#FEA50A] mt-5 rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                    Buy 1 Get 1 <span class="font-semibold">Free</span>{" "}
                  </div>
                </div>
                <div class="flex justify-between items-center mt-5 flex-wrap">
                  <div>
                    <h1 class="md:text-2xl text-lg">
                      Pink Knitted Textured Trouser
                    </h1>
                    <p class="text-base">Size : 10</p>
                    <p class="text-base">Color : Black</p>
                  </div>
                  <div>
                    <p class="md:text-2xl text-lg text-[#E60028] font-bold text-right">
                      SAR 60
                    </p>
                    <p class="md:text-base text-sm    line-through text-right">
                      SAR 110
                    </p>
                  </div>
                </div>

                <div class="flex justify-between items-center mt-5 flex-wrap">
                  <p class="text-[#E60028] text-sm">Last Item!</p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 gap-3 border-b py-4 border-[#C8C8C8]">
              <div class="col-span-3 m-auto">
                <img
                  src={pro1}
                  class="w-full md:h-[255px] h-[120px] object-cover"
                  alt=""
                />
              </div>
              <div class="col-span-9">
                <div class="flex justify-between items-center flex-wrap">
                  <div class="bg-[#FEA50A] mt-5 rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                    Buy 1 Get 1 <span class="font-semibold">Free</span>{" "}
                  </div>
                </div>
                <div class="flex justify-between items-center mt-5 flex-wrap">
                  <div>
                    <h1 class="md:text-2xl text-lg">
                      Pink Knitted Textured Trouser
                    </h1>
                    <p class="text-base">Size : 10</p>
                    <p class="text-base">Color : Black</p>
                  </div>
                  <div>
                    <p class="md:text-2xl text-lg text-[#E60028] font-bold text-right">
                      SAR 60
                    </p>
                    <p class="md:text-base text-sm    line-through text-right">
                      SAR 110
                    </p>
                  </div>
                </div>

                <div class="flex justify-between items-center mt-5 flex-wrap">
                  <p class="text-[#E60028] text-sm">Last Item!</p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 gap-3 border-b py-4 border-[#C8C8C8]">
              <div class="col-span-3 m-auto">
                <img
                  src={pro1}
                  class="w-full md:h-[255px] h-[120px] object-cover"
                  alt=""
                />
              </div>
              <div class="col-span-9">
                <div class="flex justify-between items-center flex-wrap">
                  <div class="bg-[#FEA50A] mt-5 rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                    Buy 1 Get 1 <span class="font-semibold">Free</span>{" "}
                  </div>
                </div>
                <div class="flex justify-between items-center mt-5 flex-wrap">
                  <div>
                    <h1 class="md:text-2xl text-lg">
                      Pink Knitted Textured Trouser
                    </h1>
                    <p class="text-base">Size : 10</p>
                    <p class="text-base">Color : Black</p>
                  </div>
                  <div>
                    <p class="md:text-2xl text-lg text-[#E60028] font-bold text-right">
                      SAR 60
                    </p>
                    <p class="md:text-base text-sm    line-through text-right">
                      SAR 110
                    </p>
                  </div>
                </div>

                <div class="flex justify-between items-center mt-5 flex-wrap">
                  <p class="text-[#E60028] text-sm">Last Item!</p>
                </div>
              </div>
            </div>

            <div class="flex justify-end items-center mt-8">
              <img class="w-[24px] mr-2" src={Share} alt="" />
              <a href="" class="border-b border-black text-sm">
                {" "}
                Share your cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
