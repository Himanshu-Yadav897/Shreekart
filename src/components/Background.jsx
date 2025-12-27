import React, { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";

const Background = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Moves slower
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Moves faster & opposite

  return (
    <div ref={ref} className="fixed inset-0 w-full h-full pointer-events-none -z-50 overflow-hidden bg-paper">
      
      {/* 1. Grain Texture (The 'Paper' Feel) */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>

      {/* 2. Performance-Optimized Static Gradient Base (Reduces GPU load) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,197,204,0.15),transparent_70%)]"></div>

      {/* 3. Subtle Breathing Gradients (HIDDEN ON MOBILE for Performance) */}
      <div className="hidden md:block">
        <Motion.div 
          style={{ y: y1 }}
          initial={{ opacity: 0.2 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-pastel-pink/30 rounded-full filter blur-[60px] will-change-transform"
        />
        
        <Motion.div 
          style={{ y: y2 }}
          initial={{ opacity: 0.2 }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[30%] -right-[10%] w-[40vw] h-[40vw] bg-pastel-blue/30 rounded-full filter blur-[80px] will-change-transform"
        />
      </div>

      {/* 4. Minimalist Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

    </div>
  );
};

export default Background;
