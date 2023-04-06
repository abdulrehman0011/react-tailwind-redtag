import React from 'react'
 
import Hero from '../components/Hero'
import LatestSlider from '../components/LatestSlider'
import DressBanner from '../components/DressBanner'
import GiftCard from '../components/GiftCard'
 
import SeeStyle from '../components/SeeStyle'
import CollectionShop from '../components/CollectionShop'

import MainLayout from '../layout/MainLayout'


export default function Home() {
  return (
    <>

    <MainLayout>
       <Hero></Hero>
    <LatestSlider></LatestSlider>
    <DressBanner></DressBanner>
    <SeeStyle></SeeStyle>
    <CollectionShop></CollectionShop>
    <GiftCard></GiftCard>
    </MainLayout>
    
    
    </>
  )
}
