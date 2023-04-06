import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
 
import * as te from 'tw-elements';
import Home from './pages/Home'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import TermandConditionPage from './pages/TermandConditionPage'
 
import PdpPage from './pages/PdpPage'
import PlpPage from './pages/PlpPage'
import PcpPage from './pages/PcpPage'
import FaqPage from './pages/FaqPage'
import MyAccount from './pages/MyAccount'
import CaCartPage from './pages/CaCartPage'
import DeliveryPage from './pages/DeliveryPage'
import ContactUsPage from './pages/ContactUsPage'
import PaymentDetailPage from './pages/PaymentDetailPage'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> ,
  },
  {
    path: "/signUp",
    element: <SignupPage /> ,
  },
  {
    path: "/login",
    element: <LoginPage /> ,
  },
  {
    path: "/termandcondition",
    element: <TermandConditionPage /> ,
  },
  {
    path: "/Pdp",
    element: <PdpPage /> ,
  },

    {
    path: "/plp",
    element: <PlpPage /> ,
  },
  {
    path: "/pcp",
    element: <PcpPage/> ,
  },
  {
    path: "/faq",
    element: <FaqPage/> ,
  },
  {
    path: "/myaccount",
    element: <MyAccount/> ,
  },
  {
    path: "/cart",
    element: <CaCartPage/> ,
  },
  {
    path: "/delivery",
    element: <DeliveryPage/> ,
  },
  {
    path: "/contactus",
    element: <ContactUsPage/> ,
  },
  {
    path: "/paymentdetail",
    element: <PaymentDetailPage/> ,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <RouterProvider router={router} />
  
   
   
);
 
