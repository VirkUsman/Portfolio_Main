import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

import { FreeMode, Pagination } from "swiper";

// icons
import {
  RxArrowTopRight,
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "Branding is the creative, strategic process of telling potential customers what your company is all about.",
  },
  // {
  //   icon: <RxPencil2 />,
  //   title: "Design",
  //   description:
  //     "The perfect harmony of beautiful imagery from texts, photos, cartoons, and videos and create a smooth user interface.",
  // },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Web development is the art and science of creating and maintaining websites that work on the internet.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description:
      "Copywriting is the act of writing text for the purpose of advertising and other forms of marketing.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Search engine optimization can help more members of your target audience discover your business online.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4" >{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              <div className="text-4xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
