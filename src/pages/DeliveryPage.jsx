import React from 'react'
import Delivery from "../components/Delivery";
import Slider2 from '../components/Slider2'
import LatestSlider from '../components/LatestSlider'
 
import MainLayout from '../layout/MainLayout'
export default function DeliveryPage() {
  return (
    <>
          <MainLayout>
       <Delivery></Delivery>
       <Slider2></Slider2>
       <LatestSlider></LatestSlider>
     </MainLayout>  
    </>
  )
}
