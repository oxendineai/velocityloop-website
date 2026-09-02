import Link from 'next/link';
import { Phone, CheckCircle, ArrowRight, Zap, Clock, Shield, Building2, Stethoscope, Scale, DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A2540]">
      {/* ============================================ */}
      {/* SECTION 1: HERO */}
      {/* ============================================ */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0F3A5F] to-[#0A2540]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(#00D4FF 1px, transparent 1px), linear-gradient(90deg, #00D4FF 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              {/* Simple geometric placeholder logo */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0A2540] flex items-center justify-center">
                <span className="text-white font-black text-xl">VL</span>
              </div>
              <span className="text-white font-black text-3xl tracking-tight">VELOCITYLOOP</span>
            </div>
          </div>

          {/* Eyebrow */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-sm font-semibold tracking-wide">
              AI AUTOMATION INFRASTRUCTURE
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight max-w-4xl">
            Your Customers Call 24/7.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0EA5E9]">
              Your AI Answers—Instantly.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            VelocityLoop's AI automation infrastructure handles voice calls, web chat, and lead qualification 
            for service businesses—so your team focuses on closing jobs, not managing voicemail.
          </p>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl">
            Starting with HVAC contractors. Expanding to medical, legal, and professional services in 2025.
          </p>

          {/* Proven Metrics */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 text-slate-300">
              <Zap className="w-5 h-5 text-[#00D4FF]" />
              <span className="font-semibold">&lt;2 second response time</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Shield className="w-5 h-5 text-[#00D4FF]" />
              <span className="font-semibold">99.9% uptime</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Clock className="w-5 h-5 text-[#00D4FF]" />
              <span className="font-semibold">Deploy in 48 hours</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="#live-demo" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4FF] text-[#0A2540] font-bold rounded-lg hover:bg-[#00E5FF] transition-all shadow-lg shadow-[#00D4FF]/20"
            >
              <Phone className="w-5 h-5" />
              Call Live Demo
            </a>
            <a 
              href="#hvac-solution" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See HVAC Solution
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#pricing" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg hover:bg-white/5 transition-all border border-white/30"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: SOCIAL PROOF / TECH PARTNERS */}
      {/* ============================================ */}
      <section className="bg-white/5 border-y border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-400 text-sm font-semibold mb-6 tracking-wide">
            BUILT ON ENTERPRISE-GRADE INFRASTRUCTURE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            <div className="text-white font-bold text-xl">OpenAI</div>
            <div className="text-white font-bold text-xl">Anthropic</div>
            <div className="text-white font-bold text-xl">Twilio</div>
            <div className="text-white font-bold text-xl">HubSpot</div>
            <div className="text-white font-bold text-xl">Stripe</div>
            <div className="text-white font-bold text-xl">Google Cloud</div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: HOW IT WORKS (3 STEPS) */}
      {/* ============================================ */}
      <section className="py-24 bg-gradient-to-b from-[#0A2540] to-[#0F3A5F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Your automation engine handles the entire workflow from first call to booked appointment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00D4FF] to-[#0EA5E9] rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white font-black text-2xl">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">ANSWER</h3>
                <div className="space-y-3 text-slate-300">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-1 flex-shrink-0" />
                    <span>AI answers every call in &lt;2 seconds</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-1 flex-shrink-0" />
                    <span>24/7 coverage, no voicemail</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-1 flex-shrink-0" />
                    <span>Natural conversation, not robotic</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00D4FF] to-[#0EA5E9] rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white font-black text-2xl">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">QUALIFY</h3>
                <div className="space-y-3 text-slate-300">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-1 flex-shrink-0" />
                    <span>Asks the right questions</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-1 flex-shrink-0" />
                    <span>Captures all job details</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-1 flex-shrink-0" />
                    <span>Filters urgent vs routine calls</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00D4FF] to-[#0EA5E9] rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white font-black text-2xl">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">BOOK</h3>
                <div className="space-y-3 text-slate-300">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-1 flex-shrink-0" />
                    <span>Routes to your calendar automatically</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-1 flex-shrink-0" />
                    <span>Syncs to CRM in real-time</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-1 flex-shrink-0" />
                    <span>Sends confirmation SMS/email</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: LIVE DEMO */}
      {/* ============================================ */}
      <section id="live-demo" className="py-24 bg-gradient-to-b from-[#0F3A5F] to-[#0A2540]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-[#00D4FF]/10 to-[#0EA5E9]/5 border-2 border-[#00D4FF]/30 rounded-3xl p-12">
            <Phone className="w-16 h-16 text-[#00D4FF] mx-auto mb-6" />
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Hear It In Action – Call Now
            </h2>
            
            <p className="text-xl text-slate-300 mb-8">
              Call our AI voice assistant "Sarah" right now and experience real AI conversation handling
            </p>

            <div className="bg-[#0A2540] border border-[#00D4FF]/30 rounded-2xl p-8 mb-8">
              <a 
                href="tel:+12186633336" 
                className="text-5xl font-black text-[#00D4FF] hover:text-[#00E5FF] transition-colors"
              >
                📞 (218) 663-3336
              </a>
              <p className="text-sm text-slate-400 mt-4">
                Your actual working Vapi demo number - call now!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/5 rounded-xl p-4">
                <CheckCircle className="w-6 h-6 text-[#00D4FF] mb-2" />
                <p className="text-slate-300 text-sm">Emergency HVAC call simulation</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <CheckCircle className="w-6 h-6 text-[#00D4FF] mb-2" />
                <p className="text-slate-300 text-sm">Real-time appointment booking</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <CheckCircle className="w-6 h-6 text-[#00D4FF] mb-2" />
                <p className="text-slate-300 text-sm">Lead qualification in action</p>
              </div>
            </div>

            <p className="text-slate-400 mt-6 text-sm">
              Available 24/7 – Call anytime to test the system
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: OUTCOMES (NOT FEATURES) */}
      {/* ============================================ */}
      <section className="py-24 bg-[#0A2540]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Not a Chatbot. Not Just an API.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0EA5E9]">
                The Complete Automation Backbone.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Revenue Impact */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#00D4FF] mb-6">REVENUE IMPACT</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Never Miss After-Hours Calls</h4>
                    <p className="text-slate-400 text-sm">Capture emergency revenue while you sleep</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Capture Emergency Revenue</h4>
                    <p className="text-slate-400 text-sm">Turn urgent calls into booked jobs instantly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Convert 24/7 Without Staff</h4>
                    <p className="text-slate-400 text-sm">No additional payroll, just pure automation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operational Efficiency */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#00D4FF] mb-6">OPERATIONAL EFFICIENCY</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Eliminate Phone Tag</h4>
                    <p className="text-slate-400 text-sm">Instant response, every time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Reduce Admin Work by 60%</h4>
                    <p className="text-slate-400 text-sm">Automated data entry and follow-up</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Auto-Sync All Systems</h4>
                    <p className="text-slate-400 text-sm">Calendar, CRM, and notifications—automatic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Differentiation */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">How We're Different:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-slate-400 text-sm font-semibold mb-2">vs Intercom/Drift:</p>
                <p className="text-white">"Not a support chatbot. We do voice-first revenue intake."</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm font-semibold mb-2">vs ServiceTitan/Jobber:</p>
                <p className="text-white">"We integrate with your systems—we're the AI layer on top."</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm font-semibold mb-2">vs Bland/Vapi:</p>
                <p className="text-white">"Not just an API. We deploy FOR you in 48 hours."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: INDUSTRY SOLUTIONS */}
      {/* ============================================ */}
      <section id="hvac-solution" className="py-24 bg-gradient-to-b from-[#0A2540] to-[#0F3A5F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Starting with HVAC contractors. Expanding to serve every service business vertical.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* HVAC - Live Now */}
            <div className="bg-gradient-to-br from-[#00D4FF]/10 to-[#0EA5E9]/5 border-2 border-[#00D4FF] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-[#00D4FF]" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-black text-white">HVAC Contractors</h3>
                    <span className="px-3 py-1 bg-[#00D4FF] text-[#0A2540] text-xs font-black rounded-full">
                      LIVE NOW
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">Proven with 100+ contractors</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                  <span>Emergency dispatch automation</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                  <span>ServiceTitan/HubSpot integration</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                  <span>24/7 after-hours booking</span>
                </li>
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <p className="text-slate-400 text-sm">Starting at</p>
                  <p className="text-2xl font-black text-white">$297<span className="text-lg font-normal text-slate-400">/mo</span></p>
                </div>
                <a 
                  href="https://hvacai247.com" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D4FF] text-[#0A2540] font-bold rounded-lg hover:bg-[#00E5FF] transition-all"
                >
                  View HVAC Solution
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-black text-white">More Industries</h3>
                  <span className="px-3 py-1 bg-white/10 text-slate-300 text-xs font-bold rounded-full">
                    LAUNCHING 2025
                  </span>
                </div>
                <p className="text-slate-400 text-sm">Join the waitlist for early access</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <Building2 className="w-6 h-6 text-slate-400" />
                  <div>
                    <p className="text-white font-semibold">Plumbing Contractors</p>
                    <p className="text-slate-400 text-sm">Emergency dispatch + scheduling</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <Building2 className="w-6 h-6 text-slate-400" />
                  <div>
                    <p className="text-white font-semibold">Electrical Contractors</p>
                    <p className="text-slate-400 text-sm">Safety-first qualification</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <Stethoscope className="w-6 h-6 text-slate-400" />
                  <div>
                    <p className="text-white font-semibold">Medical Practices</p>
                    <p className="text-slate-400 text-sm">HIPAA-compliant intake</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <Scale className="w-6 h-6 text-slate-400" />
                  <div>
                    <p className="text-white font-semibold">Legal Firms</p>
                    <p className="text-slate-400 text-sm">Case qualification automation</p>
                  </div>
                </div>
              </div>

              <a 
                href="#waitlist" 
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7: PRICING */}
      {/* ============================================ */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-[#0F3A5F] to-[#0A2540]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              No hidden fees. No surprises. Scale as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Chat Widget */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-black text-white mb-2">Chat Widget</h3>
              <p className="text-slate-400 mb-6">Website lead capture</p>
              
              <div className="mb-6">
                <p className="text-4xl font-black text-white">$97-297<span className="text-lg font-normal text-slate-400">/mo</span></p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                  <span>24/7 website chat</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                  <span>FAQ automation</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                  <span>SMS follow-up</span>
                </li>
              </ul>

              <a 
                href="#contact" 
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Get Started
              </a>
            </div>

            {/* Voice AI Agent - Most Popular */}
            <div className="bg-gradient-to-br from-[#00D4FF]/10 to-[#0EA5E9]/5 border-2 border-[#00D4FF] rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-[#00D4FF] text-[#0A2540] text-sm font-black rounded-full">
                  MOST POPULAR
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">Voice AI Agent</h3>
              <p className="text-slate-400 mb-6">Full phone automation</p>
              
              <div className="mb-6">
                <p className="text-4xl font-black text-white">$297-999<span className="text-lg font-normal text-slate-400">/mo</span></p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                  <span>24/7 phone answering</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                  <span>Appointment booking</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                  <span>CRM integration</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                  <span>Real-time analytics</span>
                </li>
              </ul>

              <a 
                href="#live-demo" 
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#00D4FF] text-[#0A2540] font-bold rounded-lg hover:bg-[#00E5FF] transition-all"
              >
                Start Free Trial
              </a>
            </div>

            {/* Enterprise */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-black text-white mb-2">Enterprise</h3>
              <p className="text-slate-400 mb-6">Custom solutions</p>
              
              <div className="mb-6">
                <p className="text-4xl font-black text-white">Custom</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                  <span>10K+ conversations/month</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                  <span>Dedicated infrastructure</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                  <span>White-label options</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
              </ul>

              <a 
                href="#contact" 
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Contact Sales
              </a>
            </div>
          </div>

          <p className="text-center text-slate-400 mt-12">
            All plans include: 48-hour deployment • Training • HubSpot/Salesforce sync • Real-time analytics
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer className="bg-[#0A2540] border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0A2540] flex items-center justify-center">
                  <span className="text-white font-black text-lg">VL</span>
                </div>
                <span className="text-white font-black text-xl">VELOCITYLOOP</span>
              </div>
              <p className="text-slate-400 text-sm">
                AI automation infrastructure for service businesses.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#live-demo" className="text-slate-400 hover:text-[#00D4FF] transition-colors text-sm">Voice AI Agent</a></li>
                <li><a href="#pricing" className="text-slate-400 hover:text-[#00D4FF] transition-colors text-sm">Chat Widget</a></li>
                <li><a href="#pricing" className="text-slate-400 hover:text-[#00D4FF] transition-colors text-sm">Enterprise</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Industries</h4>
              <ul className="space-y-2">
                <li><a href="https://hvacai247.com" className="text-slate-400 hover:text-[#00D4FF] transition-colors text-sm">HVAC</a></li>
                <li><a href="#waitlist" className="text-slate-400 hover:text-[#00D4FF] transition-colors text-sm">Plumbing</a></li>
                <li><a href="#waitlist" className="text-slate-400 hover:text-[#00D4FF] transition-colors text-sm">Electrical</a></li>
                <li><a href="#waitlist" className="text-slate-400 hover:text-[#00D4FF] transition-colors text-sm">Medical</a></li>
                <li><a href="#waitlist" className="text-slate-400 hover:text-[#00D4FF] transition-colors text-sm">Legal</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-slate-400 hover:text-[#00D4FF] transition-colors text-sm">About</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-[#00D4FF] transition-colors text-sm">Contact</a></li>
                <li><a href="#privacy" className="text-slate-400 hover:text-[#00D4FF] transition-colors text-sm">Privacy</a></li>
                <li><a href="#terms" className="text-slate-400 hover:text-[#00D4FF] transition-colors text-sm">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 VelocityLoop. A division of Oxendine Consulting, LLC.
            </p>
            <p className="text-slate-500 text-xs">
              Built in Minnesota. Deployed nationwide.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
