import React from 'react'
import CollectionShop from '../components/CollectionShop'
import LatestSlider from '../components/LatestSlider'
import PcpSlider from '../components/PcpSlider'
import VideoBg from '../components/VideoBg'

import MainLayout from '../layout/MainLayout'
export default function PcpPage() {
  return (
    <>
         <MainLayout>
         <PcpSlider></PcpSlider>
         <CollectionShop></CollectionShop>
         <VideoBg></VideoBg>
       <LatestSlider></LatestSlider>
        </MainLayout> 

  
    </>
  )
}
