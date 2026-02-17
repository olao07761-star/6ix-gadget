import React, { useState } from 'react';
import { ViewState } from '../types';
import { Smartphone, Eye, EyeOff, Lock, User, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

interface AuthProps {
  initialView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const Auth: React.FC<AuthProps> = ({ initialView, onChangeView }) => {
  const [view, setView] = useState<ViewState>(initialView);
  const [showPassword, setShowPassword] = useState(false);

  const isLogin = view === ViewState.LOGIN;
  const isVerify = view === ViewState.VERIFY;

  if (isVerify) {
    return (
      <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
         <div className="p-8 flex justify-center">
            <div className="flex items-center gap-2" onClick={() => onChangeView(ViewState.HOME)}>
              <div className="bg-primary-500 p-2 rounded-lg">
                 <Smartphone className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-display text-slate-900 dark:text-white">6ix<span className="text-primary-500">Gadgets</span></span>
            </div>
         </div>
         <div className="flex-grow flex items-center justify-center px-4 pb-20">
            <div className="max-w-md w-full bg-white dark:bg-surface-dark dark:border dark:border-slate-800 rounded-2xl shadow-xl p-8 md:p-10">
               <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-500 mb-4">
                     <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Security Verification</h1>
                  <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm">We've sent a 6-digit code to your email.</p>
               </div>
               <form onSubmit={(e) => { e.preventDefault(); onChangeView(ViewState.HOME); }} className="space-y-8">
                  <div className="flex justify-between gap-2 max-w-xs mx-auto">
                     {[4, 8, '', '', '', ''].map((val, i) => (
                        <input key={i} type="text" maxLength={1} defaultValue={val} className="w-12 h-14 text-center text-xl font-bold rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-transparent focus:border-primary-500 dark:text-white outline-none transition-all" />
                     ))}
                  </div>
                  <button type="submit" className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-primary-500/20 flex items-center justify-center gap-2">
                     <span>Verify Account</span>
                     <ArrowRight className="w-5 h-5" />
                  </button>
               </form>
            </div>
         </div>
      </div>
    );
  }

  return (
    <div className="flex w-full min-h-screen bg-background-light dark:bg-background-dark">
      {/* Left Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-white dark:bg-background-dark">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden flex items-center gap-2 mb-8 cursor-pointer" onClick={() => onChangeView(ViewState.HOME)}>
             <Smartphone className="text-primary-500 w-8 h-8" />
             <span className="text-2xl font-bold tracking-tight text-primary-500">6IX GADGETS</span>
          </div>

          <div className="space-y-2">
             <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
             <p className="text-slate-500 dark:text-slate-400">{isLogin ? 'Enter your credentials to access your account.' : 'Join the community of tech enthusiasts.'}</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); isLogin ? onChangeView(ViewState.HOME) : setView(ViewState.VERIFY); }}>
             <div className="space-y-4">
                {!isLogin && (
                   <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Full Name</label>
                      <div className="relative">
                         <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                         <input type="text" placeholder="John Doe" className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-primary-500 outline-none dark:text-white" />
                      </div>
                   </div>
                )}
                <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{isLogin ? 'Email or Phone' : 'Email Address'}</label>
                   <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input type="text" placeholder="name@email.com" className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-primary-500 outline-none dark:text-white" />
                   </div>
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Password</label>
                   <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="w-full pl-10 pr-12 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-primary-500 outline-none dark:text-white" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary-500">
                         {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                   </div>
                </div>
             </div>

             {isLogin && (
                <div className="flex items-center justify-between">
                   <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded text-primary-500 focus:ring-primary-500" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">Remember me</span>
                   </label>
                   <a href="#" className="text-sm font-semibold text-primary-500 hover:underline">Forgot Password?</a>
                </div>
             )}

             <button type="submit" className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-primary-500/20 transition-all active:scale-[0.98]">
                {isLogin ? 'Sign In' : 'Create Account'}
             </button>
          </form>

          <div className="relative py-4">
             <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200 dark:border-slate-700"></div></div>
             <div className="relative flex justify-center text-sm"><span className="px-4 bg-white dark:bg-background-dark text-slate-500">Or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <button className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors dark:text-white font-medium">
                Google
             </button>
             <button className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors dark:text-white font-medium">
                Apple
             </button>
          </div>

          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
             {isLogin ? "Don't have an account? " : "Already have an account? "}
             <button onClick={() => setView(isLogin ? ViewState.REGISTER : ViewState.LOGIN)} className="text-primary-500 font-bold hover:underline ml-1">
                {isLogin ? 'Sign Up' : 'Sign In'}
             </button>
          </p>
        </div>
      </div>

      {/* Right Branding Section */}
      <div className="hidden lg:flex w-1/2 bg-primary-500 relative flex-col justify-between p-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full -ml-48 -mb-48"></div>
        
        <div className="relative z-10 flex items-center gap-3 cursor-pointer" onClick={() => onChangeView(ViewState.HOME)}>
           <div className="bg-white p-2.5 rounded-xl shadow-lg">
              <Smartphone className="text-primary-500 w-8 h-8" />
           </div>
           <span className="text-3xl font-extrabold tracking-tighter text-white font-display">6IX GADGETS</span>
        </div>

        <div className="relative z-10 space-y-8">
           <h2 className="text-5xl font-bold font-display text-white leading-tight">
              {isLogin ? 'Welcome Back to the ' : 'Join the 6ix Community: '}
              <span className="text-slate-900 block">{isLogin ? '#1 Gadget Swap Hub' : 'Upgrade Your Tech'}</span>
              in Ibadan
           </h2>
           <p className="text-white/90 text-xl max-w-md">
              The easiest way to upgrade, swap, and buy premium tech at the best market prices.
           </p>
           
           <div className="relative h-64 w-full flex justify-center">
              <img src="https://images.unsplash.com/photo-1556656793-02715d8dd660?q=80&w=600&auto=format&fit=crop" alt="Tech Lifestyle" className="h-full object-cover drop-shadow-2xl rounded-3xl rotate-12" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;