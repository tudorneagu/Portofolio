import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import Contact from "./pages/Contact";
import "./index.css";
import "./i18n";

function App() {
  const [langFr, setLangFr] = useState<boolean>(false);

  useEffect(() => {
    const lang = localStorage.getItem("i18nextLng");
    if (lang === "fr") setLangFr(true);
  }, []);
  console.log(langFr);
  return (
    <div className="min-h-screen flex flex-col justify-between w-full">
      <div className="w-full max-w-[1500px] mx-auto flex-grow flex flex-col">
        <Header langFr={langFr} setLangFr={setLangFr} />
        <main className="flex flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
