import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";
import Empresas from "./components/Empresas";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "cupcake");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`relative min-h-screen ${theme === "dark" ? "text-white bg-gray-900" : "bg-base-200"}`}>
      <Navbar setTheme={setTheme} theme={theme} />
      <Hero />
      <Servicios />
      <Empresas />
      <Proyectos/>
      <Footer/>
    </div>
  );
}

export default App;