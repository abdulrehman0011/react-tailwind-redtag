import React from 'react'
import RedtagLoyalityLogo from '../assets/images/RedtagLoyalityLogo.png'
import Offer from '../assets/images/Offer.svg'
import Rewards from '../assets/images/Rewards.svg'
import Bell from '../assets/images/Bell.svg'

export default function SignUp() {
  return (
    <div>
        <div   className="max-w-[1320px] mx-auto p-3">

<div className="md:grid grid-cols-3 gap-5">
    <div className="col-span-2 my-3   md:p-6 p-3  "> 
        <div className="md:max-w-[573px]">
            <h1 className="text-[32px] font-bold tracking-[2px] ">CREATE YOUR NEW ACCOUNT</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in mi mauris. Sed varius
                interdum quam, at convallis arcu.</p>
        </div> 
        <div className=" mt-5 "> 
            <form action="#" method="POST">
                <div className=" ">
                    <div className="  ">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label for=" " className="text-sm font-bold mb-2">Email</label>
                                <input type="email"
                                    className=" border w-full h-[50px] rounded-xl border-[#C8C8C8] px-4 outline-none" />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label for=" " className="text-sm font-bold mb-2">Title*</label>
                                <select
                                    className="border w-full h-[50px] rounded-xl border-[#C8C8C8] px-4 outline-none ">
                                    <option> Mr.</option>
                                    <option>Mrs.</option>
                                </select>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label for=" " className="text-sm font-bold mb-2">First Name*</label>
                                <input type="text"
                                    className="border w-full h-[50px] rounded-xl border-[#C8C8C8] px-4 outline-none" />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label for=" " className="text-sm font-bold mb-2">Last Name*</label>
                                <input type="text"
                                    className="border w-full h-[50px] rounded-xl border-[#C8C8C8] px-4 outline-none" />
                            </div>


                            <div className="col-span-6 sm:col-span-3">
                                <label for=" " className="text-sm font-bold mb-2">Mobile Name*</label>
                                <div className="grid grid-cols-6 gap-6 items-end">
                                    <div className="col-span-6 sm:col-span-2">
                                        <select
                                            className="border w-full h-[50px] rounded-xl border-[#C8C8C8] px-4 outline-none ">
                                            <option selected>+971</option>
                                            <option>+971</option>
                                            <option>+971</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">

                                        <input type="text" placeholder="98876543"
                                            className="border w-full h-[50px] rounded-xl border-[#C8C8C8] px-4 outline-none" />
                                    </div>
                                </div>
                                <small className="text-[#3C3C41] text-sm mt-3">A 4 digit OTP will be sent via
                                    sms to verify your phone number!</small>

                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <div className="grid grid-cols-6 gap-6 items-end">
                                    <div className="col-span-2 sm:col-span-2">
                                        <label for=" " className="text-sm font-bold mb-2">Date of Birth</label>
                                        <input type="number" placeholder="09"
                                            className="border w-full h-[50px] rounded-xl border-[#C8C8C8] px-4 outline-none" />
                                    </div>

                                    <div className="col-span-2 sm:col-span-2">

                                        <input type="number" placeholder="09"
                                            className="border w-full h-[50px] rounded-xl border-[#C8C8C8] px-4 outline-none" />
                                    </div>
                                    <div className="col-span-2 sm:col-span-2">

                                        <input type="number" placeholder="1999"
                                            className="border w-full h-[50px] rounded-xl border-[#C8C8C8] px-4 outline-none" />
                                    </div>
                                </div>


                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label for=" " className="text-sm font-bold mb-2">Password*</label>
                                <input type="password" placeholder="********"
                                    className="border w-full h-[50px] rounded-xl border-[#C8C8C8] px-4 outline-none" />
                                <small className="text-[#3C3C41] text-sm mt-3">Your password must</small>
                            </div>


                        </div>
                    </div>
                    <div className="  text-center flex justify-center items-center flex-col sm:px-6">
                        <button type="submit"
                            className="mt-4 inline h-[48px] min-w-[260px] rounded-3xl bg-black text-white text-sm">CREATE
                            ACCOUNT</button>

                            <p className="text-sm text-[#9B9B9B] mt-5 text-center"> By submitting your order, you agree to our <a href="" className="text-black"> Terms of Service</a>  , <a href=""className="text-black">Privacy Policy</a> and<a href=""className="text-black" > Return Policy</a></p> 
                    </div>
                </div>
            </form> 
        </div> 

    </div>
    <div className="col-span-1  h-fit my-3 p-[30px] bg-[#F4F4F4]  ">
        <img className="w-[151px]" src= {RedtagLoyalityLogo} alt="" />
        <p className="text-base mt-3 font-semibold">Earn RT Points on each purchase.</p>
        <p className="text-base mt-3  font-semibold">All you need to do is link your LOYALTY account to earn
            points as you shop.</p>

        <ul>
            <li className="flex items-center py-4 border-b border-[#C8C8C8]">
                <img className="mr-5  h-6 w-6" src={Offer} alt="" />
                <span className="text-base  font-semibold">Get exclusive offers</span>
            </li>
            <li className="flex items-center py-4 border-b border-[#C8C8C8]">
                <img className="mr-5  h-6 w-6" src={Rewards} alt="" />
                <span className="text-base  font-semibold">Get exclusive offers</span>
            </li>
            <li className="flex items-center py-4 border-b border-[#C8C8C8]">
                <img className="mr-5 h-6 w-6" src= {Bell} alt="" />
                <span className="text-base  font-semibold">Get exclusive offers</span>
            </li>
        </ul> 
    </div> 
</div> 
</div>
    </div>
  )
}
