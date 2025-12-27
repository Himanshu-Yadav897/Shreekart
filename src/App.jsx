import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Background from "./components/Background";

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Background />
      
      <Navbar />

      <Home />

      <Footer />

      {/* Global Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;