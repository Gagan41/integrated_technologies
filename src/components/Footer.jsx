import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-background pt-16 md:pt-24 pb-8 border-t border-white/10 overflow-hidden">

      {/* Responsive soft glow (lighter for performance) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[260px] md:w-[700px] md:h-[400px] bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20 blur-[90px] md:blur-[120px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4 inline-block"
            >
              Integrated Technologies
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Delivering innovative IT solutions, reliable technology services,
              and expert support to empower your digital journey.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -2 }}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-accent hover:border-accent/50 transition"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Services
            </h3>

            <ul className="space-y-2 text-sm">
              {[
                "IT Product Sales",
                "Networking Solutions",
                "AMC Contracts",
                "Expert Repair",
                "Software Solutions",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-accent transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-accent transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex gap-3">
                <MapPin size={15} className="text-accent mt-1 shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/pMncUKVnUiTzceBx6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors text-left"
                >
                  Shankarnag Circle, 2nd Block, Ashok Nagar, Banashankari 1st Stage, Banashankari, Bengaluru, Karnataka 560050
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={15} className="text-accent shrink-0" />
                <a href="tel:+919845125274" className="hover:text-accent transition-colors">+91 98451 25274</a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={15} className="text-accent shrink-0" />
                <a 
                  href="mailto:dinesh@integratedtech.co.in" 
                  className="hover:text-accent transition-colors text-left"
                >
                 dinesh@integratedtech.co.in 
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Integrated Technologies. All rights
            reserved.
          </p>

          <span className="text-gray-500">
            Developed By <a href="https://cortinex-webstudio.vercel.app/" target="_blank"
  rel="noopener noreferrer"
  className="text-white font-bold hover:text-accent transition">.CXW Devs</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;