import React, { useState } from "react";
import Logo from "./Logo";
import { Menu, X, Printer, Phone, MessageSquare } from "lucide-react";
import { motion as Motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const menuVariants = {
    closed: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren"
      }
    },
    open: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
    {/* Scroll Progress Bar */}
    <Motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 origin-left z-[60]"
      style={{ scaleX }}
    />
    
    <Motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="bg-white/90 backdrop-blur-xl border-b border-stone-100 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center">
             <Motion.a 
               href="#" 
               whileHover={{ scale: 1.05 }} 
               whileTap={{ scale: 0.95 }}
             >
                <Logo />
             </Motion.a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {["Stationery", "School Supplies", "Gifts"].map((item) => (
              <Motion.a
                key={item}
                href="https://wa.me/c/919716275329"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-red-600 font-medium transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item}
              </Motion.a>
            ))}

            {/* WhatsApp Desktop */}
            <Motion.a 
              href="https://wa.me/c/919716275329" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-stone-500 hover:text-green-600 transition-colors p-2" 
              title="Chat on WhatsApp"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <MessageSquare className="w-5 h-5" />
            </Motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-4">
            <Motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-900 focus:outline-none"
              whileTap={{ scale: 0.9, rotate: 180 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden overflow-hidden bg-white border-b border-stone-100 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {["Stationery", "School Supplies", "Gifts"].map((item) => (
                <Motion.a 
                  key={item}
                  href="https://wa.me/c/919716275329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-stone-800 hover:text-red-600"
                  variants={itemVariants}
                >
                  {item}
                </Motion.a>
              ))}
              <Motion.div className="h-px bg-stone-100 my-2" variants={itemVariants}></Motion.div>
              <Motion.a 
                href="#" 
                className="flex items-center gap-3 text-blue-600 font-semibold bg-blue-50 p-3 rounded-lg"
                variants={itemVariants}
                whileTap={{ scale: 0.98 }}
              >
                <Printer className="w-5 h-5" />
                Printing & Photocopy
              </Motion.a>
              <Motion.a 
                href="https://wa.me/c/919716275329" 
                className="flex items-center gap-3 text-green-600 font-semibold bg-green-50 p-3 rounded-lg"
                variants={itemVariants}
                whileTap={{ scale: 0.98 }}
              >
                 <MessageSquare className="w-5 h-5" />
                 WhatsApp Us
              </Motion.a>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
    </>
  );
};

export default Navbar;