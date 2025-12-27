import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const MESSAGES = [
    "Need help or want to order? 📦",
    "Send files for printing! 🖨️",
    "Check our latest catalog! 📖",
    "We deliver in GD Colony! 🚀"
  ];

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    
    // Rotate messages every 4 seconds
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence mode="wait">
        {showTooltip && (
          <Motion.div
            key={messageIndex} // Key change triggers animation
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-stone-800 text-xs font-bold px-4 py-2 rounded-xl shadow-2xl border border-stone-100 relative mr-2 whitespace-nowrap origin-bottom-right"
          >
            {MESSAGES[messageIndex]}
            {/* Tooltip Arrow */}
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-white rotate-45 border-r border-b border-stone-100"></div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute -top-1 -right-1 bg-stone-900 text-white w-4 h-4 rounded-full flex items-center justify-center text-[8px] hover:bg-red-600 transition-colors"
            >
              ×
            </button>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Primary: Main Chat Button */}
      <Motion.a
        href="https://wa.me/c/919716275329"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: ["0px 0px 0px rgba(34, 197, 94, 0)", "0px 0px 20px rgba(34, 197, 94, 0.4)", "0px 0px 0px rgba(34, 197, 94, 0)"] 
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl relative"
      >
        <MessageSquare className="w-8 h-8 fill-current" />
        {/* Pulse Effect */}
        <Motion.span 
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-[#25D366] -z-10"
        ></Motion.span>
      </Motion.a>
    </div>
  );
};

export default FloatingWhatsApp;
