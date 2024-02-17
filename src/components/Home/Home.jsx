import React from "react";
import HeroSection from "./Hero/HeroSection";
import TopSelling from "./TopSellProducts/TopSelling";
import BestProducts from "./BestProducts/BestProducts";
import SaleOff from "./Saleoff/SaleOff";
import Testimonials from "./Testimonal/Testimonials";
// import AOS from "aos";
// import "aos/dist/aos.css";

function Home() {
  // React.useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 800,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //   });
  //   AOS.refresh();
  // }, []);
  return (
    <>
      <HeroSection />
      <TopSelling />
      <BestProducts />
      <SaleOff />
      <Testimonials />
    </>
  );
}

export default Home;
