import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import SwapFlow from './views/SwapFlow';
import Auth from './views/Auth';
import AIChat from './components/AIChat';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const isAuthView = [ViewState.LOGIN, ViewState.REGISTER, ViewState.VERIFY].includes(currentView);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {!isAuthView && (
        <Navbar 
          currentView={currentView} 
          onChangeView={setCurrentView} 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}
      
      <main className="flex-grow">
        {currentView === ViewState.HOME && <Home onChangeView={setCurrentView} />}
        {currentView === ViewState.SWAP_FLOW && <SwapFlow onChangeView={setCurrentView} />}
        {isAuthView && <Auth initialView={currentView} onChangeView={setCurrentView} />}
      </main>

      {!isAuthView && <Footer />}
      
      {/* Global AI Chat - Available everywhere except auth */}
      {!isAuthView && <AIChat />}
    </div>
  );
};

export default App;