import { Star, Quote, User } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Priya Sharma",
    date: "2 months ago",
    rating: 5,
    text: "Excellent service! My laptop display was replaced within a day at a very reasonable price. Highly recommend Integrated Technologies for any computer repair.",
  },
  {
    name: "Rahul Kumar",
    date: "1 month ago",
    rating: 5,
    text: "Best place in Banashankari for PC assembly. Mr. Dinesh is very knowledgeable and suggested the exact specs I needed for my design work.",
  },
  {
    name: "Amit Bhardwaj",
    date: "3 weeks ago",
    rating: 5,
    text: "Very professional and transparent. They explained the issue clearly before fixing it. Trustworthy service center.",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-black relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Real reviews from our satisfied customers on Google.
          </motion.p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] flex flex-col h-full"
            >
              <div className="absolute -top-6 left-8 bg-black border border-white/10 p-3 rounded-2xl shadow-xl">
                <Quote className="text-accent w-6 h-6 fill-accent/20" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(5)].map((_, starIndex) => (
                  <Star 
                    key={starIndex}
                    className={`w-5 h-5 ${starIndex < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
                
                {/* Google Icon (Symbolic) */}
                <div className="ml-auto">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://maps.app.goo.gl/pMncUKVnUiTzceBx6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 font-medium text-white"
          >
            Read more reviews on
            <span className="font-bold flex items-center gap-1">
               Google Maps <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Reviews;
