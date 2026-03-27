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
export default function Page() {
  // 1. Add the <HTMLInputElement> type argument
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const _handleContainerClick = () => {
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
  const categories = [
    "Content creators and influencers",
    "English trainers and educators Culture",
    "Consultants and partners",
    "Bloggers and website owners",
    "Digital marketers and agencies",
    "Individuals with strong networks",
  ];
  const steps = [
    {
      id: "1",
      title: "Sign Up As An Affiliate",
      desc: "Register And Get Access To Your Affiliate Account.",
      dark: false,
    },
    {
      id: "2",
      title: "Get Your Referral Link",
      desc: "Receive A Unique Tracking Link For Referrals.",
      dark: false,
    },
    {
      id: "3",
      title: "Promote Our Platform",
      desc: "Share Your Link Through Websites, Social Media, Or Direct Outreach.",
      dark: false,
    },
    {
      id: "4",
      title: "Track Performance",
      desc: "Monitor Clicks, Leads, And Conversions In Real Time.",
      dark: true,
    },
    {
      id: "5",
      title: "Earn Commissions",
      desc: "Get Paid For Every Successful Enrollment Through Your Referrals.",
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
            src="/bg11.jpg"
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
            href="/affiliate"
            className="text-sm font-medium hover:text-blue-600"
          >
            Become a Affiliate
          </a>
        </nav>
        <div className="relative z-20 flex flex-col max-w-[1030px] mx-auto items-center justify-center px-4 py-12 lg:py-0 flex-grow">
          <div className={`${inter.className} w-full text-center`}>
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] mt-30 md:mt-40 font-semibold font-inter text-black leading-tight">
              Earn by Promoting Quality English Learning
            </h1>

            {/* Logic Fix: Changed w-[834px] to w-full max-w-[834px] so it shrinks on mobile */}
            <p className="text-[16px] md:text-[18px] font-normal text-gray-800 w-full max-w-[834px] mt-4 mx-auto font-inter leading-tight">
              Join our affiliate program and earn commissions by referring
              learners and institutions to a trusted English learning platform.
            </p>

            {/* Logic Fix: Changed h-[51px] to min-h-[51px] to accommodate vertical stacking */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-[16px] z-30 mt-10 min-h-[51px] w-full max-w-[406px] md:max-w-none mx-auto">
              <button className="w-full md:w-[189px] h-[51px] bg-black text-white rounded-full font-semibold text-[16px] transition-all hover:bg-[#31564E] active:scale-95 shadow-lg">
                Join as an Affiliate
              </button>

              <button className="w-full md:w-[150px] h-[51px] border-2 border-[#31564E] text-[#31564E] rounded-full font-semibold text-[16px] transition-all hover:bg-[#31564E] hover:text-white active:scale-95 bg-white/50 backdrop-blur-sm">
                How It Works
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
              <div className=" overflow-hidden rounded-tl-[16px] rounded-tr-[48px] rounded-br-[16px] rounded-bl-[48px]">
                <Image
                  src="/laptop1.jpg"
                  alt="Work"
                  width={352}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Right - Circle */}
              <div className="flex-1 aspect-square rounded-full overflow-hidden border-2 md:border-4 border-yellow-400 flex-shrink-0">
                <Image
                  src="/des.jpg"
                  alt="Icons"
                  width={240}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* BOTTOM ROW: Square Leaf + Large Leaf */}
            <div className="flex w-full h-auto gap-3 md:gap-[20px]">
              {/* Bottom Left - Square Leaf */}
              <div className="flex-1 aspect-square overflow-hidden border-2 border-yellow-400 rounded-tl-[16px] rounded-tr-[48px] rounded-br-[16px] rounded-bl-[48px]">
                <Image
                  src="/laptop2.jpg"
                  alt="Typing"
                  width={240}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right - Large Leaf */}
              <div className="flex-[1.4] aspect-[352/240] overflow-hidden rounded-tl-[16px] rounded-tr-[48px] rounded-br-[16px] rounded-bl-[48px]">
                <Image
                  src="/laptop3.jpg"
                  alt="Education"
                  width={352}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="w-full max-w-[564px] mx-auto">
            <div className="inline-flex items-center gap-2 p-2 px-4 h-[40px] rounded-full border border-gray-200 bg-gray-50">
              <Image src="/degree.svg" alt="" width={24} height={24} />
              <span className="text-sm md:text-[16px] font-inter font-medium text-black">
                Who Can Become an Affiliate
              </span>
            </div>

            <h2 className="text-3xl md:text-[40px] font-inter font-semibold text-gray-900 leading-tight mt-4">
              Open to Individuals and Organizations With Reach
            </h2>

            <p className="text-gray-600 text-[16px] font-inter mt-4 leading-relaxed">
              Our affiliate program is designed for anyone who can genuinely
              <br className="lg:block hidden" /> recommend quality English
              learning to the right audience.
            </p>

            {/* Responsive divider */}
            <div className="border-b border-[#E6E6E6] w-full mt-6" />

            <div className="space-y-4 pt-6">
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

      <section className="bg-[#F3F3F3] py-12 md:py-16 px-4 flex flex-col items-center text-center max-w-[1440px] w-full mx-auto relative">
        {/* Header */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-4 h-[40px] rounded-full border border-gray-300 bg-white text-[16px] font-regular font-roboto mb-4">
            <Image src="/work.png" alt="" width={24} height={24} />
            How It Works
          </span>
          <h2 className="text-3xl md:text-[40px] font-semibold font-roboto text-black mb-4 px-2 max-w-[800px] leading-tight">
            Start Earning in a Few Simple Steps
          </h2>
          <p className="text-[16px] font-roboto font-regular max-w-[630px] text-gray-600 px-4">
            Our affiliate program is designed to be easy to join, simple to
            promote, and transparent to track.
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

        {/* CTA Button */}
        <button className="mt-10 md:mt-12 bg-black text-white w-[200px] h-[51px] rounded-full font-semibold hover:bg-gray-800 transition-all active:scale-95 shadow-md">
          Register Now
        </button>
      </section>

      <section className="min-h-screen bg-white flex items-center max-w-[1440px] mx-auto w-full relative justify-center p-4 md:p-6">
        <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Info Cards */}
          <div className="flex flex-col gap-[14px] items-center lg:items-start">
            {/* Green Card */}
            <div className="bg-[#2D4F46] text-white p-4 w-full max-w-[404px] min-h-[280px] h-auto rounded-[16px] shadow-sm flex flex-col justify-center">
              <h1 className="text-[32px] md:text-[48px] font-inter font-bold mb-4 px-2 leading-tight">
                Still Have Questions?
              </h1>
              <p className="text-gray-300 font-inter text-[16px] px-3">
                If you need more information before applying, our team is here
                to help. Share your details and we’ll get back to you shortly.
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

              <ul className="space-y-3 ">
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
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-1">
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
                  className="text-[16px] font-inter font-regular text-black"
                >
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
                  className="text-[16px] font-inter font-regular text-black"
                >
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
                  className="text-[16px] font-inter font-regular text-black"
                >
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
                  htmlFor="message"
                  className="text-[16px] font-inter font-regular text-black"
                >
                  Message / Query
                </label>
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="p-3 rounded-[8px] border-none focus:ring-2 focus:ring-[#2D4F46] outline-none resize-none bg-white min-h-[149px]"
                />
                <p className="text-[14px] font-inter font-regular text-gray-500">
                  Our team typically responds within 24–48 working hours.”
                </p>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-6 flex justify-end">
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
