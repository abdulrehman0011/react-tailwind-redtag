import React from 'react'

export default function NewsLetter() {
  return (
    <div>
         <section className="bg-[#FFE6E6] py-10">
    <div className=" max-w-[1320px] mx-auto p-4">
      <div className="w-[70%] mx-auto grid lg:grid-cols-2 md:grid-cols-2 gap-3">
        <div>
          <h3 className="text-2xl font-bold">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p className="text-base mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscingmod tempor
            incididunt.
          </p>
        </div>
        <div className="my-auto">
          <form action="" className="bg-white flex justify-between items-center rounded-3xl overflow-hidden">
            <input placeholder="Your email address" type="text" className="h-[48px] w-[100%] px-6 outline-none" />
            <a href=""
              className="h-[48px] lg:min-w-[160px] min-w-[100px] rounded-3xl bg-black text-white flex justify-center items-center text-center lg:text-sm">SUBSCRIBE</a>
          </form>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
