import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MainMenu from "./pages/MainMenu";
import HowToPlay from "./pages/HowToPlay";
import LevelSelector from "./pages/LevelSelection";
import CreatePlayer from "./pages/CreatePlayer";
import StoryPage from "./pages/StoryPage";
import EndGame from "./pages/EndGame";
import { PlayerProvider } from "./context/PlayerContext";
import './main.scss';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><MainMenu /></PageWrapper>} />
        <Route path="/how-to-play" element={<PageWrapper><HowToPlay /></PageWrapper>} />
        <Route path="/level-selector" element={<PageWrapper><LevelSelector /></PageWrapper>} />
        <Route path="/create-player" element={<PageWrapper><CreatePlayer /></PageWrapper>} />
        <Route path="/story/:levelId" element={<PageWrapper><StoryPage /></PageWrapper>} />
        <Route path="/end-game" element={<PageWrapper><EndGame /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="App">
      <PlayerProvider>
        <AnimatedRoutes />
      </PlayerProvider>
    </div>
  );
}

export default App;