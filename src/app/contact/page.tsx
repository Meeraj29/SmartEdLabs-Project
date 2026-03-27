"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

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
  const _mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.636881755104!2d77.59371947594587!3d12.931065215758235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1509a6b4db3f%3A0xa506172c3c0ff8f4!2sSmartEdLabs!5e0!3m2!1sen!2sin!4v1708688000000!5m2!1sen!2sin";
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
  const infoCards = [
    {
      title: "Office Address",
      content: [
        "SmartEdLabs, Business Tower, 3rd Floor,",
        "Central Business District",
        "Bengaluru, Karnataka – 5600XX",
      ],
    },
    {
      title: "Contact",
      content: ["+91 9XXX XXX XXX", "Contact@Smartedlabs.Com"],
    },
    {
      title: "Business Hours",
      content: ["Monday – Friday", "10:00 AM – 6:00 PM (IST)"],
    },
  ];
  const categories = [
    {
      title: "For Students",
      links: ["Course queries", "AI tutor assistance", "Course queries"],
    },
    {
      title: "For Institutions & Corporates",
      links: [
        "White-label platform inquiries",
        "Demo & onboarding",
        "Pricing & subscriptions",
      ],
    },
    {
      title: "For Partners / Resellers",
      links: [
        "White-label partnership",
        "Branding & dashboard access",
        "Billing & usage reports",
      ],
    },
    {
      title: "For General / Media",
      links: ["Platform information", "Collaborations"],
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
  const [_activeIdx, _setActiveIdx] = useState(0);
  const [showMobileMore, setShowMobileMore] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden min-h-[578px] lg:h-[578px] bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg13.jpg"
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
            href="/contact"
            className="text-sm font-medium hover:text-blue-600"
          >
            Contact Us
          </a>
        </nav>

        <div className="relative z-20 mt-16 flex flex-col max-w-[1030px] mx-auto items-center justify-center px-4 py-12 lg:py-0 flex-grow">
          <div className={`${inter.className} w-full text-center`}>
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] mt-40 font-semibold font-inter text-black leading-tight">
              “Get in Touch with ILLP”
            </h1>
            <p className="text-[16px] md:text-[18px] font-normal text-gray-800 max-w-[717px] mt-4 mx-auto font-inter leading-tight">
              “We’re here to support learners, institutions, and partners at
              every stage of their language learning journey.”
            </p>
          </div>
        </div>
      </div>
      <section className="bg-white py-20 px-6 font-sans max-w-[1440px] w-full mx-auto relative">
        <div className="max-w-[1240px] mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-1 py-1 rounded-full border border-gray-200 bg-gray-50 text-sm mb-6">
            <Image src="/degree.svg" alt="degree" width={24} height={24} />
            <span className="font-regular font-inter text-[16px] text-black">
              Categories
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[32px] md:text-[40px] font-semibold font-inter text-black mb-16 leading-tight max-w-[636px] mx-auto">
            Instead of one generic form, segment upfront.
          </h2>

          {/* Grid Container */}
          <div className="flex justify-center w-full px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1240px]">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  /* 1. Removed max-w-[290px] so the grid can actually fit 2 items on md 
                     2. Changed h-auto to min-h to ensure consistency
                  */
                  className="bg-white border border-gray-100 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-shadow duration-300 w-full min-h-[195px] flex flex-col mx-auto"
                >
                  <h3 className="text-[18px] font-semibold font-inter mb-4 pb-4 text-[#31564E] border-b border-[#00000066]">
                    {cat.title}
                  </h3>
                  <ul className="space-y-1">
                    {cat.links.map((link, i) => (
                      <li
                        key={i}
                        className="flex items-start group cursor-pointer"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 mr-3 shrink-0" />
                        <span className="text-slate-600 text-[16px] leading-relaxed group-hover:text-slate-900">
                          {link}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-white max-w-[1440px] w-full mx-auto relative flex items-center justify-center p-4 md:p-6">
        <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Left Column: Info Cards */}
          <div className="flex flex-col gap-[14px] items-center lg:items-start">
            {/* Green Card */}
            <div className="bg-[#2D4F46] text-white p-8 w-full max-w-[404px] min-h-[183px] rounded-[16px] shadow-sm flex flex-col justify-center">
              <h1 className="text-[36px] md:text-[48px] font-inter font-bold mb-2">
                Get in Touch
              </h1>
              <p className="text-gray-300 font-inter text-[16px]">
                We value every conversation, and you can expect a warm, timely
                response from our team.
              </p>
            </div>

            {/* White Card */}
            <div className="bg-white p-8 w-full max-w-[404px] min-h-[303px] rounded-[16px] border border-[#E6E6E6] mt-2">
              <h3 className="text-[#31564E] font-medium font-inter text-[20px] mb-4 tracking-wide border-b border-[#E6E6E6] pb-2">
                Support & Help Expectations
              </h3>
              <p className="text-gray-500 text-[16px] mb-4">
                Given the platform complexity (AI tutors, live classes,
                payments), set expectations early.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[16px] font-inter text-black">
                  <Image src="/tick3.png" alt="tick3" width={14} height={14} />
                  Email & dashboard-based support
                </li>
                <li className="flex items-center gap-3 text-[16px] font-inter text-black">
                  <Image src="/tick3.png" alt="tick3" width={14} height={14} />
                  Live class issue escalation
                </li>
                <li className="flex items-center gap-3 text-[16px] font-inter text-black">
                  <Image src="/tick3.png" alt="tick3" width={14} height={14} />
                  Subscription & billing assistance
                </li>
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2 bg-[#F2F2F2] p-6 md:p-10 w-full max-w-[820px] rounded-[16px] mx-auto h-fit">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="fullName"
                  className="text-[16px] font-inter text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="p-3 px-4 rounded-[8px] w-full h-[52px] border-none bg-white focus:ring-2 focus:ring-[#2D4F46] outline-none"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[16px] font-inter text-black"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email id"
                  className="p-3 px-4 rounded-[8px] w-full h-[52px] border-none bg-white focus:ring-2 focus:ring-[#2D4F46] outline-none"
                />
              </div>

              {/* Enquiry Type */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="enquiryType"
                  className="text-[16px] font-inter text-black"
                >
                  Enquiry Type
                </label>
                <select
                  id="enquiryType"
                  className="p-3 px-4 rounded-[8px] w-full h-[52px] border-none focus:ring-2 focus:ring-[#2D4F46] outline-none bg-white text-gray-400"
                >
                  <option>Select type</option>
                </select>
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mobileNumber"
                  className="text-[16px] font-inter text-black"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your Mobile number"
                  className="p-3 px-4 rounded-[8px] w-full h-[52px] border-none focus:ring-2 focus:ring-[#2D4F46] outline-none bg-white"
                />
              </div>

              {/* Message Box */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label
                  htmlFor="message"
                  className="text-[16px] font-inter text-black"
                >
                  Message / Query
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Message"
                  className="p-4 rounded-[8px] border-none focus:ring-2 focus:ring-[#2D4F46] outline-none resize-none bg-white"
                />
                <p className="text-[14px] text-gray-500">
                  Our team typically responds within 24-48 working hours.*
                </p>
              </div>

              {/* Footer and Submit */}
              <div className="md:col-span-2 flex justify-end items-center mt-4">
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

      <section className="bg-[#2D4A43] max-w-[1440px] mx-auto w-full relative py-12 md:py-16 px-6">
        <div className="max-w-[1240px] mx-auto">
          {/* Logic Fix: Changed 'grid' to 'flex flex-wrap' to allow centering of the last item.
      - w-full md:w-[calc(33.333%-16px)] simulates the 3-column grid behavior.
    */}
          <div className="flex flex-wrap justify-center gap-6">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="bg-white/10 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] min-h-[176px] border border-white/5 rounded-2xl px-6 py-6 flex flex-col transition-all hover:bg-white/[0.15]"
              >
                <h3 className="text-white text-[20px] md:text-[24px] font-inter font-semibold">
                  {card.title}
                </h3>

                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent mt-3 mb-4" />

                <div className="space-y-2">
                  {card.content.map((line, i) => (
                    <p
                      key={i}
                      className="text-gray-300 text-[15px] md:text-[16px] font-inter font-regular leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full max-w-[1440px] bg-white mx-auto overflow-hidden px-4 md:px-0">
        {/* 1. The Map Layer */}
        {/* 1. The Map Layer */}
        <iframe
          title="Office Location Map" // Add this line
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.850462612345!2d77.5900!3d12.9170!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1508a6b41f3f%3A0x8506172c010f38f4!2sAt-Work!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="mx-auto mt-10 w-full md:w-[1240px] h-[300px] md:h-[420px] grayscale-[20%] rounded-[16px] contrast-[90%]" // Example Tailwind classes
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* 2. The Floating Card Overlay */}
        <div
          className="
      /* Mobile: Relative positioning, full width, small margin */
      relative mt-2 mb-4 w-full h-auto 
      
      /* Desktop: Absolute positioning and fixed specs from your design */
      md:absolute md:mt-0 md:ml-0 md:z-10
      md:w-[364px] md:h-[140px] 
      md:top-[64px] md:left-[110px] 
      
      /* Styling */
      bg-[#e8fce8] p-6 rounded-[16px] shadow-md flex justify-between items-start 
      transition-all hover:shadow-lg opacity-100 rotate-0
    "
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-gray-900 leading-tight">
              SmartEdLabs
            </h2>
            <p className="text-sm text-gray-700 leading-snug max-w-[264px]">
              RSMJ Tower, 1794/5/26, 2nd Floor, 40th 'A' cross, Jayanagar 9th
              Block, near India Post, Bengaluru, Karnataka 560041
            </p>
          </div>

          {/* Action Button */}
          <button className="bg-[#c28500] hover:bg-[#a67100] p-2 rounded-full text-white transition-colors shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
