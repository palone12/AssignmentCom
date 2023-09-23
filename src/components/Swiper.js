import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default ({ spaceBetween, slidesPerView }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className="h-[260px] w-[400px]" src="/Images/man.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[260px] w-[400px]" src="/Images/man2.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[260px] w-[400px]" src="/Images/man.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[260px] w-[400px]" src="/Images/man2.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[260px] w-[400px]" src="/Images/man.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[260px] w-[400px]" src="/Images/man2.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[260px] w-[400px]" src="/Images/man.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[260px] w-[400px]" src="/Images/man2.png" />
      </SwiperSlide>
    </Swiper>
  );
};
