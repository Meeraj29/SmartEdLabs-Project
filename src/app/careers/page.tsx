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
  const pathname = usePathname();
  const handleContainerClick = () => {
    // 2. Use the optional chaining (?.) to safely call click()
    fileInputRef.current?.click();
  };
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Feature", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
  ];
  const categories = [
    "Meaningful Work",
    "Respect & Ownership",
    "Collaborative Culture",
    "Balanced Work Environment",
    "Continuous Learning",
    "Optional Closing Line",
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
  const jobs = [
    {
      title: "English Language Instructor",
      daysAgo: "3 days ago",
      description:
        "Deliver live English classes, guide learners across skill levels, and support language...",
      type: "Full Time",
      experience: "1+ years",
      salary: "₹3.0 – ₹5.0 LPA",
      location: "Remote / Hybrid",
    },
    {
      title: "Academic Coordinator",
      daysAgo: "3 days ago",
      description:
        "Oversee curriculum delivery, mentor instructors, and maintain academic quality ...",
      type: "Full Time",
      experience: "3+ years",
      salary: "₹6.0 – ₹8.0 LPA",
      location: "Onsite / Hybrid",
    },
    {
      title: "Frontend Developer",
      daysAgo: "3 days ago",
      description:
        "Build responsive, high-performance interfaces for a scalable learning platform.",
      type: "Full Time",
      experience: "2-4 years",
      salary: "₹7.0 – ₹10.0 LPA",
      location: "Remote",
    },
    {
      title: "Content & Curriculum Specia..",
      daysAgo: "3 days ago",
      description:
        "Create and refine English learning content aligned with learner levels and outcomes.",
      type: "Full Time",
      experience: "2+ years",
      salary: "₹4.5 – ₹7.0 LPA",
      location: "Hybrid",
    },
    {
      title: "Customer Support Executive",
      daysAgo: "3 days ago",
      description:
        "Assist learners and instructors, resolve queries, and ensure smooth platform usage.",
      type: "Full Time",
      experience: "1+ years",
      salary: "₹2.5 – ₹4.0 LPA",
      location: "Onsite",
    },
    {
      title: "English Language Instructor",
      daysAgo: "3 days ago",
      description:
        "Deliver live English classes, guide learners across skill levels, and support language...",
      type: "Full Time",
      experience: "1+ years",
      salary: "₹3.0 – ₹5.0 LPA",
      location: "Remote / Hybrid",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const steps = [
    {
      id: "1",
      title: "Application Submission",
      desc: "Apply online by sharing your profile, experience, and relevant details for the role.",
      dark: false,
    },
    {
      id: "2",
      title: "Profile Review",
      desc: "Apply online by sharing your profile, experience, and relevant details for the role.",
      dark: false,
    },
    {
      id: "3",
      title: "Skill Assessment",
      desc: "Shortlisted candidates attend interviews or role-specific assessments, depending on the position.",
      dark: false,
    },
    {
      id: "4",
      title: "Final Discussion",
      desc: "A final conversation to align on expectations, responsibilities, and next steps.",
      dark: true,
    },
    {
      id: "5",
      title: "Offer & Onboarding",
      desc: "Selected candidates receive an offer and begin a structured onboarding process.",
      dark: true,
    },
  ];
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
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
  const [showMobileMore, setShowMobileMore] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden min-h-[578px] lg:h-[578px] bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg12.jpg"
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
          <a
            href="/careers"
            className="text-sm font-medium hover:text-blue-600"
          >
            Careers
          </a>
        </nav>
        <div className="relative z-20 flex flex-col max-w-[816px] mx-auto items-center justify-center px-4 py-12 lg:py-0 flex-grow">
          <div className={`${inter.className} w-full text-center`}>
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] mt-30 md:mt-40 font-semibold font-inter text-black leading-tight">
              Build a Career That Makes an Impact
            </h1>

            {/* Logic Fix: Changed w-[834px] to w-full max-w-[834px] to prevent horizontal scroll on mobile */}
            <p className="text-[16px] md:text-[18px] font-normal text-gray-800 w-full max-w-[834px] mt-4 mx-auto font-inter leading-relaxed tracking-relaxed">
              Join our team and contribute to meaningful learning experiences
              through technology, teaching, and innovation.
            </p>

            {/* Logic Fix: Changed h-[51px] to min-h-[51px] to allow vertical expansion when buttons stack */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-[16px] z-30 mt-10 min-h-[51px] w-full max-w-[406px] md:max-w-none mx-auto">
              <button
                onClick={scrollToRequirements}
                className="w-full md:w-[178px] h-[51px] bg-black text-white rounded-full font-semibold text-[16px] transition-all hover:bg-[#31564E] active:scale-95 shadow-lg">
                View Open Roles
              </button>

              <button
                onClick={scrollToSection}
                className="w-full md:w-[130px] h-[51px] border-2 border-[#31564E] text-[#31564E] rounded-full font-semibold text-[16px] transition-all hover:bg-[#31564E] hover:text-white active:scale-95 bg-white/50 backdrop-blur-sm">
                Submit CV
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-[1440px] w-full mx-auto px-6 py-12 md:py-16 bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1240px] mx-auto">
          {/* LEFT COLUMN: Image Grid */}
          {/* Changed fixed w-[612px] to max-w-[612px] and w-full to ensure it shrinks on mobile */}
          <div className="flex flex-col gap-4 md:gap-[20px] w-full max-w-[612px] mx-auto">
            {/* TOP ROW: Large Leaf + Circle */}
            {/* Used aspect ratios to keep the "Leaf" look consistent while scaling */}
            <div className="flex w-full h-auto gap-3 md:gap-[20px] items-center">
              {/* Top Left - Large Leaf */}
              <div className="relative flex-[1.4] aspect-[352/240] overflow-hidden rounded-tl-[16px] rounded-tr-[48px] rounded-br-[16px] rounded-bl-[48px]">
                <Image
                  src="/grid1.jpg"
                  alt="Work"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px" // Optimization hint for the browser
                  className="object-cover"
                  priority={true} // Add this if this image is at the top of the page (above the fold)
                />
              </div>

              {/* Top Right - Circle */}
              <div className="relative flex-1 aspect-square rounded-full overflow-hidden border-2 md:border-4 border-yellow-400 flex-shrink-0">
                <Image
                  src="/grid2.jpg"
                  alt="Icons"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* BOTTOM ROW: Square Leaf + Large Leaf */}
            <div className="flex w-full h-auto gap-3 md:gap-[20px]">
              {/* Bottom Left - Square Leaf */}
              <div className="relative flex-1 aspect-square overflow-hidden border-2 border-yellow-400 rounded-tl-[16px] rounded-tr-[48px] rounded-br-[16px] rounded-bl-[48px]">
                <Image
                  src="/grid3.jpg"
                  alt="Typing"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover"
                />
              </div>

              {/* Bottom Right - Large Leaf */}
              <div className="relative flex-[1.4] aspect-[352/240] overflow-hidden rounded-tl-[16px] rounded-tr-[48px] rounded-br-[16px] rounded-bl-[48px]">
                <Image
                  src="/grid4.jpg"
                  alt="Education"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="w-full max-w-[564px] mx-auto mt-6">
            <div className="inline-flex items-center gap-2 p-2 px-4 h-[40px] rounded-full border border-gray-200 bg-gray-50">
              <Image src="/degree.svg" alt="" width={24} height={24} />
              <span className="text-sm md:text-[16px] font-inter font-medium text-black">
                Life at Our Company
              </span>
            </div>

            <h2 className="text-3xl md:text-[40px] font-inter font-semibold text-gray-900 leading-tight mt-4">
              Where Purpose Meets Everyday Work
            </h2>

            <p className="text-gray-600 text-[16px] font-inter mt-4 leading-relaxed">
              We’re building more than a learning platform. We’re building a
              workplace where people care about education, respect each other’s
              work, and grow together.
            </p>

            {/* Responsive divider */}
            <div className="border-b border-[#E6E6E6] w-full mt-6" />

            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-4">
              {categories.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <Image src="/tick6.png" alt="" width={16} height={16} />
                  </div>
                  <span className="text-gray-700 font-inter text-[16px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="requirements" />
      <section className="bg-[#31564E] py-12 md:py-16 px-6 md:px-12 lg:px-24 text-white max-w-[1440px] w-full relative mx-auto overflow-hidden">
        <div className="max-w-[1240px] mx-auto h-auto">
          {/* Header Section */}
          <div className="mb-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
            {/* Left Side: Text Content */}
            <div className="max-w-[834px]">
              <h2 className="text-white text-[32px] md:text-[40px] font-semibold font-inter mb-4 leading-tight">
                Explore Open Roles
              </h2>
              <p className="text-white/80 text-[16px] font-inter leading-relaxed max-w-full lg:max-w-[750px]">
                Find opportunities across teaching, product, and operations
                teams. Each role is designed to contribute directly to
                meaningful learning outcomes.
              </p>
            </div>

            {/* Right Side: Search Bar */}
            <div className="flex items-center w-full md:w-[400px] h-[52px] px-4 gap-4 bg-[#F3F3F3] border border-gray-200 rounded-[12px] shadow-sm focus-within:ring-2 focus-within:ring-white/20 transition-all">
              {/* Search Icon */}
              <div className="flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>

              {/* Input Field */}
              <input
                type="text"
                placeholder="Search for Jobs"
                className="w-full h-full bg-transparent outline-none text-[16px] font-inter text-gray-700 placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-[#F7FFFA] text-[#1A1A1A] p-6 md:p-8 rounded-[32px] w-full max-w-[400px] min-h-[334px] flex flex-col justify-between shadow-lg mx-auto lg:mx-0"
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

        {/* Pagination Section */}
        <div className="flex justify-center md:justify-end mt-12  mb-10 w-full max-w-[1240px] mx-auto">
          <div className="flex items-center justify-center gap-[8px] flex-wrap">
            {/* Previous Button */}
            <button className="flex items-center hover:scale-95  ease-in-out justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-black text-white rounded-full hover:bg-gray-800 transition-colors shadow-md">
              <Image
                src="/leftarrow.png"
                alt="Arrow Left"
                width={48}
                height={48}
              />
            </button>

            {/* Page Numbers */}
            <button className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] border-2 border-[#C5FF3F] text-[#2D4A43] font-semibold rounded-full bg-white">
              1
            </button>
            <button className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] border border-gray-100 text-gray-900 font-medium rounded-full bg-white hover:bg-gray-50 transition-colors">
              2
            </button>

            <div className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] text-gray-400 font-medium border border-gray-100  font-medium rounded-full bg-white hover:bg-gray-50 transition-colors">
              ...
            </div>

            <button className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] border border-gray-100 text-gray-900 font-medium rounded-full bg-white hover:bg-gray-50 transition-colors">
              10
            </button>

            {/* Next Button */}
            <button className="flex items-center hover:scale-95  ease-in-out justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-black text-white rounded-full hover:bg-gray-800 transition-colors shadow-md">
              <Image
                src="/rightarrow.png"
                alt="Arrow Right"
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3] py-12 md:py-16 px-4 flex flex-col items-center text-center max-w-[1440px] w-full mx-auto relative">
        {/* Header */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-center">
          <span className="inline-flex items-center gap-2 p-2 h-[40px] rounded-full border border-gray-300 bg-white text-[16px] font-regular font-roboto mb-4">
            <Image src="/work.png" alt="" width={24} height={24} />
            Hiring Process
          </span>
          <h2 className="text-3xl md:text-[40px] font-semibold font-roboto text-black mb-4 px-2 max-w-[800px] leading-tight">
            Our Hiring Process
          </h2>
          <p className="text-[16px] font-roboto font-regular max-w-[630px] text-gray-600 px-4">
            We follow a simple and structured hiring process designed to
            evaluate skills, ensure role fit, and respect your time.
          </p>
        </div>

        {/* Cards Container - Using flex-wrap with justify-center to keep the second row centered */}
        <div className="flex flex-wrap justify-center gap-6 max-w-[1260px] w-full">
          {steps.map((step) => (
            <div
              key={step.id}
              /* flex-grow-0 ensures cards don't stretch awkwardly, max-w-sm handles mobile width */
              className={`w-full sm:w-[calc(50%-1.5rem)] lg:w-[400px] min-h-[160px] px-6 md:px-8 py-6 rounded-2xl text-left border transition-all duration-300 hover:scale-[1.03] flex flex-col ${step.dark
                ? "bg-[#31564E] text-white border-[#E6E6E6]/20"
                : "bg-[#F1FFFC] text-black border-[#E6E6E6]"
                }`}
            >
              <h3
                className="text-[22px] md:text-[24px] font-inter font-semibold mb-3 pb-3 border-b-2"
                style={{
                  borderImageSource: step.dark
                    ? "linear-gradient(270deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.4) 100%)"
                    : "linear-gradient(270deg, rgba(49, 86, 78, 0.1) 0%, #31564E 100%)",
                  borderImageSlice: 1,
                }}
              >
                {step.id}. {step.title}
              </h3>
              <p
                className={`${step.dark ? "text-gray-300" : "text-gray-600"} text-[15px] md:text-[16px] font-inter font-regular leading-relaxed`}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="application-form" />
      <section className="min-h-screen bg-white flex items-center max-w-[1440px] mx-auto w-full relative justify-center p-4 md:p-6">
        <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Info Cards */}
          <div className="flex flex-col gap-[14px] items-center lg:items-start">
            {/* Green Card */}
            <div className="bg-[#2D4F46] text-white p-4 w-full max-w-[404px] min-h-[280px] h-auto rounded-[16px] shadow-sm flex flex-col justify-center">
              <h1 className="text-[32px] md:text-[48px] font-inter font-bold mb-4 px-2 leading-tight">
                Didn’t Find the Right Role?
              </h1>
              <p className="text-gray-300 font-inter text-[16px] px-3">
                We’re always open to connecting with passionate professionals.
                Share your CV, and we’ll reach out when a suitable opportunity
                becomes available.
              </p>
            </div>

            {/* White Card */}
            <div className="bg-white p-8 w-full max-w-[404px] min-h-[206px] h-auto rounded-[16px] border border-[#E6E6E6]">
              <h3 className="text-[#31564E] font-medium font-inter text-[20px] mb-4 tracking-wide border-b border-[#E6E6E6] ">
                Support & Help Expectations
              </h3>
              <p className="text-gray-500 text-[16px] mb-4">
                Given the platform complexity (AI tutors, live classes,
                payments), set expectations early.
              </p>

              <ul className="space-y-2 ">
                <li className="flex items-center gap-3 text-[16px] font-regular font-inter text-black">
                  <Image src="/tick3.png" alt="tick3" width={14} height={14} />
                  Email & dashboard-based support
                </li>
                <li className="flex items-center gap-3 text-[16px] font-regular font-inter text-black">
                  <Image src="/tick3.png" alt="tick3" width={14} height={14} />
                  Live class issue escalation
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-2 bg-[#F2F2F2] p-6 md:p-8 w-full max-w-[820px] h-auto rounded-[16px]">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="full-name"
                  className="text-[16px] font-inter font-regular text-black"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="p-3 rounded-[8px] w-full md:max-w-[370px] h-[52px] border-none bg-white focus:ring-2 focus:ring-[#2D4F46] outline-none"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[16px] font-inter font-regular text-black">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email id"
                  className="p-3 rounded-[8px] w-full md:max-w-[370px] h-[52px] border-none bg-white focus:ring-2 focus:ring-[#2D4F46] outline-none"
                />
              </div>

              {/* Role */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="role"
                  className="text-[16px] font-inter font-regular text-black">
                  Role
                </label>
                <select className="p-3 rounded-[8px] w-full md:max-w-[370px] h-[52px] border-none focus:ring-2 focus:ring-[#2D4F46] outline-none bg-white text-gray-400">
                  <option>Select type</option>
                </select>
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mobile"
                  className="text-[16px] font-inter font-regular text-black">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your Mobile number"
                  className="p-3 rounded-[8px] w-full md:max-w-[370px] h-[52px] border-none focus:ring-2 focus:ring-[#2D4F46] outline-none bg-white"
                />
              </div>

              {/* Upload CV Box */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label
                  htmlFor="cv"
                  className="text-[16px] font-inter font-regular text-black">
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
              <div className="md:col-span-2 mb-2 flex justify-end">
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
  );
}
