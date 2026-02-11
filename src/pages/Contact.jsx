import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const inputs = [
    { label: "Your Name", type: "text", name: "name" },
    { label: "Email Address", type: "email", name: "email" },
    { label: "Phone Number", type: "tel", name: "phone" },
    { label: "Subject", type: "text", name: "subject" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  return (
    <div className="relative pt-24 md:pt-32 pb-20 md:pb-24 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] md:w-[520px] md:h-[520px] bg-primary/15 blur-[120px] opacity-40 rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* ================= LEFT INFO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-wide">
                Get in Touch
              </span>

              <h1 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900">
                Let’s Solve Your Technology Needs
              </h1>

              <p className="text-gray-600 mt-4 text-sm md:text-base">
                Contact Integrated Technologies for product sales, repair
                services, AMC contracts, and technical consultation. Our team
                responds quickly and professionally.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-5">

              <div className="flex gap-4">
                <MapPin className="text-accent mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Visit Us</h3>
                  <a 
                  href="https://maps.app.goo.gl/pMncUKVnUiTzceBx6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors text-left text-gray-700"
                >
                  Shankarnag Circle, 2nd Block, Ashok Nagar, Banashankari 1st Stage, Banashankari, Bengaluru, Karnataka 560050
                </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-accent mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <a 
                  href="tel:+919845125274" 
                  className="hover:text-accent transition-colors text-left text-gray-700"
                >
                  +91 98451 25274
                </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-accent mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a 
                  href="mailto:dinesh@integratedtech.co.in" 
                  className="hover:text-accent transition-colors text-left text-gray-700"
                >
                 dinesh@integratedtech.co.in 
                </a>
                </div>
              </div>

            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">

              <a
                href="tel:+919845125274"
                className="px-5 py-3 rounded-xl bg-gray-100 border border-gray-200 hover:border-accent transition text-sm font-semibold text-gray-900"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919845125274"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-green-50 border border-green-200 hover:border-green-400 transition text-sm font-semibold flex items-center gap-2 text-green-700"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>

            </div>

            {/* Trust Line */}
            <p className="text-xs text-gray-500 pt-2">
              Trusted by businesses since 2000 • Fast response • Professional service
            </p>
          </motion.div>

          {/* ================= FORM ================= */}
          <motion.form
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}

            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-md border border-gray-200 p-6 md:p-8 rounded-2xl shadow-xl space-y-5"
          >
            {inputs.map((inp, i) => (
              <div key={i} className="space-y-1">
                <label className="text-sm text-gray-700">{inp.label}</label>
                <input
                  type={inp.type}
                  name={inp.name}
                  value={formData[inp.name]}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent placeholder-gray-400"
                />
              </div>
            ))}

            <div className="space-y-1">
              <label className="text-sm text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:scale-[1.02] transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center text-sm font-medium">
                Message sent successfully! We will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center text-sm font-medium">
                Something went wrong. Please try again later.
              </p>
            )}

            <p className="text-xs text-gray-500 text-center">
              We typically respond within a few hours during working time.
            </p>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;