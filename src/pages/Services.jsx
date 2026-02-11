import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  ShoppingBag,
  Wifi,
  Layers,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const allServices = [
    {
      icon: ShoppingBag,
      title: "IT Product Sales",
      desc: "Branded and custom-assembled computers for personal and business needs.",
    },
    {
      icon: Wifi,
      title: "Networking Solutions",
      desc: "End-to-end networking, router setup, LAN/WAN configuration, and maintenance.",
    },
    {
      icon: ShieldCheck,
      title: "AMC Contracts",
      desc: "Tailored annual maintenance contracts designed for small and growing businesses.",
    },
    {
      icon: Wrench,
      title: "Expert Repair",
      desc: "Advanced repair solutions for laptops, desktops, mobile devices, and peripherals.",
    },
    {
      icon: Award,
      title: "Authorized Reseller",
      desc: "Trusted partnerships with leading technology brands delivering quality products.",
    },
    {
      icon: Layers,
      title: "Software Solutions",
      desc: "Business software, OS installation, antivirus, and productivity solutions.",
    },
  ];

  return (
    <div className="relative pt-24 md:pt-32 pb-20 md:pb-24 overflow-hidden">

      {/* Responsive background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[320px] md:w-[800px] md:h-[500px] bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20 blur-[90px] md:blur-[140px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-secondary font-semibold tracking-widest uppercase text-xs sm:text-sm">
            What We Do
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Complete Technology Solutions
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            From product sales to expert repair and enterprise-grade IT
            solutions — we deliver reliable technology services tailored to your
            needs.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-24">
          {allServices.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative p-6 md:p-8 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-primary/50 transition-all flex flex-col h-full"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-5 text-white border border-white/10 group-hover:scale-105 transition-transform">
                  <srv.icon size={24} />
                </div>

                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {srv.title}
                </h3>

                <p className="text-gray-400 mb-5 text-sm md:text-base flex-grow leading-relaxed">
                  {srv.desc}
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:gap-3 transition"
                >
                  Enquire Now →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
            Need a Custom Technology Solution?
          </h2>

          <p className="text-gray-400 mb-7 text-sm sm:text-base">
            Talk to our experts today and get tailored IT solutions, professional
            repair services, and long-term technology support.
          </p>

          <Link
            to="/contact"
            className="px-7 py-3 md:px-10 md:py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition"
          >
            Contact Our Team
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;