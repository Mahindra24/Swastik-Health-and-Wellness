import { Heart, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary/20 p-2 rounded-lg">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display font-bold text-xl text-white">
              Swastik<span className="text-primary">Health</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Dedicated to providing holistic healthcare solutions that prioritize your physical, mental, and emotional well-being.
          </p>
          <div className="flex gap-4 pt-2">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-primary transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-white mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {["Home", "About Us", "Services", "Doctors", "Book Appointment", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-bold text-white mb-6">Our Services</h4>
          <ul className="space-y-3">
            {["General Consultation", "Physiotherapy", "Yoga & Meditation", "Nutrition Planning", "Mental Wellness", "Diagnostic Services"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-white mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">123 Wellness Avenue, Health District, Mumbai, Maharashtra 400001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm">+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm">care@swastikhealth.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-padding border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Swastik Health and Wellness. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
