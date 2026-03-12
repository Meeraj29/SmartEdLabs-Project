import React from 'react';
import Image from 'next/image';
import { X, CheckCircle2, Upload } from 'lucide-react';

const JobModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

    const handleContainerClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-[1240px] max-h-[700px]  overflow-hidden rounded-[32px] bg-[#F2F2F2] shadow-2xl flex flex-col md:flex-row">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 z-10 p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                    <X className="w-6 h-6 text-gray-600" />
                </button>
                <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden no-scrollbar">
                    {/* Left Section: Job Details (Scrollable) */}
                    <div className="flex-1 p-6 md:p-8 space-y-6 md:overflow-y-auto no-scrollbar  ">
                        <h1 className="text-[32px] font-semibold text-gray-900">English Language Instructor</h1>

                        {/* Metadata Badges */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[728px]">
                            {/* Location Badge */}
                            <div className="bg-[#CFCFCF] p-3 rounded-2xl flex flex-col justify-between w-[170px] h-[72px]">
                                <div className="flex items-center gap-1">
                                    <Image src="/loaction.svg" alt="Location" width={12} height={22} className="object-contain" />
                                    <p className="text-[14px] font-inter tracking-wider text-gray-700">Location</p>
                                </div>
                                <span className="text-[16px] font-inter tracking-wider text-black ml-4 ">Remote / Hybrid</span>
                            </div>

                            {/* Experience Badge */}
                            <div className="bg-[#CFCFCF] p-3 rounded-2xl flex flex-col justify-between w-[170px] h-[72px]">
                                <div className="flex items-center gap-1">
                                    <Image src="/expire.svg" alt="Experience" width={12} height={22} className="object-contain" />
                                    <p className="text-[14px] font-inter tracking-wider text-gray-700">Experience</p>
                                </div>
                                <span className="text-[16px] font-inter tracking-wider text-black ml-4">1+ Years</span>
                            </div>

                            {/* Employment Type Badge */}
                            <div className="bg-[#CFCFCF] p-3 rounded-2xl flex flex-col justify-between w-[170px] h-[72px]">
                                <div className="flex items-center gap-1">
                                    <Image src="/employee.svg" alt="Employment Type" width={12} height={22} className="object-contain" />
                                    <p className="text-[14px] font-inter tracking-wider text-gray-700">Employment Type</p>
                                </div>
                                <span className="text-[16px] font-inter tracking-wider text-black ml-4">Full-Time</span>
                            </div>

                            {/* Package Badge */}
                            <div className="bg-[#CFCFCF] p-3 rounded-2xl flex flex-col justify-between w-[170px] h-[72px]">
                                <div className="flex items-center gap-1">
                                    <Image src="/package.svg" alt="Package" width={12} height={22} className="object-contain" />
                                    <p className="text-[14px] font-inter tracking-wider text-gray-700">Package</p>
                                </div>
                                <span className="text-[16px] font-inter tracking-wider text-black ml-4">₹3.0 – ₹5.0 LPA</span>
                            </div>
                        </div>

                        {/* Job Overview Card */}
                        <div className="bg-white p-6 rounded-2xl ">
                            <h2 className="text-[24px] font-inter font-semibold mb-3">Job Overview</h2>
                            <p className="text-black text-[16px] font-inter leading-relaxed max-w-[638px]">
                                We are looking for a passionate English Language Instructor to deliver high-quality live classes and support learners in developing strong communication skills across listening, speaking, reading, and writing.
                            </p>
                        </div>

                        {/* List Sections */}
                        <ListSection title="Roles & Responsibilities" items={[
                            "Conduct live English classes based on assigned learner levels",
                            "Teach listening, speaking, reading, and writing skills effectively",
                            "Encourage learner participation and confident communication",
                            "Provide clear feedback and correct language usage",
                            "Track learner progress and follow academic standards",
                            "Communicate learning updates with learners and parents when required",
                            "Maintain a professional and supportive teaching environment"
                        ]} />

                        <ListSection title="Requirements" items={[
                            "Bachelor's degree or higher from a recognized institute",
                            "Strong English communication skills (spoken and written)",
                            "Knowledge of English up to Grade 7 level",
                            "Teaching experience (online or offline) preferred",
                            "Certifications such as TEFL, TESOL, CELTA, IELTS, or TOEFL are a plus",
                            "Comfortable using digital tools, apps, and video platforms",
                            "Willing to conduct demo classes as part of the evaluation"
                        ]} />

                        <ListSection title="What We Offer" items={[
                            "Competitive and transparent compensation",
                            "Flexible teaching schedules (role-based)",
                            "Structured curriculum and teaching resources",
                            "Supportive academic and operations team",
                            "Long-term growth opportunities within the platform"
                        ]} />
                    </div>

                    {/* Right Section: Application Form */}

                    <div className="w-full md:max-w-[433px] lg:mt-20 lg:mr-6 bg-white p-6 md:p-8 md:overflow-y-auto no-scrollbar  md:border-t-0 border-gray-100 rounded-[24px] md:rounded-[24px]">
                        <h2 className="text-[24px] font-semibold mb-6">Apply For this Position</h2>

                        <form className="space-y-6">
                            <section className="space-y-4">
                                <h3 className="font-semibold font-inter text-black tracking-wide text-[20px]">1. Personal Information</h3>
                                <Input label="Full Name" placeholder="Enter your full name" />
                                <Input label="Email Address" placeholder="Enter your email id" type="email" />
                                <Input label="Phone Number" placeholder="+91 XXXXXXXXXX" />
                                <div className="grid grid-cols-2 gap-4">
                                    <Input label="City" placeholder="City Name" />
                                    <Input label="State" placeholder="State" />
                                </div>
                            </section>

                            <section className="space-y-4">
                                <h3 className="font-semibold font-inter text-black tracking-wide text-[20px]">2. Professional Details</h3>
                                <Input label="Total Years of Experience" placeholder="Ex: 1+" />
                                <Input label="Relevant Experience" placeholder="Ex: 1+" />

                                <div className="space-y-2">
                                    <label className="text-[16px] font-inter font-regular text-black">
                                        Upload CV
                                    </label>
                                    <div className="flex flex-col items-center justify-center gap-2 w-full h-[149px] bg-white  rounded-[8px] transition-colors hover:border-[#2D4F46]">
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            className="hidden"
                                            accept=".pdf,.doc,.docx"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleContainerClick}
                                            className="flex items-center justify-center w-12 h-12 border border-dashed border-gray-400 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-[#2D4F46] transition-all active:scale-95"
                                        >
                                            <Upload className="w-6 h-6 text-gray-600" />
                                        </button>
                                        <span className="text-[14px] text-gray-500 font-medium">Submit CV</span>
                                    </div>
                                </div>
                            </section>

                            <button type="submit" className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition-all active:scale-[0.98]">
                                Apply Now
                            </button>
                        </form>
                    </div>
                </div>
            </div></div>
    );
};
// --- Sub-components for cleaner code ---

