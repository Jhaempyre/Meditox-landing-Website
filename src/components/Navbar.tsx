import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Beaker } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg backdrop-blur-md" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Beaker
              className={`w-8 h-8 transition-colors ${
                isScrolled ? "text-[#4A7C2C]" : "text-white"
              }`}
            />
            <span
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? "text-[#2D5016]" : "text-white"
              }`}
            >
              Meditox
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-semibold transition-colors hover:text-[#4A7C2C] ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              className={`transition-all ${
                isScrolled
                  ? "bg-[#4A7C2C] hover:bg-[#2D5016] text-white"
                  : "bg-white text-[#2D5016] hover:bg-gray-100"
              }`}
            >
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-[#2D5016]" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-[#2D5016]" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-semibold transition-colors hover:text-[#4A7C2C] ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                className={`w-full ${
                  isScrolled
                    ? "bg-[#4A7C2C] hover:bg-[#2D5016] text-white"
                    : "bg-white text-[#2D5016] hover:bg-gray-100"
                }`}
              >
                Download App
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
