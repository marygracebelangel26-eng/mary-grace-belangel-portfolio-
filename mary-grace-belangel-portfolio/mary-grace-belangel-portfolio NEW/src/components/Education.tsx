import { Award, ShieldCheck, GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import { certifications } from '../data';

export default function Education() {
  
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#14B8A6]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#14B8A6]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#14B8A6]" />;
      default:
        return <Award className="w-6 h-6 text-[#14B8A6]" />;
    }
  };

  return (
    <section id="education" className="py-24 bg-[#0D0D0D] border-t border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 max-w-2xl">
          <span className="text-xs font-mono tracking-widest uppercase text-[#14B8A6] mb-3">
            05 // Credentials & Badges
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#F5F5F5] tracking-tight">
            Education & <span className="text-[#14B8A6]">Certifications</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#14B8A6] mt-4"></div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="p-6 sm:p-8 rounded-2xl bg-[#1A1A1A] border border-[#262626] hover:border-[#14B8A6]/30 transition-all duration-300 flex flex-col justify-between items-start relative overflow-hidden group shadow-md teal-glow-hover"
            >
              
              {/* Background circular glow design */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#14B8A6]/3 rounded-full blur-xl group-hover:bg-[#14B8A6]/8 transition-all duration-500"></div>

              <div className="space-y-6 w-full">
                {/* Badge Icon Emblem */}
                <div className="w-12 h-12 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 flex items-center justify-center text-[#14B8A6] shadow-sm">
                  {getCertIcon(cert.icon)}
                </div>

                {/* Info and title */}
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-widest uppercase text-[#14B8A6] bg-[#14B8A6]/10 px-2 py-0.5 rounded-2xl">
                    <CheckCircle className="w-2.5 h-2.5" />
                    Verified Credential
                  </span>
                  
                  <h3 className="text-base sm:text-lg font-bold font-display text-[#F5F5F5] group-hover:text-[#14B8A6] transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  
                  <p className="text-xs text-[#9CA3AF] font-sans font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Footer Year Tag */}
              <div className="mt-8 pt-4 border-t border-[#262626] w-full flex items-center justify-between text-[11px] font-mono text-[#9CA3AF]">
                <span className="uppercase tracking-widest">Completed:</span>
                <span className="flex items-center gap-1 font-semibold text-[#F5F5F5]">
                  <Calendar className="w-3.5 h-3.5 text-[#14B8A6]" />
                  {cert.year}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Quality Commitment Section Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-[#1A1A1A] border border-[#262626] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-2">
            <h3 className="text-lg font-bold font-display text-[#F5F5F5]">
              Continuous Learning & System Adaptation
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              In the fast-moving digital marketing landscape, I actively update my skillsets through rigorous course training. From algorithm tweaks to automation workflows (Zapier, Meta Pixels, AI prompt engineering), my certifications ensure your operational channels run on the absolute state-of-the-art.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <a 
              href="#contact"
              className="px-5 py-3 text-xs font-bold font-display uppercase tracking-wider text-[#14B8A6] hover:text-[#0A0A0A] bg-transparent hover:bg-[#14B8A6] border border-[#14B8A6]/30 hover:border-[#14B8A6] rounded-sm transition-all duration-300"
            >
              Verify Expertise In Chat
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
