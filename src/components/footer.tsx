import React from "react";
import Link from "next/link";
import Image from "next/image";
const morelinks = [
    { label: "Become a Teacher", href: "/teacher" },
    { label: "Join Our Sales Team", href: "/sales" },
    { label: "Become A Affiliate", href: "/affiliate" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
];
export default function Footer() {

    return (
        <footer className="mx-auto relative pt-10 bg-[#F8FEFD] font-sans max-w-[1440px] w-full pb-10">
            <div className="mx-auto max-w-[1240px] min-h-fit border border-gray-300 bg-[#E5E5E5] rounded-[24px] p-6 md:p-10">
                {/* Newsletter Section */}
                <div className="bg-white rounded-[24px] p-6 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
                    <div className="max-w-full lg:max-w-[316px] text-center lg:text-left">
                        <h2 className="text-[24px] font-inter font-semibold text-black mb-2">
                            Stay Updated
                        </h2>
                        <p className="text-gray-500 text-[16px] font-inter mx-auto lg:mx-0 max-w-[300px]">
                            Subscribe to get the latest lessons, updates and special offers
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="placeholder:text-black placeholder:text-[16px] tracking-relaxed px-6 py-4 rounded-full border border-gray-200 w-full lg:w-[280px] h-[51px] outline-none focus:ring-2 focus:ring-gray-100 transition-all"
                        />
                        <button className="text-[16px] bg-black text-white w-full transition-all sm:w-[140px] h-[51px] rounded-full font-semibold hover:bg-gray-800 active:scale-95 transition-colors shrink-0">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12">
                    {/* Brand Section */}
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

                    {/* Links Sections - 2 columns on mobile, 4 on desktop */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 ml-10">
                        <div>
                            <h4 className="font-inter font-medium text-[16px] mb-4">Quick Links</h4>
                            <ul className="space-y-3 text-[14px] font-inter font-normal text-gray-700">
                                <li className="hover:text-black cursor-pointer transition-colors">
                                    <Link href="/" className="block">Home</Link>
                                </li>

                                <li className="hover:text-black cursor-pointer transition-colors">
                                    <Link href="/features" className="block">Features</Link>
                                </li>

                                <li className="hover:text-black cursor-pointer transition-colors">
                                    <Link href="/pricing" className="block">Pricing</Link>
                                </li>

                                <li className="hover:text-black cursor-pointer transition-colors">
                                    <Link href="/blogs" className="block">Blogs</Link>
                                </li>

                                <li className="hover:text-black cursor-pointer transition-colors">
                                    <Link href="/about" className="block">About Us</Link>
                                </li>

                                <li className="hover:text-black cursor-pointer transition-colors">
                                    <Link href="/contact" className="block">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-inter font-medium text-[16px] mb-4">Join Us</h4>
                            <ul className="space-y-3 text-[14px] text-gray-700">
                                <li><Link href="/teacher" className="hover:text-black">Become a Teacher</Link></li>
                                <li><Link href="/affiliate" className="hover:text-black">Become Affiliate</Link></li>
                                <li><Link href="/sales" className="hover:text-black">Join Our Sales Team</Link></li>
                                <li><Link href="/careers" className="hover:text-black">Careers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-inter font-medium text-[16px] mb-4 mr-4">Solutions</h4>
                            <ul className="space-y-3 text-[14px] font-inter font-normal text-gray-700">
                                {["For Students", "For Schools & Colleges", "For Institutions", "For Corporate Training"].map((item) => (
                                    <li key={item} className="hover:text-black cursor-pointer transition-colors">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-inter font-medium text-[16px] mb-4">Resources</h4>
                            <ul className="space-y-3 text-[14px] font-inter font-normal text-gray-700">
                                {["Help Center", "User Guides", "Terms of Service", "Privacy Policy"].map((item) => (
                                    <li key={item} className="hover:text-black cursor-pointer transition-colors">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#9D9D9D] pt-6 text-center">
                    <p className="text-[12px] text-gray-700 font-inter font-medium">
                        Copyright 2025 SmartEdLabs. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}