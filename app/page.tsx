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



















export default function Page() {
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
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('Home');
  const links = ["Home", "Features", "Pricing", "Blogs", "About Us", "Contact Us"];

  const profiles = ["/profile1.jpg", "/profile2.jpg", "/profile3.jpg", "/profile5.jpg", "/profile6.jpg"];

  const courses = [{ title: "Foundation English", level: "Beginner", badgeColor: "bg-[#E1FEE4] text-black", hoverColor: "hover:bg-[#E1FEE4]/80", image: "course1.png", description: "Build a strong base in vocabulary, grammar, and everyday English communication." },
  { title: "Core Communication Skills", level: "Elementary", badgeColor: "bg-[#FFE3D3] text-black", hoverColor: "hover:bg-[#FFE3D3]/80", image: "course2.jpg", description: "Improve sentence formation, listening clarity, and basic speaking confidence." },
  { title: "Fluency Builder", level: "Intermediate", badgeColor: "bg-[#FCE4FF] text-black", hoverColor: "hover:bg-[#FCE4FF]/80", image: "course3.jpg", description: "Strengthen speaking flow, comprehension, and real-world conversational skills." },
  { title: "Professional Level English", level: "Advanced", badgeColor: "bg-[#E5F2FF] text-black", hoverColor: "hover:bg-[#E5F2FF]/80", image: "course4.png", description: "Master professional communication, presentations, and advanced writing skills." }
  ];

  const testimonialData = [{ id: 1, name: "Ravi K.", role: "Corporate Training Manager", image: "/student21.jpg", quote: "We needed a structured English training solution for our teams. The platform made it easy to track progress and deliver consistent learning across batches." },
  { id: 2, name: "Ananya R.", role: "College Student", image: "/student22.jpg", quote: "Speaking English confidently was my biggest challenge. The AI practice and live classes helped me improve without feeling judged, and I can clearly see the progress." },
  { id: 3, name: "Arjun P.", role: "Working Professional", image: "/student23.jpg", quote: "I liked that I could practice anytime with the AI tutor and still attend live classes for real conversations. It fits perfectly into a busy schedule." },
  { id: 4, name: "Dr. Meera S.", role: "Academic Coordinator", image: "/student24.jpg", quote: "The combination of self-paced modules and live sessions works extremely well for students. It supports classroom teaching without adding extra pressure." }
  ];
  const faqs = [
    { question: "What is this platform and who is it for?", answer: "It’s an AI-powered English learning platform designed for students, institutions, schools, colleges, and corporate training programs." },
    { question: "What English skills does the platform focus on?", answer: "The platform develops Listening, Speaking, Reading, and Writing skills through structured courses, AI practice, and live classes." },
    { question: "Do I need prior English knowledge to start?", answer: "No. Courses are available from beginner to advanced levels, and learners are guided based on their current proficiency." },
    { question: "How does the AI-powered tutor help?", answer: "The AI tutor provides real-time feedback on pronunciation, grammar, and sentence structure while allowing learners to practice without hesitation." },
    { question: "Are live classes mandatory?", answer: "No. Live classes are optional but recommended for learners who want guided practice and real-time interaction with certified teachers." },
  ];

  const supportTeam = [{ id: 1, src: "/man1.png", alt: "Support member 1" }, { id: 2, src: "/man2.jpg", alt: "Support member 2" }, { id: 3, src: "/man3.jpg", alt: "Support member 3" },];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const cards = [
    {
      title: "AI-Powered Personalized Practice",
      desc: "Practice speaking, listening, reading, and writing with real-time AI feedback tailored to your skill.",
      icon: "/ai.svg",
      pos: "lg:top-[2%] lg:left-[5%]"
    },
    {
      title: "Designed for Individuals and Institutions",
      desc: "Equally effective for personal learning and large-scale academic or corporate programs.",
      icon: "/design.svg",
      pos: "lg:bottom-[36%] lg:left-[5%]"
    },
    {
      title: "Complete LSRW Skill Development",
      desc: "Every course is designed to strengthen listening, speaking, reading, and writing equally.",
      icon: "/skill.svg",
      pos: "lg:top-[2%] lg:right-[5%]"
    },
    {
      title: "Live Learning with Certified Teachers",
      desc: "Get expert guidance through interactive live sessions focused on practical language usage.",
      icon: "/live.svg",
      pos: "lg:bottom-[36%] lg:right-[5%]"
    },
    {
      title: "Learn Anytime, Anywhere",
      desc: "Access self-paced modules, AI practice, and live classes from any device, at your convenience.",
      icon: "/learn.svg",
      pos: "lg:bottom-[15%] lg:left-[50%] lg:-translate-x-1/2"
    }
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



  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden min-h-[700px] lg:h-[780px] bg-white">
        <div className="absolute inset-0 z-0">
          <Image src="/bg1.jpg" alt="Background" fill className="object-cover" priority />
          <div className="absolute inset-0 z-10 bg-white/60" />
        </div>

        <div className="absolute top-[15%] left-[2%] w-[120px] h-[120px] md:w-[200px] md:h-[200px] xl:top-[182px] xl:left-[55px] xl:w-[288px] xl:h-[280px] rotate-8.46deg hidden md:block z-20 pointer-events-none">
          <Image src="/robo.svg" alt="Robo" fill className="object-contain" />
        </div>

        <div className="absolute top-[50%] left-[5%] w-[150px] h-[150px] xl:top-[430px] xl:left-[120px] xl:w-[237px] xl:h-[203px] hidden xl:block z-10 pointer-events-none">
          <Image src="/arrow.svg" alt="Arrow" fill className="object-contain" />
        </div>

        <div className="absolute  bottom-0 right-[-5%] md:right-0 lg:top-[99px] lg:right-[2%] xl:right-[3%] w-[200px] h-[300px] md:w-[350px] md:h-[450px] lg:w-[418px] lg:h-[515px] hidden md:block z-20 pointer-events-none">
          <Image src="/student.png" alt="Student" fill className="object-contain object-bottom" priority />
        </div>
        <header className="w-full flex justify-center sticky top-0 z-50">
          <div className="w-full px-4 md:px-6 lg:px-[100px] h-[72px] lg:h-[96px] flex items-center justify-between">
            <div className="relative z-30 flex items-center gap-[12px]">
              <Image src="/logo.svg" alt="Logo" width={40} height={40} className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]" />
              <span className="text-black font-medium text-[18px] lg:text-[26px]" style={{ fontFamily: "Russo One" }}>
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
            </nav>
            <div
              className={`fixed inset-0 bg-white z-50 transition-transform duration-300 flex flex-col lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <div className="flex items-center p-6 border-b border-gray-100">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-black hover:text-[#31564E] transition-colors">

                </button>
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
              <button className="hidden sm:block w-[112px] h-[51px] cursor-pointer transition-transform duration-150 active:scale-95 rounded-full bg-black text-white text-sm font-semibold">
                Register
              </button>

              <button className="lg:hidden text-black p-2" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}

              </button>
            </div>
          </div>
        </header>


        <main className="relative z-30 px-4 sm:px-6 pt-8 md:pt-20 pb-20">
          <section className="flex flex-col items-center max-w-[850px] mx-auto text-center">


            <div className="flex items-center justify-center px-4 py-2 gap-2 rounded-full border border-white bg-white/90 shadow-sm">
              <Image src="/degree.svg" alt="" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-[10px] sm:text-[12px] md:text-[14px] font-medium text-slate-800">
                English Language Courses for every Level & Goal
              </span>
            </div>


            <h1 className="mt-6 font-semibold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[1.2] text-black">
              India’s Most
              <span className="inline-flex items-center mx-1 md:mx-3 align-middle">
                <Image src="/book.svg" width={24} height={24} alt="" className="w-[20px] h-[20px] md:w-[28px] md:h-[32px] mr-1 md:mr-2" />
                <span className="text-[#31564E]">Advanced</span>
              </span>
              Language Lab Platform <br className="hidden md:block" />
              Powered
              <span className="inline-block mx-1 md:mx-3 align-middle">
                <Image src="/done.svg" width={100} height={30} alt="" className="w-[80px] md:w-[160px] h-auto" />
              </span>
              with AI
            </h1>

            <p className="mt-6 text-[15px] md:text-[18px] text-black font-medium max-w-[700px] w-full leading-relaxed">
              Build real listening, speaking, reading, and writing skills through guided modules, AI practice, and live instruction.
            </p>
            <div className="mt-2 md:mt-4 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <button className="w-full sm:w-auto px-10 py-4 bg-black cursor-pointer transition-transform duration-150 active:scale-95 text-white rounded-full font-semibold text-sm md:text-base">
                Start Learning English
              </button>
              <button className="w-full hover:bg-[#31564E] hover:text-white sm:w-auto px-10 py-4 border-2 border-[#31564E] cursor-pointer transition-transform duration-150 active:scale-95 text-[#31564E] rounded-full font-semibold bg-white/50 text-sm md:text-base">
                Book A Free Demo
              </button>
            </div>

            <div className=" mt-4 md:mt-6 flex flex-col sm:flex-row items-center gap-3">
              <div className="flex -space-x-3 md:-space-x-5">
                {profiles.map((src, index) => (
                  <div key={index} className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden shadow-sm">
                    <Image src={src} alt="Student" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-[13px]  md:text-base text-gray-800">
                <span className="font-bold">100K+</span> Students get our courses worldwide
              </p>
            </div>
          </section>
        </main>
      </div>


      <section className="flex flex-col min-h-screen  w-full max-w-[1440px] mx-auto bg-black relative z-10">
        <div className="py-10 md:py-15 bg-[#F7FFFA]">
          <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden min-h-[700px]">
            <Image
              src="/green slide.png"
              className="absolute top-[4px] left-0 w-full h-full object-cover  animate-staircase-flow"
              width={1440}
              height={735}
              alt=""
            />
            <div className="relative z-10 text-center mb-12 px-4">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full border border-gray-200 bg-white text-xs font-medium mb-4">
                <span className="text-green-600">
                  <Image src="/degree.svg" width={24} height={24} alt="" />
                </span>
                Who Is This For?
              </div>
              <h2 className="text-3xl md:text-[40px] font-bold text-black mb-4">
                Built for <span className="text-[#31564E]">Every English Learner</span> and <span className="hidden md:block text-[#FF7F38]"> Learning Environment</span>
              </h2>
              <p className="text-base md:text-[18px] text-black font-normal max-w-2xl mx-auto">
                Whether you're learning independently or managing language programs at scale, the platform adapts to your goals, pace, and context.
              </p>
            </div>

            <div className="relative z-10 mx-auto flex flex-col lg:flex-row gap-5 max-w-[1240px] px-4 lg:px-0">
              <div className=" animate-slide-up [animation-delay:900ms] bg-[#31564E] text-white flex flex-col overflow-hidden rounded-3xl lg:w-[505px] min-h-[506px] shadow-lg p-8">
                <div>
                  <span className="inline-block px-4 py-2 bg-white/10 rounded-full border border-white/50 text-[14px] mb-6">
                    Individual Learners
                  </span>
                  <h3 className="text-[24px] font-bold leading-tight mb-4">Students & Individual Learners</h3>
                  <p className="text-emerald-50/80 text-[17px] leading-relaxed">
                    For learners starting from scratch who want to build basic vocabulary, grammar, and everyday understanding of English.
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <img src="/students.jpg" alt="Students" className="rounded-2xl object-cover w-full h-[240px]" />
                </div>
              </div>

              <div className="  flex flex-col gap-4 lg:w-[715px]">
                <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-4">
                  <div className="bg-white animate-slide-up [animation-delay:400ms] border border-[#C4C4C4] rounded-[24px] p-6 flex flex-col shadow-sm min-h-[243px]">
                    <div className="flex mb-2">
                      <span className="px-3 py-1 rounded-full border border-[#E5E5E5] text-[14px] font-medium text-black">
                        Schools
                      </span>
                    </div>
                    <h3 className="text-[24px] font-semibold text-black leading-tight mb-3">
                      Strengthen English from the Classroom Up
                    </h3>
                    <p className="text-black text-[17px] leading-relaxed">
                      Support structured learning with programs that improve listening, speaking, reading, and writing across all grade levels.
                    </p>
                  </div>

                  <div className="bg-white animate-slide-up [animation-delay:400ms] border border-[#C4C4C4] rounded-[24px] p-6 flex flex-col shadow-sm min-h-[243px]">
                    <div className="flex mb-2">
                      <span className="px-3 py-1 rounded-full border border-[#E5E5E5] text-[14px] font-medium text-black">
                        Institutes & Training Centers
                      </span>
                    </div>
                    <h3 className="text-[24px] font-semibold text-black leading-tight mb-3">
                      Deliver English Training at Scale
                    </h3>
                    <p className="text-black text-[17px] leading-relaxed">
                      Deliver scalable English training with centralized management and tracking.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-4">
                  <div className="bg-white animate-slide-up [animation-delay:600ms] border border-[#C4C4C4] rounded-[24px] p-6 flex flex-col shadow-sm min-h-[243px]">
                    <div className="flex mb-2">
                      <span className="px-3 py-1 rounded-full border border-[#E5E5E5] text-[14px] font-medium text-black">
                        Corporate Companies
                      </span>
                    </div>
                    <h3 className="text-[24px] font-semibold text-black leading-tight mb-3">
                      Build Workplace Communication
                    </h3>
                    <p className="text-black text-[17px] leading-relaxed">
                      Upskill teams with practical English for workplace communication.
                    </p>
                  </div>

                  <div className="bg-white animate-slide-up [animation-delay:800ms] border border-[#C4C4C4] rounded-[24px] p-6 flex flex-col shadow-sm min-h-[243px]">
                    <div className="flex mb-2">
                      <span className="px-3 py-1 rounded-full border border-[#E5E5E5] text-[14px] font-medium text-black">
                        Colleges
                      </span>
                    </div>
                    <h3 className="text-[24px] font-semibold text-black leading-tight mb-3">
                      Prepare Students for Academic Success
                    </h3>
                    <p className="text-black text-[17px] leading-relaxed">
                      Equip learners with advanced communication skills required for higher education, interviews, and professional environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className=" flex flex-col min-h-screen w-full max-w-[1440px] mx-auto bg-black relative z-10">
        <div className="py-10 md:py-20 bg-[#F7FFFA] bg-opacity-50 min-h-screen">
          <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden px-4 md:px-6">
            <Image
              src="/purpleline.png"
              className="absolute top-[56px] left-0 w-full h-auto min-h-[400px] md:h-[710px] object-cover opacity-20 pointer-events-none"
              width={1440}
              height={710}
              alt=""
            />

            <div className="relative z-10 max-w-7xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 w-fit h-[40px] px-4 rounded-full shadow-sm mb-6">
                <div className="relative w-5 h-5">
                  <Image
                    src="/degree1.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[14px] md:text-[15px] font-semibold font-Inter text-black whitespace-nowrap">
                  Sample Courses
                </span>
              </div>

              <h2 className="text-3xl md:text-[42px] font-semibold font-Inter mb-6 text-black leading-tight">
                Courses Designed for Every <br className="hidden md:block" /> Proficiency Level
              </h2>

              <div className="text-gray-800 max-w-2xl mx-auto mb-12 text-sm md:text-[16px] leading-relaxed px-2">
                From building basic communication to mastering professional fluency, each course
                is structured to match the learner’s current level and goals.
              </div>
              <div className="animate-slide-up pb-4 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className={`group flex flex-col animation-delay-[900ms] bg-white border border-gray-100 rounded-[1.5rem] md:rounded-[2rem] p-3 md:p-5 transition-all duration-300 ${course.hoverColor} cursor-pointer`}
                  >
                    <div className="relative w-full h-32 md:h-48 mb-4 md:mb-6 overflow-hidden rounded-[1rem] md:rounded-[1.5rem]">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                      />
                      <span className={`absolute top-2 right-2 md:top-3 md:right-3 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-[12px] font-semibold ${course.badgeColor}`}>
                        {course.level}
                      </span>
                    </div>

                    <div className="flex flex-col flex-grow text-left">
                      <h3 className="text-[15px] md:text-[18px] font-semibold text-gray-800 mb-2 md:mb-3 leading-tight">
                        {course.title}
                      </h3>
                      <p className="text-gray-800 text-[13px] md:text-[16px] leading-snug md:leading-relaxed mb-4 flex-grow line-clamp-3 md:line-clamp-none">
                        {course.description}
                      </p>

                      <button className="w-full bg-black text-white py-2.5 md:py-3.5 rounded-full text-[12px] md:text-[15px] font-semibold 
                              transition-all active:scale-95 duration-300 hover:bg-gray-800 cursor-pointer">
                        Free Demo
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>




        <section className="px-4 md:px-10 pb-12 md:pb-20 bg-[#F7FFFA]">
          <div className={`max-w-[1240px] min-h-[600px] mx-auto bg-[#2D4A43] rounded-[2rem] md:rounded-[3rem] relative overflow-hidden transition-all duration-500 ${isPlaying ? 'p-0' : 'p-6 md:p-16'}`}>


            {!isPlaying ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

                <div className="text-white z-10 order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                    <Image src="/liveclass.svg" alt="Live Class" width={20} height={20} className="md:w-6 md:h-6" />
                    <span className="text-xs md:text-sm font-normal">Live Classes</span>
                  </div>

                  <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold leading-tight md:leading-relaxed text-white">
                    Learn Live with Certified
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-2">
                      <div className="flex -space-x-3 md:-space-x-5">
                        {profiles.map((src, index) => (
                          <div key={index} className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#2D4A43] overflow-hidden shadow-sm">
                            <Image src={src} alt="Teacher" fill className="object-cover" />
                          </div>
                        ))}
                      </div>
                      <span>Professional Teachers</span>
                    </div>
                  </h2>

                  <p className="text-white/80 text-base md:text-lg mt-6 mb-8 max-w-lg leading-relaxed">
                    Join instructor-led live classes that focus on real interaction, guided practice, and personalized feedback to strengthen speaking, listening, reading, and writing skills.
                  </p>

                  <button className="mb-4 bg-black text-white cursor-pointer transition-all w-full sm:w-auto px-8 md:px-40 py-2 rounded-full font-extrabold text-lg shadow-2xl hover:bg-[#2D4A43] transition-all active:scale-95">
                    Book A Free Demo Now
                  </button>


                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-10">
                    {[
                      "Certified English Instructors", "Real-Time Feedback",
                      "Interactive Live Sessions", "Flexible Class Schedules",
                      "Small Group Learning", "Structured Curriculum Alignment"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm md:text-[15px] font-medium text-white/90">
                        <div className="flex-shrink-0">
                          <Image src="/tick.png" alt="Check" width={14} height={14} />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group shadow-2xl h-[250px] sm:h-[350px] lg:h-[500px] order-1 lg:order-2 bg-black">
                  <Image
                    src="/teach.jpg"
                    alt="Class Preview"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <button onClick={() => setIsPlaying(true)} className="transition-transform cursor-pointer transition-all hover:scale-110 active:scale-95">
                      <Image
                        src="/videobutton.png"
                        alt="Play Button"
                        width={80}
                        height={80}
                        className="rounded-full object-contain shadow-xl"
                        style={{ background: 'white' }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ) : (

              <div className="absolute inset-0 w-full h-full bg-black z-50">
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                  title="Video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />


                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-6 right-6 z-[60] bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all font-bold"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        </section>
      </section>

      <section className="flex flex-col min-h-screen w-full max-w-[1440px] mx-auto bg-black relative z-10">
        <div className="pt-10 relative w-full min-h-screen bg-[#F4FAFF] overflow-hidden flex flex-col items-center">
          <div className="relative w-full max-w-[1439px] mx-auto overflow-hidden px-4 md:px-6">

            <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/purple1.png"
                alt="Background Decoration"
                fill
                priority
                className="object-cover opacity-100 object-center lg:object-cover" />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-6 shadow-sm">
                  <Image src="/degree1.png" alt="Icon" width={24} height={24} />
                  <span className="text-sm font-medium text-gray-700">Why Choose Us</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tighter mb-4">
                  A Smarter, More Effective Way to <br className="hidden md:block" /> Learn English
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
                  Built to deliver measurable language improvement through the right mix of technology, expert instruction, and structured learning.
                </p>
              </div>

              <div className="relative w-full min-h-[500px] lg:h-[700px] flex flex-col items-center">
                <div className="hidden ml-4 lg:flex absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                  <div className="relative w-[435px] h-[353px]  overflow-hidden">
                    <Image
                      src="/student1.png"
                      alt="Student learning English"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>

                <div className="lg:hidden mb-10 w-full max-w-sm aspect-square relative rounded-[30px] overflow-hidden bg-[#2D4A43] shadow-xl">
                  <Image src="/student1.png" alt="Student" fill className="object-cover object-top" />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:contents  w-full relative z-10 gap-8 ">
                  {cards.map((card, idx) => (
                    <div
                      key={idx}
                      className={`lg:absolute ${card.pos} bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-[35px] lg:rounded-[100px] flex items-center gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50 w-full lg:w-[400px] min-h-[188px] transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                    >
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0 ">
                        <Image src={card.icon} alt={card.title} width={56} height={56} className="object-contain" />
                      </div>

                      <div className="flex flex-col gap-1">
                        <h3 className="font-semibold font-inter text-[18px] md:text-[20px] text-gray-900 leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-[16px] md:text-[15px] text-gray-500 font-normal text-gray-800 font-inter leading-snug">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>















      <section className="flex flex-col min-h-screen w-full max-w-[1440px] mx-auto bg-black relative z-10">
        <div className="min-h-screen bg-[#2D4A43] text-white p-8 md:p-20 font-sans">
          <div className="max-w-[1440px] mx-auto">

            {/* Header Section */}
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
              {/* Row 1: 4 Items */}
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

              {/* Row 2: 3 Items */}
              <div className="pt-2 md:pt-4 flex flex-wrap justify-center gap-6">
                {labCapabilitiess.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-h-[275px] px-6 py-8 bg-white/10 border-2 border-white/30 rounded-[40px] backdrop-blur-md flex flex-col items-start gap-2 group hover:bg-white/15 transition-all duration-300"
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




        <section className="relative w-full max-w-[1438px] min-h-screen lg:min-h-[1018px] bg-[#F7FFFA] mx-auto flex flex-col items-center justify-between py-12 md:py-24 px-4 md:px-10 overflow-hidden">

          <div className="flex flex-col items-center text-center max-w-[800px] z-10">

            <div className="inline-flex items-center gap-1 bg-white border border-gray-100 px-3 py-1.5 rounded-full shadow-sm mb-6">
              <div className="bg-[#C1F1A1] p-1 rounded-full flex items-center justify-center">
                <Image src="client.svg" alt="icon" width={14} height={14} />
              </div>
              <span className="text-[12px] md:text-[14px] font-medium font-inter text-gray-700 tracking-wide">
                Clients
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold font-inter text-gray-900 leading-[1.2] md:leading-relaxed">
              Trusted by 1,000+ Students,
              <span className="block">Schools, Colleges, and Institutions</span>
            </h2>

            <p className="text-gray-800 mt-4 text-[15px] md:text-[18px] font-inter font-normal max-w-[630px] leading-relaxed">
              Educators and learners across academic and professional environments rely on our platform to deliver consistent, measurable English language improvement at scale.
            </p>

          </div>







          <div className="mt-6 flex flex-col gap-6 md:gap-10 overflow-hidden relative w-full">

            <div
              className="absolute left-0 top-0 z-20 h-full w-[80px] md:w-[150px] pointer-events-none"
              style={{
                background: 'linear-gradient(to right, #F7FFFA, transparent)',
                backdropFilter: 'blur(100px)',
                maskImage: 'linear-gradient(to right, black 20%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent)'
              }}
            />

            <div
              className="absolute right-0 top-0 z-20 h-full w-[80px] md:w-[150px] pointer-events-none"
              style={{
                background: 'linear-gradient(to left, #F7FFFA , transparent)',
                backdropFilter: 'blur(0px)',
                maskImage: 'linear-gradient(to left, black 20%, transparent)',
                WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent)'
              }}
            />

            <div className="flex flex-col gap-4 md:gap-10">

              <div className="flex overflow-hidden z-10 w-full">
                <div className="flex animate-marquee-left gap-3 md:gap-10 pr-3 md:pr-10 w-max">
                  {[...Array(12)].map((_, i) => (
                    <Image
                      key={`row1-${i}`}
                      src="/slider.png"
                      alt="img"
                      width={1300}
                      height={165}
                      className="h-[60px] sm:h-[100px] md:h-[165px] w-auto object-cover rounded-lg md:rounded-xl"
                    />
                  ))}
                </div>
              </div>

              <div className="flex overflow-hidden z-10 w-full">
                <div className="flex animate-marquee-right gap-3 md:gap-10 pr-3 md:pr-10 w-max">
                  {[...Array(12)].map((_, i) => (
                    <Image
                      key={`row2-${i}`}
                      src="/slider2.png"
                      alt="img"
                      width={1300}
                      height={165}
                      className="h-[60px] sm:h-[100px] md:h-[165px] w-auto object-cover rounded-lg md:rounded-xl"
                    />
                  ))}
                </div>
              </div>

              <div className="flex overflow-hidden z-10 w-full">
                <div className="flex animate-marquee-left gap-3 md:gap-10 pr-3 md:pr-10 w-max">
                  {[...Array(12)].map((_, i) => (
                    <Image
                      key={`row3-${i}`}
                      src="/slider.png"
                      alt="img"
                      width={1300}
                      height={165}
                      className="h-[60px] sm:h-[100px] md:h-[165px] w-auto object-cover rounded-lg md:rounded-xl"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>


          <div className="mt-8 md:mt-12 ">
            <button className="w-[140px] h-[48px] md:w-[160px] md:h-[51px] rounded-full bg-black text-white flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-95 z-30 relative">
              <span className="text-sm md:text-base cursor-pointer transition-all font-medium">View all</span>
            </button>
          </div> </section></section>








      <section className="relative mx-auto flex flex-col items-center bg-[#F8FEFD] overflow-hidden px-4 max-w-[1440px] md:px-6"
        style={{ width: '100%', maxWidth: '1440px', minHeight: '614px' }}>

        <div className="relative z-20 mt-14 md:mt-0 md:absolute md:top-14 flex flex-col items-center text-center w-full max-w-[630px]">

          <div className="inline-flex items-center justify-center border-gray-200 bg-white shadow-sm mb-4 border"
            style={{ width: '128px', height: '40px', borderRadius: '20px' }}>
            <div className="flex items-center justify-center bg-[#CCFF00] rounded-full w-6 h-6 mr-2">
              <Image src="/testimonial.svg" alt="Testimonial" width={16} height={16} />
            </div>
            <span className="text-[14px] font-medium text-gray-600">Testimonials</span>
          </div>

          <h2 className="font-semibold text-[#111827] mb-4 w-full max-w-[579px]"
            style={{ fontSize: 'clamp(24px, 5vw, 32px)', lineHeight: '1.2' }}>
            What <span className="text-[#FF8A00]">Learners</span> and <span className="text-[#2D5A54]">Educators</span> Say
          </h2>


          <p className="text-[#6B7280] w-full max-w-[630px]"
            style={{ fontSize: '16px', lineHeight: '26px' }}>
            Real experiences from students, educators, and training teams using the platform to improve English communication.
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
                768: { spaceBetween: 40 }
              }}
              className="h-full overflow-visible px-4 "
            >
              {testimonialData.map((data, index) => {
                const isActive = index === activeIdx;

                return (
                  <SwiperSlide
                    key={data.id}
                    className="transition-all duration-300 flex items-center justify-center"
                    style={{
                      width: isActive ? 'min(92vw, 610px)' : '200px',
                    }}
                  >
                    <div
                      className={`relative flex flex-col md:flex-row items-center md:items-start transition-all duration-300 ${isActive ? 'bg-[#F7FFFA] shadow-lg border border-[#E5E7EB]' : 'bg-transparent'
                        }`}
                      style={{
                        borderRadius: '24px',
                        width: '100%',
                        height: isActive ? 'auto' : '272px',
                        minHeight: isActive ? '272px' : 'auto',
                        padding: isActive ? '16px' : '0px',
                      }}
                    >
                      <div
                        className={`
    relative flex-shrink-0 transition-all duration-300 rounded-[20px] overflow-hidden
    ${isActive
                            ? 'w-full md:w-[200px] max-w-full md:max-w-[200px] h-[240px]'
                            : 'w-[200px] h-[160px]'
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
                        className={`flex flex-col justify-between transition-all duration-500 ${isActive
                          ? 'opacity-100 translate-y-0 mt-6 md:mt-0 md:ml-6 flex-1 w-full'
                          : 'opacity-0 translate-y-4 h-0 overflow-hidden'
                          }`}
                        style={{ minHeight: isActive ? '200px' : '0' }}
                      >
                        {isActive && (
                          <>
                            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                              <div className="flex gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                  <div key={i} className="relative w-4 h-4">
                                    <Image src="/star5.png" alt="Star" fill className="object-contain" />
                                  </div>
                                ))}
                              </div>

                              <p className="text-[15px] md:text-[16px] leading-[24px] md:leading-[28px] text-[#111827] font-medium">
                                &ldquo;{data.quote}&rdquo;
                              </p>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-100 w-full text-center md:text-left">
                              <h4 className="font-bold text-[16px] text-[#111827]">{data.name}</h4>
                              <p className="text-[12px] text-gray-500 uppercase tracking-wide">{data.role}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>


            <div className="flex justify-center gap-4 mt-8 md:mt-0">
              <button
                className="btn-prev relative md:absolute md:left-[10%] cursor-pointer transition-all lg:left-[15%] xl:left-[347px] md:top-[16px] md:-translate-y-1/2 z-20 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90"
              >
                <Image src="/leftarrow.png" alt="Prev" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12" />
              </button>

              <button
                className="btn-next relative md:absolute md:right-[10%] cursor-pointer transition-all lg:right-[15%] xl:right-[347px] md:top-[270px] md:-translate-y-1/2 z-20 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90"
              >
                <Image src="/rightarrow.png" alt="Next" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12" />
              </button>
            </div>
          </div>
        </div>



        <section className="w-full py-8 md:py-12 px-4 flex justify-center ">
          <div className="w-full max-w-[1440px] min-h-fit md:min-h-[480px] bg-black rounded-[24px] overflow-hidden flex flex-col md:flex-row items-center p-6 md:p-12 gap-8 md:gap-12">

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
                  <div className="flex -space-x-4">
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



        <section className="pb-10 py-16 px-6 md:px-20">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">

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
                <h3 className="text-[20px] font-inter font-medium">Still Have Questions?</h3>
                <p className="text-gray-500 text-[16px] font-inter mt-2 ">
                  Contact us now, we're here to help you
                </p>

                <div className="mt-6 flex justify-center lg:justify-start -space-x-2">
                  {supportTeam.map((member) => (
                    <div key={member.id} className="w-10 h-10   overflow-hidden shrink-0">
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
                    className={`border border-gray-100 rounded-3xl overflow-hidden shadow-sm transition-all duration-300 ${openIndex === index ? 'bg-[#F7FFFA]' : 'bg-white'
                      }`}
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="cursor-pointer transition-all text-[15px] md:text-[16px] font-inter font-medium text-gray-800 pr-4">
                        {faq.question}
                      </span>
                      <span className="shrink-0 text-gray-500 cursor-pointer transition-all">
                        {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
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




        <footer className="pb-10 py-12 px-4 md:px-10 font-sans max-w-[1440px] w-full">
          <div className=" mx-auto border border-gray-300 bg-[#E5E5E5] rounded-[24px] p-6 md:p-10">

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


      </section>
    </div>
  );
}