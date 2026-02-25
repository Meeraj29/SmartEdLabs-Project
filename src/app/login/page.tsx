"use client";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState<"student" | "teacher">("student");
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
  const [currentIndex, _setCurrentIndex] = useState(0);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex h-screen w-full bg-white font-sans max-w-[1440px] mx-auto overflow-hidden border-x border-zinc-100">
      {/* LEFT SIDE: Sticky Image Section - Hidden on small/medium screens */}
      <div className="relative hidden lg:flex flex-col justify-end overflow-hidden bg-zinc-900 p-12 text-white w-1/2 h-full sticky top-0">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/register.jpg"
            alt="Graduation Lightbulb"
            fill
            sizes="100vw"
            priority={true} // High priority if this is a main background image
            className="object-cover object-right opacity-80"
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
      <div className="flex-1 h-full overflow-y-auto w-full">
        <div className="flex flex-col items-center justify-center p-6 md:p-12 min-h-full">
          <div className="w-full max-w-[452px] space-y-8">
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="flex justify-center mb-4">
                <Image src="/logo.svg" alt="Logo" width={64} height={64} />
              </div>

              <h1 className="text-[28px] md:text-[32px] font-inter font-semibold text-zinc-900 leading-tight">
                Welcome back!
              </h1>
              <p className="text-[14px] md:text-[16px] font-inter text-zinc-500">
                A timeless, human-first greeting that reduces friction and feels
                appropriate across student and teacher roles.
              </p>
            </div>

            {/* Toggle Switch - Made responsive with flex-wrap/auto-width */}
            <div className="flex p-1 gap-2 w-full sm:w-fit mx-auto">
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

            {/* Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label
                  htmlFor="username"
                  className="text-[14px] md:text-[16px] font-medium text-zinc-700 ml-1"
                >
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full h-12 rounded-full border border-zinc-200 px-5 text-sm outline-none focus:ring-1 focus:ring-black focus:border-black"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center px-1">
                  <label
                    htmlFor="password"
                    className="text-[14px] md:text-[16px] font-medium text-zinc-700"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full h-12 rounded-full border border-zinc-200 px-5 pr-12 text-sm outline-none focus:ring-1 focus:ring-black focus:border-black"
                  />
                  <div
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <Eye className="w-4 h-4 text-zinc-400" />
                    ) : (
                      <EyeOff className="w-4 h-4 text-zinc-400" />
                    )}
                  </div>
                </div>
                <div className="flex justify-end pt-1">
                  <button className="text-[12px] md:text-[14px] text-[#31564E] hover:text-black underline underline-offset-2">
                    Forgot password?
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 ml-1 ">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded border-zinc-300 w-[18px] h-[18px] accent-emerald-800"
                />
                <label
                  htmlFor="remember"
                  className="text-[14px] text-zinc-600 font-medium"
                >
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-full bg-black text-white font-semibold shadow-lg hover:bg-zinc-800 transition-all active:scale-[0.98]"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-zinc-200"></div>
              <span className="flex-shrink mx-4 text-[12px] md:text-[14px] text-gray-400 font-inter tracking-wider">
                Or continue with
              </span>
              <div className="flex-grow border-t border-zinc-200"></div>
            </div>

            {/* Social Login */}
            <div className="flex justify-center gap-4">
              <button className="p-2 rounded-full hover:bg-zinc-50 transition-colors">
                <Image src="/google.png" alt="Google" width={40} height={40} />
              </button>
              <button className="p-2 rounded-full hover:bg-zinc-50 transition-colors">
                <Image
                  src="/facebooks.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </button>
            </div>

            {/* Footer */}
            <p className="text-center text-[14px] md:text-[16px] text-zinc-700">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-[#31564E] hover:underline"
              >
                Register Now!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
