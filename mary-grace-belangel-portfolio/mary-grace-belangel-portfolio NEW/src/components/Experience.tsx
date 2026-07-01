import { Briefcase, Calendar, MapPin, Building, Sparkles } from 'lucide-react';
import { workExperience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0D0D0D] border-t border-[#262626] relative">
      {/* Subtle decorative glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#14B8A6]/3 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 max-w-2xl">
          <span className="text-xs font-mono tracking-widest uppercase text-[#14B8A6] mb-3">
            03 // Career Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#F5F5F5] tracking-tight">
            Work <span className="text-[#14B8A6]">Experience</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#14B8A6] mt-4"></div>
        </div>

        {/* Timeline Stacked Layout */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#262626]">
          
          {/* Vertical teal progress indicator bar */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#14B8A6] via-[#14B8A6]/40 to-transparent"></div>

          <div className="space-y-10">
            {workExperience.map((job) => (
              <div 
                key={job.id} 
                className="relative group"
              >
                {/* Glowing Node on Timeline */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-[#0D0D0D] flex items-center justify-center transition-all duration-300 ${
                  job.isCurrent 
                    ? 'border-[#14B8A6] shadow-[0_0_10px_#14B8A6]' 
                    : 'border-[#262626] group-hover:border-[#14B8A6]'
                }`}>
                  {job.isCurrent && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-ping"></div>
                  )}
                </div>

                {/* Main Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#1A1A1A] border border-[#262626] hover:border-[#14B8A6]/30 group-hover:bg-[#1A1A1A]/85 transition-all duration-300 shadow-sm relative overflow-hidden">
                  
                  {/* Subtle top horizontal teal highlight line on current job */}
                  {job.isCurrent && (
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#14B8A6]"></div>
                  )}

                  {/* Header metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold font-display text-[#F5F5F5] group-hover:text-[#14B8A6] transition-colors leading-tight">
                        {job.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-xs text-[#9CA3AF]">
                        <span className="flex items-center gap-1 font-semibold text-[#F5F5F5]">
                          <Building className="w-3.5 h-3.5 text-[#14B8A6]" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-2xl text-[11px] font-mono font-medium ${
                        job.isCurrent 
                          ? 'bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/20' 
                          : 'bg-[#131313] text-[#9CA3AF] border border-[#262626]'
                      }`}>
                        <Calendar className="w-3 h-3" />
                        {job.period}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points detailing tasks */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed list-none pl-0">
                    {job.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]/60 shrink-0 mt-2"></span>
                        <span className="flex-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
