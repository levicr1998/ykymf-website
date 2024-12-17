import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Snow from "./components/Snow";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 100); // Delay to ensure the fade-in effect can be seen

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper">
      <div className={`App fade-in ${fade ? "visible" : ""}`}>
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <div className="flex" />
        <Footer />
      </div>
      <Snow />
    </div>
  );
}

export default App;
