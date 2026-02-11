import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Wrench,
  ArrowRight,
  ShoppingBag,
  Wifi,
  Server,
  HardDrive,
  Monitor,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen pt-20 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[calc(100vh-80px)] md:min-h-[90vh] flex items-center justify-center overflow-hidden pb-12 md:pb-0">

        {/* Glow Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-primary/20 blur-[90px] md:blur-[120px] rounded-full opacity-60 md:opacity-100" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-secondary/10 blur-[80px] md:blur-[100px] rounded-full opacity-60 md:opacity-100" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading tracking-tight">
              Sales | Solutions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Services | Support
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-lg mx-auto md:mx-0">
              Integrated Technologies — Empowering your digital journey with
              expert service, advanced repair, and reliable solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold"
              >
                Book a Service
              </Link>

              <Link
                to="/services"
                className="px-6 py-3 rounded-xl border border-white/10 text-white flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full"
          >
            <div className="relative w-full h-[350px] md:h-[500px] rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">

              {/* CONNECTION LINES */}
              <svg className="absolute inset-0 w-full h-full opacity-20">
                <line x1="25%" y1="30%" x2="50%" y2="50%" stroke="white" strokeWidth="1" />
                <line x1="75%" y1="70%" x2="50%" y2="50%" stroke="white" strokeWidth="1" />
              </svg>

              {/* EXPERIENCE */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-6 right-6 md:top-10 md:right-10 p-2 md:p-3 bg-black/60 rounded-xl border border-white/10 flex items-center gap-2 md:gap-3"
              >
                <ShieldCheck className="text-white w-4 h-4 md:w-5 md:h-5" />
                <div>
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">Experience</p>
                  <p className="font-semibold text-sm md:text-base">22+ Years</p>
                </div>
              </motion.div>

              {/* AVAILABILITY */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-6 left-6 md:bottom-10 md:left-10 p-2 md:p-3 bg-black/60 rounded-xl border border-white/10 flex items-center gap-2 md:gap-3"
              >
                <Clock className="text-white w-4 h-4 md:w-5 md:h-5" />
                <div>
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">Availability</p>
                  <p className="font-semibold text-xs md:text-sm">
                    Mon–Sat 10:30–7:30
                  </p>
                </div>
              </motion.div>

              {/* CENTER CORE */}
              <div className="relative z-10">
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full animate-pulse" />
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-white/10 border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.25)] backdrop-blur-md" />
              </div>

              {/* SERVER */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-6 left-6 md:top-10 md:left-10"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/15 blur-2xl rounded-full animate-pulse" />
                  <Server className="text-white w-16 h-16 md:w-28 md:h-28 relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]" />
                </div>
              </motion.div>

              {/* STORAGE */}
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-6 right-6 md:bottom-10 md:right-10"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/15 blur-2xl rounded-full animate-pulse" />
                  <HardDrive className="text-white w-16 h-16 md:w-28 md:h-28 relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]" />
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Expertise</h2>
            <p className="text-gray-400 mt-3">
              Comprehensive technology and repair solutions for modern needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: ShoppingBag, title: "Product Sales", desc: "Branded & custom PCs." },
              { icon: Wifi, title: "Networking", desc: "LAN/WAN & infrastructure." },
              { icon: ShieldCheck, title: "AMC Plans", desc: "Business maintenance plans." },
              { icon: Wrench, title: "Expert Repair", desc: "Chip-level diagnostics." },
              { icon: Monitor, title: "Software", desc: "OS, antivirus & business apps." },
              { icon: Smartphone, title: "Mobile Service", desc: "Advanced phone repair." },
            ].map((s, i) => (
              <div
                key={i}
                className="p-6 md:p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-primary/60 transition"
              >
                <s.icon className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-lg md:text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="text-gray-400 mt-2 text-sm md:text-base">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-gray-400 mb-8">
            Partner with Integrated Technologies for reliable solutions and expert support.
          </p>

          <Link
            to="/contact"
            className="px-8 py-3 md:px-10 md:py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg transition"
          >
            Get Started
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;