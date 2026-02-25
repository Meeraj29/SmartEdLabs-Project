"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  const pathname = usePathname();
  const _isOpene = false;
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Feature", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
  ];

  interface NavLink {
    label: string;
    href: string;
  }
  const morelinks: NavLink[] = [
    { label: "Become a Teacher", href: "/teacher" },
    { label: "Join Our Sales Team", href: "/sales" },
    { label: "Become A Affiliate", href: "/affiliate" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  const profiles = [
    "/profile1.jpg",
    "/profile2.jpg",
    "/profile3.jpg",
    "/profile5.jpg",
    "/profile6.jpg",
  ];
  const features = [
    {
      title: "Flexible Teaching Schedule",
      description:
        "Choose class timings that fit your availability and preferred workload, without fixed hours or rigid commitments.",
      dark: true,
    },
    {
      title: "Structured Curriculum",
      description:
        "Teach using well-designed lesson plans and learning frameworks aligned with learner levels and outcomes.",
      dark: false,
    },
    {
      title: "Motivated & Serious Learners",
      description:
        "Work with students who are committed to improving their English for academic, professional, and personal growth.",
      dark: true,
    },
    {
      title: "Reliable Teaching Platform",
      description:
        "Use a stable system for live classes, learner management, and progress tracking—no technical guesswork.",
      dark: false,
    },
    {
      title: "Fair Compensation",
      description:
        "Clear payment structure with timely payouts based on your teaching engagement.",
      dark: true,
    },
    {
      title: "Professional Growth",
      description:
        "Build your teaching profile, gain exposure to diverse learners, and grow within a structured education platform.",
      dark: false,
    },
  ];
  const testimonialData = [
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the menu if user clicks outside of it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const requirements = [
    {
      src: "/t1.png",
      text: "Bachelor's Degree Or Higher From A Recognized Institute",
    },
    {
      src: "/t2.png",
      text: "High Scores In TOEFL, IELTS, GRE, Or Certifications",
    },
    {
      src: "/t3.png",
      text: "Excellent Spoken And Written English Communication Skills",
    },
    {
      src: "/t4.png",
      text: "Strong Understanding Of English Up To Grade 7 Level",
    },
    {
      src: "/t5.png",
      text: "Reliable Internet Connection And A Suitable Teaching Setup",
    },
    {
      src: "/t6.png",
      text: "Comfortable Using Basic Apps, Video Tools, And Web Platforms",
    },
    {
      src: "/t7.png",
      text: "Willingness To Conduct A Demo Class For Evaluation And Parent Interaction",
    },
    {
      src: "/t8.png",
      text: "Professional Attitude, Punctuality, And Learner-Focused Mindset",
    },
    {
      src: "/t9.png",
      text: "Ability To Explain Concepts Clearly And Patiently To Learners",
    },
    {
      src: "/t10.png",
      text: "Prior Teaching Experience (Online Or Offline) Is Preferred",
    },
  ];
  const responsibilities = [
    "Conduct live English classes based on assigned learner levels",
    "Teach listening, speaking, reading, and writing skills effectively",
    "Encourage student participation and confident communication",
    "Provide clear feedback and correct language usage",
    "Track learner progress and maintain academic standards",
    "Communicate learning progress with learners and, when required, parents",
  ];
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden min-h-[578px] lg:h-[578px] bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg7.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-10 " />
        </div>

        <header className="w-full flex justify-center sticky top-0 z-50">
          <div className="w-full px-4 md:px-6 lg:px-[100px] h-[72px] lg:h-[96px] flex items-center justify-between">
            <div className="relative z-30 flex items-center gap-[12px]">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
              />
              <span
                className="text-black font-medium text-[18px] lg:text-[26px]"
                style={{ fontFamily: "Russo One" }}
              >
                SmartEdLabs
              </span>
            </div>

            <nav className="relative z-30 hidden lg:flex items-center px-4 py-2 rounded-full border border-gray-100 bg-white/80 backdrop-blur-md">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-6 py-2 rounded-full text-[14px] font-medium transition-all ${pathname === link.href
                    ? "bg-white shadow-md text-[#31564E]"
                    : "text-black hover:text-green-900"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div
                className="relative inline-block text-left"
                ref={dropdownRef}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center text-[14px] gap-1 px-4 py-2 text-gray-700 font-medium hover:text-emerald-800 transition-colors"
                >
                  More
                  <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* The Menu (Visible only when isOpen is true) */}
                {isOpen && (
                  <div className="absolute left-0 mt-2 w-72 bg-white rounded-[2rem] shadow-xl ring-1 ring-black/5 z-50 p-4">
                    <div className="flex flex-col gap-1">
                      {morelinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          className="px-5 py-3 text-[16px] text-gray-800 font-medium rounded-2xl transition-colors hover:bg-emerald-50 hover:text-emerald-900"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            <div
              className={`fixed inset-0 bg-white z-50 transition-transform duration-300 flex flex-col lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <div className="flex items-center p-6 border-b border-gray-100">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-black hover:text-[#31564E] transition-colors"
                ></button>
              </div>

              <nav className="flex flex-col gap-4 p-6 overflow-y-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)} // Close menu when clicking a link
                    className={`px-10 py-4 text-center text-xl font-semibold rounded-full border-2 transition-all 
        ${pathname === link.href
                        ? "bg-[#F7FFFA] border-[#31564E] text-[#31564E] shadow-md"
                        : "bg-white border-gray-100 text-black"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="flex flex-col items-center justify-center gap-4 w-full px-4 md:flex-row md:gap-6">
                  <button className="mt-4 md:mt-0  w-full max-w-[318px] h-[51px] flex items-center justify-center gap-[10px] rounded-full border-2 border-[#31564E] text-[#31564E] text-sm font-semibold cursor-pointer transition-all duration-150 active:scale-95 hover:bg-[#31564E] hover:text-white">
                    Book A Free Demo
                  </button>

                  <button className="w-full max-w-[318px] h-[51px] flex items-center justify-center gap-[10px] cursor-pointer transition-all duration-150 active:scale-95 rounded-full bg-black text-white text-[16px] font-semibold hover:bg-[#31564E]">
                    Register
                  </button>
                </div>
              </nav>
            </div>

            <div className=" relative z-30 flex items-center gap-3">
              <button className="hidden lg:block w-[190px] h-[51px] rounded-full border-2 border-[#31564E] text-[#31564E] text-sm font-semibold cursor-pointer transition-transform duration-150 active:scale-95 hover:bg-[#31564E] hover:text-white">
                Book A Free Demo
              </button>
              <Link
                href="/register"
                className="hidden sm:flex items-center justify-center w-[112px] h-[51px] cursor-pointer transition-transform duration-150 active:scale-95 rounded-full bg-black text-white text-sm font-semibold hover:bg-[#31564E]"
              >
                Register
              </Link>

              <button
                className="lg:hidden text-black p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </header>
        <nav className="ml-8 relative hidden md:flex items-center gap-[8px] px-4 lg:px-[100px] py-4 z-20">
          <a href="/" className="text-sm font-medium hover:text-blue-600">
            Home
          </a>
          <Image
            src="/mingcute_right-line.png"
            alt="Arrow"
            width={24}
            height={24}
          />
          <a
            href="/teacher"
            className="text-sm font-medium hover:text-blue-600"
          >
            Become a Teacher
          </a>
        </nav>

        <div className="relative z-20 flex flex-col max-w-[1030px] mx-auto items-center justify-center px-4 py-12 lg:py-0 flex-grow">
          <div className={`${inter.className} w-full text-center`}>
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] mt-10 md:mt-14 font-semibold font-inter text-black leading-tight px-2">
              Teach English Online. Inspire Learners Worldwide.
            </h1>
            <p className="text-[16px] md:text-[18px] font-normal text-gray-800 max-w-[885px] mt-4 mx-auto font-inter leading-tight md:leading-normal">
              Join a growing learning platform and help students build real
              communication skills through live, interactive English classes.
            </p>

            {/* Responsive Fix: 
        1. Changed h-[51px] to min-h-[51px] so it can expand vertically on mobile.
        2. Added md:w-auto to allow the container to fit the side-by-side buttons.
    */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-[16px] z-30 mt-8 md:mt-10 w-full max-w-[450px] md:max-w-none mx-auto min-h-[51px]">
              <button className="w-full md:w-auto px-8 py-3.5 bg-black text-white rounded-full font-semibold text-[16px] transition-all hover:bg-[#31564E] active:scale-95 shadow-lg">
                Apply as a Teacher
              </button>

              <button className="w-full md:w-auto px-8 py-3.5 border-2 border-[#31564E] text-[#31564E] rounded-full font-semibold text-[16px] transition-all hover:bg-[#31564E] hover:text-white active:scale-95 bg-white/50 backdrop-blur-sm">
                View Requirements
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white w-full relative max-w-[1440px] mx-auto overflow-hidden min-h-[600px] h-auto flex flex-col justify-center items-center py-12 px-6 md:px-12">
        <div className="w-full max-w-[1240px] mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-1 py-1.5 rounded-full border border-gray-200 bg-white mb-4">
            <Image src="/degree.svg" alt="Degree" width={24} height={24} />
            <span className="text-[16px] font-inter font-medium text-black px-2">
              Why Teach With Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-[32px] lg:text-[40px] font-inter font-semibold text-gray-900 leading-tight">
            Teaching Experience Built <br className="hidden sm:block" /> Around
            You
          </h2>

          {/* Subtitle */}
          <p className="text-gray-800 font-inter font-regular text-[16px] mx-auto mt-4 mb-12 md:mb-16 max-w-[630px]">
            We remove the operational friction so you can focus on what matters
            most—
            <br className="hidden lg:block" />
            delivering high-quality English instruction and supporting learner
            growth.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl text-left w-full max-w-[400px] min-h-[174px] transition-transform hover:scale-[1.02] cursor-default flex flex-col justify-start ${feature.dark
                  ? "bg-[#31564E] text-white"
                  : "bg-[#F8F8F8] text-gray-900 border border-[#E6E6E6]"
                  }`}
              >
                <h3
                  className={`text-[22px] md:text-[24px] font-inter font-semibold mb-2 ${feature.dark ? "text-white" : "text-[#345249]"
                    }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-[15px] md:text-[16px] font-inter font-regular ${feature.dark ? "text-gray-200" : "text-gray-600"
                    }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-screen w-full max-w-[1440px] mx-auto text-white flex flex-col items-center justify-center p-6 md:p-16 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0 w-full">
          <Image
            src="/meeting.jpg"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-[1240px] w-full flex flex-col items-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E6E6E6]/60 border-[1px] border-white/70 p-2 rounded-full mb-8">
            <Image src="/degree.svg" alt="Degree" width={24} height={24} />
            <span className="text-[10px] md:text-[16px] font-inter font-regular text-black">
              Who We're Looking For
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-[40px] font-semibold font-inter text-center mb-4 tracking-wide max-w-[902px]">
            Teaching Professionals
          </h1>

          {/* Combined Profile and Subtitle Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-8 max-w-[902px]">
            {/* Profile Avatars */}
            <div className="flex -space-x-2 md:-space-x-5 flex-shrink-0">
              {profiles.map((src, index) => (
                <div
                  key={index}
                  className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-black/20 overflow-hidden"
                >
                  <Image
                    src={src}
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <h2 className="text-xl md:text-3xl lg:text-[40px] font-semibold font-inter text-gray-200 text-center md:text-left">
              Committed to Quality English Education
            </h2>
          </div>

          {/* Paragraph below */}
          <p className="text-white text-center max-w-[902px] mx-auto mb-8 text-sm md:text-[16px] font-inter font-regular leading-relaxed tracking-wide">
            We're seeking qualified, confident English instructors who can
            deliver structured learning experiences and engage learners
            effectively in live sessions.
          </p>

          {/* Grid Section */}
          {/* Changed gap to be smaller on mobile and used mx-auto for centering */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1240px] justify-items-center">
            {requirements.map((item, index) => {
              const isSecondRow = index >= 4 && index <= 7;

              return (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-6 w-full max-w-[302px] rounded-2xl border-[1px] border-white/80 transition-all 
                        ${isSecondRow ? "lg:h-[152px]" : "lg:h-[126px]"} 
                        ${index === 8 ? "lg:col-start-2" : ""}
                        h-auto min-h-[100px] md:min-h-[126px] transition-transform hover:scale-[1.02] bg-black/10 backdrop-blur-sm`}
                >
                  <div className="relative flex-shrink-0 w-[32px] h-[32px] md:w-[38px] md:h-[38px] flex items-center justify-center">
                    <Image
                      src={item.src}
                      alt="Requirement icon"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <p className="text-sm md:text-[18px] font-inter leading-snug tracking-wide text-gray-100 font-medium">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Apply Now Button */}
          <button className="mt-10 text-[16px] bg-white text-[#31564E] font-inter font-medium w-[200px] h-[51px] rounded-full hover:bg-gray-200 transition-all shadow-xl hover:shadow-white/10 active:scale-95">
            Apply Now
          </button>
        </div>
      </section>

      <div className="w-full max-w-[1440px] mx-auto bg-black relative z-10">
        <section
          className={`${inter.className} mx-auto w-full max-w-[1440px] min-h-[637px] overflow-hidden bg-[#F3F3F3] flex items-center justify-center z-10`}
        >
          {/* Removed fixed ml-6 and updated gap for better mobile spacing */}
          <div className="px-4 sm:px-6 md:px-10 py-12 lg:py-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] max-w-[577px] mx-auto lg:w-[610px] lg:h-[564px] order-1 lg:order-1">
              <div className="absolute inset-0 bg-gray-200 rounded-[16px] overflow-hidden shadow-2xl">
                <Image
                  src="/study1.jpg"
                  alt="AI Tutor Presentation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col gap-6 w-full lg:max-w-[630px] lg:mr-16 order-2 lg:order-2">
              <div className="flex flex-col space-y-4 md:space-y-[14px]">
                <div className="flex items-center gap-2 px-2 py-1 bg-white border border-gray-200 rounded-full w-fit shadow-sm">
                  <Image
                    src="/degree.svg"
                    alt="Degree"
                    width={24}
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                  <span className="text-[12px] md:text-[16px] font-medium font-inter text-gray-900">
                    Responsibilities
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold leading-tight md:leading-[54px] font-inter text-gray-900">
                  Your Role as an English Instructor
                </h2>

                {/* Changed w-[575px] to max-w-[575px] so it shrinks on small screens */}
                <p className="text-[14px] md:text-[16px] text-gray-800 leading-relaxed font-inter w-full max-w-[575px]">
                  As an instructor, you will be responsible for delivering
                  high-quality English lessons while supporting learners through
                  structured, engaging, and outcome-focused teaching.
                </p>

                {/* Changed w-[575px] to max-w-[575px] */}
                <div className="space-y-4 md:space-y-[24px] mt-4 w-full max-w-[575px]">
                  {responsibilities.map((item, idx) => (
                    <div
                      key={idx}
                      className="pl-4 border-l-[2px] rounded-l-[6px] border-[#31564E] transition-colors"
                    >
                      <p className="text-gray-700 text-[14px] md:text-[16px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  width={16}
                  height={16}
                />
              </div>
              <span className="text-[14px] font-medium text-gray-600">
                Testimonials
              </span>
            </div>

            <h2
              className="font-semibold text-[#111827] mb-4 w-full max-w-[579px]"
              style={{ fontSize: "clamp(24px, 5vw, 32px)", lineHeight: "1.2" }}
            >
              What <span className="text-[#FF8A00]">Learners</span> and{" "}
              <span className="text-[#2D5A54]">Educators</span> Say
            </h2>

            <p
              className="text-[#6B7280] w-full max-w-[630px]"
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
                      className={` ${verticalShift}`}
                      style={{
                        width: isActive ? "min(92vw, 610px)" : "200px",
                      }}
                    >
                      <div
                        className={`relative flex flex-col md:flex-row items-center md:items-start  ${isActive
                          ? "bg-[#F7FFFA] shadow-lg border border-[#E5E7EB]"
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
                              <div className="flex flex-col items-center md:items-start text-center md:text-left">
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

                              <div className="mt-4 pt-4 border-t border-gray-100 w-full text-center md:text-left">
                                <h4 className="font-bold text-[16px] text-[#111827]">
                                  {data.name}
                                </h4>
                                <p className="text-[12px] text-gray-500 uppercase tracking-wide">
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
                <button className="btn-prev relative md:absolute md:left-[10%] cursor-pointer transition-all lg:left-[15%] xl:left-[347px] md:top-[16px] md:-translate-y-1/2 z-20 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90">
                  <Image
                    src="/leftarrow.png"
                    alt="Prev"
                    width={48}
                    height={48}
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                </button>

                <button className="btn-next relative md:absolute md:right-[10%] cursor-pointer transition-all lg:right-[15%] xl:right-[347px] md:top-[270px] md:-translate-y-1/2 z-20 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90">
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

        <section className="min-h-screen bg-white flex items-center justify-center min-h-[600px] p-4 md:p-6">
          <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            {/* Left Column: Info Cards */}
            <div className="flex flex-col gap-[14px] items-center lg:items-start">
              {/* Green Card */}
              <div className="bg-[#2D4F46] text-white p-8 w-full max-w-[404px] min-h-[280px] rounded-[16px] shadow-sm flex flex-col justify-center">
                <h1 className="text-[36px] md:text-[48px] font-inter font-bold mb-4">
                  Still Have Questions?
                </h1>
                <p className="text-gray-300 font-inter text-[16px]">
                  If you need more information before applying, our team is here
                  to help. Share your details and we’ll get back to you shortly.
                </p>
              </div>

              {/* White Card */}
              <div className="bg-white p-8 w-full max-w-[404px] min-h-[206px] rounded-[16px] border border-[#E6E6E6]">
                <h3 className="text-[#31564E] font-medium font-inter text-[20px] mb-4 tracking-wide border-b border-[#E6E6E6] pb-2">
                  Support & Help Expectations
                </h3>
                <p className="text-gray-500 text-[16px] mb-4">
                  Given the platform complexity (AI tutors, live classes,
                  payments), set expectations early.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[16px] font-inter text-black">
                    <Image src="/tick3.png" alt="tick" width={14} height={14} />
                    Email & dashboard-based support
                  </li>
                  <li className="flex items-center gap-3 text-[16px] font-inter text-black">
                    <Image src="/tick3.png" alt="tick" width={14} height={14} />
                    Live class issue escalation
                  </li>
                </ul>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2 bg-[#F2F2F2] p-6 md:p-10 w-full rounded-[16px] h-fit">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-inter text-black">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="p-4 rounded-[8px] w-full h-[52px] border-none bg-white focus:ring-2 focus:ring-[#2D4F46] outline-none"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-inter text-black">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your Email id"
                    className="p-4 rounded-[8px] w-full h-[52px] border-none bg-white focus:ring-2 focus:ring-[#2D4F46] outline-none"
                  />
                </div>

                {/* Enquiry Type */}
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-inter text-black">
                    Enquiry Type
                  </label>
                  <select className="p-2 px-4 rounded-[8px] w-full h-[52px] border-none focus:ring-2 focus:ring-[#2D4F46] outline-none bg-white text-gray-400">
                    <option>Select type</option>
                  </select>
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-inter text-black">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your Mobile number"
                    className="p-4 rounded-[8px] w-full h-[52px] border-none focus:ring-2 focus:ring-[#2D4F46] outline-none bg-white"
                  />
                </div>

                {/* Message Box */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[16px] font-inter text-black">
                    Message / Query
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Message"
                    className="p-4 rounded-[8px] border-none focus:ring-2 focus:ring-[#2D4F46] outline-none resize-none bg-white"
                  />
                  <p className="text-[14px] text-gray-500">
                    Our team typically responds within 24-48 working hours.*
                  </p>
                </div>

                {/* Submit */}
                <div className="md:col-span-2 flex justify-end mt-4">
                  <button
                    type="submit"
                    className="bg-black text-white w-full md:w-[170px] h-[51px] rounded-full font-semibold hover:bg-gray-800 transition-all active:scale-95"
                  >
                    Request Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="pb-10 py-12 px-4 md:px-10 font-sans max-w-[1440px] w-full bg-white">
          <div className=" mx-auto border border-gray-300 bg-[#E5E5E5] max-w-[1240px] rounded-[24px] p-6 md:p-10">
            <div className="bg-white rounded-[24px] p-6 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
              <div className="max-w-full lg:max-w-[316px] text-center lg:text-left">
                <h2 className="text-[24px] font-inter font-semibold text-gray-900 mb-2">
                  Stay Updated
                </h2>

                <p className="text-gray-500 text-[16px] font-inter font-medium">
                  Subscribe to get the latest lessons, updates and special
                  offers
                </p>
              </div>

              <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-6 py-4 rounded-full border border-gray-200 w-full lg:w-[280px] h-[51px] outline-none focus:ring-2 focus:ring-gray-100 transition-all"
                />

                <button className="bg-black text-white w-full cursor-pointer transition-all sm:w-[140px] h-[51px] rounded-full font-semibold hover:bg-gray-800 active:scale-95 transition-colors shrink-0">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12">
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image src="/logo.svg" alt="Logo" width={64} height={64} />
                  </div>

                  <h3 className="text-[26px] font-inter font-normal">
                    SmartEdLabs
                  </h3>
                </div>

                <p className="text-gray-600 text-[16px] font-inter font-normal mb-8 max-w-[363px] tracking-wide">
                  An AI-powered English learning platform helping students,
                  educators, and organizations build strong listening, speaking,
                  reading, and writing skills.
                </p>

                {/* Social Icons */}

                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  <div className=" group flex items-center justify-center rounded-full bg-transparent transition-all duration-300 cursor-pointer hover:bg-[#F2181C]">
                    <Image
                      src="/youtube.svg"
                      alt="Social"
                      width={48} // Smaller icon size inside the 48px circle looks more professional
                      height={48}
                      className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>

                  <div className=" group flex items-center justify-center w-[48px] h-[48px] rounded-full bg-transparent transition-all duration-300 cursor-pointer hover:bg-[#1877F2]">
                    <Image
                      src="/facebook.png"
                      alt="Social"
                      width={48}
                      height={48}
                      className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>

                  <div className=" group flex items-center justify-center w-[48px] h-[48px] rounded-full bg-transparent transition-all duration-300 cursor-pointer hover:bg-[#B8D7FF]">
                    <Image
                      src="/internet.png"
                      alt="Social"
                      width={48}
                      height={48}
                      className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>

                  <div className=" group flex items-center justify-center w-[48px] h-[48px] rounded-full bg-transparent transition-all duration-500 cursor-pointer hover:bg-[linear-gradient(149.81deg,#405DE6_-45.44%,#5B51D8_27.28%,#833AB4_63.64%,#A2389C_81.82%,#C23484_90.91%,#FD1D1D_100%)]">
                    <div className="relative w-[48px] h-[48px]">
                      <Image
                        src="/insta.png"
                        alt="Instagram"
                        fill
                        className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                      />
                    </div>
                  </div>

                  <div className=" group flex items-center justify-center w-[48px] h-[48px] rounded-full bg-transparent transition-all duration-300 cursor-pointer hover:bg-[#1877F2]">
                    <div className="relative w-[48px] h-[48px]">
                      <Image
                        src="/linkedin.png"
                        alt="Facebook"
                        fill
                        className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10 lg:pl-20 text-center sm:text-left ">
                <div>
                  <h4 className="font-inter font-medium text-[16px] mb-4">
                    Quick Links
                  </h4>

                  <ul className="space-y-3 text-[14px] font-inter font-normal text-gray-700">
                    <li className="hover:text-black cursor-pointer transition-colors">
                      <Link href="/" className="block w-full">
                        Home
                      </Link>
                    </li>

                    <li className="hover:text-black cursor-pointer transition-colors">
                      <Link href="/features" className="block w-full">
                        Features
                      </Link>
                    </li>

                    <li className="hover:text-black cursor-pointer transition-colors">
                      <Link href="/pricing" className="block w-full">
                        Pricing
                      </Link>
                    </li>

                    <li className="hover:text-black cursor-pointer transition-colors">
                      <Link href="/blogs" className="block w-full">
                        Blogs
                      </Link>
                    </li>

                    <li className="hover:text-black cursor-pointer transition-colors">
                      <Link href="/about" className="block w-full">
                        About Us
                      </Link>
                    </li>

                    <li className="hover:text-black cursor-pointer transition-colors">
                      <Link href="/contact" className="block w-full">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-inter font-medium text-[16px] mb-4">
                    Solutions
                  </h4>

                  <ul className="space-y-3 text-[14px] font-inter font-normal text-gray-800">
                    <li className="hover:text-black cursor-pointer transition-colors">
                      For Students
                    </li>

                    <li className="hover:text-black cursor-pointer transition-colors">
                      For Schools & Colleges
                    </li>

                    <li className="hover:text-black cursor-pointer transition-colors">
                      For Institutions
                    </li>

                    <li className="hover:text-black cursor-pointer transition-colors">
                      For Corporate Training
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-inter font-medium text-[16px] mb-4">
                    Resources
                  </h4>

                  <ul className="space-y-3 text-[14px] font-inter font-normal text-gray-800">
                    <li className="hover:text-black cursor-pointer transition-colors">
                      Help Center
                    </li>

                    <li className="hover:text-black cursor-pointer transition-colors">
                      User Guides
                    </li>

                    <li className="hover:text-black cursor-pointer transition-colors">
                      Terms of Service
                    </li>

                    <li className="hover:text-black cursor-pointer transition-colors">
                      Privacy Policy
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-8 text-center">
              <p className="text-[12px] text-gray-700 font-inter font-medium">
                Copyright 2025 SmartEdLabs. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
