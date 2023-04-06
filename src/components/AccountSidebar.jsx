import React from 'react'
import Profile from '../assets/images/icons/Profile.svg'
import Left from '../assets/images/icons/Left.svg'
import Orders from '../assets/images/icons/Orders.svg'
import Return from '../assets/images/icons/Return.svg'
import Defualt from '../assets/images/icons/Defualt.svg'
import Loyalty from '../assets/images/icons/Loyalty.svg'
import Transaction from '../assets/images/icons/Transaction History.svg'
import StoreCredit from '../assets/images/icons/Store Credit.svg'
import AddressBook from '../assets/images/icons/Address Book.svg'
import Preferences from '../assets/images/icons/Preferences.svg'
 

export default function AccountSidebar() {
  return (
    <div>
        <div class="max-w-[1320px]  mx-auto p-4">
            <div class="grid grid-cols-12 gap-6">
                <div class="md:col-span-3 col-span-12 ">
                    <div>
                        <h1 class="text-[32px]">My Account</h1>
                        <a href=""
                            class="border border-[#C8C8C8] w-full my-5 rounded-[10px] px-4 py-3 h-[56px] flex justify-between items-center">
                            <div class="flex items-center">
                                <img class="w-[28px] h-[28px]" src= {Profile} alt="" />
                                <p class="mx-2 font-medium text-sm">Profile</p>
                            </div>
                            <img class="w-[16px] h-[16px]" src={Left} alt="" />
                        </a>
                        <a href=""
                            class="border border-[#C8C8C8] w-full my-5 rounded-[10px] px-4 py-3 h-[56px] flex justify-between items-center">
                            <div class="flex items-center">
                                <img class="w-[28px] h-[28px]" src={Orders} alt="" />
                                <p class="mx-2 font-medium text-sm">Orders</p>
                            </div>
                            <img class="w-[16px] h-[16px]" src={Left} alt="" />
                        </a>
                        <a href=""
                            class="border border-[#C8C8C8] w-full my-5 rounded-[10px] px-4 py-3 h-[56px] flex justify-between items-center">
                            <div class="flex items-center">
                                <img class="w-[28px] h-[28px]" src= {Return} alt="" />
                                <p class="mx-2 font-medium text-sm">Returns</p>
                            </div>
                            <img class="w-[16px] h-[16px]" src={Left} alt="" />
                        </a>
                        <a href=""
                            class="border border-[#C8C8C8] w-full my-5 rounded-[10px] px-4 py-3 h-[56px] flex justify-between items-center">
                            <div class="flex items-center">
                                <img class="w-[28px] h-[28px]" src= {Defualt} alt="" />
                                <p class="mx-2 font-medium text-sm">Wishlist</p>
                            </div>
                            <img class="w-[16px] h-[16px]" src={Left} alt="" />
                        </a>
                        <a href=""
                            class="border border-[#C8C8C8] w-full my-5 rounded-[10px] px-4 py-3 h-[56px] flex justify-between items-center">
                            <div class="flex items-center">
                                <img class="w-[28px] h-[28px]" src= {Loyalty} alt="" />
                                <p class="mx-2 font-medium text-sm">RT Loyalty</p>
                            </div>
                            <img class="w-[16px] h-[16px]" src={Left} alt="" />
                        </a>
                        <a href=""
                            class="border border-[#C8C8C8] w-full my-5 rounded-[10px] px-4 py-3 h-[56px] flex justify-between items-center">
                            <div class="flex items-center">
                                <img class="w-[28px] h-[28px]" src= {Transaction} alt="" />
                                <p class="mx-2 font-medium text-sm">Transaction history</p>
                            </div>
                            <img class="w-[16px] h-[16px]" src={Left} alt="" />
                        </a>
                        <a href=""
                            class="border border-[#C8C8C8] w-full my-5 rounded-[10px] px-4 py-3 h-[56px] flex justify-between items-center">
                            <div class="flex items-center">
                                <img class="w-[28px] h-[28px]" src= {StoreCredit} alt="" />
                                <p class="mx-2 font-medium text-sm">Store credit</p>
                            </div>
                            <img class="w-[16px] h-[16px]" src={Left} alt="" />
                        </a>
                        <h1 class="text-[32px]">Settings</h1>
                        <a href=""
                            class="border border-[#C8C8C8] bg-[#F4F4F4] w-full my-5 rounded-[10px] px-4 py-3 h-[56px] flex justify-between items-center">
                            <div class="flex items-center">
                                <img class="w-[28px] h-[28px]" src= {AddressBook} alt="" />
                                <p class="mx-2 font-medium text-sm">Address book</p>
                            </div>
                            <img class="w-[16px] h-[16px]" src={Left} alt="" />
                        </a>
                        <a href=""
                            class="border border-[#C8C8C8] w-full my-5 rounded-[10px] px-4 py-3 h-[56px] flex justify-between items-center">
                            <div class="flex items-center">
                                <img class="w-[28px] h-[28px]" src= {Preferences}  alt="" />
                                <p class="mx-2 font-medium text-sm">Notifications</p>
                            </div>
                            <img class="w-[16px] h-[16px]" src={Left} alt="" />
                        </a>







                    </div>
                </div>
                <div class="  md:col-span-9 col-span-12">

                     

                    
                </div>
            </div>
        </div>
    </div>
  )
}
