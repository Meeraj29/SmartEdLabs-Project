// app/features/page.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Plus, Minus } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import Head from 'next/head';
const inter = Inter({ subsets: ["latin"] });

export default function FeaturesPage() {
  const features = [
    { title: 'Intelligent Conversations', desc: 'Engage in realistic dialogues on any topic' },
    { title: 'Scalability', desc: 'Build software that grows with your business.' },
    { title: 'Reliability & Security', desc: 'Ensure robust and secure digital products.' },
    { title: 'Collaboration', desc: 'Work closely with clients for tailored solutions.' },
  ];

  const pathname = usePathname();
  const isOpene = false;
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Feature", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];
  const labCapabilities = [
    { title: "Learning", desc: "Build auditory comprehension through curated audio content designed sharpen accent recognition and contextual ...", image: "/learning.png" },
    { title: "Speaking", desc: "Strengthen pronunciation and fluency by actively speaking and repeating guided phrases with immediate corrective feedback.", image: "/speaking.png" },
    { title: "Reading", desc: "Develop comprehension and vocabulary through structured reading materials aligned to progressive difficulty levels.", image: "/reading.png" },
    { title: "Writing", desc: "Enhance written communication by practicing structured responses that reinforce grammar, clarity, and expression.", image: "/writing.png" },

  ];
  const labCapabilitiess = [
    { title: "Compare", desc: "Improve accuracy by comparing learner responses with model answers to identify gaps and ...", image: "/compare.png" },
    { title: "Role-Play", desc: "Apply language skills in practical, real-world scenarios through guided conversational ....", image: "/roleplay.png" },
    { title: "Exercises", desc: "Reinforce learning outcomes with targeted practice activities that assess understanding an...", image: "/exercise.png" },
  ];
  const cefrLevels = [
    { id: 'A1', label: 'Beginner', desc: 'Learners begin forming simple sentences and engaging in everyday interactions using familiar contexts.', action: 'Start A1' },
    { id: 'B1', label: 'Intermediate', desc: 'Learners gain the ability to express opinions, handle workplace scenarios, and understand structured content.', action: 'Start B1' },
    { id: 'C1-C2', label: 'Advanced & Proficiency', desc: 'Designed for near-native proficiency, this level emphasizes nuance, tone, and high-level comprehension.', action: 'Start C1-C2' },
    { id: 'A2', label: 'Elementary', desc: 'This level strengthens comprehension and enables learners to manage routine conversations with greater clarity.', action: 'Start A2' },
    { id: 'B2', label: 'Upper Intermediate', desc: 'This stage focuses on confident communication in academic and professional environments.', action: 'Start B2' },
    { id: 'C1-C3', label: 'IELTS & Career Lab', desc: 'This stage focuses on confident communication in academic and professional environments.', action: 'Start C1-C3' },
  ];
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const paths = [
    {
      title: "Foundation Modules",
      description: "Start your journey with alphabet mastery, pronunciation basics, and essential phrases that build your language foundation.",
      bgColor: "bg-[#FFEEEE]",
      textColor: "text-black",
      badgeColor: "bg-[#E6E6E6]",
      image: "/students.jpg", // Replace with your image path
    },
    {
      title: "Vocabulary Builde",
      description: "Expand your word power with thematic vocabulary lessons covering travel, business, academics, and everyday conversations. Practice with flashcards and spaced repetition.",
      bgColor: "bg-[#31564E]", // Darker green for the featured middle card
      textColor: "text-[#FFFFFF]",
      badgeColor: "bg-[#E6E6E6]/30",
      isFeatured: true,
      image: "/students.jpg",
    },
    {
      title: "Grammar Mastery",
      description: "Progress from basic sentence structures to advanced grammar concepts with rule-based examples and interactive exercises.",
      bgColor: "bg-[#D2E8E3]",
      textColor: "text-black",
      badgeColor: "bg-[#E6E6E6]",
      image: "/students.jpg",
    },
  ];
  const assessment = [
    { title: "Formative Assessment", desc: "Regular Check-Ins During Learning" },
    { title: "Summative Tests", desc: "End-Of-Module Comprehensive Exams" },
    { title: "Skill-Wise Evaluation", desc: "Separate LSRW Tracking" },
    { title: "Reattempt Options", desc: "Learn From Mistakes And Improve" },
    { title: "Auto-Graded Quizzes", desc: "Instant Results With Detailed Feedback" },
  ];
  const INSTRUCTOR_FEATURES = [
    { id: 1, text: "Automated scheduling and reminders" },
    { id: 2, text: "One-click join from dashboard" },
    { id: 3, text: "Batch-based class organization" },
    { id: 4, text: "Attendance tracking" },
    { id: 5, text: "Interactive Q&A sessions" },
    { id: 6, text: "Recorded sessions for review" },
  ];
  const unifiedPlatform = [
    { id: '01', title: 'AI-Assisted Language Practice' },
    { id: '02', title: 'Structured Curriculum & Instructor Enablement' },
    { id: '03', title: 'Student Enrollment & Attendance Management' },
    { id: '04', title: 'Learning Management System with Live Classes' },
    { id: '05', title: 'Digital Assessments & Evaluations' },
    { id: '06', title: 'Centralized Learning Resource Library' },
    { id: '07', title: 'Institutional Control & Reporting Layer' },
  ];
  const aimodule = [
    { title: "Grammar accuracy", desc: "sentence structure, tense usage, and correctness" },
    { title: "Fluency", desc: "flow, confidence, and response coherence" },
    { title: "Pronunciation & accent", desc: "clarity, stress, and articulation" },
  ];

  interface FeatureItem {
    title: string;
    imagePath: string;
    items: string[];
  }

  interface PillarData {
    left: FeatureItem[];
    right: FeatureItem[];
  }

  // --- Data Configuration ---
  const DATA: PillarData = {
    left: [
      {
        title: "Complete Branding",
        imagePath: "/degree.svg",
        items: ["Custom Logo Integration", "Personalized Platform Name", "Branded Color Themes", "Custom Domain Support"],
      },
      {
        title: "User Management",
        imagePath: "/degree.svg",
        items: ["Student Registration & Management", "Instructor Oversight", "Role-Based Access Control", "Admin Hierarchy"],
      },
    ],
    right: [
      {
        title: "Analytics & Reports",
        imagePath: "/degree.svg",
        items: ["Organization Dashboards", "Performance Tracking", "Completion Rates", "Revenue Analytics"],
      },
      {
        title: "Independent Monetization",
        imagePath: "/degree.svg",
        items: ["Set Your Own Pricing", "Subscription Plans", "Direct Payments", "Revenue Share Support"],
      },
    ],
  };

  const modules = [
    { title: "Phonetics & Sound Foundations", color: "bg-[#F2CEE2]" },
    { title: "Vocabulary & Language Building", color: "bg-[#B8D3D9]" },
    { title: "Grammar & Language Structure", color: "bg-[#F2E0C9]" },
    { title: "Conversational & Situational English", color: "bg-[#DCF2DE]" },
    { title: "Reading, Stories & Literature", color: "bg-[#F2D5E5]" },
    { title: "Media, Visual & Contemporary Content", color: "bg-[#F0F2DC]" },
    { title: "Speaking, Debate & Professional Communication", color: "bg-[#D8D8D6]" },
    { title: "Writing & Professional Readiness", color: "bg-[#E0D6D6]" },
  ];
  const profiles = ["/profile1.jpg", "/profile2.jpg", "/profile3.jpg", "/profile5.jpg", "/profile6.jpg"];
  // --- Sub-Components ---
  const FeatureBlock = ({ data, align }: { data: FeatureItem; align: 'left' | 'right' }) => (
    <div className={`flex flex-col mx-auto w-[296px] h-[164px] ${align === 'right' ? 'items-start lg:text-right' : 'items-start text-left'} mb-16 last:mb-0`}>
      {/* Header with Image */}
      <div className="flex items-center gap-2 bg-white px-1.5 py-1 rounded-full shadow-md border border-slate-100 mb-3 transition-transform hover:scale-105 cursor-default">
        <div className="relative w-[24px] h-[24px]">
          <Image
            src={data.imagePath}
            alt={data.title}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="font-semibold text-slate-800 text-[16px] md:text-base lg:text-[18px]">{data.title}</h3>
      </div>
      <div
        className={`hidden lg:block w-[296px] h-0 border-t  
    ${align === 'left' ? '' : ''}`}
        style={{
          borderImageSource: align === 'left'
            ? 'linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, #000000 100%)' // Fades in from left
            : 'linear-gradient(270deg, rgba(0, 0, 0, 0.1) 0%, #000000 100%)', // Fades in from right
          borderImageSlice: 1
        }}
      />



      {/* List */}
      <ul className="space-y-1 px-2">
        {data.items.map((item, i) => (
          <li
            key={i}
            className={`text-[16px] text-gray-700 flex items-center gap-2 
            ${align === 'left' ? 'lg:flex-row' : ''}`}
          >
            {/* The Dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-gray-700 flex-shrink-0" />

            {/* The Text */}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );


  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden min-h-[600px] lg:h-[578px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image src="/bg2.jpg" alt="Background" fill className="object-cover" priority />
          <div className="absolute inset-0 z-10 bg-white/60" />
        </div>

        <header className="w-full flex justify-center sticky top-0 z-50">
          <div className="w-full px-4 md:px-6 lg:px-[100px] h-[72px] lg:h-[96px] flex items-center justify-between">

            <div className="relative z-30 flex items-center gap-[12px]">
              <Image src="/logo.svg" alt="Logo" width={40} height={40} className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]" />
              <span className="text-black font-medium text-[18px] lg:text-[26px]" style={{ fontFamily: "Russo One" }}>
                SmartEdLabs
              </span>
            </div>

            <nav className="relative z-30 hidden lg:flex items-center px-5 py-2 rounded-full border border-gray-100 bg-white/80 backdrop-blur-md">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-6 py-2 rounded-full text-[14px] font-medium transition-all ${pathname === link.href ? "bg-white shadow-md text-[#31564E]" : "text-black hover:text-green-900"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>


            <div className="relative z-30 flex items-center gap-3">
              <button className="hidden lg:block px-8 h-[51px] rounded-full border-2 border-[#31564E] text-[#31564E] text-sm font-semibold transition-transform active:scale-95 hover:bg-[#31564E] hover:text-white">
                Book A Free Demo
              </button>
              <button className="hidden sm:block px-8 h-[51px] rounded-full bg-black text-white text-sm font-semibold transition-transform active:scale-95">
                Register
              </button>
              <button className="lg:hidden text-black p-2" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </header>


        <div className={`fixed inset-0 bg-white z-[100] transition-transform duration-300 flex flex-col lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <span className="font-bold text-lg">Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-4 p-6 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-6 py-4 text-center text-xl font-semibold rounded-full border-2 transition-all ${pathname === link.href
                  ? "bg-[#F7FFFA] border-[#31564E] text-[#31564E]"
                  : "bg-white border-gray-100 text-black"
                  }`}
              >
                {link.name}
              </Link>
            ))}


            <div className="flex flex-col gap-2 pt-4 border-t-2 border-gray-100">
              <button
                className="w-full h-[56px] rounded-full border-2 border-[#31564E] bg-[#31564E] text-white active:scale-95 text-lg font-bold transition-transform active:scale-95 hover:bg-[#31564E] hover:text-white"
                onClick={() => {

                  setIsOpen(false);
                }}>
                Book A Free Demo
              </button>
              <button
                className="w-full h-[56px] rounded-full bg-black text-white text-lg font-bold active:scale-95"
                onClick={() => setIsOpen(false)}>
                Register
              </button>


            </div>
          </nav>
        </div>



        <nav className="hidden md:flex items-center gap-[8px] px-4 lg:px-[100px] py-4 z-20">
          <a href="/" className="text-sm font-medium hover:text-blue-600">Home</a>
          <Image src="/mingcute_right-line.png" alt="Arrow" width={24} height={24} />
          <a href="/features" className="text-sm font-medium hover:text-blue-600">Features</a>
        </nav>


        <div className="relative z-20 flex flex-col items-center justify-center px-4 py-12 lg:py-0 flex-grow">
          <div className={`${inter.className} max-w-[1030px] w-full text-center`}>
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold  text-black tracking-tight">
              Built for learners. Trusted by institutions. Powered by intelligence.
            </h1>
            <p className="text-[16px] md:text-[18px] font-normal text-gray-800 max-w-[950px] mx-auto font-inter leading-tight tracking-tight">
              ILLP blends structured curriculum, expert-led instruction, and AI-powered practice to deliver measurable language outcomes—at individual and institutional scale.
            </p>
          </div>
        </div>
      </div>

      {/* --- FEATURES SECTION --- */}

      <div className="w-full max-w-[1440px] mx-auto bg-black relative z-10">
        <div className="absolute max-w-[1440px] inset-0 z-0 opacity-10">
          <Image src="/bg3.jpg" alt="Background" fill className="object-cover" priority />
        </div>

        <section className={`${inter.className} mx-auto w-full max-w-[1440px] min-h-[637px] overflow-hidden bg-[#F7FFFA] flex items-center justify-center z-10`}>
          <div className="px-4 sm:px-6 md:px-10 py-12 lg:py-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">

            <div className="relative w-full aspect-[4/3] max-w-[577px] mx-auto lg:w-[577px] lg:h-[450px] order-1 lg:order-2">
              <div className="absolute inset-0 bg-gray-200 rounded-[16px] overflow-hidden shadow-2xl">
                <Image
                  src="/roboman.jpg"
                  alt="AI Tutor Presentation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 w-full lg:max-w-[630px] lg:ml-16 order-2 lg:order-1">
              <div className="flex flex-col space-y-4 md:space-y-[16px]">

                <div className="flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full w-fit shadow-sm">
                  <Image src="/degree.svg" alt="Degree" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-[12px] md:text-[16px] font-medium font-inter text-gray-900">
                    AI-Powered Learning Revolution
                  </span>
                </div>


                <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold leading-tight md:leading-[54px] font-inter text-gray-900">
                  Meet Your 24/7 AI Language Tutor
                </h2>


                <p className="text-[14px] md:text-[16px] text-gray-800 leading-relaxed font-inter">
                  Experience breakthrough language learning with our GPT-powered AI tutor that adapts to your pace and style. Practice conversations naturally, receive instant pronunciation feedback, and track your fluency improvements in real-time.
                </p>


                <div className="space-y-4 md:space-y-[24px] mt-4">
                  {features.map((item, idx) => (
                    <div key={idx} className="pl-4 border-l-[2px] rounded-l-[6px] border-[#31564E] transition-colors">
                      <h3 className="font-semibold text-[15px] md:text-[16px] text-gray-900">{item.title}</h3>
                      <p className="text-gray-700 text-[14px] md:text-[16px]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* --- SECTION 2 --- */}
      <div className="w-full max-w-[1440px] mx-auto bg-black relative z-10">

        <div className="mx-auto max-w-screen-2xl ">
          <section className="py-16 px-4 md:px-10 bg-white">
            <div className="max-w-[1240px] mx-auto flex flex-col items-center">

              {/* Top Badge */}
              <div className="flex items-center gap-2 px-2 py-2 border border-gray-200 rounded-full w-fit">
                <Image src="/degree.svg" alt="Hat" width={24} height={24} />
                <span className="text-[16px] font-medium font-inter text-gray-900">Structured Learning Paths</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-[32px] lg:text-[40px] font-semibold text-center mt-6 text-gray-900 max-w-[763px] leading-tight">
                From Basics to Fluency: <span className="text-gray-600 font-normal font-inter text-[16px] lg:text-[32px]">Your Personalized Journey</span>
              </h2>


              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-4 items-stretch w-full pt-20">
                {paths.map((path, idx) => (
                  <div
                    key={idx}
                    style={{ opacity: 1 }}
                    className={`relative flex flex-col transition-transform hover:scale-[1.02]   p-4 gap-2 rounded-[24px] ${path.bgColor} ${path.isFeatured ? 'lg:h-[468px] lg:-mt-[52px] z-10 ' : 'lg:h-[416px] z-0'} h-auto min-h-[416px] w-full max-w-[402px] mx-auto`}>

                    <span className={`px-4 py-2 cursor-pointer rounded-full text-[14px] font-medium w-fit border border-gray-300 font-inter ${path.badgeColor} ${path.textColor}`}>
                      Learning Path
                    </span>


                    <div className="flex flex-col gap-4 px-2 mb-3 ">
                      <h3 className={`text-[24px] font-semibold font-inter leading-tight ${path.textColor}`}>
                        {path.title}
                      </h3>
                      <p className={`text-[17.5px] font-normal font-inter  leading-[26px] line-clamp-5 ${path.isFeatured ? 'text-gray-200' : 'text-gray-600'}`}>
                        {path.description}
                      </p>
                    </div>


                    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden h-full mt-auto">
                      <Image
                        src={path.image}
                        alt={path.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="min-h-screen bg-[#2D4A43] text-white p-8 md:p-20 font-sans">
          <div className="max-w-[1440px] mx-auto">


            <header className="mb-16 max-w-[1148px]">
              <div className="inline-flex items-center gap-2 px-2 py-2 rounded-full border border-white/60 bg-[#E6E6E6]/20 text-[16px] mb-8">
                <Image src="/degree.svg" alt="Hat" width={24} height={24} />
                <span className="font-normal font-inter text-[16px] ">Language Lab Features</span>
              </div>

              <h1 className="text-4xl md:text-[32px] lg:text-[40px] font-semibold leading-tight mb-8 text-white/70">
                How the <span className="font-semibold font-inter text-white">AI-Driven Language Lab Builds </span> <span className="text-white/70 font-semibold font-inter">Confident Communicators</span>
              </h1>

              <p className="text-white/80 text-[16px] font-normal font-inter leading-relaxed max-w-[1090px]">
                Our AI-Driven Language Lab operationalizes a proven Listen → Speak → Read → Write → Apply learning cycle, enhanced with intelligent feedback and guided practice. The outcome is a structured yet flexible environment where learners build confidence progressively, without cognitive overload. The platform supports 7 proficiency levels, ensuring continuity from foundational exposure to advanced communication mastery. Each interaction is measurable, repeatable, and aligned with real-world usage—bridging traditional pedagogy with modern technology.
              </p>
            </header>

            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-wrap justify-center gap-6">
                {labCapabilities.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-h-[300px] px-6 py-8 bg-white/10 border-2 border-white/30 rounded-[40px] backdrop-blur-md flex flex-col items-start gap-2 group hover:bg-white/15 transition-all duration-300"
                  >
                    {/* Image Container */}
                    <div className="w-20 h-20 md:w-24 md:h-24 cursor-pointer flex items-center justify-center overflow-hidden group-hover:border-white/50 transition-colors">
                      <div className="relative w-12 h-12 md:w-100 md:h-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 px-2">
                      <h3 className="text-[20px] md:text-[24px] font-semibold font-inter cursor-pointer">{item.title}</h3>
                      <p className="text-white/80 text-[14px] md:text-[16px] font-normal font-inter line-clamp-4 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 md:pt-4 flex flex-wrap justify-center gap-6">
                {labCapabilitiess.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-h-[275px] px-6 py-8 bg-white/10 border-2 border-white/30 rounded-[40px] backdrop-blur-md flex flex-col items-start gap-2 group hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 cursor-pointer flex items-center justify-center overflow-hidden group-hover:border-white/50 transition-colors">
                      <div className="relative w-12 h-12 md:w-100 md:h-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 px-2">
                      <h3 className="text-[20px] md:text-[24px] font-semibold font-inter cursor-pointer">{item.title}</h3>
                      <p className="text-white/80 text-[14px] md:text-[16px] font-normal font-inter leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <section className="py-12 md:py-16 px-4 md:px-6 lg:px-20 bg-white text-[#2D4A43]">
          <div className="max-w-[1440px] mx-auto">

            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 text-black text-[16px] font-inter mb-4">
                <Image src="/degree.svg" alt="Degree" width={24} height={24} className="mr-2" />
                Levels
              </div>
              <h2 className="text-[32px] md:text-[40px] font-inter leading-tight font-semibold mb-4">
                CEFR Learning Path
              </h2>
              <p className="max-w-[941px] mx-auto text-[16px] text-gray-600 font-inter px-4">
                A structured, internationally aligned learning framework that guides learners from foundational language skills to advanced proficiency, with integrated exam preparation and career readiness for real-world success.
              </p>
            </div>

            <div className="bg-[#2D4A43] w-full max-w-[1240px] mx-auto rounded-[24px] overflow-hidden flex flex-col lg:flex-row text-white p-6 lg:p-10">

              <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[588px] h-[300px] lg:h-[340px] rounded-[16px] overflow-hidden border border-white/10">
                  <Image
                    src="/student2.png"
                    alt="Student"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="lg:w-1/2 px-2 md:px-8 w-full h-fit max-w-[588px] min-h-fit lg:h-[340px] flex flex-col justify-center gap-6 mt-8 lg:mt-0">

                <div className="inline-flex items-center gap-2 w-fit max-w-[209px] h-[40px] px-3 py-1 rounded-full bg-[#E6E6E6]/20 border border-white/60">
                  <span className="bg-[#C5FF3F] text-black text-[14px] font-inter font-bold w-[64px] h-[24px] px-2 py-0.5 rounded-[12px] flex items-center justify-center">
                    Pre-A1
                  </span>
                  <span className="text-[14px] font-inter font-normal whitespace-nowrap">Foundation Level</span>
                </div>

                <p className="px-2 text-[16px] md:text-[18px] font-normal opacity-90 leading-relaxed font-inter">
                  Designed for absolute beginners, this level builds confidence from day one by focusing on sounds, letters, and everyday expressions.
                </p>

                <button
                  className="mt-10 lg:mt-20 w-full lg:w-full px-4 md:px-1 lg:px-50 py-3 bg-black text-white rounded-full font-medium font-inter text-[14px] md:text-[16px] whitespace-nowrap flex justify-center items-center hover:bg-gray-900 transition-all active:scale-[0.98]"
                >
                  Start Pre-A1
                </button>
              </div>
            </div>


            <div className="mt-10 w-full max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cefrLevels.map((level, idx) => (
                <div key={idx} className="border border-[#E6E6E6]/80 p-8 rounded-[32px] flex flex-col justify-between gap-6 hover:shadow-lg transition-shadow bg-white">
                  <div className="flex flex-col gap-4">
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-[#E6E6E6]/80 w-fit">
                      <span className="bg-[#C5FF3F] text-black text-[14px] font-inter px-3 py-0.5 rounded-full font-normal font-inter">
                        {level.id}
                      </span>
                      <span className="text-[14px] font-inter text-black font-normal font-inter pr-2">
                        {level.label}
                      </span>
                    </div>
                    <p className="text-gray-600 text-[16px] font-inter font-normal font-inter leading-relaxed">
                      {level.desc}
                    </p>
                  </div>

                  <button className="w-full text-[16px] font-inter font-medium border-2 border-[#2D4A43] text-[#2D4A43] py-3 rounded-full hover:bg-[#2D4A43] hover:text-white transition-all active:scale-[0.95]">
                    {level.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>



        <section className="relative min-h-[600px] w-full flex flex-col items-center justify-center bg-black text-white px-6 py-16 overflow-hidden">
          {/* Background Image / Overlay */}
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="/brainstrom.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />

          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-[1240px] w-full  text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-[#E6E6E6]/40 bg-[#E6E6E6]/40 backdrop-blur-md mb-8">
              <Image src="/degree.svg" alt="Degree" width={24} height={24} />
              <span className="text-[16px] font-medium font-inter tracking-wider">Comprehensive Assessment System</span>
            </div>

            {/* Heading */}
            <h2 className="text-[32px] md:text-[40px] font-semibold mb-4 leading-[1.2] font-inter">
              Track Progress with Intelligent <br className="hidden md:block" /> Assessments
            </h2>
            <p className="text-gray-400 max-w-[650px]  mx-auto mb-16 text-[14px] md:text-[16px] font-inter leading-relaxed">
              Move beyond guesswork with our multi-layered assessment engine that evaluates every aspect of your language proficiency.
            </p>
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mx-auto ">
              {assessment.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl border border-white/10 bg-white/5 min-w-[241px] cursor-pointer backdrop-blur-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-left flex flex-col justify-between min-h-[160px]"
                >
                  <div>

                    <h3 className="text-[18px] font-medium font-inter mb-3  pb-2  group-hover:border-white/50 transition-colors">
                      {feature.title}
                    </h3>
                    <div
                      className="mb-[12px]"
                      style={{
                        width: '193.4px',
                        height: '0px',
                        opacity: 1,
                        borderTop: '1px solid',
                        borderImageSource: 'linear-gradient(270deg, rgba(255, 255, 255, 0.1) 0%, #FFFFFF 100%)',
                        borderImageSlice: 1
                      }}
                    />
                    <p className="text-[16px] font-normal font-inter text-gray-400 leading-relaxed ">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="w-full px-4 py-12 flex justify-center bg-white">
          {/* Changed max-h to min-h-fit so it expands on mobile, and relative to allow image positioning */}
          <div className="max-w-[1240px] w-full min-h-fit lg:min-h-[500px] bg-[#2D4A43] mx-auto rounded-[24px] overflow-hidden flex flex-col lg:flex-row p-8 lg:p-12 gap-8 relative">

            {/* Left Content Side */}
            <div className="w-full lg:w-[613px] flex flex-col justify-center text-white z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-[1px] border-white/30 bg-[#E6E6E6]/10 w-fit mb-4">
                <Image src="/degree.svg" alt="Degree" width={20} height={20} />
                <span className="text-sm md:text-[16px] font-inter font-normal">Live Interactive Classes</span>
              </div>

              {/* Typography */}
              <h2 className="text-[28px] md:text-[40px] font-semibold font-inter mb-4 leading-tight">
                Learn from Expert Instructors in Real-Time
              </h2>
              <p className="text-gray-300 text-sm md:text-[17px] font-inter max-w-[613px] mb-8 leading-relaxed">
                Complement your self-paced learning with live instructor-led sessions. Our seamless Google Meet integration brings classroom experience to your screen.
              </p>

              {/* Checklist Grid - Kept your logic exactly as is */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[8px] w-full max-w-[613px]">
                {INSTRUCTOR_FEATURES.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 h-[50px] relative after:absolute after:bottom-0 after:left-0 after:w-full md:after:w-[calc(200%+8px)] after:h-[1px] after:bg-[#E6E6E633] odd:after:block even:after:hidden md:even:after:hidden border-b border-[#E6E6E633] md:border-none">
                    <div className="flex-shrink-0 w-[14px] h-[22px]">
                      <img
                        src="/tick4.png"
                        alt="tick"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm md:text-[16px] font-inter font-medium text-gray-200">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Side - Responsive absolute positioning */}
            <div className="relative mt-8 w-full h-[300px] lg:absolute lg:mt-0 lg:top-[39px] lg:left-[728px] lg:w-[482px] lg:h-[422px]"><div className="w-full h-full rounded-[16px] overflow-hidden"><img
              src="/student3.jpg"
              alt="Student in live class"
              className="object-cover w-full h-full"
            />
            </div>
            </div>

          </div>
        </section>


        <section className="min-h-screen bg-white p-6 md:p-12 lg:p-24">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start gap-6">
            <div className="flex-1 w-full">
              <div className="mb-12">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-[#E6E6E6] text-base font-medium text-black mb-2">
                  <Image src="/degree.svg" alt="Degree" width={24} height={24} />
                  Unified Platform Capabilities
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold lg:max-w-[650px] text-gray-900 mb-2 tracking-tight leading-tight">
                  All-in-One Language Infrastructure
                </h1>
                <p className="text-gray-600 text-base md:text-[16px] font-normal font-inter lg:max-w-[650px] ">
                  A single platform that consolidates academic delivery, practice, administration,
                  and assessment—without fragmentation.
                </p>
              </div>


              <div className="w-full lg:max-w-[800px] ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 ">
                  {unifiedPlatform.map((feature) => (
                    <div
                      key={feature.id}
                      className="flex items-center p-6 lg:p-8 bg-white border border-[#E6E6E6] rounded-xl shadow-sm transition-shadow hover:shadow-md h-24 md:h-28 lg:h-[100px]"
                    >
                      <span className="text-3xl md:text-[42px] font-bold font-poppins text-[#31564EB2] mr-6 shrink-0">
                        {feature.id}
                      </span>
                      <p className="font-semibold text-gray-700 text-base md:text-[18px] font-inter leading-snug">
                        {feature.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>







            <div className="mt-20 lg:mt-40 relative w-[90vw] h-[90vw] max-w-[400px] max-h-[400px] flex items-center justify-center mx-auto">

              <div className="absolute z-0 w-[88%] h-[83%] transition-all duration-500">
                <div className="absolute inset-10 bg-black/70 blur-[40px] lg:blur-[70px] rounded-full z-[-1]" />
                <Image src="/blue.svg" alt="Background Glow" fill className="object-contain" priority />
              </div>


              <div className="absolute z-10 w-[68%] h-[63%] transition-transform duration-500 rotate-8.46deg top-0">
                <Image src="/robohi.png" alt="AI Robot" fill className="object-contain" priority />
              </div>


              <div className="absolute z-20 pointer-events-none w-[72%] h-[15%] bottom-[15%] lg:bottom-34">
                <Image src="/blur.svg" alt="Mist Effect" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </section>


        <section className="relative max-[1440px] bg-[#fcfdfa] overflow-hidden py-10 px-6">

          {/* Background Image Layer at 10% opacity */}
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="/bg4.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="max-w-[763px] mx-auto text-center mb-10 z-20 relative">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-1.5 py-1.5 shadow-sm border border-slate-50 mb-6">
              <Image src="/degree.svg" alt="Degree" width={32} height={32} />
              <span className="text-[16px] font-normal font-inter ">For Institutions - White-Label Solution</span>
            </div>
            <h1 className="text-4xl md:text-[30px] lg:text-[40px] font-semibold text-slate-900 mb-4  tracking-relaxed">
              Master All Four  Language Pillars
            </h1>
            <p className="text-gray-800 lg:text-[16px] md:text-[14px]  font-normal font-inter  mx-auto max-w-[700px] leading-relaxed">
              Transform your institution into a language learning powerhouse with our complete white-label solution. Get your own branded platform with zero technical hassle.
            </p>
          </div>

          {/* --- CONNECTING LINES SVG (Desktop Only) --- */}


          <div className="max-w-[1240px] z-20 w-full mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 items-center relative">

            <div className="flex flex-col z-20 lg:items-start">
              {DATA.left.map((item, idx) => (
                <FeatureBlock key={idx} data={item} align="left" />
              ))}


            </div>
            {/* Center Pillar Image */}
            <div className="relative flex justify-center items-center py-2 lg:py-4  w-[370px] h-[370px] border-[1px] border-black rounded-full z-20">
              <div className="relative  w-[350px] h-[350px] rounded-full overflow-hidden border-[1px] border-black rounded-full shadow-2xl z-20">
                {/* Main Center Image */}
                <Image
                  src="/pexel.jpg"
                  alt="Language Pillars"
                  fill
                  className="object-cover brightness-[0.4]"
                />
                {/* Center Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-center p-2 lg:p-10 z-20">
                  <h2 className="text-white text-2xl md:text-[28px] lg:text-[32px] font-semibold font-inter leading-tight drop-shadow-md">
                    Master All Four <br /> Language Pillars
                  </h2>
                </div>
              </div>
            </div>


            {/* Right Features */}
            <div className="flex flex-col  lg:items-start z-20">
              {DATA.right.map((item, idx) => (
                <FeatureBlock key={idx} data={item} align="right" />
              ))}
            </div>
          </div>

        </section>


        <section className="bg-white py-16 px-6 md:px-12 lg:px-24 ">
          {/* Header section based on the screenshot */}
          <div className="text-center max-w-[865px] mx-auto mb-16">
            <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-1 py-1 mb-6 shadow-sm">
              <Image src="/degree.svg" alt="Degree" width={24} height={24} />
              <span className="text-[16px] font-semibold font-inter text-black">Language Lab Features</span>
            </div>
            <h2 className="text-3xl md:text-[40px] font-inter font-semibold text-gray-900 mb-4">Structured Practice. Measurable Progress.</h2>
            <p className="text-gray-800 leading-relaxed tracking-wide text-[12px] md:text-[16px]  font-inter ">
              The ILLP Language Lab is designed as a comprehensive digital practice environment that supports core language skills through guided exercises, real-time evaluation, and instructor oversight.
            </p>
          </div>

          {/* Grid container: No outer borders here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1240px] w-full mx-auto">

            {/* ITEM 1 - Top Left: Split Right and Bottom */}
            <div className="p-8 md:p-10 border-[#E6E6E6] border-b md:border-r lg:border-r lg:border-b flex flex-col items-start">
              <div className="w-14 h-14 bg-[#2D4A43] rounded-full flex items-center justify-center mb-6">
                <div className="relative w-85 h-88">
                  <Image src="/compare2.png" alt="Icon" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-[24px] font-inter font-semibold text-gray-800 mb-3">Interactive Exercises</h3>
              <p className="text-gray-700 text-[16px] font-inter leading-relaxed tracking-wide">Each exercise is auto-evaluated with instant scoring, ensuring immediate clarity on performance. Upon completion, students receive:</p>
            </div>

            {/* ITEM 2 - Top Middle: Split Right and Bottom */}
            <div className="p-8 md:p-10 border-[#E6E6E6] border-b lg:border-r lg:border-b flex flex-col items-start">
              <div className="w-14 h-14 bg-[#2D4A43] rounded-full flex items-center justify-center mb-6">
                <div className="relative w-85 h-88">
                  <Image src="/reading2.svg" alt="Icon" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-[24px] font-inter font-semibold text-gray-800 mb-3">Reading Comprehension</h3>
              <p className="text-gray-700 text-[16px] font-inter leading-relaxed tracking-wide">The reading module strengthens comprehension through carefully curated passages aligned with lesson objectives. Learners develop:</p>
            </div>

            {/* ITEM 3 - Top Right: Split Bottom Only (on Desktop) */}
            <div className="p-8 md:p-10 border-[#E6E6E6] border-b md:border-r lg:border-r-0 lg:border-b flex flex-col items-start">
              <div className="w-14 h-14 bg-[#2D4A43] rounded-full flex items-center justify-center mb-6">
                <div className="relative w-85 h-88">
                  <Image src="/writing2.svg" alt="Icon" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-[24px] font-inter font-semibold text-gray-800 mb-3">Writing Practice</h3>
              <p className="text-gray-700 text-[16px] font-inter leading-relaxed tracking-wide">Writing exercises are aligned with the active lesson or module, helping learners structure thoughts logically, express ideas clearly, improve grammatical accuracy.</p>
            </div>

            {/* ITEM 4 - Bottom Left: Split Right Only (on Desktop) */}
            <div className="p-8 md:p-10 border-[#E6E6E6] border-b md:border-r-0 lg:border-r lg:border-b-0 flex flex-col items-start">
              <div className="w-14 h-14 bg-[#2D4A43] rounded-full flex items-center justify-center mb-6">
                <div className="relative w-85 h-88">
                  <Image src="/speaking2.png" alt="Icon" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-[24px] font-inter font-semibold text-gray-800 mb-3">Speaking Practice</h3>
              <p className="text-gray-700 text-[16px] font-inter leading-relaxed tracking-wide ">This creates a low-pressure environment where learners can practice speaking freely, gradually building confidence, fluency, and articulation.</p>
            </div>

            {/* ITEM 5 - Bottom Middle: Split Right Only (on Desktop) */}
            <div className="p-8 md:p-10 border-[#E6E6E6] border-b md:border-b-0 md:border-r lg:border-r flex flex-col items-start">
              <div className="w-14 h-14 bg-[#2D4A43] rounded-full flex items-center justify-center mb-6">
                <div className="relative w-85 h-88">
                  <Image src="/practice.png" alt="Icon" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-[24px] font-semibold font-inter text-gray-800 mb-3">Vocabulary Practice</h3>
              <p className="text-gray-700 text-[16px] font-inter leading-relaxed tracking-wide">Vocabulary sessions focus on key words and phrases drawn directly from lesson content. Through targeted exercises, learners reinforce:</p>
            </div>

            {/* ITEM 6 - Bottom Right: No Internal Borders */}
            <div className="p-8 md:p-10 flex flex-col items-start ">
              <div className="w-14 h-14 bg-[#2D4A43] rounded-full flex items-center justify-center mb-6">
                <div className="relative w-85 h-88">
                  <Image src="/assingment.png" alt="Icon" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-[24px] font-semibold font-inter text-gray-800 mb-3">Assignments & Homework</h3>
              <p className="text-gray-700 text-[16px] font-inter leading-relaxed tracking-wide">Instructors can assign structured homework directly through the platform. Assignments Retention through repetition</p>
            </div>

          </div>
        </section>


        {/* 1. Added 'mx-auto' and 'rounded' to the main section for better containerization */}
        <section className="bg-[#2D4A43] p-6 md:p-12 lg:p-16 max-w-[1440px] w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-10 ">

          {/* Left Side: Image */}
          {/* We use flex-1 and max-w-none on mobile, but specific max-w on desktop */}
          <div className="w-full lg:flex-1 lg:max-w-[600px] flex-shrink-0">
            <div className="relative aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
              <Image
                src="/discuss.png"
                alt="Two people discussing performance"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side: Content */}
          {/* Changed w-full to flex-1 on desktop so it balances with the image on iPad Pro */}
          <div className="w-full lg:flex-1 lg:max-w-[560px] flex flex-col justify-center text-white">

            {/* White-Label Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E6E6E6]/20 border border-[#E6E6E6]/40 rounded-full px-3 py-1.5 text-[14px] md:text-[16px] font-medium w-fit mb-4 md:mb-6">
              <Image src="/degree.svg" alt="Degree" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6" />
              <span className="pr-2">For Institutions - White-Label Solution</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-[40px] font-semibold font-inter leading-tight mb-4 md:mb-6">
              Intelligent Practice with Real-Time Performance Insights
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm md:text-base lg:text-[16px] font-inter leading-relaxed tracking-wide">
              The AI-based evaluation module enables learners to engage in structured,
              natural conversations that closely simulate real-world communication.
              Designed to complement traditional language training methods, this module
              accelerates skill development through continuous practice and immediate feedback.
            </p>

            {/* Divider - Placed at bottom as per your code */}
            <div className="w-full h-[1px] bg-[#CBD5E1]/30 mt-6 md:mt-8"></div>
          </div>

        </section>



        <section className="max-w-[1440px] mx-auto px-4 py-16 bg-white">
          {/* Video/Hero Card Container */}
          <div className="relative w-full max-w-[1240px] h-[473px] mx-auto aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-xl bg-black">

            {!isPlaying ? (
              /* PREVIEW STATE */
              <>
                <img
                  src="/iframe2.png"
                  alt="Groover Success Story"
                  /* Added absolute and inset-0 to ensure it fills the container perfectly */
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 z-10">
                  <button
                    onClick={() => setIsPlaying(true)}
                    /* We keep the flex and centering classes so the image stays perfectly in the middle */
                    className="relative w-24 h-24 md:w-[308px] md:h-[308px] rounded-full flex items-center justify-center mb-6 cursor-pointer hover:scale-110 transition-all group overflow-hidden"
                  >
                    <Image
                      src="/Play.png" // Path to your play button image in the /public folder
                      alt="Play Video"
                      width={308}  // Matches the desktop size (20 * 4)
                      height={308}
                      className="object-contain"
                    />


                  </button>

                  <p className="text-[28px] font-semibold font-poppins leading-tight font-medium max-w-[503px]">
                    See how we helped Groover to grow 11x faster
                  </p>

                </div>
              </>
            ) : (
              /* ACTIVE STATE */
              <div className="absolute inset-0 w-full h-full">
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-6 right-6 z-[60] bg-black/50 hover:bg-black cursor-pointer text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-white/20"
                >
                  ✕
                </button>

                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                  title="Success Story Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            )}
          </div>



          {/* Features/Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1240px] mx-auto ">
            {/* Card 1 */}
            <div className="border-l-4 border-[#31564E] pl-6 max-w-[344px] bg-[linear-gradient(90deg,#F2F2F2_0%,rgba(242,242,242,0.1)_100%)]">
              <h3 className="text-[24px] font-semibold font-inter text-gray-900 mb-3">
                Reliable and learner-focused
              </h3>
              <p className="  font-inter text-gray-600 leading-relaxed text-[16px] max-w-[344px]">
                From course structure to assessments, everything feels thoughtfully designed. This is not just another learning app; it’s a dependable platform for long-term skill development.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-l-4 border-[#31564E] pl-6 max-w-[344px] bg-[linear-gradient(90deg,#F2F2F2_0%,rgba(242,242,242,0.1)_100%)]">
              <h3 className="text-[24px] font-semibold font-inter text-gray-900  mb-3">
                Clear progress, real results
              </h3>
              <p className="font-inter text-gray-600 leading-relaxed text-[16px] max-w-[344px]">
                The dashboard and progress tracking gave me clarity on where I stood and what to focus on next. It’s reassuring to learn on a platform that values discipline and consistency, not shortcuts.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border-l-4 border-[#31564E] pl-6 max-w-[344px] bg-[linear-gradient(90deg,#F2F2F2_10%,rgba(242,242,242,0.1)_100%)]">
              <h3 className="text-[24px] font-semibold font-inter text-gray-900 mb-3">
                Technology used with purpose
              </h3>
              <p className="font-inter text-gray-600 leading-relaxed text-[16px] max-w-[344px]">
                The AI tutor isn’t just a feature—it genuinely supports improvement in speaking and pronunciation. It feels like a modern solution built on traditional teaching principles.
              </p>
            </div>
          </div>
        </section>



        <section className="min-h-screen bg-white py-12 px-4 font-sans text-gray-800">
          {/* Header Section */}
          <header className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-1 px-1 py-1.5 rounded-full border border-gray-200 text-[16px] font-inter font-medium mb-6">
              <Image src="/degree.svg" alt="Degree" width={24} height={24} /> Modules
            </div>
            <h1 className="text-4xl md:text-[40px] font-inter font-semibold mb-6">Learning Modules Framework</h1>
            <p className="text-gray-500 leading-relaxed max-w-[941px] mx-auto text-[16px] font-inter font-medium">
              ILLP follows a progressive, level-based curriculum where each level consists of 10–25 focused modules, and each module contains multiple lessons, practice activities, and assessments.
            </p>
          </header>

          {/* Modules Container */}
          <div className="max-w-[1240px] mx-auto relative px-4">
            {/* The Dotted Line (Desktop only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full  z-10 pointer-events-none" />

            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-2 lg:gap-4 ">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className={`
                ${module.color} 
                w-full sm:w-[45%] lg:w-[138.38px]  
                h-48 lg:h-[371px] 
                rounded-[50px] lg:rounded-full  
                flex items-center justify-center 
                p-6 relative z-20 
                shadow-sm hover:shadow-md transition-shadow
                cursor-default
              `}
                >
                  <h3 className="
                text-center font-semibold text-sm md:text-base lg:text-[20px] font-inter
                lg:[writing-mode:vertical-rl] lg:rotate-180 
              ">
                    {module.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#2D4A43] max-w-[1440px] mx-auto min-h-screen p-8 md:p-16 flex items-center justify-center">
          <div className="  max-w-[1240px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Left Content Column */}
            <div className="text-white space-y-4 max-w-[610px]">
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 border-[1px] border-[#E6E6E6]/40 bg-[#E6E6E6]/40 px-2 py-2 rounded-full text-[16px] font-inter font-medium">
                <Image src="/degree.svg" alt="Degree" width={24} height={24} />
                <span>AI Instructor / AI Tutor Module</span>
              </div>

              <h1 className="text-4xl md:text-[40px] font-semibold font-inter">How It Works</h1>

              <p className="text-gray-200 text-[16px] font-inter leading-relaxed tracking-wide">
                Learners can independently select real-world communication topics such as “Asking permission for leave”, “Handling workplace conversations”, or “Everyday social interactions.” Once a topic is chosen, the AI Tutor initiates an interactive, two-way dialogue, simulating a natural classroom conversation.
              </p>

              {/* Feature List */}
              <div className="space-y-4 ">
                {aimodule.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-[#CCF1E966] backdrop-blur-sm border border-white/5 p-4 rounded-full max-w-[610px] h-[48px]"
                  >

                    <Image src="/tick5.png" alt="Tick" width={32} height={32} />

                    <p className="text-sm md:text-[16px] font-inter text-gray-200">
                      <span className="font-medium text-[16px] font-inter text-white">{feature.title}</span> – {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Column */}
            <div className="relative h-[400px] md:w-[600px] md:h-[450px] w-full">
              <img
                src="/teacher.jpg" // Replace with your image path
                alt="AI Tutor Classroom"
                className="rounded-[40px] w-full h-full object-cover shadow-2xl"
              />
            </div>

          </div>
        </section>



        <section className="w-full py-8 md:py-12 px-4 flex justify-center bg-white">
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
                      <div key={index} className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black overflow-hidden shadow-sm">
                        <Image src={src} alt="Student" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-[42px] font-semibold font-roboto">
                    Journey Today
                  </h2>
                </div>
              </div>

              <p className="text-gray-400 max-w-[500px] text-base md:text-lg leading-relaxed font-roboto">
                Join millions of learners improving their English with our proven immersive Method.
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
        <footer className="pb-10 py-12 px-4 md:px-10 font-sans max-w-[1440px] w-full bg-white">
          <div className=" mx-auto border border-gray-300 bg-[#E5E5E5] max-w-[1240px] rounded-[24px] p-6 md:p-10">

            <div className="bg-white rounded-[24px] p-6 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
              <div className="max-w-full lg:max-w-[316px] text-center lg:text-left">
                <h2 className="text-[24px] font-inter font-semibold text-gray-900 mb-2">Stay Updated</h2>
                <p className="text-gray-500 text-[16px] font-inter font-medium">
                  Subscribe to get the latest lessons, updates and special offers
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
                  <h3 className="text-[26px] font-inter font-normal">SmartEdLabs</h3>
                </div>
                <p className="text-gray-600 text-[16px] font-inter font-normal mb-8 max-w-[363px] tracking-wide">
                  An AI-powered English learning platform helping students, educators, and organizations build strong listening, speaking, reading, and writing skills.
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
                  <h4 className="font-inter font-medium text-[16px] mb-4">Quick Links</h4>
                  <ul className="space-y-3 text-[14px] font-inter font-normal text-gray-700">
                    <li className="hover:text-black cursor-pointer transition-colors">Home</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Features</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Pricing</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Blogs</li>
                    <li className="hover:text-black cursor-pointer transition-colors">About Us</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Contact Us</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-inter font-medium text-[16px] mb-4">Solutions</h4>
                  <ul className="space-y-3 text-[14px] font-inter font-normal text-gray-800">
                    <li className="hover:text-black cursor-pointer transition-colors">For Students</li>
                    <li className="hover:text-black cursor-pointer transition-colors">For Schools & Colleges</li>
                    <li className="hover:text-black cursor-pointer transition-colors">For Institutions</li>
                    <li className="hover:text-black cursor-pointer transition-colors">For Corporate Training</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-inter font-medium text-[16px] mb-4">Resources</h4>
                  <ul className="space-y-3 text-[14px] font-inter font-normal text-gray-800">
                    <li className="hover:text-black cursor-pointer transition-colors">Help Center</li>
                    <li className="hover:text-black cursor-pointer transition-colors">User Guides</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Terms of Service</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Privacy Policy</li>
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

      </div >


    </div >



  );
}