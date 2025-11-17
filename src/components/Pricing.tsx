import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: "₹199",
    period: "/month",
    description: "Perfect for small chemist shops",
    features: [
      "Basic inventory management",
      "Simple billing system",
      "Up to 500 products",
      "Customer records",
      "Email support",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "₹299",
    period: "/month",
    description: "Ideal for medium to large shops",
    features: [
      "Advanced inventory tracking",
      "GST-compliant billing",
      "Unlimited products",
      "Sales analytics & reports",
      "Prescription management",
      "Priority support",
      "Multi-location support",
      "Automated stock alerts",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹399",
    period: "/month",
    description: "Complete solution for pharmacy chains",
    features: [
      "Everything in Professional",
      "Direct procurement system",
      "Bulk order discounts",
      "Supply chain management",
      "Custom integrations",
      "Dedicated account manager",
      "Advanced analytics",
      "API access",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D5016] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your pharmacy. No hidden fees, cancel
            anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#6BA547] to-[#4A7C2C] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <Card
                className={`h-full border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  tier.popular
                    ? "border-[#4A7C2C] shadow-xl scale-105"
                    : "border-gray-200 shadow-lg"
                }`}
              >
                <CardHeader className="text-center pb-8 pt-10">
                  <h3 className="text-2xl font-bold text-[#2D5016] mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-[#2D5016]">
                      {tier.price}
                    </span>
                    <span className="text-gray-600">{tier.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#6BA547] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? "bg-gradient-to-r from-[#6BA547] to-[#4A7C2C] hover:from-[#4A7C2C] hover:to-[#2D5016] text-white shadow-lg hover:shadow-xl"
                        : "bg-white border-2 border-[#4A7C2C] text-[#4A7C2C] hover:bg-[#4A7C2C] hover:text-white"
                    }`}
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            All plans include 14-day free trial • No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
