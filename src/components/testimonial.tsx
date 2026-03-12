"use client";
import Image from "next/image";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export const testimonialData = [
  {
    id: 1,
    name: "Ravi K.",
    role: "Corporate Training Manager",
    image: "/student21.jpg",
    quote:
      "We needed a structured English training solution for our teams. The platform made it easy to track progress and deliver consistent learning across batches.",
  },
  {
    id: 2,
    name: "Ananya R.",
    role: "College Student",
    image: "/student22.jpg",
    quote:
      "Speaking English confidently was my biggest challenge. The AI practice and live classes helped me improve without feeling judged, and I can clearly see the progress.",
  },
  {
    id: 3,
    name: "Arjun P.",
    role: "Working Professional",
    image: "/student23.jpg",
    quote:
      "I liked that I could practice anytime with the AI tutor and still attend live classes for real conversations. It fits perfectly into a busy schedule.",
  },
  {
    id: 4,
    name: "Dr. Meera S.",
    role: "Academic Coordinator",
    image: "/student24.jpg",
    quote:
      "The combination of self-paced modules and live sessions works extremely well for students. It supports classroom teaching without adding extra pressure.",
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      className="relative mx-auto flex w-full flex-col items-center bg-[#F8FEFD] overflow-hidden px-4 max-w-[1440px] md:px-6"
      style={{ width: "100%", maxWidth: "1440px", minHeight: "614px" }}
    >
      <div className="relative z-20 mt-14 md:mt-0 md:absolute md:top-14 flex flex-col items-center text-center w-full max-w-[630px] max-h-[170px]">
        <div
          className="inline-flex items-center justify-center border-gray-200 bg-white shadow-sm mb-4 border"
          style={{ width: "128px", height: "40px", borderRadius: "20px" }}
        >
          <div className="flex items-center justify-center bg-[#CCFF00] rounded-full w-6 h-6 mr-2">
            <Image
              src="/testimonial.svg"
              alt="Testimonial"
              width={24}
              height={24}
            />
          </div>
          <span className="text-[14px] font-medium text-gray-600">
            Testimonials
          </span>
        </div>

        <h2
          className="font-semibold text-[#111827] mb-4 w-full max-w-[579px] text-[40px]"
          style={{ fontSize: "clamp(24px, 5vw, 32px)", lineHeight: "1.2" }}
        >
          What <span className="text-[#FF8A00]">Learners</span> and{" "}
          <span className="text-[#2D5A54]">Educators</span> Say
        </h2>

        <p
          className="text-[#6B7280] w-full max-w-[630px] text-[16px]"
          style={{ fontSize: "16px", lineHeight: "26px" }}
        >
          Real experiences from students, educators, and training teams
          using the platform to improve English communication.
        </p>
      </div>

      <div className="pt-20 md:pt-70 relative w-full overflow-hidden bg-[#F8FEFD] ">
        <div className="max-w-[1440px] mx-auto relative h-auto md:h-[304px] z-50">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".btn-next",
              prevEl: ".btn-prev",
            }}
            onSlideChange={(swiper) => setActiveIdx(swiper.realIndex)}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={20}
            breakpoints={{
              768: { spaceBetween: 40 },
            }}
            className="h-full overflow-visible px-4 "
          >
            {testimonialData.map((data, index) => {
              const isActive = index === activeIdx;
              const verticalShift =
                index < activeIdx
                  ? "translate-y-30" // Slides on the left go down
                  : index > activeIdx
                    ? "-translate-y-0" // Slides on the right go up
                    : "translate-y-0";
              return (
                <SwiperSlide
                  key={data.id}
                  className={`duration-200  ${verticalShift}`}
                  style={{
                    width: isActive ? "min(92vw, 610px)" : "200px",
                  }}
                >
                  <div
                    className={`duration-200 flex flex-col md:flex-row items-center md:items-start ${isActive
                      ? "bg-[#F7FFFA] shadow-lg border border-[#E6E6E6]"
                      : "bg-transparent"
                      }`}
                    style={{
                      borderRadius: "24px",
                      width: "100%",
                      height: isActive ? "auto" : "272px",
                      minHeight: isActive ? "272px" : "auto",
                      padding: isActive ? "16px" : "0px",
                    }}
                  >
                    <div
                      className={`
       relative flex-shrink-0  rounded-[20px] overflow-hidden
       ${isActive
                          ? "w-full md:w-[200px] max-w-full md:max-w-[200px] h-[240px]"
                          : "w-[200px] h-[128px]"
                        }
     `}
                    >
                      <Image
                        src={data.image}
                        alt={data.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div
                      className={`flex flex-col justify-between  ${isActive
                        ? "opacity-100 translate-y-0 md:mt-0 md:ml-6 flex-1 w-full"
                        : "opacity-0 translate-y-4 h-0 overflow-hidden"
                        }`}
                      style={{ minHeight: isActive ? "200px" : "0" }}
                    >
                      {isActive && (
                        <>
                          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-4">
                            <div className="flex gap-1 mb-3">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className="relative w-4 h-4">
                                  <Image
                                    src="/star5.png"
                                    alt="Star"
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              ))}
                            </div>

                            <p className="text-[15px] md:text-[16px] leading-[24px] md:leading-[28px] text-[#111827] font-medium">
                              &ldquo;{data.quote}&rdquo;
                            </p>
                          </div>

                          <div className="mt-4 pt-4 border-t border-[#E6E6E6] w-full text-center md:text-left">
                            <h4 className="font-bold text-[16px] text-[#111827]">
                              {data.name}
                            </h4>
                            <p className="text-[12px] text-gray-500 tracking-wide">
                              {data.role}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="flex justify-center gap-4 mt-8 md:mt-0 pb-10">
            <button
              className="btn-prev relative md:absolute md:left-[10%] cursor-pointer transition-all lg:left-[15%] xl:left-[330px] md:top-[16px] md:-translate-y-1/2 z-20 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90 ">
              <Image
                src="/leftarrow.png"
                alt="Prev"
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </button>

            <button className="btn-next relative md:absolute md:right-[10%] cursor-pointer transition-all lg:right-[15%] xl:right-[330px] md:top-[270px] md:-translate-y-1/2 z-20 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90">
              <Image
                src="/rightarrow.png"
                alt="Next"
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
