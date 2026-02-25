"use client";

import { Eye, EyeOff, Upload } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function RegisterPage() {
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [showPassword, setShowPassword] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const slides = [
    {
      title: "Language Learning, Built for Real Progress",
      description:
        "A structured platform that blends proven learning methods with modern technology—designed to support learners and educators at every stage.",
    },
    {
      title: "Interactive Lessons",
      description:
        "Engage with immersive content designed by experts to accelerate fluency and retention.",
    },
    {
      title: "AI-Powered Feedback",
      description:
        "Get instant corrections and personalized suggestions to perfect your pronunciation and grammar.",
    },
    {
      title: "Educator Tools",
      description:
        "Empower teachers with data-driven insights to track student progress and customize curricula.",
    },
  ];

  const _handleContainerClick = () => {
    fileInputRef.current?.click();
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    /* Added h-screen to lock the main container height */
    <div className="flex h-screen w-full bg-white font-sans max-w-[1440px] mx-auto overflow-hidden border-x border-zinc-100">
      {/* LEFT SIDE: Sticky Image Section */}
      {/* h-full and sticky top-0 ensures it stays fixed while the right side scrolls */}
      <div className="relative hidden lg:flex flex-col justify-end overflow-hidden bg-zinc-900 p-12 text-white w-1/2 h-full sticky top-0">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/register.jpg"
            alt="Graduation Lightbulb"
            fill
            sizes="100vw"
            className="object-cover object-right"
          />
        </div>

        {/* Glassmorphism Card */}
        <div className="relative z-10 w-full max-w-[611px] min-h-[200px] rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/20 transition-all duration-500">
          <div className="mb-4 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Image src="/logo2.png" alt="Logo" width={42} height={40} />
              <span
                className="text-white font-medium text-[18px] lg:text-[26px]"
                style={{ fontFamily: "Russo One" }}
              >
                SmartEdLabs
              </span>
            </div>

            <div className="flex gap-1.5">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-[8px] rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-3" : "bg-white/30 w-2"
                    }`}
                />
              ))}
            </div>
          </div>

          <div
            key={currentIndex}
            className="animate-in fade-in slide-in-from-right-4 duration-500"
          >
            <h3 className="mb-2 text-[18px] font-semibold leading-tight text-white/80">
              {slides[currentIndex].title}
            </h3>
            <p className="text-[14px] text-zinc-300 leading-relaxed max-w-[576px]">
              {slides[currentIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Scrollable Form Section */}
      {/* overflow-y-auto makes only this side scrollable */}
      <div className="flex-1 h-full overflow-y-auto">
        <div className="flex flex-col items-center justify-start p-6 lg:p-12 min-h-full">
          <div
            className={`w-full ${role === "student" ? "max-w-md" : "max-w-2xl"} space-y-6 transition-all duration-300`}
          >
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center">
                <Image src="/logo.svg" alt="Logo" width={64} height={64} />
              </div>
              <h1 className="text-[24px] font-semibold text-zinc-900 tracking-tight">
                Create Your Account
              </h1>
            </div>

            {/* Toggle Switch */}
            <div className="flex p-1 gap-2 w-full sm:w-fit mx-auto ">
              <button
                onClick={() => setRole("student")}
                className={`rounded-full px-6 py-2 w-[186px] h-[48px] text-[14px] font-semibold transition-all ${role === "student"
                    ? "bg-black text-white shadow-md"
                    : "text-zinc-500 shadow-[inset_1px_1px_4px_0px_rgba(0,0,0,0.24)]"
                  }`}
              >
                Student
              </button>
              <button
                onClick={() => setRole("teacher")}
                className={`rounded-full px-6 py-2 text-[14px] w-[186px] h-[48px] font-semibold transition-all ${role === "teacher"
                    ? "bg-black text-white shadow-md"
                    : "text-zinc-500 shadow-[inset_1px_1px_4px_0px_rgba(0,0,0,0.24)]"
                  }`}
              >
                Teacher / Instructor
              </button>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {role === "student" ? (
                /* --- STUDENT FORM --- */
                <>
                  <div className="space-y-4 max-w-[559px] mx-auto">
                    <div className="space-y-1">
                      <label className="text-[16px] font-medium text-zinc-700 ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full rounded-full border border-zinc-200 px-5 py-3 h-[51px] text-[14px] outline-none focus:border-black"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[16px] font-medium text-zinc-700 ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full rounded-full border border-zinc-200 px-5 py-3 h-[51px] text-[14px] outline-none focus:border-black"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1 relative">
                        <label className="text-[16px] font-medium text-zinc-700 ml-1">
                          Create Password
                        </label>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a secure password "
                          className="w-full rounded-full border border-zinc-200 px-3 py-3 h-[51px] text-[14px] outline-none focus:border-black"
                        />
                        <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 cursor-pointer mt-3" />
                      </div>
                      <div className="space-y-1">
                        {/* 1. Label stays outside the relative wrapper */}
                        <label className="text-[16px] font-medium text-zinc-700 ml-1">
                          Confirm Password
                        </label>

                        {/* 2. Create a relative wrapper ONLY for the input and icon */}
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Re-enter your password"
                            className="w-full rounded-full border border-zinc-200 px-3 py-3 h-[51px] text-[14px] outline-none focus:border-black pr-12"
                          />

                          {/* 3. The icon now aligns perfectly to the input center */}
                          <div
                            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <EyeOff className="w-5 h-5 text-zinc-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[16px] font-medium text-zinc-700 ml-1">
                        Current Proficiency Level
                      </label>
                      <select className="w-full rounded-full border border-zinc-200 bg-white px-5 py-3 h-[51px] text-[14px] outline-none focus:border-black">
                        <option>Select</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full h-[51px] rounded-full bg-black text-[16px] font-semibold text-white shadow-xl hover:bg-zinc-800 transition-all active:scale-[0.98] mt-4"
                  >
                    Create a student Account
                  </button>
                </>
              ) : (
                /* --- TEACHER FORM --- */
                <>
                  {/* Changed gap to 1 (4px) for minimal spacing */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 max-w-[559px] mx-auto w-full px-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="text-sm md:text-[16px] font-medium text-zinc-700 ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full h-[52px] rounded-full border border-zinc-200 px-5 py-2.5 text-[14px] outline-none focus:border-black tracking-wide transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1">
                      <label className="text-sm md:text-[16px] font-medium text-zinc-700 ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your professional email"
                        className="w-full h-[52px] rounded-full border border-zinc-200 px-5 py-2.5 text-[14px] outline-none focus:border-black tracking-wide transition-all"
                      />
                    </div>

                    {/* Mobile Number - Spans 2 columns on desktop, full width always */}
                    <div className="md:col-span-2 space-y-1">
                      <label className="text-sm md:text-[16px] font-medium text-zinc-700 ml-1">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your mobile number"
                        className="w-full h-[52px] rounded-full border border-zinc-200 px-5 py-2.5 text-[14px] outline-none focus:border-black transition-all"
                      />
                    </div>

                    {/* Create Password */}
                    <div className="space-y-1">
                      <label className="text-sm md:text-[16px] font-medium text-zinc-700 ml-1">
                        Create Password
                      </label>
                      <div className="relative w-full">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a secure password"
                          className="w-full h-[52px] rounded-full border border-zinc-200 px-5 pr-12 py-2.5 text-[14px] outline-none focus:border-black transition-all"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black transition-colors"
                        >
                          {showPassword ? (
                            <Eye className="w-5 h-5" />
                          ) : (
                            <EyeOff className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-1">
                      <label className="text-sm md:text-[16px] font-medium text-zinc-700 ml-1">
                        Confirm Password
                      </label>
                      <div className="relative w-full">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Re-enter your password"
                          className="w-full h-[52px] rounded-full border border-zinc-200 px-5 pr-12 py-2.5 text-[14px] outline-none focus:border-black transition-all"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black transition-colors"
                        >
                          {showConfirmPassword ? (
                            <Eye className="w-5 h-5" />
                          ) : (
                            <EyeOff className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Years of Experience */}
                    <div className="space-y-1">
                      <label className="text-sm md:text-[16px] font-medium text-gray-700 ml-1">
                        Teaching Experience
                      </label>
                      <select className="w-full h-[52px] rounded-full border border-zinc-200 bg-white px-5 text-[14px] outline-none focus:border-black cursor-pointer">
                        <option>Select qualification</option>
                        <option>Less than 1 year</option>
                        <option>1-3 years</option>
                        <option>3-5 years</option>
                        <option>5+ years</option>
                      </select>
                    </div>

                    {/* Employment Type */}
                    <div className="space-y-1">
                      <label className="text-sm md:text-[16px] font-medium text-gray-700 ml-1">
                        Employment Type
                      </label>
                      <select className="w-full h-[52px] rounded-full border border-zinc-200 bg-white px-5 text-[14px] outline-none focus:border-black cursor-pointer">
                        <option>Select</option>
                        <option>Independent Instructor</option>
                        <option>Institute Faculty</option>
                        <option>Corporate Trainer</option>
                      </select>
                    </div>

                    {/* Upload Sections */}
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm md:text-[16px] text-black ml-1">
                          Upload ID Proof
                        </label>
                        <div className="flex flex-col items-center justify-center gap-2 w-full h-[102px] bg-white border-2  border-gray-200 rounded-[16px] hover:border-black hover:bg-zinc-50 transition-all cursor-pointer group">
                          <Upload className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
                          <span className="text-[12px] text-gray-400 group-hover:text-zinc-600">
                            Govt ID (PDF/JPG)
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-sm md:text-[16px] text-black ml-1">
                          Upload Certificate
                        </label>
                        <div className="flex flex-col items-center justify-center gap-2 w-full h-[102px] bg-white border-2 border-gray-200 rounded-[16px] hover:border-black hover:bg-zinc-50 transition-all cursor-pointer group">
                          <Upload className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
                          <span className="text-[12px] text-gray-400 group-hover:text-zinc-600">
                            Degree (PDF/DOC)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-[51px] rounded-full bg-black text-[16px] font-semibold text-white shadow-xl hover:bg-zinc-800 transition-all active:scale-[0.98] mt-6"
                  >
                    Submit for approval
                  </button>
                </>
              )}
            </form>

            <p className="text-center text-[16px] text-gray-700 pb-8">
              Already have an account?{" "}
              <a
                href="\login"
                className="font-semibold text-emerald-800 hover:underline"
              >
                Login!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
