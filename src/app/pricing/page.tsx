"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Check, Minus, Plus } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
  const [showMobileMore, setShowMobileMore] = useState(false);
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
        <Navbar />
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
        <div className="relative z-20 flex flex-col max-w-[885px] mx-auto  items-center justify-center px-4 py-12 lg:py-0 flex-grow ">
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
            <div className=" inline-flex items-center gap-2 text-[#31564E] border border-gray-100 px-2 py-2 rounded-full shadow-sm mb-6">
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

            <h2 className="mx-auto max-w-[579px] text-center text-[40px] font-semibold leading-tight font-inter text-[#31564E] md:text-[40px]">
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
                <h3 className="text-[20px] font-bold text-gray-900 mb-4">
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
                  <h3 className="text-[20px] font-medium font-inter text-gray-900 mb-4">
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
                  <button className="w-full py-3.5 mt-auto active:scale-95 rounded-full bg-black text-white font-medium hover:bg-[#31564E]  transition-all">
                    Take Subscription
                  </button>
                </div>
              </div>

              {/* Yearly Plan */}
              <div className="lg:mt-2 min-h-[467px] w-full bg-white rounded-[32px] border border-gray-100 p-6 flex flex-col shadow-sm">
                <h3 className="text-[20px] font-bold text-gray-900 mb-4">
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

          {/* 2. Responsive Scroll Wrapper: This is the key for mobile */}
          <div className="w-full max-w-[1240px] overflow-x-auto pb-6 no-scrollbar">
            {/* 3. Main Container - Logic preserved, min-width ensures it doesn't break on small screens */}
            <div
              className="bg-[#31564E] rounded-[32px] relative flex flex-col pt-12 mx-auto min-w-[1240px] lg:min-w-full"
              style={{ height: "1004px" }}
            >
              <div className="grid grid-cols-4 h-full w-[1182px] mx-auto relative">
                {/* Labels Column */}
                <div className="flex flex-col h-full z-10">
                  <div className="h-40 border-b border-[#E6E6E6] flex items-end pb-8 px-8 md:px-8 text-[18px] font-semibold text-white">
                    Features
                  </div>
                  {featuresList.map((f, i) => (
                    <div
                      key={i}
                      className="flex-1 border-b border-white/10 flex items-center px-8 md:px-8 text-[16px] text-white opacity-80"
                    >
                      {f.title}
                    </div>
                  ))}
                  <div className="h-[140px]"></div>
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
                          height: "1004px", // Matches parent container height
                          left: "50%",
                          transform: "translateX(-50%)",
                        }}
                      >
                        <div
                          className="bg-[#C1FF72] flex flex-col items-center shadow-2xl w-full"
                          style={{
                            height: "850px",
                            borderRadius: "16px 16px 0px 0px",
                          }}
                        >
                          <div className="h-10 flex items-center gap-1 text-black text-[14px] font-bold tracking-widest">
                            <Image src="/star.png" alt="Star Icon" width={13} height={12} />
                            Recommended
                            <Image src="/star.png" alt="Star Icon" width={13} height={12} />
                          </div>

                          <div
                            className="bg-[#31564E]"
                            style={{
                              width: "calc(100% - 16px)",
                              height: "784px",
                              borderRadius: "16px 16px 32px 32px",
                            }}
                          />
                        </div>

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
                    <div className="relative z-10 flex flex-col h-full ">
                      <div className="h-40  flex flex-col justify-center items-center text-center border-b border-[#E6E6E6] ">
                        <span className={`text-[18px] md:text-[20px] mb-1 font-medium ${plan.highlight ? "text-white" : "text-white "}`}>
                          {plan.name}
                        </span>
                        <div className="text-[28px] md:text-[32px] font-bold text-white">
                          {plan.price}
                          <span className="text-[14px] font-normal opacity-60">
                            {plan.period}
                          </span>
                        </div>
                      </div>

                      {featuresList.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex-1 flex items-center justify-center border-b border-white/10"
                        >
                          {feature.values[pIdx] ? (
                            <Check className="text-[#2AFE00]" size={24} strokeWidth={3} />
                          ) : (
                            <X className="text-[#FF0000]" size={24} strokeWidth={2.5} />
                          )}
                        </div>
                      ))}

                      <div className="h-[140px] flex items-center justify-center px-4 lg:px-8">
                        <button
                          className={`w-full mb-12 py-4 rounded-full font-bold text-[14px] md:text-[16px] transition-transform active:scale-95 shadow-lg
                        ${plan.highlight ? "bg-black text-white hover:bg-[#31564E]" : "bg-white text-black hover:bg-[#31564E] hover:text-white"}`}
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


        </section>

        <section className="w-full max-w-[1440px] mx-auto relative  bg-[#F8FEFD] flex pt-20">
          <div className="w-full max-w-[1240px] mx-auto min-h-fit md:min-h-[480px] bg-black rounded-[24px] overflow-hidden flex flex-col md:flex-row items-center p-6 md:p-12 gap-8 md:gap-12">
            <div className="flex-1 space-y-6 text-white w-full">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-2 py-2 text-[14px] font-medium">
                <Image src="/cta.svg" alt="CTA" width={24} height={24} />
                <span>CTA</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl md:text-[32px] font-semibold font-roboto leading-tight">
                  Start Your English
                </h1>
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <div className="flex -space-x-4">
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
                  <h2 className="text-3xl md:text-[32px] font-semibold font-roboto">
                    Journey Today
                  </h2>
                </div>
              </div>

              <p className="text-white max-w-[500px] text-base md:text-[16px] leading-relaxed font-roboto">
                Join millions of learners improving their English with our proven
                immersive Method.
              </p>
              <button className="w-full md:w-[340px] bg-white text-[#31564E] cursor-pointer transition-all font-semibold px-6 py-4 rounded-full hover:bg-[#31564E] hover:text-white active:scale-95 transition-all text-base">
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

        <section className="max-w-[1440px] w-full mx-auto relative bg-[#F7FFFA] pt-20">
          <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
            <div className="w-full lg:max-w-[361px] flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white px-2 py-2 rounded-full border border-gray-200 mb-4 h-[40px]">
                <span className="bg-lime-400 p-1 rounded-full flex items-center justify-center">
                  <Image src="/faq.svg" alt="FAQ" width={24} height={24} />
                </span>
                <span className="text-[14px] font-medium">FAQs</span>
              </div>

              <h2 className="text-[28px] md:text-[40px] font-inter font-semibold text-gray-900 mb-8 leading-tight">
                Frequently Asked Questions!
              </h2>

              <div className="p-8 w-full max-w-[320px] lg:w-[295px] rounded-[24px] border border-gray-200 bg-[#F7FFFA]">
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

                <button className="text-[16px] mt-6 w-full cursor-pointer transition-all bg-black text-white  py-4 rounded-full font-semibold hover:bg-gray-800 transition-all active:scale-95">
                  Contact Us Now
                </button>
              </div>
            </div>

            <div className="flex-1 w-full lg:max-w-[715px]">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`border border-gray-100 rounded-3xl overflow-hidden shadow-sm transition-all duration-300 ${openIndex === index ? "bg-[#F7FFFA]" : "bg-[#F7FFFA]"
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
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index
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
        <Footer />
      </div>
    </div>
  );
}
