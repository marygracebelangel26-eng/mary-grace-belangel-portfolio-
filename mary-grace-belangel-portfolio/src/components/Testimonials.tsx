import { Star, Quote } from 'lucide-react';
import { testimonialsList } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A] border-t border-[#262626] relative">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#14B8A6]/2 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#14B8A6]/2 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-[#14B8A6] block mb-2">
            Testimonials & Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#F5F5F5] tracking-tight">
            What My <span className="text-[#14B8A6]">Clients Say</span>
          </h2>
          <p className="text-sm text-[#9CA3AF] mt-2 max-w-2xl font-sans">
            Hear from the business owners, operators, and brand directors who rely on my administrative, marketing, and operational support to grow their organizations.
          </p>
          <div className="w-12 h-[2px] bg-[#14B8A6] mt-4"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsList.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#1A1A1A] border border-[#262626] flex flex-col justify-between relative overflow-hidden group shadow-md teal-glow-hover"
            >
              {/* Top Row: Decorative Quote & Star Rating */}
              <div className="flex items-start justify-between mb-6">
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#14B8A6] fill-[#14B8A6]"
                    />
                  ))}
                </div>
                {/* Quote Icon decorative */}
                <Quote className="w-8 h-8 text-[#14B8A6]/10 group-hover:text-[#14B8A6]/25 transition-colors duration-300" />
              </div>

              {/* Middle Row: Testimonial Text */}
              <div className="flex-grow mb-8">
                <p className="text-sm text-[#9CA3AF] leading-relaxed italic font-sans group-hover:text-[#F5F5F5] transition-colors duration-300">
                  "{item.testimonial}"
                </p>
              </div>

              {/* Bottom Row: Client Identity */}
              <div className="pt-6 border-t border-[#262626] flex items-center space-x-4">
                {/* Avatar Initial Circle */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#14B8A6]/20 to-[#14B8A6]/5 border border-[#14B8A6]/30 flex items-center justify-center text-sm font-bold text-[#14B8A6] select-none shadow-inner shrink-0 uppercase">
                  {item.avatarInitials}
                </div>
                {/* Details */}
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-bold font-display text-[#F5F5F5] truncate leading-tight">
                    {item.name}
                  </span>
                  <span className="text-xs text-[#9CA3AF] font-mono truncate mt-0.5">
                    {item.role}, <strong className="text-[#14B8A6] font-semibold">{item.company}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
