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
    const featuredata = [
        { title: "English", link: "/learning" }]

    const borderGradient = {
        borderBottom: '3px solid',
        borderImageSource: 'linear-gradient(90deg, #31564E 22.61%, rgba(107, 188, 171, 0.02) 77.89%)',
        borderImageSlice: 1,
    };

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden min-h-[450px] lg:h-[450px] bg-white">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image
                        src="/bg14.jpg"
                        alt="Background"
                        fill
                        className=""
                        priority
                    />
                    <div className="absolute inset-0 z-10 " />
                </div>

                <Navbar />
                <nav className="ml-8 relative hidden md:flex items-center gap-[8px] px-4 lg:px-[100px] py-4 z-20">
                    <a href="/" className="text-sm font-medium hover:text-blue-600">
                        Home
                    </a>
                    <Image
                        src="/mingcute_right-line.png"
                        alt="Arrow"
                        width={24}
                        height={24}
                    />
                    <a href="/features" className="text-sm font-medium hover:text-blue-600">
                        Features
                    </a>
                    <Image
                        src="/mingcute_right-line.png"
                        alt="Arrow"
                        width={24}
                        height={24}
                    />
                    <a href="/sales" className="text-sm font-medium hover:text-blue-600">
                        Learning
                    </a>
                </nav>
                <div className="relative z-20 flex flex-col max-w-[1030px] mx-auto items-center justify-center px-4 py-12 lg:py-0 flex-grow">
                    <div className={`${inter.className} w-full text-center`}>
                        <h1 className="text-[32px] md:text-[48px] lg:text-[56px] mt-10 md:mt-14 font-semibold font-inter text-black leading-tight">
                            Learning
                        </h1>
                        <p className="text-[16px] md:text-[18px] font-normal text-gray-700 max-w-[834px] mt- mx-auto font-inter leading-tight">
                            Grammar & Language Foundations
                        </p>

                        {/* Responsive Fix: 
      1. Changed h-[51px] to min-h-[51px] so the container expands when buttons stack.
      2. Removed max-w-[406px] on mobile to let buttons breathe, then restored it on md screens.
    */}

                    </div>
                </div>


            </div>



            <main className="relative min-h-screen max-w-[1440px] mx-auto bg-white py-10 md:py-16 px-6 md:px-20 lg:px-26">
                <div className="max-w-[1440px] mx-auto space-y-12">



                    {/* Section 1 */}
                    <section>
                        <h2 className="text-[20px] md:text-[24px] font-medium text-black">
                            Grammar Essentials For Everyday Communication
                        </h2>
                        <div style={borderGradient} className="w-full max-w-[607px] h-[2px] my-3" />
                        <p className=" text-gray-800 text-[15px] md:text-[16px] leading-relaxed mb-4 tracking-wide max-w-[1242px]">
                            This module establishes a strong grammatical foundation by revisiting time-tested rules and structures that govern everyday communication. Learners are guided step by step—from understanding sentence patterns to applying grammar confidently in real-life contexts. The approach respects classical grammar frameworks while presenting them in a simplified, learner-friendly flow. By combining explanation, practice, and reinforcement, this topic ensures learners don’t just memorize rules, but internalize them for practical use.  </p>
                        <ul className="space-y-2 list-disc ml-5 text-gray-800 text-[15px] md:text-[16px]">
                            <li>Concepts are introduced gradually, starting with simple sentence structures</li>
                            <li>Each rule is supported by relatable, real-world examples</li>
                            <li>Practice exercises immediately reinforce understanding</li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-[20px] md:text-[24px] font-medium text-black ">
                            Parts Of Speech – Building Blocks Of Language
                        </h2>
                        <div style={borderGradient} className="w-full max-w-[607px] h-[2px] my-3" />
                        <p className="text-gray-800 text-[15px] md:text-[16px] leading-relaxed mb-4 tracking-wide max-w-[1242px]">
                            Language has always been built on structure, and parts of speech are its backbone. This topic helps learners understand how words function within sentences and how meaning changes based on usage. By grounding instruction in traditional grammar principles and pairing them with modern examples, learners gain clarity and confidence in sentence formation. The focus is not speed, but accuracy and long-term retention.</p>
                        <ul className="space-y-2 list-disc ml-5 text-gray-800 text-[15px] md:text-[16px]">
                            <li>Each part of speech is taught independently and then combined</li>
                            <li>Visual examples demonstrate word roles clearly</li>
                            <li>Practice moves from identification to sentence creation</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-[20px] md:text-[24px] font-medium text-black ">
                            Tenses Made Practical
                        </h2>
                        <div style={borderGradient} className="w-full max-w-[607px] h-[2px] my-3" />
                        <p className="text-gray-800 text-[15px] md:text-[16px] leading-relaxed tracking-wide mb-4 max-w-[1242px]">
                            Rather than overwhelming learners with all tenses at once, this module takes a structured, traditional approach—starting with time awareness and gradually expanding into tense application. Learners understand not just what tense to use, but why it matters. This clarity helps reduce common errors and builds confidence in both spoken and written communication.</p>
                        <ul className="space-y-2 list-disc ml-5 text-gray-800 text-[15px] md:text-[16px]">
                            <li>Timeline-based explanations for clarity</li>
                            <li>Simple rules followed by contextual usage</li>
                            <li>Practice aligned to real-life scenarios</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-[20px] md:text-[24px] font-medium text-black ">
                            Sentence Construction & Clarity
                        </h2>
                        <div style={borderGradient} className="w-full max-w-[607px] h-[2px] my-3" />
                        <p className="text-gray-800 text-[15px] md:text-[16px] leading-relaxed mb-4 tracking-wide max-w-[1242px]">
                            This topic focuses on assembling clear, meaningful sentences using established grammatical rules. Learners move from basic sentence types to more structured expressions, improving both clarity and confidence. The instruction respects classical sentence-building principles while enabling learners to apply them in modern communication contexts such as emails, conversations, and presentations.</p>
                        <ul className="space-y-2 list-disc ml-5 text-gray-800 text-[15px] md:text-[16px]">
                            <li>Timeline-based explanations for clarity</li>
                            <li>Simple rules followed by contextual usage</li>
                            <li>Practice aligned to real-life scenarios</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-[20px] md:text-[24px] font-medium text-black ">
                            Common Errors & Usage Improvement
                        </h2>
                        <div style={borderGradient} className="w-full max-w-[607px] h-[2px] my-3" />
                        <p className="text-gray-800 text-[15px] md:text-[16px] leading-relaxed mb-4 tracking-wide max-w-[1242px]">
                            This module helps learners identify and eliminate frequently repeated language errors that often persist unnoticed. By addressing these gaps early, learners develop stronger habits and more polished communication skills. The content respects traditional grammar standards while offering modern clarity on correct usage. </p>
                        <ul className="space-y-2 list-disc ml-5 text-gray-800 text-[15px] md:text-[16px]">
                            <li>Error-first approach to build awarenes</li>
                            <li>Side-by-side comparison of correct vs incorrect usage</li>
                            <li>Reinforcement through targeted practice</li>
                        </ul>
                    </section>


                </div>
                <div className="w-full flex justify-center px-4 py-6 md:py-10 mt-6 md:mt-10">
                    <div className="relative w-full max-w-[1236px] aspect-video sm:aspect-[21/9] md:h-[473px] rounded-[16px] overflow-hidden shadow-lg">
                        <Image
                            src="/girl4.png"
                            alt="Student"
                            fill
                            priority // Recommended for "Above the Fold" images
                            className="object-cover"
                            sizes="(max-width: 1236px) 100vw, 1236px"
                        />
                    </div>
                </div>


                <Footer />

            </main>


        </div>
    );
}
