// testimonial data
const testimonialData = [
  {
    image: "/Ali_Mehfooz.jpg",
    name: "Ali Mehfooz",
    position: "HR Manager - Liaison Co",
    message:
      "Not only was Usman work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It’s obvious he takes tremendous pride in his work, and I wouldn’t hesitate to recommend him.",
  },
  // {
  //   image: "/t-avt-22.png",
  //   name: "Frau Kalz - Schützenhof Deli",
  //   position: "Founder & General Manager",
  //   message:
  //     "I always found Maria hardworking and valuable member of the team.",
  // },
  // {
  //   image: "/Hassan_Raza.jpg",
  //   name: "Hassan Raza - Salman Shahzaib Enterprises",
  //   position: "Architect & Team Memeber",
  //   message:
  //     "Maria Virk is a brilliant and sharp minded personality. I have the fortune of working with Maria on a very regular basis. Every single project is done in a timely fashion and is delivered exactly as is outlined.",
  // },
];

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

import { Navigation, Pagination } from "swiper";

import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px] sm:h-[520px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              <div className="w-full max-w-[300px] flex flex-col xl:first-letter:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  <div className="mb-2 mx-auto">
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="text-lg">{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text6xl text-white/20 mx-auto md:mx-0" />
                </div>
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
