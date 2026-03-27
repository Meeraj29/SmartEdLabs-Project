"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Feature", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blogs", href: "/blogs" },
  { name: "About Us", href: "/about" },
];
const stakeholders = [
  "Individual language learners",
  "Language training institutes",
  "Schools and colleges",
  "Corporate training providers",
  "White-label education partners",
  "Platform administrators and instructors",
];
const profiles = [
  "/profile1.jpg",
  "/profile2.jpg",
  "/profile3.jpg",
  "/profile5.jpg",
  "/profile6.jpg",
];
export default function aboutus() {
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
  const [showMobileMore, setShowMobileMore] = useState(false);
  const _registerLinks: NavLink[] = [{ label: "Register", href: "/register" }];
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
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const philosophy = [
    {
      title: "Consistency",
      description: "Regular practice reinforced through structured modules",
      imageSrc: "/consis.png", // Replace with your image path
      alt: "World globe illustration",
    },
    {
      title: "Interaction",
      description: "Human instruction complemented by AI-guided feedback",
      imageSrc: "/inter.png", // Replace with your image path
      alt: "Graduation cap illustration",
    },
    {
      title: "Measurement",
      description: "Clear progress indicators and skill-wise evaluation",
      imageSrc: "/measu.png", // Replace with your image path
      alt: "Lightning bolt illustration",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Container: Changed h-auto for mobile to let content dictate height, fixed height for desktop */}
      <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden min-h-[500px] lg:h-[578px] flex flex-col">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg6.jpg"
            alt="Background"
            fill
            className="object-cover object-center" // Ensures image covers area without distorting
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-white/60" />
        </div>

        <Navbar />


        <nav className="hidden md:flex items-center gap-[8px] px-4 lg:px-[100px] py-4 z-20">
          <a href="/" className="text-sm font-medium hover:text-blue-600">
            Home
          </a>
          <Image
            src="/mingcute_right-line.png"
            alt="Arrow"
            width={24}
            height={24}
          />
          <a href="/about" className="text-sm font-medium hover:text-blue-600">
            About Us
          </a>
        </nav>

        <div className="relative z-20 flex flex-col max-w-[885px] mx-auto mt-30 items-center justify-center px-4 py-12 lg:py-0 flex-grow">
          <div className={`${inter.className}  w-full text-center`}>
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold font-inter text-black leading-normal tracking-tight">
              A Smarter Way to Learn, Teach, and Scale Languages
            </h1>
            <p className="text-[16px] md:text-[18px] font-normal text-gray-800 max-w-[885px] mt-4 mx-auto font-inter leading-relaxed tracking-tight">
              An interactive language learning platform designed to support
              self-paced study, AI-assisted practice,
              <br /> and live instruction—adaptable for individuals and
              institutions alike.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-[#F7FFFA] w-full relative  max-w-[1440px] mx-auto overflow-hidden min-h-[600px] h-auto  flex flex-col lg:flex-row justify-center items-center py-12 px-6 md:px-12 lg:gap-10">
        {/* LEFT SIDE: Image Collage Grid */}
        <div className="relative grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-[320px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[600px] items-center  mx-auto lg:mx-0">
          {/* Top Left: Tall Rounded Image */}
          {/* Reduced mt-40 to mt-10 on mobile to prevent huge whitespace */}
          <div className="relative w-full aspect-[234/318] mt-10 md:mt-40 top-[10px] md:top-[20px] rounded-t-[40px] md:rounded-t-[50px] rounded-bl-[40px] md:rounded-bl-[50px] overflow-hidden shadow-lg">
            <Image
              src="/students3.jpg"
              alt="Students"
              fill
              className="object-cover"
            />
          </div>

          {/* Top Right: Circular Image */}
          <div className="relative w-full aspect-square rounded-full md:bottom-[30px] sm:bottom-[10px] overflow-hidden border-2 md:border-4 border-[#727272] shadow-lg translate-y-4 md:translate-y-10 gap-y-4 md:gap-y-6">
            <Image
              src="/girl1.jpg"
              alt="Student"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Left: Quote Bubble */}
          {/* Adjusted bottom offset for mobile */}
          <div className="bg-[#D9FF66] w-full aspect-[251/109] bottom-[20px] md:bottom-[80px] sm:bottom-[100px] p-3 md:p-6 rounded-t-[25px] rounded-br-[25px] md:rounded-t-[40px] md:rounded-br-[40px] flex flex-col justify-center shadow-md relative">
            <div className="flex items-start gap-1 md:gap-4">
              <div className="shrink-0">
                <Image
                  src="/colan1.png"
                  alt="Quote Start"
                  width={20}
                  height={16}
                  className="w-3 md:w-6"
                />
              </div>
              <p className="text-[#000000] text-[10px] sm:text-[13px] md:text-[16px] font-inter font-medium leading-tight">
                Self-paced learning,
                <br />
                AI-guided practice,
                <br />
                Live instructor-led
              </p>
              <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4">
                <Image
                  src="/colan2.png"
                  alt="Quote End"
                  width={20}
                  height={16}
                  className="w-3 md:w-6"
                />
              </div>
            </div>
          </div>

          {/* Bottom Right: Square Network Image */}
          <div className="relative w-full aspect-[240/290] bottom-[20px] md:bottom-[80px] rounded-b-[40px] md:rounded-b-[50px] rounded-tr-[40px] md:rounded-tr-[50px] overflow-hidden shadow-lg -translate-y-4 md:-translate-y-8">
            <Image
              src="/connect.jpg"
              alt="Network"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Content Box */}
        <div className="relative mt-16 lg:mt-0 max-w-[630px] text-center lg:text-left">
          {/* Badge */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 px-1 py-1 rounded-full flex items-center gap-2 bg-white/50 shadow-sm border border-gray-100">
            <Image src="/degree.svg" alt="Degree" width={24} height={24} />
            <span className="text-sm md:text-base font-normal font-inter text-black whitespace-nowrap">
              Who We Are
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold font-inter text-black leading-tight mb-6">
            A Modern Language Learning Ecosystem, Built on Proven Foundations
          </h2>

          <p className="text-base md:text-[18px] font-normal font-inter text-black leading-relaxed">
            ILLP (Interactive Language Learning Platform) is a next-generation,
            web-based language education ecosystem designed to make language
            mastery accessible, measurable, and scalable. Grounded in
            time-tested language-learning principles and strengthened by
            responsible AI innovation, ILLP unifies self-paced learning,
            AI-guided practice, and live instructor-led classrooms into a
            single, cohesive platform.
          </p>
        </div>
      </section>

      <section className="relative w-full min-h-[600px] flex items-center overflow-hidden mx-auto max-w-[1440px] py-10 lg:py-0">
        {/* 1. FULL WIDTH BACKGROUND IMAGE */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/study.jpg"
            alt="Student working"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for mobile readability */}
          <div className="absolute inset-0 bg-black/40 lg:bg-transparent" />
        </div>

        {/* 2. OVERLAPPING CONTENT BOX */}
        {/* Added 'h-auto lg:h-[600px]' so it grows on mobile but stays fixed on desktop */}
        <div className="relative z-10 w-full max-w-[1440px] h-auto lg:max-h-[600px]  mx-auto px-4 md:px-6 lg:px-0">
          <div className="bg-[#345348] p-8 w-full lg:max-w-[813px] h-full p-8 md:p-8 lg:p-16 text-white shadow-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E6E6E6]/40 w-fit px-2 py-2 border border-[#E6E6E6] rounded-full mb-4 lg:mt-10 ">
              <Image src="/arrows.png" alt="Arrows" width={24} height={24} />
              <span className="text-[16px] font-normal font-inter text-white lg:text-black">
                Our Purpose
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[32px] font-inter font-semibold max-w-[630px] mb-4 ">
              Language is not just a skill; it is a foundation for education,
              employment, and global collaboration.
            </h2>

            {/* Description */}
            {/* Removed <br /> for mobile, kept exact max-w for desktop logic */}
            <p className="text-white/80 text-[16px] md:text-[18px] font-normal font-inter leading-relaxed mb-4  max-w-[600px] ">
              ILLP was created to bridge the gap between traditional classroom
              <br /> learning and digital convenience, enabling learners and
              institutions to <br /> deliver consistent, high-quality language
              training at scale.
            </p>

            {/* Stats Grid */}
            {/* Changed 'w-[611px]' to 'max-w-[611px]' and 'h-[127px]' to 'h-auto' for mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[611px] lg:h-[127px] mt-10 ">
              {/* Stat Item */}
              <div className="bg-[#E5FFA9] p-4 lg:p-6 rounded-[8px] flex flex-col items-center justify-center text-center">
                <span className="text-[32px] lg:text-[40px] font-semibold text-black">
                  95%
                </span>
                <span className="text-[14px] lg:text-[16px] font-inter text-black/70 font-medium leading-tight">
                  Happy students
                </span>
              </div>

              <div className="bg-[#E5FFA9] p-4 lg:p-6 rounded-[8px] flex flex-col items-center justify-center text-center">
                <span className="text-[32px] lg:text-[40px] font-semibold text-black">
                  140+
                </span>
                <span className="text-[14px] lg:text-[16px] font-inter text-black/70 font-medium leading-tight">
                  Skilled Teachers
                </span>
              </div>

              <div className="bg-[#E5FFA9] w-full h-full p-4 lg:p-6 rounded-[8px] flex flex-col items-center justify-center text-center md:col-span-2 lg:col-span-1 md:w-1/2 lg:w-full md:mx-auto">
                <span className="text-[32px] lg:text-[40px] font-semibold text-black">
                  95%
                </span>
                <span className="text-[14px] lg:text-[16px] font-inter text-black/70 font-medium leading-tight">
                  Happy students
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FFFA]  py-20 px-4 md:px-10 lg:px-20 mx-auto max-w-[1440px]">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-2 py-1.5 border-[1px] border-[#E6E6E6] rounded-full mb-4 shadow-sm">
            <Image src="/what.png" alt="Icon" width={24} height={24} />
            <span className="text-[16px] font-medium text-black">
              What We Do
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-[40px] font-semibold text-black font-inter  max-w-[754px] mb-4">
            ILLP Serves End-To-End Language Learning Solution
          </h2>

          {/* Subtitle */}
          <p className="text-[#727272] text-base font-inter font-regular md:text-[16px] max-w-[650px] leading-relaxed">
            ILLP delivers an end-to-end language learning solution that serves
            multiple
            <br />
            stakeholders without compromise.
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        {/* Using grid-cols-1 for mobile and grid-cols-3 for desktop to match your 1440px logic */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1440px] mx-auto  ">
          {/* CARD 1: For Learners */}
          <div className="bg-[#E5F2FF] p-4 rounded-[16px] flex flex-col min-h-[423px] ">
            <div className="inline-flex items-center gap-2 border-[1px] border-[#E6E6E6] bg-white px-2 py-1.5 rounded-full w-fit mb-8 shadow-sm">
              <Image src="/degree.svg" alt="Learner" width={24} height={24} />
              <span className="text-[14px] font-inter font-regular text-black">
                For Learners
              </span>
            </div>

            <ul className="space-y-4 text-[#333333] px-2 ">
              <li className="flex gap-3 text-[16px] font-inter font-regular leading-snug tracking-wide ">
                <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                Structured Learning Paths Covering Listening, Speaking, Reading,
                And Writing (LSRW)
              </li>
              <li className="flex gap-3 text-[16px] font-inter font-regular leading-snug tracking-wide">
                <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                AI-Powered Tutor Practice With
                <br className="hidden lg:block" />
                Real-Time Feedback
              </li>
              <li className="flex gap-3 text-[16px] font-inter font-regular leading-snug tracking-wide">
                <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                Progress Tracking, Assessments,{" "}
                <br className="hidden lg:block" />
                And Performance Insights
              </li>
              <li className="flex gap-3 text-[16px] font-inter font-regular leading-snug tracking-wide">
                <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                Live Instructor-Led Classes For{" "}
                <br className="hidden lg:block" />
                Guided Learning
              </li>
            </ul>
          </div>

          {/* CARD 2: For Institutions */}
          <div className="bg-[#FFE3D3] p-4 rounded-[16px] flex flex-col min-h-[423px] ">
            <div className="inline-flex items-center gap-2 border-[1px] border-[#E6E6E6] bg-white px-2 py-1.5 rounded-full w-fit mb-8 shadow-sm">
              <Image src="/institute.png" alt="Inst" width={24} height={24} />
              <span className="text-[14px] font-inter font-regular text-black">
                For Institutions & Organizations
              </span>
            </div>
            <ul className="space-y-4 text-[#333333] px-2 ">
              <li className="flex gap-3 text-[16px] font-inter font-regular leading-snug tracking-wide">
                <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                A Fully White-Label Platform With Independent Branding
              </li>
              <li className="flex gap-3 text-[16px] font-inter font-regular leading-snug tracking-wide">
                <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                Centralized Dashboards For Course,
                <br className="hidden lg:block" /> Instructor, And Student
                <br className="hidden lg:block" /> Management
              </li>
              <li className="flex gap-3 text-[16px] font-inter font-regular leading-snug tracking-wide">
                <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                Live Class Scheduling And <br className="hidden lg:block" />
                Monitoring
              </li>
              <li className="flex gap-3 text-[16px] font-inter font-regular leading-snug tracking-wide">
                <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                Subscription-Based Monetization
                <br className="hidden lg:block" /> And Reporting
              </li>
            </ul>
          </div>

          {/* CARD 3: For Partners */}
          <div className="md:col-span-2 lg:col-span-1 md:flex md:justify-center lg:block">
            {/* Added w-full and max-w to match Card 2 exactly */}
            <div className="bg-[#E1FEE4] p-4 rounded-[16px] flex flex-col min-h-[423px]">
              <div className="inline-flex items-center gap-2 border-[1px] border-[#E6E6E6] bg-white px-2 py-1.5 rounded-full w-fit mb-8 shadow-sm">
                <Image
                  src="/partner.png"
                  alt="Partner"
                  width={24}
                  height={24}
                />
                <span className="text-[14px] font-inter font-regular text-black">
                  For Partners
                </span>
              </div>

              {/* List Container - kept your alignment logic */}
              <ul className="space-y-4 text-[#333333] px-2 w-full flex flex-col items-start">
                <li className="flex items-start gap-3 text-[16px] font-inter font-regular leading-snug tracking-wide text-left">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  <span>
                    A Scalable SaaS Model Designed For Long-Term Growth
                  </span>
                </li>

                <li className="flex items-start gap-3 text-[16px] font-inter font-regular leading-snug tracking-wide text-left">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  <span>
                    Independent Dashboards With{" "}
                    <br className="hidden lg:block" />
                    Operational Control
                  </span>
                </li>

                <li className="flex items-start gap-3 text-[16px] font-inter font-regular leading-snug tracking-wide text-left">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  <span>
                    Transparent Usage And Billing{" "}
                    <br className="hidden lg:block" />
                    Visibility
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#31564E] py-12 md:py-24 px-4 md:px-6 w-full max-w-[1440px] mx-auto ">
        <div className="w-full max-w-[1240px] mx-auto">
          {/* Header Container - Added 'flex-col' and 'items-center' */}
          <div className="flex flex-col items-center justify-center mb-4">
            {/* 1. Rounded Badge */}
            <div
              style={{ width: "210px", height: "40px" }}
              className="
        flex items-center gap-[8px] p-[8px] 
        rounded-[20px] border border-[#E6E6E6]/20 
        bg-[#E6E6E6]/40 backdrop-blur-sm opacity-100
        mb-4 
      "
            >
              <div className="flex items-center justify-center gap-2">
                <Image src="/globe.png" alt="Globe" width={24} height={24} />
                <span className="text-black font-inter font-regular text-[14px] tracking-wide">
                  Our Learning Philosophy
                </span>
              </div>
            </div>

            {/* 2. Paragraph (Now positioned below due to flex-col) */}
            <p className="max-w-[1128px] text-white/80 font-['Inter'] font-normal text-[16px] leading-none tracking-normal text-center capitalize mb-10 px-4">
              We Believe Effective Language Learning Is Built On Three Timeless
              Pillars
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {philosophy.map((feature, index) => (
              <div
                key={index}
                className="w-full min-h-[170px] group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 flex items-center gap-2"
              >
                {/* Image Container */}
                <div className="flex h-[74px] w-[74px] shrink-0 items-center justify-center  p-3">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.alt}
                    width={74}
                    height={74}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Vertical Divider */}
                <div
                  className="h-[138px] w-[1px] shrink-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0.1) 100%)",
                  }}
                ></div>

                {/* Text Content */}
                <div>
                  <h3 className="mb-1 text-[20px] lg:text-[24px] font-inter font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400  leading-relaxed text-[14px] lg:text-[16px] font-inter font-regular capitalize">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-slate-50 py-12 md:py-[110px] px-4 md:px-6 w-full max-w-[1440px] mx-auto overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/study.jpg"
            alt="Background Pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Content Side */}
          <div className="flex flex-col gap-4 w-full lg:max-w-[612px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-2 py-1.5 border-[1px] border-[#E6E6E6] rounded-full shadow-sm w-fit">
              <Image
                src="/question.png"
                alt="Question"
                width={24}
                height={24}
              />
              <span className="text-[14px] md:text-[16px] font-medium text-black font-inter">
                Who We Serve
              </span>
            </div>

            <h2 className="text-2xl md:text-[32px] lg:text-[40px] font-semibold font-inter text-black leading-tight">
              Serving Learners, Institutions, <br className="hidden md:block" />{" "}
              and Organizations Alike
            </h2>

            <p className="text-[14px] md:text-[16px] font-regular font-inter text-black leading-relaxed">
              This multi-stakeholder approach allows organizations to scale
              responsibly, maintain academic integrity, and deliver measurable
              value in both educational and enterprise environments.
            </p>

            <div className="flex flex-col mt-4">
              {Array.from({ length: Math.ceil(stakeholders.length / 2) }).map(
                (_, i) => (
                  <div
                    key={i}
                    className="flex flex-col w-full lg:max-w-[613px]"
                  >
                    {/* Responsive grid: 1 col on mobile, 2 col on md/lg */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 py-3 md:py-4">
                      {/* Left Column */}
                      <div className="flex items-center gap-2">
                        <Image
                          src="/tick3.png"
                          alt="Tick"
                          width={14}
                          height={14}
                        />
                        <span className="text-[14px] md:text-[16px] font-inter font-regular tracking-tight text-gray-700">
                          {stakeholders[i * 2]}
                        </span>
                      </div>

                      {/* Right Column */}
                      {stakeholders[i * 2 + 1] && (
                        <div className="flex items-center gap-2 mt-2 md:mt-0">
                          <Image
                            src="/tick3.png"
                            alt="Tick"
                            width={14}
                            height={14}
                          />
                          <span className="text-[14px] md:text-[16px] font-inter font-regular tracking-tight text-gray-700">
                            {stakeholders[i * 2 + 1]}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Divider Line - Adjusted for responsiveness */}
                    <div className="lg:w-[590px] w-full h-[1px] bg-[#C5C5C5]"></div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:max-w-[614px] order-first lg:order-last">
            <div className="relative w-full aspect-[4/3] md:aspect-[614/500] overflow-hidden ">
              <Image
                src="/girl2.png"
                alt="Instructor working"
                fill
                sizes="(max-width: 768px) 100vw, 614px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FFFA] py-12 md:py-24 w-full max-w-[1440px] mx-auto">
        <div className="w-full max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[12px] items-start px-4 md:px-0">
          {/* Image Side - Left */}
          <div className="relative w-full lg:max-w-[614px] h-[500px] rounded-[16px] overflow-hidden shadow-sm border border-gray-100">
            <Image
              src="/girl3.jpg"
              alt="Student learning"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Side - Right (Stacked Mission & Vision) */}
          <div className="flex flex-col gap-[18px] w-full h-full lg:max-w-[600px] lg:h-[480px]">
            {/* Mission Box (Teal) */}
            <div className="flex flex-col justify-center gap-2 p-4  w-full min-h-[240px] rounded-[16px] border border-[#FFD9D9]  bg-[#CAF3EE] shadow-sm">
              <div className=" mb-2 inline-flex items-center gap-2 bg-white px-2 py-1.5 border-[1px] border-[#E6E6E6] rounded-full  w-fit">
                <Image
                  src="/mission.png"
                  alt="Mission"
                  width={24}
                  height={24}
                />
                <span className="text-[14px] font-medium text-black font-inter">
                  Our Mission
                </span>
              </div>
              <div className="border-b-[1px] border-white w-full"></div>
              <p className="text-[14px] md:text-[16px] p-2 font-regular font-inter text-gray-700 leading-relaxed">
                To deliver a structured, accessible, and outcome-driven language
                learning ecosystem that blends time-tested pedagogy with
                responsible AI innovation—enabling learners, institutions, and
                organizations to build strong Listening, Speaking, Reading, and
                Writing (LSRW) capabilities through self-paced learning,
                expert-led instruction, and intelligent practice.
              </p>
            </div>

            {/* Vision Box (Pink) */}
            <div className="flex flex-col justify-center gap-2 p-4  w-full min-h-[240px] rounded-[16px] border border-[#FFD9D9] bg-[#FFF0F0] shadow-sm">
              <div className="mb-2 inline-flex items-center gap-2 bg-white px-2 py-1.5 border-[1px] border-[#E6E6E6] rounded-full w-fit">
                <Image src="/vision.png" alt="Vision" width={24} height={24} />
                <span className="text-[14px] font-medium text-black font-inter">
                  Our Vision
                </span>
              </div>
              <div className="border-b-[1px] border-white w-full"></div>
              <p className="text-[14px] md:text-[16px] p-2 font-regular font-inter text-gray-700 leading-relaxed">
                To become a trusted global platform for language education by
                setting a new standard in digital learning—where traditional
                teaching excellence meets modern technology, and every learner
                benefits from personalized guidance, real-time feedback, and
                meaningful human interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-4 flex justify-center mx-auto max-w-[1440px] bg-[#F7FFFA]">
        <div className="w-full max-w-[1240px] min-h-fit md:min-h-[480px] bg-black rounded-[24px] overflow-hidden flex flex-col md:flex-row items-center p-6 md:p-12 gap-8 md:gap-12">
          <div className="flex-1 space-y-6 text-white w-full">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-2 py-1 text-[14px] font-medium">
              <Image src="/cta.svg" alt="CTA" width={20} height={20} />
              <span>CTA</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-[42px] font-semibold font-roboto leading-tight">
                Start Your English
              </h1>
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <div className="flex -space-x-6">
                  {profiles.map((src, index) => (
                    <div
                      key={index}
                      className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black overflow-hidden shadow-sm"
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
                <h2 className="text-3xl md:text-[42px] font-semibold font-roboto">
                  Journey Today
                </h2>
              </div>
            </div>

            <p className="text-gray-400 max-w-[500px] text-base md:text-lg leading-relaxed font-roboto">
              Join millions of learners improving their English with our proven
              immersive Method.
            </p>
            <button className="w-full md:w-auto bg-white text-[#31564E] cursor-pointer transition-all font-semibold px-6 py-4 rounded-full hover:bg-gray-200 active:scale-95 transition-all text-base">
              Book Your Free Demo Now
            </button>
          </div>

          <div className="flex-1 w-full aspect-square md:aspect-auto md:h-[380px] relative">
            <div className="relative w-full h-full rounded-[24px] overflow-hidden">
              <Image
                src="/student2.png"
                alt="Student using laptop"
                fill
                className="object-cover rounded-[24px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
