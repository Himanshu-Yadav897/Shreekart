import React from "react";
import ReactDOM from "react-dom";
import { MessageSquare } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [messageIndex, setMessageIndex] = React.useState(0);

  const MESSAGES = [
    "Need help or want to order? 📦",
    "Send files for printing! 🖨️",
    "Check our latest catalog! 📖",
    "We deliver in GD Colony! 🚀"
  ];

  React.useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  // Ensure document exists (SSR safety check, though this is a SPA)
  if (typeof document === 'undefined') return null;

  return ReactDOM.createPortal(
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[99999] pointer-events-none flex flex-col items-end gap-2">
      
      {/* 1. Dynamic Tooltip */}
      <AnimatePresence mode="wait">
        {showTooltip && (
          <Motion.div
            key={messageIndex}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="pointer-events-auto bg-white text-stone-800 text-xs font-bold px-4 py-2 rounded-xl shadow-lg border border-stone-100 relative mr-2 whitespace-nowrap origin-bottom-right"
          >
            {MESSAGES[messageIndex]}
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-white rotate-45 border-r border-b border-stone-100"></div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute -top-1 -right-1 bg-stone-900 text-white w-4 h-4 rounded-full flex items-center justify-center text-[8px]"
            >
              ×
            </button>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* 2. The Button (Simplified) */}
      <Motion.div
        className="pointer-events-auto"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Motion.a
          href="https://wa.me/c/919716275329"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="block w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#20b85a] transition-colors"
        >
          <MessageSquare className="w-7 h-7 md:w-8 md:h-8 fill-current" />
        </Motion.a>
      </Motion.div>
    </div>,
    document.body
  );
};

export default FloatingWhatsApp;