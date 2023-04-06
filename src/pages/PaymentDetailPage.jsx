import React from 'react'
import PaymentDetail from "../components/PaymentDetail";
import Slider2 from '../components/Slider2'
import LatestSlider from '../components/LatestSlider'
import MainLayout from '../layout/MainLayout'
export default function PaymentDetailPage() {
  return (
    <>
      <MainLayout>
        <PaymentDetail></PaymentDetail>
        <Slider2></Slider2>
        <LatestSlider></LatestSlider>
     </MainLayout>  
    </>
  )
}
