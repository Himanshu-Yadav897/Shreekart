import React from "react";
import { MessageSquare, MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1c1e] text-stone-400 py-12 md:py-16 border-t border-stone-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* --- BRAND & CONTACT (Full width on mobile, Col-span-5 on desktop) --- */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h2 className="text-3xl font-black text-white tracking-tight">
              Shree<span className="text-red-500">Kart</span>
            </h2>
            
            {/* Address Block */}
            <div className="bg-white/5 rounded-2xl p-6 w-full max-w-sm border border-white/10 backdrop-blur-sm">
               <div className="flex flex-col items-center md:items-start gap-4">
                  <p className="flex items-start gap-3 text-sm leading-relaxed text-stone-300">
                    <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>B 915, Near Mohalla Clinic,<br/> GD Colony, Mayur Vihar Ph-3,<br/> Delhi - 110096</span>
                  </p>
                  
                  <div className="w-full h-px bg-white/10 my-1"></div>

                  <p className="flex items-center gap-3 text-sm text-green-400 font-bold bg-green-400/10 px-3 py-1.5 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span>Open 7 Days: 7 AM - 11 PM</span>
                  </p>
               </div>
            </div>

            {/* Mobile Actions (Stacked for easy tapping) */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
              <a 
                href="tel:+919716275329" 
                className="flex-1 flex items-center justify-center gap-2 text-sm font-bold text-white bg-stone-800 border border-stone-700 px-6 py-3.5 rounded-xl hover:bg-stone-700 active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Shreeji+stationery+and+gift+shop+B+915+near+mohalla+clinic+GD+Colony+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 text-sm font-bold text-white bg-red-600 px-6 py-3.5 rounded-xl hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-red-900/20"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>

          {/* --- LINKS SECTION (2 Columns on Mobile for compactness) --- */}
          <div className="md:col-span-7 grid grid-cols-2 gap-8 md:gap-12 text-sm">
            
            {/* Categories */}
            <div>
               <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs flex items-center gap-2">
                 <span className="w-8 h-px bg-stone-700"></span> Collections
               </h3>
               <ul className="space-y-4">
                 {["School Supplies", "Office Stationery", "Art & Craft", "Gifts & Decor"].map((item) => (
                   <li key={item}>
                     <a href="https://wa.me/c/919716275329" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors flex items-center gap-2 group">
                       <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all text-red-500" />
                       {item}
                     </a>
                   </li>
                 ))}
               </ul>
            </div>

            {/* Support */}
            <div>
               <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs flex items-center gap-2">
                 <span className="w-8 h-px bg-stone-700"></span> Services
               </h3>
               <ul className="space-y-4">
                 <li><a href="#" className="hover:text-white transition-colors">Printing Rates</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Bulk Orders</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Home Delivery</a></li>
               </ul>
               
               <div className="mt-8">
                 <a href="https://wa.me/c/919716275329" className="inline-flex items-center justify-center w-10 h-10 bg-[#25D366] text-white rounded-full hover:scale-110 transition-transform shadow-lg">
                   <MessageSquare className="w-5 h-5" />
                 </a>
                 <span className="block mt-2 text-xs text-stone-500">Quick Chat</span>
               </div>
            </div>

          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-xs text-stone-500">
            &copy; 2025 ShreeKart. Proudly serving GD Colony.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;