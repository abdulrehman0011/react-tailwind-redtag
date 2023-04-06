import React from 'react'
import pro1 from "../assets/images/plp/pro1.png";
import Share from "../assets/images/Share.svg";
import Confirmation from "../assets/images/icons/Circle Confirmation Tick.svg";
 
export default function PaymentDetail() {
  return (
    <>
        <div class="max-w-[1320px] mx-auto p-3"> 
<div class="grid grid-cols-12 p-3 gap-6">

<div class="lg:col-span-5  col-span-12 ">


<div>
    <div class="flex items-center justify-between my-4">
        <div class="flex items-start">
            <img class="w-[32px] h-[32px] mr-2"
                src= {Confirmation} alt=""/>
            <div>
                <p class=" text-2xl font-bold">CONTACT INFORMATION</p>
                <p class=" text-sm">alex_keane@yahoo.com</p>
            </div>
        </div>
        <a href="" class="text-sm border-b border-black">Change</a>
    </div>

    <div class="flex items-center justify-between my-4">
        <div class="flex items-start">
            <img class="w-[32px] h-[32px] mr-2"
                src={Confirmation} alt=""/>
            <div>
                <p class=" text-2xl font-bold">SHIP TO</p>
                <p class=" text-sm">Alex Keane</p>
                <p class=" text-sm">Emirates Hills, 507</p>
                <p class=" text-sm"> Lailak 2nd Street, Dubai</p>
            </div>
        </div>
        <a href="" class="text-sm border-b border-black">Change</a>
    </div>
    <div class="flex items-center justify-between my-4">
        <div class="flex items-start">
            <img class="w-[32px] h-[32px] mr-2"
                src= {Confirmation} alt=""/>
            <div>
                <p class=" text-2xl font-bold">DELIVERY METHOD</p>
                <p class=" text-sm">Inernational Standard Shiping (5-10
                    <br/> Business Day Transit) - AED 15</p>
            </div>
        </div>
        <a href="" class="text-sm border-b border-black">Change</a>
    </div>

    <ul class="border rounded-md border-[#C8C8C8] overflow-hidden ">
        <li class="p-5 border-b border-[#C8C8C8] bg-[#F4F4F4]">
            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]   ">
                <input
                    class="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-black checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-black checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[1] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-black checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                    type="radio" name="flexRadioDefault" id="radioDefault01" />
                <label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="radioDefault01">


                    <div class="ml-2">
                        <p class="text-base font-bold ">CREDIT CARD</p>
                        <p class="text-sm ">We accept all major credit cards</p>
                    </div>

                </label>
            </div>


            <form action="">
                <input type="text" placeholder="Card Number*"
                    class="w-full bg-white p-3 h-[48px] rounded-md border border-[#c8c8c8] my-3" />
                <input type="text" placeholder="Name on Card"
                    class="w-full bg-white p-3 h-[48px] rounded-md border border-[#c8c8c8] my-3" />
                <input type="text" placeholder="example@gmailcom"
                    class="w-full bg-white p-3 h-[48px] rounded-md border border-[#c8c8c8] my-3" />
                <input type="text" placeholder="CCV Number"
                    class="w-full bg-white p-3 h-[48px] rounded-md border border-[#c8c8c8] my-3" />
            </form>

        </li>
        <li class="p-5 border-b border-[#C8C8C8] ">
            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]   ">
                <input
                    class="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-black checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-black checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[1] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-black checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                    type="radio" name="flexRadioDefault" id="radioDefault01" />
                <label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="radioDefault01">


                    <div class="ml-2">
                        <p class="text-base font-bold ">CREDIT ON DELIVERY</p>


                    </div>
                </label>
            </div>

        </li>
        <li class="p-5 ">
            <div class="mb-[0.125rem] block min-h-[1.5rem]   pl-[1.5rem]">
                <input
                    class="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-black checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-black checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[1] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-black checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                    type="radio" name="flexRadioDefault" id="radioDefault01"/>
                <label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="radioDefault01">
                    <div class="flex items-start">

                        <div class="ml-2">
                            <p class="text-base font-bold ">BPNL</p>


                        </div></div>
                </label>
            </div>

        </li>
    </ul>



    <p class=" text-xl font-bold mt-4">BILLING ADDRESS</p>
    <p class=" text-base mb-4">Select the address that matched your card or payment method.</p>
    <ul class="border rounded-md border-[#C8C8C8] overflow-hidden ">
        <li class="p-5 border-b border-[#C8C8C8] bg-[#F4F4F4]">
            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]   ">
                <input
                    class="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-black checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-black checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[1] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-black checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                    type="radio" name="flexRadioDefault" id="radioDefault01" />
                <label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="radioDefault01">
                    <p class="text-base font-bold ">Same as shipping address</p>
                </label>
            </div>

        </li>
        <li class="p-5 ">
            <div class="mb-[0.125rem] block min-h-[1.5rem]   pl-[1.5rem]">
                <input
                    class="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-black checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-black checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[1] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-black checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                    type="radio" name="flexRadioDefault" id="radioDefault01" />
                <label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="radioDefault01">
                    <p class="text-base font-bold ">Use a diiferent billing address</p>

                </label>
            </div>

        </li>
    </ul>

    <div class="my-4 block min-h-[1.5rem] pl-[1.5rem]">
        <input
            class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem]  appearance-none  border border-solid border-[#000] bg-white outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-black checked:bg-black checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-black checked:focus:bg-black checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white flex justify-center items-center   checked:focus:after:bg-transparent w-[24px] h-[24px]"
            type="checkbox" value="" id="checkboxDefault" autocompleted=""/>
        <label class="inline-block pl-[0.15rem] hover:cursor-pointer text-sm mt-1"
            for="checkboxDefault">
            Save my information for a faster checkout
        </label>
    </div>



    <div class="  text-center flex justify-center items-center flex-col sm:px-6">
        <button type="submit"
            class="mt-4 inline h-[48px]  w-full rounded-3xl bg-black text-white text-sm">PAY NOW
        </button>

        <p class="text-sm text-[#9B9B9B] mt-5  text-left "> By submitting your order, you agree to
            our <a href="" class="text-black"> Terms of Service</a> , <a href=""
                class="text-black">Privacy Policy</a> and<a href="" class="text-black"> Return
                Policy</a></p>
    </div>
</div>
 
</div>
 <div class="lg:col-span-7 col-span-12">



<div class="grid grid-cols-12 gap-3 border-b py-4 border-[#C8C8C8]">
    <div class="col-span-3 m-auto">
        <img src={pro1} class="w-full md:h-[255px] h-[120px] object-cover"
            alt=""/>
    </div>
    <div class="col-span-9">
        <div class="flex justify-between items-center flex-wrap">
            <div class="bg-[#FEA50A] mt-5 rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                Buy 1 Get 1 <span class="font-semibold">Free</span> </div>

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

        </div>
    </div>
</div>
<div class="grid grid-cols-12 gap-3 border-b py-4 border-[#C8C8C8]">
    <div class="col-span-3 m-auto">
        <img src={pro1} class="w-full md:h-[255px] h-[120px] object-cover"
            alt=""/>
    </div>
    <div class="col-span-9">
        <div class="flex justify-between items-center flex-wrap">
            <div class="bg-[#FEA50A] mt-5 rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                Buy 1 Get 1 <span class="font-semibold">Free</span> </div>

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

        </div>
    </div>
</div>
<div class="grid grid-cols-12 gap-3 border-b py-4 border-[#C8C8C8]">
    <div class="col-span-3 m-auto">
        <img src={pro1} class="w-full md:h-[255px] h-[120px] object-cover"
            alt=""/>
    </div>
    <div class="col-span-9">
        <div class="flex justify-between items-center flex-wrap">
            <div class="bg-[#FEA50A] mt-5 rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                Buy 1 Get 1 <span class="font-semibold">Free</span> </div>

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

        </div>
    </div>
</div>
<div class="grid grid-cols-12 gap-3 border-b py-4 border-[#C8C8C8]">
    <div class="col-span-3 m-auto">
        <img src={pro1} class="w-full md:h-[255px] h-[120px] object-cover"
            alt=""/>
    </div>
    <div class="col-span-9">
        <div class="flex justify-between items-center flex-wrap">
            <div class="bg-[#FEA50A] mt-5 rounded-[5px] inline-block px-[16px] py-[2px] text-sm">
                Buy 1 Get 1 <span class="font-semibold">Free</span> </div>

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

        </div>
    </div>
</div>


<div class="flex justify-end items-center mt-8">
    <img class="w-[24px] mr-2" src= {Share} alt=""/>
    <a href="" class="border-b border-black text-sm"> Share your cart</a>
</div>

</div>

</div>
</div>



    </>
  )
}
