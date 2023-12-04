/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import 'swiper/css/autoplay';

import arrowLeft from "/images/arrow-left.svg";
import arrowRight from "/images/arrow-right.svg";
import image1 from "/images/300x300.jpg";
import image2 from "/images/300x300.jpg";
import image3 from "/images/300x300.jpg";
import image4 from "/images/300x300.jpg";
import image5 from "/images/300x300.jpg";
import image6 from "/images/300x300.jpg";
import image7 from "/images/300x300.jpg";
import image8 from "/images/300x300.jpg";


function Carousel() {

const slides = [image1, image2, image3, image4, image5, image6, image7, image8];
  
  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
      navigation={{
        prevEl: ".button-prev",
        nextEl: ".button-next",
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      speed={1000}
      slidesPerView={"auto"}
      centeredSlides
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100, 
        modifier: 1,
        slideShadows: true,
      }}
    >
      {/* HAY QUE PROGRAMAR EL LINK DE LAS IMAGENES */}
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="slide-inner">
          <a href="">
            <img src={slide} alt="" />
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
