import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Background from "./components/Background";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col relative">
        <Background />
        
        <Navbar />

        <Home />

        <Footer />

        {/* Global Floating Action Button */}
        <FloatingWhatsApp />
      </div>
    </SmoothScroll>
  );
}

export default App;