const Badge = ({ iconSrc, label, value }: { iconSrc: string, label: string, value: string }) => (
    <div className="bg-gray-200/70 p-3 rounded-2xl flex flex-col justify-between w-[385px] h-[52px]">
        <div className="flex items-center gap-2">
            <div className="relative w-4 h-4">
                <Image
                    src={iconSrc}
                    alt={label}
                    fill
                    className="object-contain"
                />
            </div>
            <span className="text-[14px] font-regular font-inter  tracking-wider text-black">
                {label}
            </span>
        </div>
        <span className="text-[14px] font-bold text-gray-900 leading-tight">
            {value}
        </span>
    </div>
);

const ListSection = ({ title, items }: { title: string, items: string[] }) => (
    <div className="bg-white p-6 rounded-2xl max-w-[731px]">
        <h2 className="text-[24px] font-semibold mb-4 text-black">{title}</h2>
        <ul className="space-y-2">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-black text-[16px]  leading-relaxed">
                    {/* flex-shrink-0 prevents the icon from squishing */}
                    <div className="flex-shrink-0 mt-1">
                        <Image
                            src="/tick7.svg"
                            alt="tick"
                            width={16}
                            height={16}
                            className="object-contain"
                        />
                    </div>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Input = ({ label, ...props }: any) => (
    <div className="space-y-1.5">
        <label className="text-[14px] font-medium text-gray-700">{label}</label>
        <input
            {...props}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-[14px]"
        />
    </div>
);

export default JobModal;