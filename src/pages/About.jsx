import { motion } from 'framer-motion';
import { Award, Users, Calendar, Briefcase } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6 overflow-hidden">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16 space-y-6"
            >
                <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Empowering Your Digital Journey Since 2000</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Integrated Technologies, founded by Dinesh Gurumurthy, began its journey in 2000 with a clear vision to provide unparalleled support to those grappling with computer-related challenges.
                </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
                {[
                    { icon: Users, val: "800+", label: "Satisfied Clients" },
                    { icon: Calendar, val: "25+", label: "Glorious Years" },
                    { icon: Briefcase, val: "55+", label: "Running Projects" },
                    { icon: Award, val: "80+", label: "Active Clients" }
                ].map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 bg-white border border-gray-200 rounded-2xl text-center group hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:scale-110 transition-transform">
                            <stat.icon size={24} />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.val}</h3>
                        <p className="text-gray-500 text-sm">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Content Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-gray-600 leading-relaxed">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Integrated Technologies?</h2>
                    <p>
                        We work with a passion for embracing challenges and innovating new solutions in the IT sector. Our commitment to quality, coupled with our extensive experience and partnerships with leading tech brands, ensures that you receive unparalleled service and support tailored to your specific needs.
                    </p>
                    <ul className="space-y-3 mt-4">
                        {[
                            "Expertise and Experience",
                            "Customized Solutions",
                            "Authorized Partnerships",
                            "Comprehensive Service Range",
                            "Dedicated Customer Support"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl transform rotate-3 opacity-10 blur-lg" />
                    <div className="relative bg-white border border-gray-200 shadow-xl rounded-2xl p-8 aspect-video flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-6xl font-bold text-gray-400 mb-2">2000</p>
                            <p className="text-xl font-semibold text-gray-900">Established Year</p>
                            <p className="text-sm text-gray-500 mt-2">Dinesh Gurumurthy - Founder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
