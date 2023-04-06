import React from 'react'
import Bitmap from "../assets/images/Bitmap.jpg";

export default function Faq() {
  return (
    <>


<div class="max-w-[1320px]  mx-auto md:p-9 p-6 pb-0-0">
        <div>
            <a href="" class="text-sm font-medium">Home /</a>
            <a href="" class="text-sm font-medium"> Help & FAQ   /</a>
            <span class="text-xs   font-light">FAQ</span>
        </div>
    </div>



    <section>
        <div class="max-w-[1320px] mx-auto p-3">
            <img src= {Bitmap} class="object-cover w-full h-[221px]" alt=""/>
        </div>
    </section>


       <div class="max-w-[1320px] mx-auto p-3">

<div class="border-[#C8C8C8] border-b pb-3">
    <h1 class="font-bold text-[32px]">FAQ</h1>
</div>  
<div>
    <div id="accordionExample">
        <div
          class="  border-[#C8C8C8] border-b  bg-white  ">
          <h2 class="mb-0" id="headingOne">
            <button
              class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 text-left text-xl  text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none   dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black    dark:[&:not([data-te-collapse-collapsed])]:text-black  font-bold "
              type="button"
              data-te-collapse-init
              data-te-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              When will I recieve my order?
              <span
                class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#000000] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:hidden group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-black dark:group-[[data-te-collapse-collapsed]]:fill-white">
              <i class="fas fa-minus"></i>
              </span>

              <span
                class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] hidden fill-[#000000] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:block group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-black dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <i class="fas fa-plus"></i>
              </span>
              
            </button>
          </h2>
          <div
            id="collapseOne"
            class="!visible"
            data-te-collapse-item
            data-te-collapse-show
            aria-labelledby="headingOne"
            data-te-parent="#accordionExample">
            <div class="py-4 px-5">
                <p  class="text-base font-medium mt-2">Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem. Suspendisse bibendum ultricies hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus nec tellus sagittis interdum. Nulla imperdiet pellentesque quam, a dictum magna porttitor vitae.</p> <p  class="text-base font-medium mt-2">Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem. Suspendisse bibendum ultricies hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus nec tellus sagittis interdum. Nulla imperdiet pellentesque quam, a dictum magna porttitor vitae.
<br/><br/>
                    Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem. Suspendisse bibendum ultricies hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus nec tellus sagittis interdum. Nulla imperdiet pellentesque quam, a dictum magna porttitor vitae.</p>
            </div>
          </div>
        </div>
        <div
          class="border-[#C8C8C8] border-b  bg-white  ">
          <h2 class="mb-0" id="headingTwo">
            <button
              class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 text-left text-xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none   dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black    dark:[&:not([data-te-collapse-collapsed])]:text-black  font-bold "
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo">
              How do I cancel my order?
              <span
                class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#000000] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:hidden group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-black dark:group-[[data-te-collapse-collapsed]]:fill-white">
                 <i class="fas fa-minus"></i>
              </span>

              <span
                class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] hidden fill-[#000000] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:block group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-black dark:group-[[data-te-collapse-collapsed]]:fill-white">
               <i class="fas fa-plus"></i>
              </span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="!visible hidden"
            data-te-collapse-item
            aria-labelledby="headingTwo"
            data-te-parent="#accordionExample">
            <div class="py-4 px-5">
                <p  class="text-base font-medium mt-2">Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem. Suspendisse bibendum ultricies hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus nec tellus sagittis interdum. Nulla imperdiet pellentesque quam, a dictum magna porttitor vitae.</p> <p  class="text-base font-medium mt-2">Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem. Suspendisse bibendum ultricies hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus nec tellus sagittis interdum. Nulla imperdiet pellentesque quam, a dictum magna porttitor vitae.
                    <br/><br/>
                                                    Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem. Suspendisse bibendum ultricies hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus nec tellus sagittis interdum. Nulla imperdiet pellentesque quam, a dictum magna porttitor vitae.</p>
            </div>
          </div>
        </div>
        <div
          class=" border-[#C8C8C8] border-b ">
          <h2 class="accordion-header mb-0" id="headingThree">
            <button
              class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 text-left text-xl  text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none   dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black    dark:[&:not([data-te-collapse-collapsed])]:text-black  font-bold"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree">
              How do I create a return request?
              <span
                class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#000000] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:hidden group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-black dark:group-[[data-te-collapse-collapsed]]:fill-white">
               <i class="fas fa-minus"></i>
              </span>

              <span
                class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] hidden fill-[#000000] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:block group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-black dark:group-[[data-te-collapse-collapsed]]:fill-white">
                 <i class="fas fa-plus"></i>
              </span>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="!visible hidden"
            data-te-collapse-item
            aria-labelledby="headingThree"
            data-te-parent="#accordionExample">
            <div class="py-4 px-5">
                <p  class="text-base font-medium mt-2">Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem. Suspendisse bibendum ultricies hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus nec tellus sagittis interdum. Nulla imperdiet pellentesque quam, a dictum magna porttitor vitae.</p> <p  class="text-base font-medium mt-2">Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem. Suspendisse bibendum ultricies hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus nec tellus sagittis interdum. Nulla imperdiet pellentesque quam, a dictum magna porttitor vitae.
                    <br/><br/>
                                                    Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem. Suspendisse bibendum ultricies hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus nec tellus sagittis interdum. Nulla imperdiet pellentesque quam, a dictum magna porttitor vitae.</p>
            </div>
          </div>
        </div>
        <div
        class=" border-[#C8C8C8] border-b ">
        <h2 class="accordion-header mb-0" id="headingfour">
          <button
            class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 text-left text-xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none   dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black    dark:[&:not([data-te-collapse-collapsed])]:text-black  font-bold"
            type="button"
            data-te-collapse-init
            data-te-collapse-collapsed
            data-te-target="#collapsefour"
            aria-expanded="false"
            aria-controls="collapsefour">
            Where should I self-ship the returns?
            <span
              class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#000000] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:hidden group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-black dark:group-[[data-te-collapse-collapsed]]:fill-white">
             <i class="fas fa-minus"></i>
            </span>

            <span
              class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] hidden fill-[#000000] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:block group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-black dark:group-[[data-te-collapse-collapsed]]:fill-white">
               <i class="fas fa-plus"></i>
            </span>
          </button>
        </h2>
        <div
          id="collapsefour"
          class="!visible hidden"
          data-te-collapse-item
          aria-labelledby="headingfour"
          data-te-parent="#accordionExample">
          <div class="py-4 px-5">
            <p  class="text-base font-medium mt-2">Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem. Suspendisse bibendum ultricies hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus nec tellus sagittis interdum. Nulla imperdiet pellentesque quam, a dictum magna porttitor vitae.</p> <p  class="text-base font-medium mt-2">Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem. Suspendisse bibendum ultricies hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus nec tellus sagittis interdum. Nulla imperdiet pellentesque quam, a dictum magna porttitor vitae.
                <br/><br/>
                                                Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem. Suspendisse bibendum ultricies hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus nec tellus sagittis interdum. Nulla imperdiet pellentesque quam, a dictum magna porttitor vitae.</p>
          </div>
        </div>
      </div>
      <div
      class=" border-[#C8C8C8] border-b ">
      <h2 class="accordion-header mb-0" id="headingfive">
        <button
          class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 text-left text-xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none   dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black    dark:[&:not([data-te-collapse-collapsed])]:text-black  font-bold"
          type="button"
          data-te-collapse-init
          data-te-collapse-collapsed
          data-te-target="#collapsefive"
          aria-expanded="false"
          aria-controls="collapsefive">
          How do I cancel my order?
          <span
            class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#000000] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:hidden group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-black dark:group-[[data-te-collapse-collapsed]]:fill-white">
           <i class="fas fa-minus"></i>
          </span>

          <span
            class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] hidden fill-[#000000] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:block group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-black dark:group-[[data-te-collapse-collapsed]]:fill-white">
             <i class="fas fa-plus"></i>
          </span>
        </button>
      </h2>
      <div
        id="collapsefive"
        class="!visible hidden"
        data-te-collapse-item
        aria-labelledby="headingfive"
        data-te-parent="#accordionExample">
        <div class="py-4 px-5">
            <p  class="text-base font-medium mt-2">Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem. Suspendisse bibendum ultricies hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus nec tellus sagittis interdum. Nulla imperdiet pellentesque quam, a dictum magna porttitor vitae.</p> <p  class="text-base font-medium mt-2">Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem. Suspendisse bibendum ultricies hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus nec tellus sagittis interdum. Nulla imperdiet pellentesque quam, a dictum magna porttitor vitae.
                <br/><br/>
                                                Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem. Suspendisse bibendum ultricies hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus nec tellus sagittis interdum. Nulla imperdiet pellentesque quam, a dictum magna porttitor vitae.</p>
        </div>
      </div>
    </div>
      </div>
</div>












</div>
    </>
  )
}
