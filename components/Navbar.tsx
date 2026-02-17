import React from 'react';
import { ViewState } from '../types';
import { Smartphone, Moon, Sun, Phone, User } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView, isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="sticky top-0 z-30 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onChangeView(ViewState.HOME)}
          >
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white">
              <Smartphone className="w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              6ix <span className="text-primary-500 italic">Gadgets</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => onChangeView(ViewState.HOME)} className="font-semibold text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">Buy</button>
            <button onClick={() => onChangeView(ViewState.HOME)} className="font-semibold text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">Sell</button>
            <button 
              onClick={() => onChangeView(ViewState.SWAP_FLOW)} 
              className={`font-bold transition-colors ${currentView === ViewState.SWAP_FLOW ? 'text-primary-500' : 'text-slate-600 dark:text-slate-300 hover:text-primary-500'}`}
            >
              Swap Portal
            </button>
            <button className="font-semibold text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">Contact</button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button 
              onClick={() => onChangeView(ViewState.LOGIN)}
              className="hidden sm:flex items-center gap-2 font-semibold text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Sign In</span>
            </button>

            <a href="tel:07062682010" className="hidden sm:flex bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-full font-bold items-center gap-2 transition-all shadow-lg shadow-primary-500/20">
              <Phone className="w-4 h-4" />
              <span>07062682010</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;