import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary-500 rounded flex items-center justify-center font-black italic">6G</div>
              <span className="text-xl font-bold font-display">6ix Gadgets</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              The ultimate destination for tech enthusiasts in Ibadan. We provide quality gadgets with flexible swap options to keep you up to date with technology.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 font-display">Quick Links</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-primary-500 transition-colors">Buy Gadgets</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Swap Portal</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Sell Your Device</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Repairs</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 font-display">Store Info</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Challenge, Ibadan, Nigeria</li>
              <li>Mon - Sat: 9am - 7pm</li>
              <li>07062682010</li>
              <li>@6ix_gadgets</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© 2024 6ix Gadgets. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;