import React from "react";
import { Printer, PenTool, Gift, FileText, Copy, Scissors, Layers, ArrowRight, MessageSquare } from "lucide-react";
import { m as Motion } from "framer-motion";

// --- DATA CONFIGURATION ---
const QUICK_SERVICES = [
  { id: "print", icon: <Printer className="w-6 h-6"/>, title: "Color Printout", color: "text-blue-600", bg: "bg-blue-50/50", border: "border-blue-100" },
  { id: "xerox", icon: <Copy className="w-6 h-6"/>, title: "Xerox / Copy", color: "text-indigo-600", bg: "bg-indigo-50/50", border: "border-indigo-100" },
  { id: "lam", icon: <Layers className="w-6 h-6"/>, title: "Lamination", color: "text-orange-600", bg: "bg-orange-50/50", border: "border-orange-100" },
  { id: "spiral", icon: <Scissors className="w-6 h-6"/>, title: "Spiral Binding", color: "text-green-600", bg: "bg-green-50/50", border: "border-green-100" },
];

const CATEGORIES = [
  { id: "school", title: "School Supplies", desc: "Notebooks, geometry & maps.", icon: <PenTool className="w-5 h-5"/>, theme: "blue", featured: "Bestseller" },
  { id: "office", title: "Office Essentials", desc: "Files, folders & paper.", icon: <FileText className="w-5 h-5"/>, theme: "orange" },
  { id: "art", title: "Art & Craft", desc: "Canvases, paints & DIY.", icon: <Scissors className="w-5 h-5"/>, theme: "pink" },
  { id: "gifts", title: "Gifts & Toys", desc: "Toys, mugs & decor.", icon: <Gift className="w-5 h-5"/>, theme: "purple", featured: "New" },
];

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const revealVariants = {
    hidden: { y: "100%" },
    visible: { 
      y: 0, 
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } 
    }
  };

  return (
    <main className="flex-grow pb-20 relative overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="px-6 pt-24 pb-12 md:py-32 text-center relative">
        <div className="max-w-4xl mx-auto">
          {/* Location Badge */}
          <Motion.a 
            href="https://www.google.com/maps/search/?api=1&query=Shreeji+stationery+and+gift+shop+B+915+near+mohalla+clinic+GD+Colony+Delhi"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-md border border-stone-200/60 text-stone-600 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] shadow-sm mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            GD Colony • MV Phase-3
          </Motion.a>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-stone-900 mb-6 leading-[1.1] md:leading-[1] tracking-tighter">
            <div className="overflow-hidden pb-4 -mb-4">
              <Motion.div variants={revealVariants} initial="hidden" animate="visible">
                Stationery that
              </Motion.div>
            </div>
            <div className="overflow-hidden pb-4 -mb-4">
              <Motion.div variants={revealVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
                sparks{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Joy.</span>
                  <Motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
                    className="absolute bottom-0 left-0 h-[3px] md:h-[5px] bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-80"
                  />
                </span>
              </Motion.div>
            </div>
          </h1>
          
          <Motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-stone-500 text-lg mb-10 max-w-lg mx-auto font-medium leading-relaxed"
          >
            Your premium neighborhood destination for creative supplies and professional printing.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="px-4"
          >
            <Motion.a 
              href="https://wa.me/c/919716275329"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto inline-flex justify-center items-center gap-3 bg-stone-900 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black shadow-lg md:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] hover:shadow-xl md:hover:shadow-[0_25px_50px_-12px_rgba(220,38,38,0.3)] transition-all"
            >
              <ArrowRight className="w-5 h-5" />
              View Full Catalog
            </Motion.a>
          </Motion.div>
        </div>
      </section>

      {/* --- HORIZONTAL SCROLL SERVICES (Mobile Premium) --- */}
      <Motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto -mt-6 relative z-10"
      >
        {/* Horizontal Scroll Container */}
        <div className="flex md:grid md:grid-cols-4 overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-6 -mx-0 md:px-4 no-scrollbar">
          {QUICK_SERVICES.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Motion.div>

      {/* --- CATEGORIES (Glass Cards) --- */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="mb-10">
           <h2 className="text-3xl font-black text-stone-900 tracking-tighter">Collections</h2>
           <p className="text-stone-500 mt-1 font-medium text-sm">Curated essentials for you.</p>
        </div>

        <Motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {CATEGORIES.map(cat => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </Motion.div>
      </section>

      {/* --- WHATSAPP CTA (Glassmorphism) --- */}
      <section className="px-4 pb-24 md:pb-32">
        <Motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-stone-900 rounded-[2.5rem] p-8 md:p-24 text-center relative overflow-hidden shadow-2xl"
        >
           {/* Abstract Glow */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-[80px]"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>

           <div className="relative z-10">
             <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md text-green-400 rounded-2xl mb-6 ring-1 ring-white/20">
               <MessageSquare className="w-8 h-8" />
             </div>
             <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
               Fast Printing.
             </h2>
             <p className="text-stone-400 mb-8 max-w-md mx-auto text-sm md:text-lg font-medium">
               WhatsApp your files. Pickup in minutes.
             </p>
             <Motion.a 
               href="https://wa.me/919716275329" 
               whileTap={{ scale: 0.95 }}
               className="w-full md:w-auto inline-flex justify-center items-center gap-3 bg-white text-stone-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-stone-50 transition-colors"
             >
               Start Chat
             </Motion.a>
           </div>
        </Motion.div>
      </section>
    </main>
  );
};

// --- PREMIUM COMPONENTS ---

const ServiceCard = ({ icon, title, color, bg, border }) => (
  <Motion.a 
    href="https://wa.me/c/919716275329"
    target="_blank"
    rel="noopener noreferrer"
    whileTap={{ scale: 0.95 }}
    className={`min-w-[160px] md:min-w-0 snap-start bg-white md:bg-white/60 md:backdrop-blur-md p-5 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-white/50 hover:border-stone-200 transition-all cursor-pointer flex flex-col items-center text-center h-40 justify-center group`}
  >
    <div className={`mb-3 p-3.5 rounded-xl ${bg} ${color} ring-1 ring-black/5 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <span className="font-bold text-stone-700 text-sm leading-tight group-hover:text-stone-900">{title}</span>
  </Motion.a>
);

const CategoryCard = ({ title, desc, icon, theme, featured }) => {
  const themes = {
    blue: "bg-blue-500 shadow-blue-200",
    orange: "bg-orange-500 shadow-orange-200",
    pink: "bg-pink-500 shadow-pink-200",
    purple: "bg-purple-500 shadow-purple-200",
  };

  return (
    <Motion.a 
      href="https://wa.me/c/919716275329"
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.95 }}
      className="group bg-white rounded-[2rem] p-5 border border-stone-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all cursor-pointer relative block h-full"
    >
      {featured && <span className="absolute top-4 right-4 bg-stone-900 text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest shadow-lg">{featured}</span>}
      
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-white ${themes[theme]} shadow-lg group-hover:scale-105 transition-transform`}>
        {icon}
      </div>
      
      <h3 className="text-lg font-black text-stone-900 mb-1 tracking-tight">{title}</h3>
      <p className="text-stone-400 text-xs font-medium leading-relaxed mb-4">{desc}</p>
      
      <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
        <ArrowRight className="w-4 h-4" />
      </div>
    </Motion.a>
  );
};

export default Home;
