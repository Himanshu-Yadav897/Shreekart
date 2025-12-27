import React from "react";
import { Gift } from "lucide-react";
import { motion as Motion } from "framer-motion";

const Logo = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon with a touch of gold for premium */}
      <Motion.div 
        whileHover={{ rotate: 20, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative p-2 rounded-full bg-red-600 shadow-md"
      >
        <Gift className="w-6 h-6 text-white" strokeWidth={2} />
        {/* Subtle gold ring for premium feel */}
        <div className="absolute inset-0 ring-2 ring-luxury-gold ring-opacity-50 rounded-full blur-[1px] pointer-events-none"></div>
      </Motion.div>

      {/* The Text - Blending Playful and Premium */}
      <h1 className="text-2xl font-bold font-sans tracking-tight text-stone-900">
        Shree<span className="text-red-600">Kart</span>
      </h1>

      {/* The Tagline - Clean and Informative */}
      <span className="hidden sm:inline-block text-xs text-stone-600 tracking-wide ml-2 border-l border-stone-300 pl-2">
        Stationery & Gifts
      </span>
    </div>
  );
};

export default Logo;