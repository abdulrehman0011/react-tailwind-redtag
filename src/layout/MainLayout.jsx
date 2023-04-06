import React, { Children } from 'react'
import Header from "../components/Header";
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
export default function MainLayout({children}) {
  return (
    <div>
      <Header></Header>
      <div>{children}</div>      
    <NewsLetter></NewsLetter>
     <Footer></Footer>
    </div>
  )
}
