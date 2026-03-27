"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Minus, Plus } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });
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

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Feature", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blogs", href: "/blogs" },
  { name: "About Us", href: "/about" },
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
const articles = [
  {
    title: "How to Improve Spoken English Without Fear?",
    description:
      "Simple techniques to build speaking confidence and practice English naturally without hesitation.",
    date: "March 12, 2026",
    category: "Speaking Skills",
    image: "/b1.jpg", // Replace with your actual file names
  },
  {
    title: "Common Grammar Mistakes That Hold Learners Back",
    description:
      "A clear breakdown of frequent grammar errors and how to avoid them in daily communication.",
    date: "March 08, 2026",
    category: "Grammar & Writing",
    image: "/b2.jpg",
  },
  {
    title: "Effective Listening Skills for Better English Understanding",
    description:
      "Learn how to train your ear to understand accents, speed, and real-world conversations.",
    date: "March 05, 2026",
    category: "Listening",
    image: "/b3.jpg",
  },
  {
    title: "Vocabulary Building Techniques That Actually Work",
    description:
      "Practical methods to remember and use new English words confidently in real situations.",
    date: "February 28, 2026",
    category: "Vocabulary",
    image: "/b4.jpg", // Replace with your actual file names
  },
  {
    title: "English Communication Skills Every Student Needs",
    description:
      "Essential English skills required for exams, presentations, and academic success.",
    date: "February 22, 2026",
    category: "Grammar & Writing",
    image: "/b5.jpg",
  },
  {
    title: "How to Improve Spoken English Without Fear?",
    description:
      "Simple techniques to build speaking confidence and practice English naturally without hesitation.",
    date: "March 12, 2026",
    category: "Speaking Skills",
    image: "/b1.jpg", // Replace with your actual file names
  },
  {
    title: "Common Grammar Mistakes That Hold Learners Back",
    description:
      "A clear breakdown of frequent grammar errors and how to avoid them in daily communication.",
    date: "March 08, 2026",
    category: "Grammar & Writing",
    image: "/b2.jpg",
  },
  {
    title: "Effective Listening Skills for Better English Understanding",
    description:
      "Learn how to train your ear to understand accents, speed, and real-world conversations.",
    date: "March 05, 2026",
    category: "Listening",
    image: "/b3.jpg",
  },
  {
    title: "Vocabulary Building Techniques That Actually Work",
    description:
      "Practical methods to remember and use new English words confidently in real situations.",
    date: "February 28, 2026",
    category: "Vocabulary",
    image: "/b4.jpg", // Replace with your actual file names
  },
];

