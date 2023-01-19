import React from "react";

import "./Testimonials.css";

// IMPORTING AVATARS FROM LINKS
import { testimonialsAvatars } from "../../contansts/link";

// SWIPERJS
// import Swiper core and required modules
import { Keyboard, Mousewheel, Autoplay, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Keyboard, Mousewheel, Autoplay, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        grabCursor={true}
        mousewheel={false}
        keyboard={{
          enabled: true,
        }}
        // loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {testimonialsAvatars.map(({ image, name, review, cmnt }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial min-h-[200px]">
              {/* <div className="client__avatar">
                <img src={image} alt="AVATAR" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small> */}
              <h5 className="text-[var(--color-light)]">{cmnt}</h5>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
