import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";
import "./Swiper.scss";
import { Navigation } from "swiper/modules";
import img1 from "../../assets/images/image-product-1.jpg";
import img2 from "../../assets/images/image-product-2.jpg";
import img3 from "../../assets/images/image-product-3.jpg";
import img4 from "../../assets/images/image-product-4.jpg";

export const ProductSwiper: React.FC = () => {
  return (
    <Swiper className="swiper" navigation={true} modules={[Navigation]}>
      <SwiperSlide>
        <img className="swiper__image" src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper__image" src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper__image" src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper__image" src={img4} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
