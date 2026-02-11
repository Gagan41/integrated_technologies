import { useState, useEffect } from "react";
import { NavLink, useLocation, Outlet, useNavigate } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Track Repair", path: "/track" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-background/80 backdrop-blur-md border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center h-full">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3">
            <Logo />
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-accent font-semibold"
                    : "text-gray-600 hover:text-primary transition font-medium"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contact")}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Book Repair
              </div>
            </motion.button>
          </nav>

          {/* MOBILE MENU OPEN */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-black/5 text-gray-700"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* FULLSCREEN MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-[9999]"
          >
            {/* CLOSE BUTTON — ALWAYS VISIBLE */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gray-600 bg-black/5 p-2 rounded-lg hover:bg-black/10 transition"
            >
              <X size={28} />
            </button>

            <nav className="flex flex-col items-center justify-center min-h-screen gap-8 text-xl">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-accent font-semibold"
                      : "text-gray-800 font-medium"
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold"
              >
                Book Repair
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
