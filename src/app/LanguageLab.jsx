import Image from "next/image";
// constants.js
import Link from "next/link";

export const labCapabilities = [
  {
    title: "Learning",
    desc: "Build auditory comprehension through curated audio content designed sharpen accent recognition and contextual ...",
    image: "/learning.png",
    link: "/learning",
  },
  {
    title: "Speaking",
    desc: "Strengthen pronunciation and fluency by actively speaking and repeating guided phrases with immediate corrective feedback.",
    image: "/speaking.png",
  },
  {
    title: "Reading",
    desc: "Develop comprehension and vocabulary through structured reading materials aligned to progressive difficulty levels.",
    image: "/reading.png",
  },
  {
    title: "Writing",
    desc: "Enhance written communication by practicing structured responses that reinforce grammar, clarity, and expression.",
    image: "/writing.png",
  },
];
export const labCapabilitiess = [
  {
    title: "Compare",
    desc: "Improve accuracy by comparing learner responses with model answers to identify gaps and ...",
    image: "/compare.png",
  },
  {
    title: "Role-Play",
    desc: "Apply language skills in practical, real-world scenarios through guided conversational ....",
    image: "/roleplay.png",
  },
  {
    title: "Exercises",
    desc: "Reinforce learning outcomes with targeted practice activities that assess understanding an...",
    image: "/exercise.png",
  },
];
// Sub-component for the Individual Cards
const FeatureCard = ({ item, minHeight = "min-h-[300px]", isLinkable = false }) => {
  // Common styles for both Link and Div
  const cardStyles = `w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] ${minHeight} px-6 py-8 bg-white/10 border-2 border-white/30 rounded-[40px] backdrop-blur-md flex flex-col items-start gap-2 group transition-all duration-300 ${isLinkable ? "hover:bg-white/15 cursor-pointer" : ""
    }`;

  const CardContent = (
    <>
      {/* Image Container */}
      <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center overflow-hidden">
        <div className="relative w-12 h-12 md:w-[100px] md:h-[100px]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain p-1"
          />
        </div>
      </div>

      <div className="space-y-3 px-2">
        <h3 className="text-[20px] md:text-[24px] font-semibold font-inter">
          {item.title}
        </h3>
        <p className="text-white/80 text-[14px] md:text-[16px] font-normal font-inter leading-relaxed line-clamp-4">
          {item.desc}
        </p>
      </div>
    </>
  );

  // Conditional Rendering: Only use <Link> if isLinkable is true
  return isLinkable ? (
    <Link href={item.link || "/learning"} className={cardStyles}>
      {CardContent}
    </Link>
  ) : (
    <div className={cardStyles}>
      {CardContent}
    </div>
  );
};
// Sub-component for the Header
const LabHeader = () => (
  <header className="mb-16 max-w-[1148px]">
    <div className="inline-flex items-center gap-2 px-2 py-2 rounded-full border border-white/60 bg-[#E6E6E6]/20 text-[16px] mb-8">
      <Image src="/degree.svg" alt="Hat" width={24} height={24} />
      <span className="font-normal font-inter text-[16px]">
        Language Lab Features
      </span>
    </div>

    <h1 className="text-4xl md:text-[32px] lg:text-[40px] font-semibold leading-tight mb-8 text-white/70">
      How the{" "}
      <span className="font-semibold font-inter text-white">
        AI-Driven Language Lab Builds{" "}
      </span>
      <span className="text-white/70 font-semibold font-inter">
        Confident Communicators
      </span>
    </h1>

    <p className="text-white/80 text-[16px] font-normal font-inter leading-relaxed max-w-[1090px]">
      Our AI-Driven Language Lab operationalizes a proven Listen → Speak → Read
      → Write → Apply learning cycle, enhanced with intelligent feedback and
      guided practice. The outcome is a structured yet flexible environment
      where learners build confidence progressively, without cognitive overload.
      The platform supports 7 proficiency levels, ensuring continuity from
      foundational exposure to advanced communication mastery. Each interaction
      is measurable, repeatable, and aligned with real-world usage—bridging
      traditional pedagogy with modern technology.
    </p>
  </header>
);


// Main Section Component
export default function LanguageLabFeatures({ rowOneData, rowTwoData }) {

  return (
    <section className="flex flex-col min-h-screen w-full max-w-[1440px] mx-auto bg-black relative z-10">
      <div className="min-h-screen bg-[#31564E] text-white p-8 md:p-20 font-sans">
        <div className="max-w-[1440px] mx-auto">
          <LabHeader />

          <div className="flex flex-col gap-6 w-full">
            {/* Row 1: 4 Items */}
            <div className="flex flex-wrap justify-center gap-6">
              {rowOneData.map((item, idx) => (
                <FeatureCard
                  key={`top-${idx}`}
                  item={item}
                  minHeight="min-h-[300px]"
                  isLinkable={true} // Enabled here
                />
              ))}
            </div>

            {/* Row 2: These will remain static cards */}
            <div className="pt-2 md:pt-4 flex flex-wrap justify-center gap-6">
              {rowTwoData.map((item, idx) => (
                <FeatureCard
                  key={`bottom-${idx}`}
                  item={item}
                  minHeight="min-h-[275px]"
                  isLinkable={false} // Disabled here
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}
