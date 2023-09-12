// testimonial data
const testimonialData = [
    {
      image: '/t-avt-1.png',
      name: 'Anne Smith',
      position: 'Customer',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
      image: '/t-avt-2.png',
      name: 'Jane Doe',
      position: 'Customer',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
      image: '/t-avt-3.png',
      name: 'Jhon Doe',
      position: 'Customer',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
  ];

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

import { Pagination } from "swiper";

import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16" >
              <div className="w-full max-w-[300px] flex flex-col xl:first-letter:justify-center items-center relative mx-auto xl:mx-0" >
                <div className="flex flex-col justify-center text-center">
                  <div>
                    <Image src={person.image} width={100} height={100} alt="" className="" />
                  </div>
                  <div>name</div>
                  <div>position</div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text6xl text-white/20 mx-auto md:mx-0" /> 
                  </div>
                  <div className="xl:text-lg text-center md:text-left" >{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
