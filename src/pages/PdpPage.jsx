import React from 'react'
import MainLayout from '../layout/MainLayout'
import Pdp from '../components/Pdp'
import Slider2 from '../components/Slider2'
import LatestSlider from '../components/LatestSlider'
import RatingPdp from '../components/RatingPdp'

export default function PdpPage() {
  return (
    <>
    <MainLayout> 
     <Pdp></Pdp> 
     <Slider2></Slider2>
        <LatestSlider></LatestSlider>
        <RatingPdp></RatingPdp>
        <LatestSlider></LatestSlider>
    </MainLayout>
      
    </>
  )
}
