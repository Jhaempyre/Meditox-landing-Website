import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";

const appFeatures = [
  "Real-time inventory tracking across multiple locations",
  "Lightning-fast payment processing with multiple payment modes",
  "Secure digital record keeping with cloud backup",
  "Automated stock alerts and reorder notifications",
  "Comprehensive customer management system",
];

const screenshots = [
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
];

export default function AppPreview() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D5016] mb-6">
              Experience the Future of Pharmacy Management
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Built specifically for Indian chemists, with features that matter
            </p>

            <div className="space-y-4">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-6 h-6 bg-[#6BA547] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - App Screenshots */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Phone frame */}
              <div className="relative bg-gradient-to-br from-[#2D5016] to-[#4A7C2C] rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] p-2">
                  {/* Notch */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10" />
                  
                  {/* Screen */}
                  <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19]">
                    {screenshots.map((screenshot, index) => (
                      <motion.img
                        key={index}
                        src={screenshot}
                        alt={`App Screenshot ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: currentScreenshot === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-[#A8D08D] rounded-full blur-2xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#6BA547] rounded-full blur-2xl opacity-50"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Screenshot indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScreenshot(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentScreenshot === index
                      ? "bg-[#4A7C2C] w-8"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
