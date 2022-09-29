import React from "react";
import "../Styles/home.css";
import BannerMain from "./BannerMain";
import Cards from "./Cards";
import Header from "./Header";
import Swipper from "./Swipper";

export default function Home() {
  return (
    <div>
      <Header />
      <BannerMain />
      <Swipper />
      <Cards />
    </div>
  );
}
