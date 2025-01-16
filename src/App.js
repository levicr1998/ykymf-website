import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import "./App.css";
import Firework from "./components/Firework";

function App() {
  const [fade, setFade] = useState(false);
  const containerRef = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 100); // Delay to ensure the fade-in effect can be seen

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper">
          <Firework />
      <div className={`App fade-in ${fade ? "visible" : ""}`}>
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <div className="flex" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
