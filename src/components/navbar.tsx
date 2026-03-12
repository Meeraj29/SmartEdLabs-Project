import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Assuming Lucide-react for icons
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Link from "next/link";
// Define your navigation data
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Feature", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blogs", href: "/blogs" },
  { name: "About Us", href: "/about" },
];


const morelinks = [
  { label: "Become a Teacher", href: "/teacher" },
  { label: "Join Our Sales Team", href: "/sales" },
  { label: "Become A Affiliate", href: "/affiliate" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileMore, setShowMobileMore] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (

    <header className="w-full flex justify-center z-50">
      <div className="w-full px-4 md:px-6 lg:px-[100px] h-[72px] lg:h-[96px] flex items-center justify-between">
        <div className="relative z-30 flex items-center gap-[12px]">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={64}
              height={64}
              className="w-[64px] h-[64px] lg:w-[64px] lg:h-[64px] cursor-pointer"
            />
          </Link>

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
              className={`px-6 py-2 rounded-full text-[14px] font-medium transition-all ${pathname === link.href
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
          className={`fixed inset-0 bg-white z-50 transition-transform duration-300 flex flex-col lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Header with Close Button */}
          <div className="flex items-center justify-end p-6 border-b border-gray-100">
            <button onClick={() => setIsOpen(false)} className="text-black">
              <X size={28} />
            </button>
          </div>
          <div className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

            {/* Header with 'X' Close Button */}
            <div className="flex justify-end p-6">
              <button onClick={() => setIsOpen(false)} className="text-3xl">&times;</button>
            </div>

            {/* Scrollable Navigation Area */}
            <nav className="flex flex-col gap-4 p-6 overflow-y-auto scrollbar-thin max-h-[700px]">
              {/* Standard Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-10 py-4 text-center text-xl font-semibold rounded-full border-2 transition-all ${pathname === link.href
                    ? "bg-[#F7FFFA] border-[#31564E] text-black"
                    : "bg-white border-gray-100 text-black"
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* --- COLLAPSIBLE MORE SECTION --- */}
              {/* --- MOBILE MORE SECTION --- */}
              <div className="flex flex-col items-center w-full"
                ref={dropdownRef}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // ✅ Toggle ONLY the sub-links, NOT the whole menu
                    setShowMobileMore(!showMobileMore);
                  }}
                  className={`flex items-center justify-center gap-2 px-10 py-4 rounded-full border-2 transition-all text-xl font-semibold w-full ${showMobileMore ? "border-[#31564E] bg-gray-50" : "border-gray-100 text-black"
                    }`}
                >
                  More
                  <svg
                    className={`w-4 h-4 transition-transform ${showMobileMore ? "rotate-180" : ""}`}
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

                {/* Display the 5 links right here on the same page */}
                {showMobileMore && (
                  <div className="flex flex-col gap-2 w-full bg-gray-50/50 py-2">
                    {morelinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        onClick={() => setIsOpen(false)} // ✅ Only hide the page AFTER you pick a link
                        className="px-10 py-3 text-center text-lg font-medium rounded-full border-2 transition-all text-black hover:text-emerald-900"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>


              <div className="flex flex-col items-center justify-center gap-4 w-full px-4 md:flex-row md:gap-6">
                <button className="mt-4 md:mt-0  w-full max-w-[318px] h-[51px] flex items-center justify-center gap-[10px] rounded-full border-2 border-[#31564E] text-[#31564E] text-sm font-semibold cursor-pointer transition-all duration-150 active:scale-95 hover:bg-[#31564E] hover:text-white">
                  Book A Free Demo
                </button>

                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)} // Close the menu when clicked
                  className="w-full max-w-[318px] h-[51px] flex items-center justify-center gap-[10px] cursor-pointer transition-all duration-150 active:scale-95 rounded-full bg-black text-white text-[16px] font-semibold hover:bg-[#31564E]"
                >
                  Register
                </Link>
              </div>
            </nav>
          </div>
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
  );
}