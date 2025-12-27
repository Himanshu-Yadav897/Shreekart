import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { MessageSquare } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const MESSAGES = [
    "Need help or want to order? 📦",
    "Send files for printing! 🖨️",
    "Check our latest catalog! 📖",
    "We deliver in GD Colony! 🚀"
  ];

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!mounted) return null;

  // Portal to document.body to ensure TRUE fixed positioning
  return ReactDOM.createPortal(
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] flex flex-col items-end gap-4 pointer-events-none">
      
      {/* 1. Dynamic Tooltip */}
      <AnimatePresence mode="wait">
        {showTooltip && (
          <Motion.div
            key={messageIndex}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="pointer-events-auto bg-white text-stone-800 text-xs font-bold px-4 py-2 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-stone-100 relative mb-2 mr-2 whitespace-nowrap origin-bottom-right"
          >
            {MESSAGES[messageIndex]}
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-white rotate-45 border-r border-b border-stone-100"></div>
            <button 
              onClick={(e) => {
                e.stopPropagation(); // Stop click from closing if unintended
                setShowTooltip(false);
              }}
              className="absolute -top-1 -right-1 bg-stone-900 text-white w-4 h-4 rounded-full flex items-center justify-center text-[8px] hover:bg-red-600 transition-colors cursor-pointer"
            >
              ×
            </button>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* 2. The Floating Button (Minimalist) */}
      <Motion.div
        className="relative pointer-events-auto"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Motion.a
          href="https://wa.me/c/919716275329"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.15)] relative overflow-hidden"
        >
          <MessageSquare className="w-7 h-7 md:w-8 md:h-8 fill-current" />
        </Motion.a>
      </Motion.div>
    </div>,
    document.body
  );
};

export default FloatingWhatsApp;
