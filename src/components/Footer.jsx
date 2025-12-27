import React from "react";
import { MessageSquare, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brand & Address */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Shree<span className="text-red-500">Kart</span>
            </h2>
            <div className="space-y-4">
              <p className="flex items-start justify-center md:justify-start gap-2 text-sm leading-relaxed">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                <span>B 915, Near Mohalla Clinic,<br /> GD Colony, Mayur Vihar Phase III,<br /> Delhi - 110096</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-green-400 font-medium">
                <Clock className="w-4 h-4" />
                <span>Open 7 Days: 7 AM - 11 PM</span>
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Shreeji+stationery+and+gift+shop+B+915+near+mohalla+clinic+GD+Colony+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <MapPin className="w-3 h-3" />
                Get Directions
              </a>
            </div>
             <div className="flex flex-col items-center md:items-start gap-4 mt-6">
               <a 
                href="tel:+919716275329" 
                className="flex items-center gap-2 text-sm font-bold text-white bg-red-600 px-6 py-3 rounded-xl hover:bg-red-700 transition-all shadow-lg"
               >
                <Phone className="w-4 h-4" />
                Call +91 9716275329
               </a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
             <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Shop Categories</h3>
             <ul className="space-y-2 text-sm">
               <li><a href="#" className="hover:text-white transition-colors">School Supplies</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Office Stationery</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Art & Craft</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Gifts & Decor</a></li>
             </ul>
          </div>

          {/* Support */}
          <div>
             <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Customer Service</h3>
             <ul className="space-y-2 text-sm">
               <li><a href="#" className="hover:text-white transition-colors">Price List (Printing)</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Bulk Orders</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
             </ul>
             
             <div className="mt-6 flex justify-center md:justify-start gap-4">
               <a href="https://wa.me/c/919716275329" className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors">
                 <MessageSquare className="w-5 h-5" />
               </a>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          &copy; 2025 ShreeKart. Your Trusted Neighborhood Shop.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
