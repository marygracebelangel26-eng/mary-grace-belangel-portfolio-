import { CheckCircle2, Star, Sparkles, User, Briefcase } from 'lucide-react';

export default function About() {
  const coreSkills = [
    'Virtual Assistance & Executive Support',
    'Social Media Management & Content Creation',
    'Customer Service & Client Communication',
    'Lead Generation & Appointment Setting',
    'Email & Calendar Management',
    'Newsletter Writing & Editing',
    'Graphic Design (Canva)',
    'Video Editing (Reels & YouTube)',
    'CRM & Automation Tools',
    'Voice Over & Writing',
    'Time Management & Organization',
  ];

  const highlights = [
    { title: '8+ Years', desc: 'Supporting Australian, US, & global companies' },
    { title: 'Full Stack VA', desc: 'From SMM strategy to core admin tasks' },
    { title: 'Client Centric', desc: 'Committed to Timely & High-Quality results' },
  ];

  return (
    <section id="about" className="py-24 bg-[#0D0D0D] border-t border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 max-w-2xl">
          <span className="text-xs font-mono tracking-widest uppercase text-[#14B8A6] mb-3">
            01 // Profile Summary
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#F5F5F5] tracking-tight">
            About <span className="text-[#14B8A6]">Me</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#14B8A6] mt-4"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Biography & Highlights */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-[#F5F5F5] flex items-center gap-2">
                <User className="w-5 h-5 text-[#14B8A6]" />
                Your Trusted Growth Partner
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed text-sm sm:text-base">
                I am a results-driven Virtual Assistant and Social Media Manager with over <strong className="text-[#F5F5F5] font-semibold">8 years of hands-on experience</strong> supporting businesses across Australia, the United States, and online organizations. I specialize in bridging the gap between high-level operations and daily tasks.
              </p>
              <p className="text-[#9CA3AF] leading-relaxed text-sm sm:text-base">
                My professional expertise spans administrative support, end-to-end social media management, customer support, lead generation, and strategic content creation. I am highly organized, tech-savvy, and deeply committed to delivering timely, high-quality results that directly contribute to my clients' bottom line.
              </p>
            </div>

            {/* Structured Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#262626] hover:border-[#14B8A6]/30 transition-all shadow-sm"
                >
                  <span className="text-sm font-bold font-display text-[#14B8A6] block mb-1">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-[#9CA3AF] leading-snug block font-medium">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Value Statement */}
            <div className="p-4 rounded-2xl bg-[#14B8A6]/5 border border-[#14B8A6]/10 flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-[#14B8A6] shrink-0 mt-0.5" />
              <p className="text-xs text-[#F5F5F5] leading-relaxed">
                <strong>Why work with me?</strong> I don't just complete checklist tasks. I study your audience, learn your processes, optimize workflows with modern AI tools, and represent your brand with absolute integrity.
              </p>
            </div>
          </div>

          {/* Right Column: Core Skills Pills */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <h3 className="text-xl font-display font-semibold text-[#F5F5F5] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#14B8A6]" />
              Core Competencies
            </h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Below is a mapped view of my multi-disciplinary skillset. I actively use these skills daily to keep business operations structured and social channels growing:
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {coreSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-3.5 py-2 text-xs font-medium tracking-wide text-[#F5F5F5] bg-[#1A1A1A] hover:bg-[#14B8A6]/5 border border-[#262626] hover:border-[#14B8A6]/50 rounded-2xl transition-all duration-300 flex items-center space-x-2 shadow-sm cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#262626]">
              <div className="flex items-center space-x-6 text-[#A3A3A3] text-xs font-mono">
                <span className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-[#14B8A6] fill-[#14B8A6]" />
                  Canva Expert
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-[#14B8A6] fill-[#14B8A6]" />
                  Ad Account Setup
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-[#14B8A6] fill-[#14B8A6]" />
                  CRM Specialist
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
