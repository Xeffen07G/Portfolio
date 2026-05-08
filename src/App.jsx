import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";
import Loader from "./components/Loader";
import "./index.css";

const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const AchievementsPage = lazy(() => import("./pages/AchievementsPage"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <div className="noise" />
      
      <AnimatePresence mode="wait">
        {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      <SmoothScroll>
        <div className="min-h-screen bg-bg text-text font-sans">
          <Navbar />
          <main>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/achievements" element={<AchievementsPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
