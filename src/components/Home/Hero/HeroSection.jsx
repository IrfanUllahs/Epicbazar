import React from "react";
import Image1 from "/images/heroImages/clone.png";
import Image2 from "/images/heroImages/sale.png";
import Image3 from "/images/heroImages/women.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
function HeroSection() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <>
      <div className="bg-gray-200 h-[550px] relative overflow-hidden flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
        {/* container is here */}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-[60%] right-0 rounded-3xl rotate-45 "></div>
        <div className="container pt-[35px] px-2 ">
          {/* hero content section is here  */}
          <Slider {...settings}>
            {ImageList.map((value) => (
              <div key={value.id}>
                <div
                  className="flex  justify-center items-center flex-col sm:flex-row group
          "
                >
                  {/* // text contents are here */}
                  <div className="flex flex-col sm:gap-6   items-start sm:w-[50%]  order-2 sm:order-1">
                    <h1
                      className="text-3xl sm:text-6xl lg:text-7xl font-bold "
                      data-aos="zoom-out"
                    >
                      {value.title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-sm"
                    >
                      {value.description}
                    </p>
                    <button className="bg-secondary rounded-full sm:px-3 sm:py-2 px-1 hover:bg-primary ">
                      Click Here
                    </button>
                  </div>
                  {/* the image is here */}
                  <div
                    className=" flex relative order-1 sm:order-2 "
                    data-aos="zoom-in"
                    data-aos-once="true"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <img
                      src={value.img}
                      className=" w-[250px] h-[250px] sm:h-[500px] sm:w-[500px] object-contain mx-auto "
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
