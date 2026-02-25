"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Check, Minus, Plus } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const faqs = [
  {
    question: "What is this platform and who is it for?",
    answer:
      "It’s an AI-powered English learning platform designed for students, institutions, schools, colleges, and corporate training programs.",
  },
  {
    question: "What English skills does the platform focus on?",
    answer:
      "The platform develops Listening, Speaking, Reading, and Writing skills through structured courses, AI practice, and live classes.",
  },
  {
    question: "Do I need prior English knowledge to start?",
    answer:
      "No. Courses are available from beginner to advanced levels, and learners are guided based on their current proficiency.",
  },
  {
    question: "How does the AI-powered tutor help?",
    answer:
      "The AI tutor provides real-time feedback on pronunciation, grammar, and sentence structure while allowing learners to practice without hesitation.",
  },
  {
    question: "Are live classes mandatory?",
    answer:
      "No. Live classes are optional but recommended for learners who want guided practice and real-time interaction with certified teachers.",
  },
];

const supportTeam = [
  { id: 1, src: "/man1.png", alt: "Support member 1" },
  { id: 2, src: "/man2.jpg", alt: "Support member 2" },
  { id: 3, src: "/man3.jpg", alt: "Support member 3" },
];
const profiles = [
  "/profile1.jpg",
  "/profile2.jpg",
  "/profile3.jpg",
  "/profile5.jpg",
  "/profile6.jpg",
];
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Feature", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blogs", href: "/blogs" },
  { name: "About Us", href: "/about" },
];

const plans = [
  { name: "Monthly Plan", price: "₹999", period: "/month", highlight: false },
  {
    name: "Quarterly",
    price: "₹2,699",
    period: "/3months",
    highlight: true,
    recommended: true,
  },
  { name: "Yearly Plan", price: "₹8,999", period: "/Year", highlight: false },
];

