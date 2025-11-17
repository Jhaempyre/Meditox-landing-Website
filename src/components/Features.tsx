import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Package,
  Receipt,
  Users,
  BarChart3,
  FileText,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Real-time stock tracking with automated alerts for low inventory and expiry dates",
  },
  {
    icon: Receipt,
    title: "Billing & Invoicing",
    description:
      "Fast, accurate billing with GST compliance and digital invoice generation",
  },
  {
    icon: Users,
    title: "Customer Records",
    description:
      "Maintain detailed customer profiles with purchase history and preferences",
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description:
      "Comprehensive reports and insights to track performance and growth",
  },
  {
    icon: FileText,
    title: "Prescription Tracking",
    description:
      "Digital prescription management with secure storage and quick retrieval",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Automated notifications for stock levels, expiry dates, and reorder points",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D5016] mb-4">
            Powerful Features for Modern Chemists
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to run your pharmacy efficiently and
            profitably
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6BA547] to-[#4A7C2C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D5016] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