export default function BlogsPage() {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [_isPlaying, _setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileMore, setShowMobileMore] = useState(false);
  const categories = [
    "All",
    "Speaking",
    "Grammar & Writing",
    "Listening & Pronunciation",
    "Vocabulary",
    "AI & Language Learning",
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
          <a href="/blogs" className="text-sm font-medium hover:text-blue-600">
            Blogs
          </a>
        </nav>

        <div className="relative z-20 flex flex-col max-w-[829px] mx-auto  items-center justify-center px-4 py-12 lg:py-0 flex-grow">
          <div className="flex items-center justify-center px-1 py-1 bg-white text-black rounded-[20px] gap-1 border border-gray-200">
            <Image src="/blogs.png" alt="Blogs" width={24} height={24} />

            <span className="text-[14px] font-medium">Blogs & Articles</span>
          </div>
          <div className={`${inter.className}  w-full text-center`}>
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold font-inter text-black tracking-tight">
              Practical Insights for Better
              <span className="text-[#31564E]"> English Communication</span>
            </h1>
            <p className="text-[16px] md:text-[18px] font-normal text-gray-800 max-w-[599px] mx-auto font-inter tracking-tight">
              Practical tips, expert guidance, and learning strategies to
              improve speaking, writing, listening, and reading skills.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto  bg-black relative z-10">
        <section className="w-full bg-[#F4F7FF] h-[1750px] h-auto pb-20 px-4 md:px-12">
          {/* Search and Filter Header */}
          <div className="max-w-7xl mx-auto pt-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <h2 className="text-[32px] md:text-[40px] font-semibold font-inter max-w-[672px] leading-tight">
                Latest <span className="text-[#31564E]">Articles</span> on
                Learning <span className="text-[#FF7F38]">English</span>
              </h2>
              <div className="relative w-full md:w-auto">
                <Image
                  src="/search.png"
                  alt="Search"
                  width={24}
                  height={24}
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                />
                <input
                  type="text"
                  placeholder="Search for blogs"
                  className="bg-[#EFEFEF] border-none rounded-[12px] py-4 px-6 pl-12 w-full md:w-[400px] text-[16px] font-normal outline-none text-[#7E7E7E]"
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center items-center w-full mx-auto">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`px-5 py-1 rounded-full text-[14px] md:text-[16px] font-medium border transition-colors ${i === 0 ? "bg-white border-gray-300" : "bg-transparent border-gray-200 text-black hover:bg-white"}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid - Centered on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[24px] w-full max-w-[400px] h-auto min-h-[456px] p-6 shadow-sm hover:shadow-md transition-all group"
                >
                  {/* Image Container - Responsive Width */}
                  <div className="relative aspect-[1.5/1] overflow-hidden w-full max-w-[352px] mx-auto h-[240px] rounded-[24px] mb-5">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 352px"
                      className="object-cover group-hover:scale-110 ease-in-out transition-transform duration-900"
                    />
                  </div>

                  {/* Text Content - Responsive Width */}
                  <div className="w-full max-w-[352px] mx-auto min-h-[145px] flex flex-col justify-between opacity-100 rotate-0 px-2 gap-[8px]">
                    <div>
                      <h3 className="text-[18px] font-semibold font-inter text-[#000000] mb-1 tracking-wide leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-black text-[14px] font-regular font-inter line-clamp-2 tracking-wide">
                        {article.description}
                      </p>
                    </div>

                    {/* Footer Metadata */}
                    <div className="flex justify-between items-center pt-2 border-t border-[#E6E6E6] mt-auto">
                      <span className="text-[11px] md:text-[12px] font-normal font-inter text-black tracking-wide">
                        {article.date}
                      </span>
                      <span className="text-[11px] md:text-[12px] font-normal font-inter text-black tracking-wide">
                        Category:{" "}
                        <span className="text-[#000000CC] font-medium text-[13px] md:text-[14px]">
                          {article.category}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end mt-12 mb-20">
            <div className="flex items-center justify-center w-[328px] h-[48px] gap-[8px] opacity-100 rotate-0">
              {/* Previous Button */}
              <button className="btn-prev flex items-center justify-center w-[48px] h-[48px] bg-black text-white rounded-full hover:bg-gray-800 hover:scale-85  ease-in-out transition-colors shadow-md">
                <Image
                  src="/leftarrow.png"
                  alt="Arrow Left"
                  width={48}
                  height={48}
                />
              </button>

              {/* Page 1 (Active) */}
              <button className="flex items-center justify-center w-[48px] h-[48px] border-2 border-[#2D4A43] text-[#2D4A43] font-semibold rounded-full bg-white">
                1
              </button>

              {/* Page 2 */}
              <button className="flex items-center justify-center w-[48px] h-[48px] border border-gray-100 text-gray-900 font-medium rounded-full bg-white hover:bg-gray-50 transition-colors">
                2
              </button>

              {/* Ellipsis */}
              <div className="flex items-center justify-center w-[48px] h-[48px] text-gray-400 font-medium">
                ...
              </div>

              {/* Last Page (9) */}
              <button className="flex items-center justify-center w-[48px] h-[48px] border border-gray-100 text-gray-900 font-medium rounded-full bg-white hover:bg-gray-50 transition-colors">
                9
              </button>

              {/* Next Button */}
              <button className="btn-next flex items-center justify-center w-[48px] h-[48px] bg-black text-white rounded-full hover:bg-gray-800 hover:scale-85 ease-in-out transition-colors shadow-md">
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
