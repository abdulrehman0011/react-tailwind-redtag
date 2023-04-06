import React, { useState } from "react";

import ShippingAvailed from "../assets/images/Free Shipping Availed.svg";
import pro1 from "../assets/images/plp/pro1.png";
import Offer1 from "../assets/images/Offer1.svg";
import StoreCredit from "../assets/images/Store Credit.svg";
import GiftCard from "../assets/images/Gift Card.svg";
import RedtagLoyalityLogo from "../assets/images/RedtagLoyalityLogo.png";
import Share from "../assets/images/Share.svg";
import tabby from "../assets/images/tabby logo.png";
import Apple from "../assets/images/cards/Apple pay.svg";
import card from "../assets/images/cards/card.png";
import Gpay from "../assets/images/cards/G pay.svg";
import Visa from "../assets/images/cards/Visa.svg";
import MasterCard from "../assets/images/cards/Master Card.svg";
 
 
 

export default function Cart() {

    const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

    function increment() {
      //setCount(prevCount => prevCount+=1);
      setCount(function (prevCount) {
        return (prevCount += 1);
      });
    }
  
    function decrement() {
        setCount(function (prevCount) {
          if (prevCount > 0) {
            return (prevCount -= 1); 
          } else {
            return (prevCount = 0);
          }
        });  }

  return (
    <>

<div className="App">

    </div>
       <div class="max-w-[1320px] mx-auto p-3">
            <div class=" bg-[#e5f2ea] py-10 flex justify-center items-center text-center">
                <img class="w-[40px]" src= {ShippingAvailed} alt="" />
                <h5 class="text-black  md:text-[20px] text-base font-bold">Congrats! You’ve earned free shipping</h5>
            </div>


            <div class="grid grid-cols-12 p-3 gap-6">
                <div class="lg:col-span-8 col-span-12">



                    <div class="grid grid-cols-12 gap-3 border-b py-4 border-[#C8C8C8]">
                        <div class="col-span-3 m-auto">
                            <img src={pro1} class="w-full md:h-[255px] h-[120px] object-cover"
                                alt="" />
                        </div>
                        <div class="col-span-9">
                            <div class="flex justify-between items-center flex-wrap">
                                <div class="bg-[#FEA50A] mt-5 rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                                    Buy 1 Get 1 <span class="font-semibold">Free</span> </div>
                                <span class=" text-lg"><i class="far fa-heart"></i></span>
                            </div>
                            <div class="flex justify-between items-center mt-5 flex-wrap">
                                <div>
                                    <h1 class="md:text-2xl text-lg">Pink Knitted Textured Trouser</h1>
                                    <p class="text-base">Size : 10</p>
                                    <p class="text-base">Color : Black</p>
                                </div>
                                <div>
                                    <p class="md:text-2xl text-lg text-[#E60028] font-bold text-right">SAR 60</p>
                                    <p class="md:text-base text-sm    line-through text-right">SAR 110</p>
                                </div>
                            </div>

                            <div class="flex justify-between items-center mt-5 flex-wrap">
                                <p class="text-[#E60028] text-sm">Last Item!</p>
                                <div class="flex justify-end items-center ">

                             


                                    <button
                                        class="button dec w-[40px] h-[40px] rounded-full border border-[#C8C8C8] flex justify-center items-center" onClick={decrement}>
                                        <i class="fas fa-minus"></i>
                                    </button>
                                    <input type="text" class="w-[30px] text-center outline-none text-base" value={count} />
                                    <button
                                        class="button inc  w-[40px] h-[40px] rounded-full border border-[#C8C8C8] flex justify-center items-center" onClick={increment}>
                                        <i class="fas fa-plus"></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-3 border-b py-4 border-[#C8C8C8]">
                        <div class="col-span-3 m-auto">
                            <img src={pro1} class="w-full md:h-[255px] h-[120px] object-cover"
                                alt="" />
                        </div>
                        <div class="col-span-9">
                            <div class="flex justify-between items-center flex-wrap">
                                <div class="bg-[#FEA50A] mt-5 rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                                    Buy 1 Get 1 <span class="font-semibold">Free</span> </div>
                                <span class=" text-lg"><i class="far fa-heart"></i></span>
                            </div>
                            <div class="flex justify-between items-center mt-5 flex-wrap">
                                <div>
                                    <h1 class="md:text-2xl text-lg">Pink Knitted Textured Trouser</h1>
                                    <p class="text-base">Size : 10</p>
                                    <p class="text-base">Color : Black</p>
                                </div>
                                <div>
                                    <p class="md:text-2xl text-lg text-[#E60028] font-bold text-right">SAR 60</p>
                                    <p class="md:text-base text-sm    line-through text-right">SAR 110</p>
                                </div>
                            </div>
                            <div class="flex justify-between items-center mt-5 flex-wrap">
                                <p class="text-[#E60028] text-sm"> </p>
                                <div class="flex justify-end items-center ">
                                  
                                <button
                                        class="button dec w-[40px] h-[40px] rounded-full border border-[#C8C8C8] flex justify-center items-center" onClick={decrement}>
                                        <i class="fas fa-minus"></i>
                                    </button>
                                    <input type="text" class="w-[30px] text-center outline-none text-base" value={count} />
                                    <button
                                        class="button inc  w-[40px] h-[40px] rounded-full border border-[#C8C8C8] flex justify-center items-center" onClick={increment}>
                                        <i class="fas fa-plus"></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="flex justify-end items-center mt-8">
                        <img class="w-[24px] mr-2" src= {Share} alt="" />
                         <a href="" class="border-b border-black text-sm"> Share your cart</a>
                    </div>
                   
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ">



                    <div class="  mt-3 h-fit my-3 p-[20px] bg-[#F4F4F4]  ">
                        <div class="flex justify-between items-center">
                            <div class="flex justify-start items-start">
                                <img class="mr-1" src= {Offer1} alt="" />
                                <div>
                                    <h5 class="text-base font-bold">OFFERS & PROMOTIONS</h5>
                                    <p class="text-sm  ">Select your offers</p>
                                </div>

                            </div>

                            <button
                                class="text-sm border-[#c8c8c8]   bg-white my-4 border px-5 py-3 hover:bg-black hover:text-white flex justify-center items-center font-bold rounded-full h-[48px] whitespace-nowrap">VIEW
                                OFFERS</button>
                        </div>
                    </div>

                    <div class="  mt-3 h-fit my-3 p-[20px] bg-[#F4F4F4]  ">
                        <div class="flex justify-start items-start">
                            <img class="mr-1" src= {StoreCredit} alt="" />
                            <div>
                                <h5 class="text-base font-bold">AVAILABLE STORE CREDIT</h5>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <input type="text " placeholder="AED 25.00"
                                class="w-full mr-2 bg-white rounded-xl h-[48px] outline-none border-[#c8c8c8] px-3"/>
                            <button
                                class="text-sm border-[#c8c8c8]  whitespace-nowrap bg-white my-4 border px-5 py-3 hover:bg-black hover:text-white flex justify-center items-center font-bold rounded-full h-[48px] ">VIEW
                                OFFERS</button>
                        </div>
                    </div>
                    <div class="  mt-3 h-fit my-3 p-[20px] bg-[#F4F4F4]  ">
                        <div class="flex justify-start items-start">
                            <img class="mr-1" src= {GiftCard} alt="" />
                            <div>
                                <h5 class="text-base font-bold">USE GIFT CARDS</h5>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <input type="text " placeholder="Enter Gift Card Code"
                                class="w-full mr-2 bg-white rounded-xl h-[48px] outline-none border-[#c8c8c8] px-3"/>
                            <button
                                class="text-sm border-[#c8c8c8]  whitespace-nowrap bg-white my-4 border px-5 py-3 hover:bg-black hover:text-white flex justify-center items-center font-bold rounded-full h-[48px] ">VIEW
                                OFFERS</button>
                        </div>
                    </div>



                    <div class="   h-fit my-3 p-[20px] mt-4 bg-[#F4F4F4]  ">
                        <img class="w-[151px]" src= {RedtagLoyalityLogo} alt="" />
                        <p class="text-base mt-3 font-semibold">Earn RT Points on each purchase.</p>
                        <p class="text-base mt-3  font-semibold">All you need to do is link your LOYALTY account to earn
                            points as you shop.</p>

                        <a href="" class="text-sm border-b mt-3 border-black">Learn more about LOYALTY</a>
                        <button
                            class="text-sm border-[#c8c8c8]   bg-white my-4 border min-w-[161px] hover:bg-black hover:text-white flex justify-center items-center font-bold rounded-full h-[48px] ">RETURNS</button>
                        <p class="text-sm  mt-3">Already have an account? <a href=""
                                class="text-sm border-b border-black">Login</a></p>
                    </div>
 
                    <div class="   h-fit my-3 p-[20px] mt-4 bg-[#F4F4F4]  ">
                        <div class="flex justify-center items-center text-center">
                            <img class=" w--[40px] " src ={tabby} alt="" />
                             <p class="md:text-sm text-xs  mx-1 ">Split in 4 payments of AED 260. No fees.</p>
                             <span class="border   border-black text-[8px]  rounded-full w-4 h-4  flex justify-center  items-center  "><i class="fas fa-info  "></i></span>
                        </div> 
                            <div class="  text-center flex justify-center items-center flex-col sm:px-6 mt-5">
                                <button type="submit" class="mt-4 inline h-[48px]    md:min-w-[300px] min-w-[100%]  rounded-3xl bg-black text-white text-sm"> CHECKOUT
                                   </button>
                              </div>

                              <div class="flex justify-center items-center text-center mt-3" >
                              <img class="md:w-[50px] mr-2 w-[40px] " src={Apple}  alt="" />
<img class="md:w-[50px] mr-2 w-[40px]" src={card}  alt="" />
<img class="md:w-[50px] mr-2 w-[40px]" src={Gpay}  alt="" />
<img class="md:w-[50px] mr-2 w-[40px]" src={Visa}  alt="" />
<img class="md:w-[50px] mr-2 w-[40px]" src={MasterCard}  alt="" />
                              </div>
                         
                    </div>



                    <div>
                        <h4 class="border-b border-[#C8C8C8]  py-4 text-xl font-bold" >Payment Details</h4>
                        <div class="flex justify-between items-center mt-3">
                            <span class="text-base font-medium">3x Charcoal 5-Pockets Slim Fit Jean</span>
                            <span class="text-base font-bold">AED 374.50</span>
                        </div>
                        <div class="flex justify-between items-center mt-3 border-b border-[#C8C8C8] py-4">
                            <span class="text-base font-medium">B2G1 Discount</span>
                            <span class="text-base font-bold">-AED 148.00</span>
                        </div>
                        <div class="flex justify-between items-center mt-3 border-b border-[#C8C8C8]  py-4">
                            <span class="text-base font-medium">Total Savings</span>
                            <span class="text-base font-bold">-AED 148.00</span>
                        </div>
                        <div class="flex justify-between items-center mt-3 border-b border-[#C8C8C8]  py-4">
                            <span class="text-base font-medium">VAT @ 5%</span>
                            <span class="text-base font-bold">AED 18.73</span>
                        </div>
                        <div class="flex justify-between items-center mt-3 border-b    py-4">
                            <h4 class="  text-xl font-bold" >TOTAL PAYABLE</h4>
                            <span class="text-base font-bold">AED 237.8</span>
                        </div>
                        <p class="text-base font-medium">You are 12.2 AED away from Free Shipping</p>
                        <p class="text-base font-medium">Shipping will be calculated during checkout.</p>
                    </div>














                </div>

            </div>















        </div>
    </>
  )
}
