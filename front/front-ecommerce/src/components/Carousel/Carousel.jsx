/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { categories } from "./categories";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import 'swiper/css/autoplay';

import arrowLeft from "/images/arrow-left.svg";
import arrowRight from "/images/arrow-right.svg";


function Carousel() {


  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]}
      navigation={{
        prevEl: ".button-prev",
        nextEl: ".button-next",
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      // autoplay={{
      //   delay: 1000,
      //   disableOnInteraction: false,
      // }}
      speed={1000}
      slidesPerView={"auto"}
      centeredSlides
      effect={"coverflow"}
      // coverflowEffect={{
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100, 
      //   modifier: 1,
      //   slideShadows: true,
      // }}
    >
      {/* HAY QUE PROGRAMAR EL LINK DE LAS IMAGENES */}
      {/* {cards.map(({ image}) => ( */}
      {categories.map(({ category, image}, index) => (
        <SwiperSlide key={index} className="slide-inner">
         
          <a href="">
             <img src={image} alt=""/>
             <p>{category}</p>   
          </a>

        </SwiperSlide>
      ))}
      <div className="button-prev">
        <img src={arrowLeft} alt="Left" />
      </div>
      <div className="button-next">
        <img src={arrowRight} alt="Right" />
      </div>
    </Swiper>
  );
}

export default Carousel;
