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

import image1 from "/images/image1.jpg";
import image2 from '/images/image2.jpg'
import image3 from '/images/image3.jpg'
import image4 from '/images/image4.jpg'

const cards = [
  {
    id: 1,
    title: "Producto 1",
    image: image4,
  },
  {
    id: 2,
    title: "Producto 2",
    image: image1,
  },
  {
    id: 3,
    title: "Producto 3",
    image: image3,
  },
  {
    id: 4,
    title: "Producto 1",
    image: image4,
  },
  {
    id: 5,
    title: "Producto 3",
    image: image3,
  },
  {
    id: 6,
    title: "Producto 2",
    image: image2,
  },
];


function Carousel() {

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
      {/* {cards.map(({ image}) => ( */}
      {cards.map(({image}, index) => (
        <SwiperSlide key={index} className="slide-inner">
          <a href="">
            <img src={image} alt="" />
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
