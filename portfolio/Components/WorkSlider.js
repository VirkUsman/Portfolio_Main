// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Liaison Inc",
          path: "/Project1.png",
          link: "https://liaisonco.com/",
        },
        {
          title: "Sample Dinner Website",
          path: "/Project2.png",
          link: "https://mv-dinner-basic.netlify.app/",
        },
        {
          title: "New Project Soon",
          path: "/New_Project_Soon.png",
        },
        {
          title: "New Project Soon",
          path: "/New_Project_Soon.png",
        },
      ],
    },
    {
      images: [
        {
          title: "New Project Soon",
          path: "/New_Project_Soon.png",
        },
        {
          title: "New Project Soon",
          path: "/New_Project_Soon.png",
        },
        {
          title: "New Project Soon",
          path: "/New_Project_Soon.png",
        },
        {
          title: "New Project Soon",
          path: "/New_Project_Soon.png",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

import { Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                    <div className="flex items-center justify-center relative overflow-hidden group" key={index}>
                      <Image src={image.path} width={500} height={300} alt="" />

                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="delay-150">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                          <a className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-300" href={image.link} ><BsArrowRight /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
