import { useState, FormEvent } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  ExternalLink, 
  CheckCircle2, 
  Loader2, 
  Copy, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [copiedText, setCopiedText] = useState<'email' | 'phone' | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormState('submitting');
    
    // Simulate real network submission lag
    setTimeout(() => {
      // Log / Save locally so the user can verify mock inbox entries
      const previousSubmissions = JSON.parse(localStorage.getItem('marygrace_contact_entries') || '[]');
      const newEntry = {
        ...formData,
        id: Date.now().toString(),
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('marygrace_contact_entries', JSON.stringify([...previousSubmissions, newEntry]));

      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] border-t border-[#262626] relative bg-grid-overlay">
      
      {/* Absolute background glow */}
      <div className="absolute bottom-12 left-10 w-72 h-72 bg-[#14B8A6]/3 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 max-w-2xl">
          <span className="text-xs font-mono tracking-widest uppercase text-[#14B8A6] mb-3">
            06 // Connect With Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#F5F5F5] tracking-tight">
            Get In <span className="text-[#14B8A6]">Touch</span>
          </h2>
          <p className="text-sm text-[#9CA3AF] mt-2 font-sans">
            Have a project in mind or need executive administrative operations? Let's discuss how my 8+ years of experience can help optimize your brand.
          </p>
          <div className="w-12 h-[2px] bg-[#14B8A6] mt-4"></div>
        </div>

        {/* Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact info details */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl font-semibold font-display text-[#F5F5F5]">
              Contact <span className="text-[#14B8A6]">Information</span>
            </h3>

            <div className="space-y-4">
              
              {/* Phone item */}
              <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#262626] flex items-start justify-between group">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#9CA3AF] tracking-widest uppercase block">
                      Call / WhatsApp
                    </span>
                    <a 
                      href="tel:+639984757817"
                      className="text-sm font-semibold text-[#F5F5F5] hover:text-[#14B8A6] transition-colors block"
                    >
                      +63 998 475 7817
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('+63 998 475 7817', 'phone')}
                  className="text-[#9CA3AF] hover:text-[#14B8A6] p-1.5 focus:outline-none"
                  title="Copy to clipboard"
                  id="copy-phone-btn"
                >
                  {copiedText === 'phone' ? <Check className="w-4 h-4 text-[#14B8A6]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email item */}
              <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#262626] flex items-start justify-between group">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#9CA3AF] tracking-widest uppercase block">
                      Email Address
                    </span>
                    <a 
                      href="mailto:marygracebelangel26@gmail.com"
                      className="text-sm font-semibold text-[#F5F5F5] hover:text-[#14B8A6] transition-colors block break-all"
                    >
                      marygracebelangel26@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('marygracebelangel26@gmail.com', 'email')}
                  className="text-[#9CA3AF] hover:text-[#14B8A6] p-1.5 focus:outline-none"
                  title="Copy to clipboard"
                  id="copy-email-btn"
                >
                  {copiedText === 'email' ? <Check className="w-4 h-4 text-[#14B8A6]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#262626] flex items-start space-x-4">
                <div className="p-2.5 rounded bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#9CA3AF] tracking-widest uppercase block">
                    Location Base
                  </span>
                  <span className="text-sm font-semibold text-[#F5F5F5]">
                    Toril, Davao City, Philippines (GMT+8)
                  </span>
                </div>
              </div>

            </div>

            {/* External Portfolios Link */}
            <div className="p-5 rounded-2xl bg-[#14B8A6]/5 border border-[#14B8A6]/15 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#14B8A6]">
                Alternative Bio Channels
              </h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                You can also view my live profile landing deck for summary bios, testimonials, and alternative service matrices:
              </p>
              <a
                href="https://winus.carrd.co/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#F5F5F5] hover:text-[#14B8A6] font-display uppercase tracking-wider group focus:outline-none"
              >
                <span>Visit My Carrd Profile</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#14B8A6]" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#1A1A1A] border border-[#262626] p-6 sm:p-8 rounded-2xl shadow-lg">
            {formState === 'success' ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/30 flex items-center justify-center text-[#14B8A6] shadow-lg">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display text-[#F5F5F5]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-md leading-relaxed">
                    Thank you for reaching out, your inquiry has been simulated and saved to local storage securely. Mary Grace will review your parameters and respond within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setFormState('idle')}
                  className="px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#14B8A6] hover:bg-[#14B8A6]/10 border border-[#14B8A6]/20 hover:border-[#14B8A6] rounded-2xl transition-all focus:outline-none cursor-pointer"
                  id="reset-form-btn"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-bold font-display text-[#F5F5F5] mb-2">
                  Send A Direct <span className="text-[#14B8A6]">Message</span>
                </h3>

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-mono tracking-widest uppercase text-[#9CA3AF]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g., Vanessa Barrington"
                    disabled={formState === 'submitting'}
                    className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] px-4 py-3 rounded-2xl text-sm text-[#F5F5F5] placeholder-[#555] transition-all focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] font-mono tracking-widest uppercase text-[#9CA3AF]">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    disabled={formState === 'submitting'}
                    className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] px-4 py-3 rounded-2xl text-sm text-[#F5F5F5] placeholder-[#555] transition-all focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[10px] font-mono tracking-widest uppercase text-[#9CA3AF]">
                    Project Specifications / Brief *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly state your SMM goals, lead gen parameters, or required VA assistant schedules..."
                    disabled={formState === 'submitting'}
                    className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] px-4 py-3 rounded-2xl text-sm text-[#F5F5F5] placeholder-[#555] transition-all focus:outline-none resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  id="submit-contact-btn"
                  className="w-full inline-flex items-center justify-center py-3.5 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] bg-[#14B8A6] hover:bg-[#0FB9B1] disabled:bg-[#14B8A6]/40 disabled:text-[#0A0A0A]/50 rounded-2xl transition-all duration-300 font-display shadow-md teal-glow focus:outline-none cursor-pointer"
                >
                  {formState === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin mr-2 w-4 h-4" />
                      Dispatching Strategy Brief...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-3.5 h-3.5" />
                      Submit Strategy Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
