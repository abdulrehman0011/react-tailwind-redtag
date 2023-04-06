import React from "react";
import RedtagLoyalityLogo from "../assets/images/RedtagLoyalityLogo.png";
import Offer from "../assets/images/Offer.svg";
import Rewards from "../assets/images/Rewards.svg";
import Bell from "../assets/images/Bell.svg";
import Gmail from "../assets/images/Gmail.svg";
import fblogin from "../assets/images/fblogin.svg";
import ContactFill from "../assets/images/Contact Fill.svg";
import ChatFill from "../assets/images/Chat Fill.svg";
import EmailFill from "../assets/images/Email Fill.svg";

export default function Login() {
  return (
    <>
      <div className="max-w-[1320px]  mx-auto md:p-9 p-6 pb-0-0">
        <div>
          <a href="" className="text-sm font-medium">
            Home /
          </a>
          <a href="" className="text-sm font-medium">
            {" "}
            Help & FAQ /
          </a>
          <span className="text-xs   font-light">CONTACT US</span>
        </div>
      </div>
      <section>
        <div className="max-w-[1320px] mx-auto p-3">
          <div className="md:grid grid-cols-3 gap-5">
            <div className="col-span-2 mb-3   md:p-6 p-3  ">
              <div className="md:max-w-[573px]">
                <h1 className="text-[32px] font-bold tracking-[2px] ">
                  Customer Log in
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  in mi mauris. Sed varius interdum quam, at convallis arcu.
                </p>
              </div>
              <div className=" mt-5 ">
                <form action="#" method="POST">
                  <div className=" ">
                    <div className="  ">
                      <div className="grid grid-cols-12 gap-6">
                        <div className="md:col-span-6 col-span-12  mt-4">
                          <div className="mt-4">
                            <label for=" " className="text-sm font-bold mb-2">
                              Email
                            </label>
                            <input
                              type="email"
                              className=" border w-full h-[50px] rounded-xl border-[#C8C8C8] px-4 outline-none"
                            />
                          </div>
                          <div className="   mt-4">
                            <label for=" " className="text-sm font-bold mb-2">
                              Password*
                            </label>
                            <input
                              type="password"
                              className=" border w-full h-[50px] rounded-xl border-[#C8C8C8] px-4 outline-none"
                            />
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between items-center">
                              <div className="mb-6 block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                  className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem]  appearance-none  border border-solid border-[#000] bg-white outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-black checked:bg-black checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-black checked:focus:bg-black checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white flex justify-center items-center   checked:focus:after:bg-transparent w-[24px] h-[24px]"
                                  type="checkbox"
                                  value=""
                                  id="checkboxDefault"
                                />
                                <label
                                  className="inline-block pl-[0.15rem] hover:cursor-pointer text-sm mt-1"
                                  for="checkboxDefault"
                                >
                                  Remember me
                                </label>
                              </div>
                              <a
                                href=""
                                className="text-sm font-medium border-b border-black"
                              >
                                Forgot password
                              </a>
                            </div>
                          </div>
                          <div className="    mt-4   ">
                            <button
                              type="submit"
                              className="mt-4  flex justify-center items-center h-[48px] min-w-[260px] rounded-3xl bg-black text-white text-sm"
                            >
                              CREATE ACCOUNT
                            </button>
                            <button
                              type="submit"
                              className="mt-4  flex justify-center items-center  h-[48px] min-w-[260px] rounded-3xl bg-transparent  text-black text-base"
                            >
                              OR
                            </button>
                            <button
                              type="submit"
                              className="mt-4  flex justify-center items-center  h-[48px] min-w-[260px] rounded-3xl bg-[#4C69A8] text-white text-sm"
                            >
                              <img
                                src={Gmail}
                                className="w-[25px] h-[25px] mx-1"
                                alt=""
                              />{" "}
                              CONTINUE WITH FACEBOOK
                            </button>
                            <button
                              type="submit"
                              className="mt-4  flex justify-center items-center  h-[48px] min-w-[260px] rounded-3xl bg-[#5688E5] text-white text-sm"
                            >
                              <img
                                src={fblogin}
                                className="w-[25px] h-[25px] mx-1"
                                alt=""
                              />{" "}
                              CONTINUE WITH GMAIL
                            </button>
                          </div>
                          <p className="text-sm mt-3">
                            Don’t have an account?{" "}
                            <a
                              href=""
                              className="text-sm border-b border-black"
                            >
                              Sign up
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-span-1  h-fit my-3 p-[30px] bg-[#F4F4F4]  ">
              <img className="w-[151px]" src={RedtagLoyalityLogo} alt="" />
              <p className="text-base mt-3 font-semibold">
                Earn RT Points on each purchase.
              </p>
              <p className="text-base mt-3  font-semibold">
                All you need to do is link your LOYALTY account to earn points
                as you shop.
              </p>

              <ul>
                <li className="flex items-center py-4 border-b border-[#C8C8C8]">
                  <img className="mr-5  h-6 w-6" src={Offer} alt="" />
                  <span className="text-base  font-semibold">
                    Get exclusive offers
                  </span>
                </li>
                <li className="flex items-center py-4 border-b border-[#C8C8C8]">
                  <img className="mr-5  h-6 w-6" src={Rewards} alt="" />
                  <span className="text-base  font-semibold">
                    Get exclusive offers
                  </span>
                </li>
                <li className="flex items-center py-4 border-b border-[#C8C8C8]">
                  <img className="mr-5 h-6 w-6" src={Bell} alt="" />
                  <span className="text-base  font-semibold">
                    Get exclusive offers
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="lg:col-start-4   lg:col-span-6 md:col-start-3   md:col-span-8 col-span-12">
              <form action="#" method="POST">
                <div className=" ">
                  <div className="  ">
                    <div className="grid md:grid-cols-6 col-span-12 gap-6">
                      <div className="col-span-3 ">
                        <a
                          href=""
                          className="border flex justify-between items-center w-full h-[50px] rounded-xl border-[#C8C8C8] px-4 outline-none "
                        >
                          <span>About</span>
                          <i className="fas fa-chevron-right text-lg "></i>
                        </a>
                      </div>
                      <div className="col-span-3 ">
                        <a
                          href=""
                          className="border flex justify-between items-center w-full h-[50px] rounded-xl border-[#C8C8C8] px-4 outline-none "
                        >
                          <span>FAQ's</span>
                          <i className="fas fa-chevron-right text-lg "></i>
                        </a>
                      </div>
                      <div className="col-span-3 ">
                        <a
                          href=""
                          className="border flex justify-between items-center w-full h-[50px] rounded-xl border-[#C8C8C8] px-4 outline-none "
                        >
                          <span>Terms & Conditions</span>
                          <i className="fas fa-chevron-right text-lg "></i>
                        </a>
                      </div>
                      <div className="col-span-3 ">
                        <a
                          href=""
                          className="border flex justify-between items-center w-full h-[50px] rounded-xl border-[#C8C8C8] px-4 outline-none "
                        >
                          <span>Privacy Policy</span>
                          <i className="fas fa-chevron-right text-lg "></i>
                        </a>
                      </div>
                    </div>

                    <div className="col-span-12 text-center">
                      <h2 className="text-[32px] font-bold mt-5">Contact Us</h2>
                      <p className="text-base mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed in mi mauris. Sed varius interdum quam, at convallis
                        arcu.
                      </p>
                      <div className="flex justify-center items-center mt-4">
                        <a href="" className="mx-3">
                          {" "}
                          <img
                            className="w-[50px] h-[50px]"
                            src={ContactFill}
                            alt=""
                          />
                        </a>
                        <a href="" className="mx-3">
                          <img
                            className="w-[50px] h-[50px]"
                            src={ChatFill}
                            alt=""
                          />{" "}
                        </a>
                        <a href="" className="mx-3">
                          {" "}
                          <img
                            className="w-[50px] h-[50px]"
                            src={EmailFill}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>

                    <div className="col-span-12 text-center">
                      <h2 className="text-[32px] font-bold mt-5">
                        Follow Us On
                      </h2>
                      <p className="text-base mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed in mi mauris. Sed varius interdum quam, at convallis
                        arcu.
                      </p>
                      <div className="flex justify-center items-center mt-4">
                        <a href="" className="text-2xl mx-3 text-black">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="text-2xl mx-3 text-black">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="text-2xl mx-3 text-black">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="text-2xl mx-3 text-black">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
