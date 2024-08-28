// Import Swiper React components
import "./Slider.scss";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import {
  EffectCoverflow,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Slider = ({ slides, id }) => {
  return (
    <Swiper
      spaceBetween={20}
      id={id}
      className="slider"
      modules={[Navigation, Pagination, EffectCoverflow, Keyboard]}
      grabCursor={true}
      loop={true}
      slidesPerView={"auto"}
      effect="coverflow"
      breakpoints={{
        320: {
          effect: "slide",
        },
        1020: {
          effect: "coverflow",
        },
      }}
      keyboard={{
        enabled: true,
        onlyInViewport: false,
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 420,
        depth: 120,
        modifier: 1.2,
        slideShadows: false,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="slide">
          <img
            className="slide__image"
            src={slide.url}
            alt="Examples of website platform statistics"
          />
        </SwiperSlide>
      ))}

      <div className="swiper-pagination" />
    </Swiper>
  );
};
