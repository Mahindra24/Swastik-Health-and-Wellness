import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Button } from "@/components/ui/button";
import { Activity, Leaf, Brain, HeartPulse, CheckCircle2, ChevronRight, Stethoscope, Phone } from "lucide-react";

export default function Home() {
  const features = [
    "Holistic Approach to Health",
    "Expert Medical Professionals",
    "Modern Diagnostic Center",
    "Personalized Care Plans"
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container-padding relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl animate-in slide-in-from-left-10 fade-in duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 text-primary font-medium text-sm mb-6 shadow-sm">
                <Leaf className="w-4 h-4" />
                <span>Wellness for Body, Mind & Soul</span>
              </div>
              
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.1] mb-6 text-slate-900">
                Your Journey to <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Better Health</span> Starts Here
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                At Swastik Health, we combine modern medicine with holistic wellness practices to ensure you live your healthiest, happiest life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-base rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Book Appointment <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 text-base rounded-full border-2 hover:bg-slate-100"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore Services
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-in slide-in-from-right-10 fade-in duration-1000 delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group">
                {/* Doctor holding stethoscope or consulting patient - gentle imagery */}
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" 
                  alt="Doctor consulting with patient" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                
                {/* Floating stat card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">Expert Care</p>
                      <p className="text-slate-600 text-sm">Top-rated medical professionals dedicated to you.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative circle behind */}
              <div className="absolute -z-10 top-[-10%] right-[-10%] w-2/3 h-2/3 border-[24px] border-primary/5 rounded-full" />
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="section-padding bg-white relative">
          <div className="container-padding">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Our Services</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
                Comprehensive Healthcare Solutions
              </h3>
              <p className="text-lg text-slate-600">
                We offer a wide range of specialized medical services designed to meet your unique health needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard 
                title="General Consultation" 
                description="Comprehensive health assessments and primary care for all ages with experienced physicians."
                icon={<Stethoscope className="w-7 h-7" />}
                delay={0}
              />
              <ServiceCard 
                title="Physiotherapy" 
                description="Restore movement and function with personalized rehabilitation programs and expert therapy."
                icon={<Activity className="w-7 h-7" />}
                delay={100}
              />
              <ServiceCard 
                title="Yoga & Meditation" 
                description="Holistic practices to improve flexibility, reduce stress, and enhance mental clarity."
                icon={<Leaf className="w-7 h-7" />}
                delay={200}
              />
              <ServiceCard 
                title="Nutrition Planning" 
                description="Customized diet plans tailored to your lifestyle and health goals by certified nutritionists."
                icon={<HeartPulse className="w-7 h-7" />}
                delay={300}
              />
              <ServiceCard 
                title="Mental Wellness" 
                description="Compassionate counseling and therapy sessions to support your emotional health."
                icon={<Brain className="w-7 h-7" />}
                delay={400}
              />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section-padding bg-slate-50 relative overflow-hidden">
          <div className="container-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               {/* Team of doctors smiling - trust building */}
               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80" 
                   alt="Our medical team" 
                   className="w-full h-auto object-cover"
                 />
                 <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
               </div>
               {/* Experience badge */}
               <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-[200px]">
                 <p className="font-display font-bold text-4xl text-primary mb-1">15+</p>
                 <p className="font-medium text-slate-700 leading-tight">Years of Excellence in Healthcare</p>
               </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Dedicated to Your Well-being Since 2008
              </h3>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  At Swastik Health, we believe that true health is more than just the absence of disease. It's a state of complete physical, mental, and social well-being.
                </p>
                <p>
                  Our facility combines state-of-the-art medical technology with a compassionate, patient-centered approach. Whether you need urgent care, chronic disease management, or preventive wellness services, our team is here for you.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {["Certified Doctors", "24/7 Support", "Modern Technology", "Affordable Care"].map((item) => (
                    <li key={item} className="flex items-center gap-2 font-medium text-slate-800">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Button variant="default" size="lg" className="rounded-full px-8">Read Our Story</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPOINTMENT SECTION */}
        <section id="appointment" className="section-padding bg-white relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50 -z-10" /> {/* Half background */}
          
          <div className="container-padding">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-0 shadow-2xl rounded-3xl overflow-hidden bg-white">
              
              {/* Left side: Info & Context */}
              <div className="lg:col-span-2 bg-primary text-white p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-3xl mb-4">Opening Hours</h3>
                  <p className="text-primary-foreground/90 mb-8">We are available 7 days a week to ensure you get the care you need, when you need it.</p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-white/20 pb-2">
                      <span>Mon - Fri</span>
                      <span className="font-semibold">8:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-white/20 pb-2">
                      <span>Saturday</span>
                      <span className="font-semibold">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-white/20 pb-2">
                      <span>Sunday</span>
                      <span className="font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="font-bold text-xl mb-2">Emergency?</h4>
                  <p className="text-primary-foreground/90 mb-4">Call our emergency line for immediate assistance.</p>
                  <a href="tel:+919876543210" className="flex items-center gap-2 font-bold text-2xl hover:text-white/90 transition-colors">
                    <Phone className="w-6 h-6" /> +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Right side: Form */}
              <div className="lg:col-span-3">
                <AppointmentForm />
              </div>

            </div>
          </div>
        </section>
        
        {/* CTA BANNER */}
        <section className="py-20 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80')] bg-cover bg-center opacity-10" />
          <div className="container-padding relative z-10 text-center">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
              Ready to Prioritize Your Health?
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
              Join thousands of satisfied patients who have trusted Swastik Health for their medical and wellness needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button size="lg" className="h-14 px-8 text-base rounded-full bg-secondary hover:bg-secondary/90 text-white font-semibold">
                 Book Appointment Now
               </Button>
               <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white">
                 Contact Us
               </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
