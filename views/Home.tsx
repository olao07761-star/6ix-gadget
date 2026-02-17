import React from 'react';
import { ViewState } from '../types';
import { Smartphone, Laptop, Gamepad2, Headphones, ArrowRight, CheckCircle, MapPin, Instagram, Phone } from 'lucide-react';

interface HomeProps {
  onChangeView: (view: ViewState) => void;
}

const Home: React.FC<HomeProps> = ({ onChangeView }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold tracking-wider uppercase">
            Reliable Tech Partner in Ibadan
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-black leading-[0.95] tracking-tight text-slate-900 dark:text-white">
            WE BUY, SELL <br />
            <span className="text-primary-500 italic">AND SWAP</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Upgrade to the latest Apple or Samsung devices today. We trade phones, laptops, and accessories. Get the best market value.
          </p>
          
          <div className="flex flex-wrap gap-4">
             {['Instant Bank Transfer', 'Doorstep Pickup', 'Best Naija Rates'].map((feature) => (
                <div key={feature} className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">{feature}</span>
                </div>
             ))}
          </div>
          
          <div className="flex gap-4 pt-4">
             <button onClick={() => onChangeView(ViewState.SWAP_FLOW)} className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-xl shadow-primary-500/20 active:scale-95">
                Get a Quote for Swap
                <ArrowRight className="w-5 h-5" />
             </button>
             <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all">
                Browse Store
             </button>
          </div>
        </div>

        {/* Hero Image / Composition */}
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4 mt-12">
                <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 transform hover:-translate-y-2 transition-transform duration-300">
                   <img src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop" alt="Apple iPhones" className="w-full h-40 object-cover rounded-xl mb-4" />
                   <h3 className="font-bold text-slate-900 dark:text-white">Apple iPhones</h3>
                   <p className="text-xs text-slate-500">Latest Series Available</p>
                </div>
                <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 transform hover:-translate-y-2 transition-transform duration-300">
                   <img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800&auto=format&fit=crop" alt="Gaming" className="w-full h-32 object-cover rounded-xl mb-4" />
                   <h3 className="font-bold text-slate-900 dark:text-white">PlayStation</h3>
                   <p className="text-xs text-slate-500"> Accessories</p>
                </div>
             </div>
             <div className="space-y-4">
                <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 transform hover:-translate-y-2 transition-transform duration-300">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Laptop_collage.jpg/1280px-Laptop_collage.jpg" alt="Laptops" className="w-full h-32 object-cover rounded-xl mb-4" />
                   <h3 className="font-bold text-slate-900 dark:text-white">Laptops</h3>
                   <p className="text-xs text-slate-500">MacBooks & Windows</p>
                </div>
                <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 transform hover:-translate-y-2 transition-transform duration-300">
                   <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/050359/1.jpg?8033" alt="Smart Watches" className="w-full h-40 object-cover rounded-xl mb-4" />
                   <h3 className="font-bold text-slate-900 dark:text-white">Smart Watches</h3>
                   <p className="text-xs text-slate-500">Apple & Samsung</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Swap Portal Widget (Step 1) */}
      <div className="bg-white dark:bg-surface-dark rounded-[32px] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden mb-20 relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 to-primary-600"></div>
        <div className="p-8 border-b border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
             <div>
                <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white mb-2">Swap Portal</h2>
                <p className="text-slate-500 dark:text-slate-400">Find out how much your device is worth today.</p>
             </div>
             <div className="flex gap-4">
                <div className="flex items-center gap-2">
                   <span className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm">1</span>
                   <span className="font-semibold text-sm text-slate-900 dark:text-white">Old Device</span>
                </div>
                <div className="flex items-center gap-2">
                   <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 flex items-center justify-center font-bold text-sm">2</span>
                   <span className="font-semibold text-sm text-slate-400">Condition</span>
                </div>
                <div className="flex items-center gap-2">
                   <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 flex items-center justify-center font-bold text-sm">3</span>
                   <span className="font-semibold text-sm text-slate-400">Quote</span>
                </div>
             </div>
          </div>
        </div>

        <div className="p-8 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-12">
             {/* Categories */}
             <div className="lg:col-span-3 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Categories</h3>
                <button className="w-full text-left px-5 py-4 rounded-xl bg-primary-500 text-white font-bold flex items-center gap-3 shadow-lg shadow-primary-500/20">
                   <Smartphone className="w-5 h-5" /> Phones
                </button>
                <button className="w-full text-left px-5 py-4 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold flex items-center gap-3 transition-colors">
                   <Laptop className="w-5 h-5" /> Laptops
                </button>
                <button className="w-full text-left px-5 py-4 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold flex items-center gap-3 transition-colors">
                   <Gamepad2 className="w-5 h-5" /> Consoles
                </button>
                <button className="w-full text-left px-5 py-4 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold flex items-center gap-3 transition-colors">
                   <Headphones className="w-5 h-5" /> Accessories
                </button>
             </div>

             {/* Brand & Models */}
             <div className="lg:col-span-9">
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-6">Select Brand</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                   {['Apple', 'Samsung', 'Google', 'Sony'].map((brand, idx) => (
                      <div key={brand} onClick={() => onChangeView(ViewState.SWAP_FLOW)} className="group cursor-pointer border-2 border-slate-200 dark:border-slate-800 p-6 rounded-2xl text-center hover:border-primary-500 transition-all bg-slate-50 dark:bg-slate-800/50">
                         <div className="text-slate-400 group-hover:text-primary-500 mb-2 flex justify-center">
                            {idx === 0 && <Smartphone className="w-8 h-8" />}
                            {idx === 1 && <Smartphone className="w-8 h-8" />}
                            {idx === 2 && <Smartphone className="w-8 h-8" />}
                            {idx === 3 && <Gamepad2 className="w-8 h-8" />}
                         </div>
                         <p className="font-bold text-slate-900 dark:text-white">{brand}</p>
                      </div>
                   ))}
                </div>

                <div className="bg-slate-50 dark:bg-black/20 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-200 dark:border-slate-800">
                   <div className="flex items-center gap-4">
                      
                      <div>
                         <p className="font-bold text-slate-900 dark:text-white">Need help with your swap?</p>
                         <p className="text-sm text-slate-500">Chat with our experts for a custom quote.</p>
                      </div>
                   </div>
                   <button onClick={() => onChangeView(ViewState.SWAP_FLOW)} className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                      Start Custom Swap <ArrowRight className="w-5 h-5" />
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-8">
         <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6">
               <MapPin className="text-primary-600 dark:text-primary-400" />
            </div>
            <h4 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">Visit Store</h4>
            <p className="text-slate-500 mb-4">CHALLENGE, IBADAN. Nigeria's #1 Tech Hub.</p>
            <a href="#" className="text-primary-500 font-bold inline-flex items-center gap-1 hover:underline">Get Directions</a>
         </div>
         <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6">
               <Instagram className="text-primary-600 dark:text-primary-400" />
            </div>
            <h4 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">Instagram</h4>
            <p className="text-slate-500 mb-4">Follow us @6IX_GADGETS for daily updates.</p>
            <a href="#" className="text-primary-500 font-bold inline-flex items-center gap-1 hover:underline">Follow Us</a>
         </div>
         <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6">
               <Phone className="text-primary-600 dark:text-primary-400" />
            </div>
            <h4 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">Call/WhatsApp</h4>
            <p className="text-slate-500 mb-4">Chat with us anytime at 07062682010.</p>
            <a href="tel:07062682010" className="text-primary-500 font-bold inline-flex items-center gap-1 hover:underline">Call Now</a>
         </div>
      </div>
    </div>
  );
};

export default Home;