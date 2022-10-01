import React from "react";
import "../Styles/home.css";
import BannerMain from "./BannerMain";
import Cards from "./Cards";
import Header from "./Header";
import Swipper from "./Swipper";
// import Whats from "./Whats";
import WhatsPng from "../images/whats.png";
import { useState } from "react";

export default function Home() {
const [fix, setFix] = useState(false);
  function setFixedSidebar(){
    if(window.scrollY>=1){
      setFix(true)
}else{
  setFix(false)
}
  }

  window.addEventListener("scroll", setFixedSidebar)


  return (
    <div>
      <Header />
      <BannerMain />
      <Swipper />
      <Cards />
      {/* <Whats /> */}
      <div className={fix ? ' whats-logo fixed' : 'whats-logo'}>
        <img src={WhatsPng} alt="" />
        </div>
      
    </div>
  );
}
