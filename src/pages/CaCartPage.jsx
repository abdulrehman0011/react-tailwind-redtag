import React from 'react'
import Cart from "../components/Cart";
import Slider2 from '../components/Slider2'
import LatestSlider from '../components/LatestSlider'
import MainLayout from '../layout/MainLayout'
export default function CaCartPage() {
  return (
    <>
      <MainLayout>
        <Cart></Cart>
        <Slider2></Slider2>
        <LatestSlider></LatestSlider>
     </MainLayout>  
    </>
  )
}
