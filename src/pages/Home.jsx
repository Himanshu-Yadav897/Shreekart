import React from "react";
import { Printer, PenTool, Gift, FileText, Copy, Scissors, Layers, ArrowRight, MessageSquare } from "lucide-react";
import { motion as Motion } from "framer-motion";

// --- DATA CONFIGURATION ---
const QUICK_SERVICES = [
  { id: "print", icon: <Printer className="w-6 h-6"/>, title: "Color Printout", color: "text-blue-600", bg: "bg-blue-50", border: "hover:border-blue-200" },
  { id: "xerox", icon: <Copy className="w-6 h-6"/>, title: "Xerox / Photocopy", color: "text-indigo-600", bg: "bg-indigo-50", border: "hover:border-indigo-200" },
  { id: "lam", icon: <Layers className="w-6 h-6"/>, title: "Lamination", color: "text-orange-600", bg: "bg-orange-50", border: "hover:border-orange-200" },
  { id: "spiral", icon: <Scissors className="w-6 h-6"/>, title: "Spiral Binding", color: "text-green-600", bg: "bg-green-50", border: "hover:border-green-200" },
];

const CATEGORIES = [
  { id: "school", title: "School Supplies", desc: "Notebooks, geometry, maps & more.", icon: <PenTool className="w-6 h-6"/>, theme: "blue", featured: "Bestseller" },
  { id: "office", title: "Office Essentials", desc: "Files, folders, organizers & paper.", icon: <FileText className="w-6 h-6"/>, theme: "orange" },
  { id: "art", title: "Art & Craft", desc: "Canvases, paints, brushes & DIY.", icon: <Scissors className="w-6 h-6"/>, theme: "pink" },
  { id: "gifts", title: "Gifts & Toys", desc: "Educational toys, mugs & decor.", icon: <Gift className="w-6 h-6"/>, theme: "purple", featured: "Trending" },
];

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  // Smooth Reveal Animation for Text
  const revealVariants = {
    hidden: { y: "100%" },
    visible: { 
      y: 0, 
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } 
    }
  };

  return (
    <main className="min-h-screen font-sans bg-paper pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden -z-10 opacity-40 pointer-events-none">
        <Motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-pastel-pink rounded-full filter blur-3xl"
        />
        <Motion.div 
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 -right-20 w-96 h-96 bg-pastel-blue rounded-full filter blur-3xl"
        />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="px-4 pt-20 pb-20 md:py-32 text-center relative">
        <div className="max-w-4xl mx-auto">
          <Motion.a 
            href="https://www.google.com/maps/search/?api=1&query=Shreeji+stationery+and+gift+shop+B+915+near+mohalla+clinic+GD+Colony+Delhi"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-stone-200 text-stone-600 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm mb-12 hover:border-red-200 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            B-915 • Near Mohalla Clinic • MV Phase-3
          </Motion.a>
          
          <h1 className="text-5xl md:text-8xl font-black text-stone-900 mb-8 leading-[0.95] tracking-tighter">
            <div className="overflow-hidden">
              <Motion.div variants={revealVariants} initial="hidden" animate="visible">
                Stationery that
              </Motion.div>
            </div>
            <div className="overflow-hidden">
              <Motion.div variants={revealVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                sparks <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Joy.</span>
              </Motion.div>
            </div>
          </h1>
          
          <Motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-stone-500 text-lg md:text-xl mb-12 max-w-xl mx-auto font-medium leading-relaxed"
          >
            Premium school essentials and custom printing services, curated for the modern creator.
          </Motion.p>

          {/* WhatsApp Catalog CTA */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Motion.a 
              href="https://wa.me/c/919716275329"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-stone-900 text-white px-10 py-5 rounded-2xl font-black shadow-2xl hover:bg-red-600 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
              View Full Catalog
            </Motion.a>
          </Motion.div>
        </div>
      </section>

      {/* --- QUICK SERVICES --- */}
      <Motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 -mt-12 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {QUICK_SERVICES.map(service => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </Motion.div>

      {/* --- CATEGORIES --- */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
           <div>
             <h2 className="text-4xl font-black text-stone-900 tracking-tighter">Collections</h2>
             <p className="text-stone-500 mt-2 font-medium">Beautifully organized essentials.</p>
           </div>
           <Motion.a href="#" whileHover={{ x: 5 }} className="hidden md:flex items-center gap-2 text-stone-900 font-bold hover:text-red-600 transition-colors">
             Full Catalog <ArrowRight className="w-4 h-4" />
           </Motion.a>
        </div>

        <Motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {CATEGORIES.map(cat => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </Motion.div>
      </section>

      {/* --- WHATSAPP CTA --- */}
      <section className="px-4 pb-32">
        <Motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-stone-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-3xl"
        >
           <div className="relative z-10">
             <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-xl text-green-400 rounded-3xl mb-10">
               <MessageSquare className="w-10 h-10" />
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
               Ready in <span className="text-green-400">Minutes.</span>
             </h2>
             <p className="text-stone-400 mb-12 max-w-xl mx-auto text-lg font-medium leading-relaxed">
               Send your files via WhatsApp. We'll have them printed and ready for pickup before you arrive.
             </p>
             <Motion.a 
               href="https://wa.me/919716275329?text=Hi%20ShreeKart%2C%20I%20saw%20your%20catalog%20and%20have%20a%20question..." 
               whileHover={{ scale: 1.05, y: -5 }}
               whileTap={{ scale: 0.95 }}
               className="inline-flex items-center gap-4 bg-white text-stone-900 px-10 py-5 rounded-2xl font-black shadow-2xl hover:bg-stone-50 transition-colors"
             >
               <MessageSquare className="w-6 h-6 fill-current" />
               Start Chat
             </Motion.a>
           </div>
        </Motion.div>
      </section>
    </main>
  );
};

const ServiceCard = ({ icon, title, color, bg, border }) => (
  <Motion.div 
    whileHover={{ y: -8, scale: 1.02 }}
    className={`bg-white p-8 rounded-3xl shadow-sm border border-stone-100 transition-all cursor-pointer flex flex-col items-center text-center h-48 justify-center ${border}`}
  >
    <div className={`mb-4 p-4 rounded-2xl ${bg} ${color}`}>
      {icon}
    </div>
    <span className="font-bold text-stone-800 text-sm">{title}</span>
  </Motion.div>
);

const CategoryCard = ({ title, desc, icon, theme, featured }) => {
  const themes = {
    blue: "bg-blue-600",
    orange: "bg-orange-600",
    pink: "bg-pink-600",
    purple: "bg-purple-600",
  };

  return (
    <Motion.div 
      whileHover={{ y: -10 }}
      className="group bg-white rounded-[2.5rem] p-10 border border-stone-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer relative"
    >
      {featured && <span className="absolute top-6 right-6 bg-red-50 text-red-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">{featured}</span>}
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white ${themes[theme]} shadow-lg`}>
        {icon}
      </div>
      <h3 className="text-2xl font-black text-stone-900 mb-3 tracking-tight">{title}</h3>
      <p className="text-stone-500 text-sm mb-8 font-medium leading-relaxed">{desc}</p>
      <div className="flex items-center text-sm font-bold text-stone-900 group-hover:text-red-600 transition-colors">
        Explore <ArrowRight className="w-4 h-4 ml-2" />
      </div>
    </Motion.div>
  );
};

export default Home;
