"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Upload } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import JobModal from '../popup';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  // 1. Add the <HTMLInputElement> type argument
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    // 2. Use the optional chaining (?.) to safely call click()
    fileInputRef.current?.click();
  };
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
  const responsibilities = [
    "Generate and qualify sales leads",
    "Pitch the product and conduct demos",
    "Manage pipeline and follow up with prospects",
    "Close deals and meet assigned targets",
    "Maintain accurate CRM records",
    "Meet assigned targets and contribute to overall revenue goals",
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
  const [_activeIdx, _setActiveIdx] = useState(0);
  const _profiles = [
    "/profile1.jpg",
    "/profile2.jpg",
    "/profile3.jpg",
    "/profile5.jpg",
    "/profile6.jpg",
  ];
  const requirements = [
    { text: "Strong verbal and written communication skills" },
    { text: "Target-driven mindset with consistent follow-through" },
    { text: "Comfortable using CRM tools and sales dashboards" },
    { text: "Professional attitude and accountability for results" },
    {
      text: "Willingness to learn product details and improve sales skills continuously",
    },
    {
      text: "Experience in sales, inside sales, or business development (preferred)",
    },
    { text: "Confidence in pitching products to individuals and institutions" },
    {
      text: "Ability to understand customer needs and position solutions effectively",
    },
  ];

  const features = [
    {
      title: "Purpose-Driven Product",
      description:
        "Sell an education platform that creates measurable impact for students, schools, and organizations.",
      dark: true,
    },
    {
      title: "Clear Targets & Transparency",
      description:
        "Defined goals, honest metrics, and no hidden expectations—so you always know where you stand.",
      dark: false,
    },
    {
      title: "Product & Marketing Support",
      description:
        "Backed by a capable product and marketing team that helps you convert leads more effectively.",
      dark: true,
    },
    {
      title: "Competitive Pay & Incentives",
      description:
        "Earn a stable fixed salary with performance-based incentives tied directly to results.",
      dark: false,
    },
    {
      title: "Career Growth Opportunities",
      description:
        "Grow into senior sales, account management, or leadership roles based on performance.",
      dark: true,
    },
    {
      title: "Professional Sales Culture",
      description:
        "Work in a focused environment that values discipline, accountability, and long-term relationships.",
      dark: false,
    },
  ];
  const jobs = [
    {
      title: "Sales Executive",
      daysAgo: "3 days ago",
      description:
        "Handle inbound and outbound leads, pitch the product, and close individual learner sales.",
      type: "Full Time",
      experience: "1+ years",
      salary: "₹3.0 – ₹5.0 LPA",
      location: "Remote / Hybrid",
    },
    {
      title: "Inside Sales Executive",
      daysAgo: "3 days ago",
      description:
        "Manage phone and online sales, conduct demos, and convert qualified leads efficiently.",
      type: "Full Time",
      experience: "3+ years",
      salary: "₹6.0 – ₹8.0 LPA",
      location: "Onsite / Hybrid",
    },
    {
      title: "Institutional Sales Manager",
      daysAgo: "3 days ago",
      description:
        "Lead sales for schools, colleges, and training institutes with long-term relationship ...",
      type: "Full Time",
      experience: "2-4 years",
      salary: "₹7.0 – ₹10.0 LPA",
      location: "Remote",
    },
  ];
  const [showMobileMore, setShowMobileMore] = useState(false);
  const scrollToSection = () => {
    const element = document.getElementById('application-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToRequirements = () => {
    const element = document.getElementById('requirements');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden min-h-[578px] lg:h-[578px] bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg8.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-10 " />
        </div>

        <Navbar />
        <nav className=" relative hidden md:flex items-center gap-[8px] px-4 lg:px-[100px] py-4 z-20">
          <a href="/" className="text-sm font-medium hover:text-blue-600">
            Home
          </a>
          <Image
            src="/mingcute_right-line.png"
            alt="Arrow"
            width={24}
            height={24}
          />
          <a href="/sales" className="text-sm font-medium hover:text-blue-600">
            Join Our Sales Team
          </a>
        </nav>
        <div className="relative z-20 flex flex-col max-w-[1030px] mx-auto items-center justify-center px-4 py-12 lg:py-0 flex-grow">
          <div className={`${inter.className} w-full text-center`}>
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] mt-10 md:mt-14 font-semibold font-inter text-black leading-tight">
              Sell With Purpose. Grow With Impact.
            </h1>
            <p className="text-[16px] md:text-[18px] font-normal text-gray-800 max-w-[834px] mt-4 mx-auto font-inter leading-tight">
              Join our sales team and help learners and institutions adopt a
              powerful English learning platform while building a rewarding
              sales career.
            </p>

            {/* Responsive Fix: 
      1. Changed h-[51px] to min-h-[51px] so the container expands when buttons stack.
      2. Removed max-w-[406px] on mobile to let buttons breathe, then restored it on md screens.
    */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-[16px] z-30 mt-10 min-h-[51px] w-full max-w-[406px] md:max-w-none mx-auto">
              <button
                onClick={scrollToSection}
                className="w-full md:w-[201px] h-[51px] bg-black text-white rounded-full font-semibold text-[16px] transition-all hover:bg-[#31564E] active:scale-95 shadow-lg">
                Apply for Sales Role
              </button>

              <button
                onClick={scrollToRequirements}
                className="w-full md:w-[206px] h-[51px] border-2 border-[#31564E] text-[#31564E] rounded-full font-semibold text-[16px] transition-all hover:bg-[#31564E] hover:text-white active:scale-95 bg-white/50 backdrop-blur-sm">
                View Sales Positions
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
              Why Our Sales Team
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-[32px] lg:text-[40px] font-inter font-semibold text-gray-900 leading-tight">
            A Sales Role Built on Real Value
          </h2>

          {/* Subtitle */}
          <p className="text-gray-800 font-inter font-regular text-[16px] mx-auto mt-4 mb-12 md:mb-16 max-w-[630px]">
            We offer a clear, performance-driven sales environment where you
            sell a product
            <br className="hidden lg:block" />
            that genuinely helps learners and institutions improve English
            communication.
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
            src="/bg9.jpg"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-[1240px]  mx-auto w-full flex flex-col items-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E6E6E6]/60 border-[1px] border-white/70 p-2 rounded-full mb-8">
            <Image src="/degree.svg" alt="Degree" width={24} height={24} />
            <span className="text-[10px] md:text-[16px] font-inter font-regular text-black">
              Who We're Looking For
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-[40px] font-semibold font-inter text-center mb-4 tracking-wide max-w-[603px]">
            Sales Professionals Who Value Impact and Growth
          </h1>

          {/* Paragraph below */}
          <p className="text-white text-center max-w-[575px] mx-auto mb-8 text-sm md:text-[16px] font-inter font-regular leading-relaxed tracking-wide">
            We’re seeking qualified, confident English instructors who can
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
    ${isSecondRow ? "lg:h-[100px]" : "lg:h-[126px]"} 
    h-auto min-h-[100px] md:min-h-[126px] transition-transform hover:scale-[1.02] bg-black/10 backdrop-blur-sm`}
                >
                  <p className="text-sm md:text-[18px] font-inter leading-snug tracking-wide text-gray-100 font-medium">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Apply Now Button */}
        </div>
      </section>

      <div className="w-full max-w-[1440px] mx-auto bg-black relative z-10">
        <section
          className={`${inter.className} mx-auto w-full max-w-[1440px] min-h-[637px] overflow-hidden bg-[#F3F3F3] flex items-center justify-center z-10`}
        >
          {/* Removed fixed ml-6 and updated gap for better mobile spacing */}
          <div className="px-4 w-[1240px]  sm:px-6 md:px-10 gap-2 py-12 lg:py-16 w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-4 items-center">
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] gap-2 max-w-[577px] mx-auto lg:w-[610px] lg:h-[500px] order-1 lg:order-1">
              <div className="absolute inset-0 bg-gray-200 rounded-[16px] overflow-hidden shadow-2xl">
                <Image
                  src="/bg10.jpg"
                  alt="AI Tutor Presentation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col gap-6 w-full lg:max-w-[574px] lg:max-h-[458px]lg:mr-16 order-2 lg:order-2">
              <div className="flex flex-col space-y-4 md:space-y-[20px]">
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
                  Your Role in the Sales Team
                </h2>

                {/* Changed w-[575px] to max-w-[575px] so it shrinks on small screens */}
                <p className="text-[14px] md:text-[16px] text-gray-800 leading-relaxed font-inter w-full max-w-[575px]">
                  As part of the sales team, you will be responsible for driving
                  growth by connecting learners and institutions with the right
                  learning solutions.
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

        <section id="requirements" />
        <section className="bg-[#31564E] py-16 px-6 md:px-12 lg:px-24 text-white">
          <div className="max-w-[1240px] mx-auto">
            {/* Header Section */}
            <div className="mb-12 max-w-[834px]">
              <h2 className="text-[32px] md:text-[40px] font-semibold font-inter mb-4 leading-tight">
                Sales Opportunities Across Teams
              </h2>
              <p className="text-white text-[16px] font-inter leading-relaxed">
                We hire sales professionals across multiple levels to support
                individual learners, institutions, and corporate partnerships.
              </p>
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  // Changed w-[400px] to w-full max-w-[400px]
                  // Changed h-[334px] to h-auto min-h-[334px] for better mobile content flow
                  className="bg-[#F7FFFA] text-[#1A1A1A] p-8 rounded-[32px] w-full max-w-[400px] min-h-[334px] flex flex-col justify-between shadow-lg mx-auto lg:mx-0"
                >
                  <div>
                    <span className="text-[14px] font-inter italic text-gray-500 block mb-2">
                      {job.daysAgo}
                    </span>
                    <h3 className="text-[24px] font-semibold font-inter mb-4">
                      {job.title}
                    </h3>
                    <p className="text-[16px] font-regular font-inter text-black mb-6 leading-snug">
                      {job.description}
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="bg-[#3D5A53] text-white text-[14px] px-4 py-1.5 rounded-full">
                        {job.type}
                      </span>
                      <span className="bg-[#3D5A53] text-white text-[14px] px-4 py-1.5 rounded-full flex items-center justify-center min-w-[88px] h-[33px]">
                        {job.experience}
                      </span>
                    </div>
                  </div>

                  {/* Footer Row */}
                  <div className="border-t border-[#E6E6E6] pt-6 flex items-center justify-between gap-2">
                    <div className="shrink-0">
                      <p className="font-semibold text-[18px] font-inter text-[#31564E] leading-none mb-1">
                        {job.salary}
                      </p>
                      <p className="text-[14px] font-inter text-gray-500">
                        {job.location}
                      </p>
                    </div>

                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="active:scale-95 bg-black text-white w-[140px] md:w-[149px] h-[51px] px-4 md:px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all flex-shrink-0"
                    >
                      View & Apply
                    </button>

                    <JobModal
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                    />
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="application-form" />
        <section className="min-h-screen bg-white flex items-center justify-center p-4 md:p-6">
          <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Info Cards */}
            <div className="flex flex-col gap-[14px] items-center lg:items-start">
              {/* Green Card */}
              <div className="bg-[#2D4F46] text-white p-8 w-full max-w-[404px] min-h-[256px] rounded-[16px] shadow-sm flex flex-col justify-center">
                <h1 className="text-[32px] md:text-[48px] font-inter font-bold mb-4 px-2 leading-tight">
                  Apply for a Sales Role
                </h1>
                <p className="text-gray-300 font-inter text-[16px] px-3">
                  Share your details below to apply for a sales role. Our team
                  will review your profile and get in touch if there’s a fit.
                </p>
              </div>

              {/* White Card */}
              <div className="bg-white p-8 w-full max-w-[404px] min-h-[230px] rounded-[16px] border border-[#E6E6E6]">
                <h3 className="text-[#31564E] font-medium font-inter text-[20px] mb-4 tracking-wide border-b border-[#E6E6E6] pb-2">
                  Support & Help Expectations
                </h3>
                <p className="text-gray-500 text-[16px] mb-4">
                  Given the platform complexity (AI tutors, live classes,
                  payments), set expectations early.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-[16px] font-regular font-inter text-black">
                    <Image
                      src="/tick3.png"
                      alt="tick3"
                      width={14}
                      height={14}
                    />
                    Email & dashboard-based support
                  </li>
                  <li className="flex items-center gap-3 text-[16px] font-regular font-inter text-black">
                    <Image
                      src="/tick3.png"
                      alt="tick3"
                      width={14}
                      height={14}
                    />
                    Live class issue escalation
                  </li>
                  <li className="flex items-center gap-3 text-[16px] font-regular font-inter text-black">
                    <Image
                      src="/tick3.png"
                      alt="tick3"
                      width={14}
                      height={14}
                    />
                    Subscription & billing assistance
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: The Form */}

            <div className="lg:col-span-2 bg-[#F2F2F2] p-6 md:p-8  max-w-[820px] h-auto min-h-[502px] rounded-[16px]">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-inter font-regular text-black">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="p-3 rounded-[8px] w-full max-w-[370px] h-[52px] border-none bg-white focus:ring-2 focus:ring-[#2D4F46] outline-none"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-inter font-regular text-black">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your Email id"
                    className="p-3 rounded-[8px] w-full max-w-[370px] h-[52px] border-none bg-white focus:ring-2 focus:ring-[#2D4F46] outline-none"
                  />
                </div>

                {/* Role */}
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-inter font-regular text-black">
                    Role
                  </label>
                  <select className="p-3 rounded-[8px] w-full max-w-[370px] h-[52px] border-none focus:ring-2 focus:ring-[#2D4F46] outline-none bg-white text-gray-400">
                    <option>Select type</option>
                  </select>
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-inter font-regular text-black">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your Mobile number"
                    className="p-3 rounded-[8px] w-full max-w-[370px] h-[52px] border-none focus:ring-2 focus:ring-[#2D4F46] outline-none bg-white"
                  />
                </div>

                {/* Upload CV Box */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[16px] font-inter font-regular text-black">
                    Upload CV
                  </label>
                  <div className="flex flex-col items-center justify-center gap-2 w-full h-[149px] bg-white border-2 border-gray-300 rounded-[8px] transition-colors hover:border-[#2D4F46]">
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                    />
                    <button
                      type="button"
                      onClick={handleContainerClick}
                      className="flex items-center justify-center w-12 h-12 border border-dashed border-gray-400 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-[#2D4F46] transition-all active:scale-95"
                    >
                      <Upload className="w-6 h-6 text-gray-600" />
                    </button>
                    <span className="text-sm font-medium text-gray-700">
                      Submit CV
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 mt-2 flex justify-end">
                  <button
                    type="submit"
                    className="bg-black text-white w-full md:w-[170px] h-[51px] rounded-full font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Request Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