const featuresList = [
  { title: "Full access to English courses", values: [true, true, true] },
  { title: "LSRW skill-based modules", values: [true, true, true] },
  { title: "AI-powered practice tutor", values: [true, true, true] },
  { title: "Progress tracking & assessments", values: [true, true, true] },
  { title: "Live instructor-led classes", values: [false, true, true] },
  { title: "Personalized learning path", values: [false, true, true] },
  { title: "Priority learner support", values: [false, true, true] },
  { title: "Community & support access", values: [true, true, true] },
  { title: "Unlimited live classes", values: [false, false, true] },
  { title: "Advanced progress analytics", values: [false, false, true] },
  { title: "Certificate of completion", values: [false, false, true] },
  { title: "Best value savings", values: [false, true, true] },
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

const _registerLinks: NavLink[] = [{ label: "Register", href: "/register" }];

const inter = Inter({ subsets: ["latin"] });
export default function PricingPage() {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [_isPlaying, _setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden min-h-[600px] lg:h-[578px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg5.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-10 bg-white/60" />
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
                  className={`px-6 py-2 rounded-full text-[14px] font-medium transition-all ${
                    pathname === link.href
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
              className={`fixed inset-0 bg-white z-50 transition-transform duration-300 flex flex-col lg:hidden ${
                isOpen ? "translate-x-0" : "translate-x-full"
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
        ${
          pathname === link.href
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

              <nav className="flex items-center gap-6 p-4">
                {navLinks.map((link) => {
                  // Check if the link is a registration link to apply button styling
                  const isRegister = link.name.startsWith("Register");

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={
                        isRegister
                          ? "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all shadow-sm"
                          : "text-gray-600 hover:text-blue-600 transition-colors font-medium"
                      }
                    >
                      {link.name}
                    </Link>
                  );
                })}
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
        <div className="hidden md:flex items-center gap-[8px] px-4 lg:px-[100px] py-4 z-20">
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
            href="/pricing"
            className="text-sm font-medium hover:text-blue-600"
          >
            Pricing
          </a>
        </div>
        <div className="relative z-20 flex flex-col max-w-[885px] mx-auto mb-30 items-center justify-center px-4 py-12 lg:py-0 flex-grow">
          <div className={`${inter.className}  w-full text-center`}>
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold font-inter text-black tracking-tight">
              Flexible Plans Designed for Real Learning Progress
            </h1>
            <p className="text-[16px] md:text-[18px] font-normal text-gray-800 max-w-[885px] mx-auto font-inter tracking-tight">
              Choose a subscription that aligns with your goals—self-paced
              learning, AI practice, and live expert guidance, all in one
              platform.
            </p>
          </div>
        </div>{" "}
      </div>
      <div className="w-full max-w-[1440px] mx-auto bg-black relative z-10">
        <section className="bg-[#F7FFFA] py-16 px-4 md:px-10 min-h-screen flex flex-col items-center">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center max-w-[800px] mb-12 md:mb-16 mx-auto">
            <div className="inline-flex items-center gap-2 text-[#31564E] border border-gray-100 px-2 py-2 rounded-full shadow-sm mb-6">
              <Image
                src="/pricing.svg"
                alt="Pricing"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-[16px] font-inter font-medium text-gray-700">
                Pricing
              </span>
            </div>

            <h2 className="mx-auto max-w-[579px] text-center text-[28px] font-semibold leading-tight font-inter text-[#31564E] md:text-[40px]">
              Simple Plans
              <span className="text-black"> That Grow With Your</span>
              {/* Use a block/inline-block span for the colored text */}
              <span className="text-[#FF7F38]"> Learning</span>
            </h2>

            <p className="text-[#000000CC] text-[16px] md:text-[18px] max-w-[650px] leading-relaxed  mt-4">
              Choose a plan that fits your pace and goals, with full access to
              structured courses, AI practice, and live learning support.
            </p>
          </div>

          {/* Pricing Cards Container */}
          <div className="w-full max-w-[1108px] mx-auto bg-white rounded-[24px] p-6 md:p-[24px] flex flex-col shadow-sm">
            {/* Grid Logic: Stacked on mobile, 3-cols on LG. Increased gap for mobile spacing */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center lg:items-end">
              {/* Monthly Plan */}
              <div className="lg:mt-2 min-h-[467px] w-full bg-white rounded-[32px] border border-gray-100 p-6 flex flex-col shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Monthly Plan
                </h3>
                <div className="flex items-baseline gap-1 mb-6 border-b border-gray-100 pb-4">
                  <span className="text-[32px] font-semibold">₹999</span>
                  <span className="text-gray-500 text-[14px]">/Month</span>
                </div>
                <ul className="space-y-5 flex-grow mb-6">
                  {[
                    "Full access to all English courses",
                    "AI-powered practice tutor",
                    "LSRW skill-based learning modules",
                    "Progress tracking and assessments",
                    "Community and support access",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Image
                        src="/tick2.svg"
                        alt="Tick"
                        width={16}
                        height={16}
                        className="mt-1 flex-shrink-0 object-contain"
                      />
                      <span className="font-inter text-gray-700 text-[15px] md:text-[16px] leading-snug">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3.5 mt-auto active:scale-95 rounded-full border-2 border-[#31564E] text-[#31564E] font-medium hover:bg-[#31564E] hover:text-white transition-all">
                  Take Subscription
                </button>
              </div>

              {/* Quarterly (Middle Recommended Card) */}
              <div className="min-h-[516px] w-full bg-[#C1F1A1] rounded-[32px] p-2 flex flex-col relative lg:scale-105 z-10 shadow-lg">
                <div className="h-[45px] flex items-center justify-center gap-2 text-[14px] font-bold text-gray-900">
                  <Image src="/star.png" alt="star" width={13} height={12} />{" "}
                  Recommended{" "}
                  <Image src="/star.png" alt="star" width={18} height={18} />
                </div>
                <div className="bg-white h-full rounded-[24px] p-6 flex flex-col">
                  <h3 className="text-xl font-medium font-inter text-gray-900 mb-4">
                    Quarterly
                  </h3>
                  <div className="flex items-baseline gap-1 mb-6 border-b border-gray-100 pb-4">
                    <span className="text-[32px] font-semibold">₹2,699</span>
                    <span className="text-gray-500 text-[14px]">/3months</span>
                  </div>
                  <ul className="space-y-5 flex-grow mb-6">
                    {[
                      "Everything in Monthly Access",
                      "Live instructor-led classes",
                      "Personalized learning",
                      "Priority learner support",
                      "Community and support access",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Image
                          src="/tick2.svg"
                          alt="Tick"
                          width={16}
                          height={16}
                          className="mt-1 flex-shrink-0 object-contain"
                        />
                        <span className="font-inter text-gray-700 text-[15px] md:text-[16px] leading-snug">
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3.5 mt-auto active:scale-95 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-all">
                    Take Subscription
                  </button>
                </div>
              </div>

              {/* Yearly Plan */}
              <div className="lg:mt-2 min-h-[467px] w-full bg-white rounded-[32px] border border-gray-100 p-6 flex flex-col shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Yearly Plan
                </h3>
                <div className="flex items-baseline gap-1 mb-6 border-b border-gray-100 pb-4">
                  <span className="text-[32px] font-semibold">₹8,999</span>
                  <span className="text-gray-500 text-[14px]">/Year</span>
                </div>
                <ul className="space-y-5 flex-grow mb-6">
                  {[
                    "Everything in Quarterly Growth",
                    "Unlimited live classes",
                    "Advanced progress analytics",
                    "Certificate of completion",
                    "Best value savings",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Image
                        src="/tick2.svg"
                        alt="Tick"
                        width={16}
                        height={16}
                        className="mt-1 flex-shrink-0 object-contain"
                      />
                      <span className="font-inter text-gray-700 text-[15px] md:text-[16px] leading-snug">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3.5 mt-auto active:scale-95 rounded-full border-2 border-[#31564E] text-[#31564E] font-medium hover:bg-[#31564E] hover:text-white transition-all">
                  Take Subscription
                </button>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 text-gray-800 font-medium">
            <div className="flex items-center gap-2">
              <Image
                src="/tick3.png"
                alt="Tick"
                width={18}
                height={18}
                className="object-contain"
              />
              <span>No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/tick3.png"
                alt="Tick"
                width={18}
                height={18}
                className="object-contain"
              />
              <span>Pause or cancel anytime</span>
            </div>
          </div>
        </section>

        <section className="bg-[#F7FFFA] py-10 md:py-20 flex flex-col items-center font-inter px-4">
          {/* 1. Header Section - Responsive Text Sizes */}
          <div className="text-center mb-8 md:mb-12 max-w-[518px] mx-auto">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-gray-900 mb-4 leading-tight">
              Compare Plans at a Glance
            </h2>
            <p className="text-gray-600 text-[15px] md:text-[16px] leading-[22px] md:leading-[24px]">
              All plans include secure payments, transparent billing, and the
              flexibility to pause or cancel anytime.
            </p>
          </div>

          {/* 2. Responsive Scroll Wrapper: Prevents squishing on mobile */}
          <div className="w-full max-w-[1240px]  pb-6 ">
            {/* 3. Main Container - Fixed height preserved, width becomes fluid with a minimum */}
            <div
              className="bg-[#31564E] rounded-[32px] relative flex flex-col pt-12 mx-auto min-w-[1000px] lg:min-w-full"
              style={{ height: "1004px" }}
            >
              <div className="grid grid-cols-4 h-full w-full relative">
                {/* Labels Column */}
                <div className="flex flex-col h-full z-10">
                  <div className="h-40 border-b border-white/10 flex items-end pb-8 px-8 md:px-10 text-[18px] font-semibold text-white">
                    Features
                  </div>
                  {featuresList.map((f, i) => (
                    <div
                      key={i}
                      className="flex-1 border-b border-white/10 flex items-center px-8 md:px-10 text-[16px] text-white opacity-80"
                    >
                      {f.title}
                    </div>
                  ))}
                  <div className="h-[140px]"></div> {/* Footer Spacer */}
                </div>

                {/* Plan Columns */}
                {plans.map((plan, pIdx) => (
                  <div key={pIdx} className="relative flex flex-col h-full">
                    {/* QUARTERLY HIGHLIGHT LAYER */}
                    {plan.highlight && (
                      <div
                        className="absolute z-0 flex flex-col items-center"
                        style={{
                          width: "100%",
                          maxWidth: "295px",
                          top: "-10px",
                          height: "1004px",
                          left: "50%",
                          transform: "translateX(-50%)",
                        }}
                      >
                        {/* TOP PART: The Feature Highlight Card */}
                        <div
                          className="bg-[#C1FF72] flex flex-col items-center shadow-2xl w-full"
                          style={{
                            height: "850px",
                            borderRadius: "16px 16px 0px 0px",
                          }}
                        >
                          {/* Recommended Badge */}
                          <div className="h-10 flex items-center gap-1 text-black text-[12px] font-bold  tracking-widest">
                            <span>★</span> Recommended <span>★</span>
                          </div>

                          {/* INNER DARK LAYER */}
                          <div
                            className="bg-[#31564E]"
                            style={{
                              width: "calc(100% - 16px)", // Maintains consistent lime border
                              height: "784px",
                              borderRadius: "16px 16px 32px 32px",
                            }}
                          />
                        </div>

                        {/* NEW BOTTOM PART: Separate rounded base */}
                        <div
                          className="bg-[#C1FF72] w-full"
                          style={{
                            height: "60px",
                            borderRadius: "0px 0px 16px 16px",
                          }}
                        />
                      </div>
                    )}

                    {/* THE CONTENT LAYER */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header Section */}
                      <div className="h-40 flex flex-col justify-center items-center text-center border-b border-white/10 px-4">
                        <span
                          className={`text-[18px] md:text-[20px] mb-1 font-medium ${plan.highlight ? "text-white" : "text-white opacity-80"}`}
                        >
                          {plan.name}
                        </span>
                        <div className="text-[28px] md:text-[32px] font-bold text-white">
                          {plan.price}
                          <span className="text-[14px] font-normal opacity-60">
                            {plan.period}
                          </span>
                        </div>
                      </div>

                      {/* Status Icon Rows */}
                      {featuresList.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex-1 flex items-center justify-center border-b border-white/10"
                        >
                          {feature.values[pIdx] ? (
                            <Check
                              className="text-[#C1FF72]"
                              size={24}
                              strokeWidth={3}
                            />
                          ) : (
                            <X
                              className="text-red-500/40"
                              size={24}
                              strokeWidth={2.5}
                            />
                          )}
                        </div>
                      ))}

                      {/* Footer Button Section */}
                      <div className="h-[140px] flex items-center justify-center px-6 md:px-8">
                        <button
                          className={`w-full mb-12 py-4 rounded-full font-bold text-[15px] md:text-[16px] transition-transform active:scale-95 shadow-lg
                                    ${plan.highlight ? "bg-black text-white hover:bg-gray-900" : "bg-white text-black hover:bg-gray-100"}`}
                        >
                          Take Subscription
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Swipe Hint (Optional) */}
          <p className="text-gray-400 text-xs mt-2 block lg:hidden">
            Swipe to see more plans →
          </p>
        </section>

        <section className="w-full py-8 md:py-12 px-4 flex justify-center bg-[#F7FFFA]">
          <div className="w-full max-w-[1240px] min-h-fit md:min-h-[480px] bg-black rounded-[24px] overflow-hidden flex flex-col md:flex-row items-center p-6 md:p-12 gap-8 md:gap-12">
            <div className="flex-1 space-y-6 text-white w-full">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-2 py-1 text-[14px] font-medium">
                <Image src="/cta.svg" alt="CTA" width={20} height={20} />
                <span>CTA</span>
              </div>

              <div className="space-y-2">
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
                Join millions of learners improving their English with our
                proven immersive Method.
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

        <section className="pb-10 py-16 px-6 md:px-20 bg-[#F7FFFA]">
          <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
            <div className="w-full lg:max-w-[361px] flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-full border border-gray-200 mb-4 h-[40px]">
                <span className="bg-lime-400 p-1 rounded-full flex items-center justify-center">
                  <Image src="/faq.svg" alt="FAQ" width={20} height={20} />
                </span>
                <span className="text-sm font-medium">FAQs</span>
              </div>

              <h2 className="text-[28px] md:text-[32px] font-inter font-semibold text-gray-900 mb-8 leading-tight">
                Frequently Asked Questions!
              </h2>

              <div className="p-8 w-full max-w-[320px] lg:w-[295px] rounded-[24px] border border-gray-200 bg-white">
                <h3 className="text-[20px] font-inter font-medium">
                  Still Have Questions?
                </h3>
                <p className="text-gray-500 text-[16px] font-inter mt-2 ">
                  Contact us now, we're here to help you
                </p>

                <div className="mt-6 flex justify-center lg:justify-start -space-x-2">
                  {supportTeam.map((member) => (
                    <div
                      key={member.id}
                      className="w-10 h-10   overflow-hidden shrink-0"
                    >
                      <img
                        src={member.src}
                        alt={member.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full cursor-pointer transition-all bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-all active:scale-95">
                  Contact Us Now
                </button>
              </div>
            </div>

            <div className="flex-1 w-full lg:max-w-[715px]">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`border border-gray-100 rounded-3xl overflow-hidden shadow-sm transition-all duration-300 ${
                      openIndex === index ? "bg-[#F7FFFA]" : "bg-white"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="cursor-pointer transition-all text-[15px] md:text-[16px] font-inter font-medium text-gray-800 pr-4">
                        {faq.question}
                      </span>
                      <span className="shrink-0 text-gray-500 cursor-pointer transition-all">
                        {openIndex === index ? (
                          <Minus size={20} />
                        ) : (
                          <Plus size={20} />
                        )}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openIndex === index
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <p className=" cursor-pointer transition-all text-[15px] md:text-[16px] font-inter text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <footer className="pb-10 py-12 px-4 md:px-10 font-sans max-w-[1440px] w-full bg-[#F7FFFA]">
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
