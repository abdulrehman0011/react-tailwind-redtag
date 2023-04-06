import React from 'react'
 
  import White from '../assets/images/White.svg'
  import saudiarabia from '../assets/images/saudi-arabia.png'
  import Facebook from '../assets/images/Facebook.svg'
  import Instagram from '../assets/images/Instagram.svg'
  import Pinterest from '../assets/images/Pinterest.svg'
  import Twitter from '../assets/images/Twitter.svg'
  import Youtube from '../assets/images/Youtube.svg'
export default function Footer() {
  return (
    <div> 
      <footer className="bg-black py-4 text-white">
    <div className="  max-w-[1320px] mx-auto p-4">
      <div className="grid lg:grid-cols-12 sm:grid-cols-1 gap-5 my-14">
        <div className="lg:col-span-8 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-5">
          <div className="  ">
            <ul>
              <li>
                <h5 className="text-lg border-b py-2 font-semibold">
                  Help & FAQ
                </h5>
              </li>
              <li className="py-3">
                <a href="" className="text-sm"> Consectetur Adipiscing</a>
              </li>
              <li className="py-3">
                <a href="" className="text-sm">Etiam Finibus</a>
              </li>
              <li className="py-3">
                <a href="" className="text-sm">Vestibulum Tristique</a>
              </li>
              <li className="py-3">
                <a href="" className="text-sm">Duis Imperdiet </a>
              </li>
              <li className="py-3">
                <a href="" className="text-sm">Etiam Finibus</a>
              </li>
              <li className="py-3">
                <a href="" className="text-sm">Vestibulum Tristique</a>
              </li>
            </ul>
          </div>
          <div className=" ">
            <ul>
              <li>
                <h5 className="text-lg border-b py-2 font-semibold">Loyalty</h5>
              </li>

              <li className="py-3">
                <a href="" className="text-sm">Consectetur Adipiscing</a>
              </li>

              <li className="py-3">
                <a href="" className="text-sm"> Etiam Finibus</a>
              </li>

              <li className="py-3">
                <a href="" className="text-sm">Vestibulum Tristique</a>
              </li>
            </ul>
          </div>
          <div className=" ">
            <ul>
              <li>
                <h5 className="text-lg border-b py-2 font-semibold">
                  Brand Promises
                </h5>
              </li>
              <li className="py-3">
                <a href=""> Consectetur Adipiscing</a>
              </li>
              <li className="py-3">
                <a href="" className="text-sm">Etiam Finibus</a>
              </li>
              <li className="py-3">
                <a href="" className="text-sm">Vestibulum Tristique</a>
              </li>
              <li className="py-3">
                <a href="" className="text-sm">Duis Imperdiet </a>
              </li>
            </ul>
          </div>
          <div className=" ">
            <ul>
              <li>
                <h5 className="text-lg border-b py-2 font-semibold">
                  Store Locator
                </h5>
              </li>
              <li className="py-3">
                <a href="" className="text-sm">Vestibulum Tristique</a>
              </li>
              <li className="py-3">
                <a href="" className="text-sm">Duis Imperdiet</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-4">
          <form className="w-full p-20">
            <label for=" " className="flex justify-end mb-3">العربية</label>
            <fieldset>
              <div className="text-black footer_select">
                <img src= {saudiarabia} alt="" />
                <select className=" " name="whatever" id="frm-whatever">
                  <option value="">Please choose&hellip;</option>
                  <option value="1">Item 1</option>
                  <option value="2">Item 2</option>
                  <option value="3">Item 3</option>
                </select>
              </div>
            </fieldset>
          </form>

          <div className="flex md:flex-nowrap flex-wrap">
            <div className="footer_select mr-2 mt-3">
              <p>CALL - 800-897-1924</p>
            </div>
            <div className="footer_select mr-2 mt-3">
              <p>CALL - 800-897-1924</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="border-b"></div>

      <div className="grid lg:grid-cols-2 my-6 mt-12">
        <div className="copy_content flex flex-wrap mt-3">
          <a href=""><img src= {White} alt="" /></a>
          <p className="ml-4">© 2021 REDTAG. All Rights Reserved.</p>
        </div>
        <div className="flex justify-end footer_social mt-3">
          <a href=""><img src= {Facebook} alt="" /></a>
          <a href=""><img src= {Instagram} alt="" /></a>
          <a href=""><img src= {Pinterest} alt="" /></a>
          <a href=""><img src= {Twitter} alt="" /></a>
          <a href=""><img src= {Youtube} alt="" /></a>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}
