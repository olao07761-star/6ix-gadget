import React, { useState } from 'react';
import { ViewState, Condition } from '../types';
import { Check, CheckCircle, Smartphone, AlertCircle, AlertTriangle, UploadCloud, X, ArrowLeft, ArrowRight, ShieldCheck, RefreshCw, Star, Info } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface SwapFlowProps {
  onChangeView: (view: ViewState) => void;
}

const data = [
  { name: 'Jan', price: 620000 },
  { name: 'Feb', price: 635000 },
  { name: 'Mar', price: 650000 },
  { name: 'Apr', price: 640000 },
  { name: 'May', price: 645000 },
  { name: 'Today', price: 670000 },
];

const SwapFlow: React.FC<SwapFlowProps> = ({ onChangeView }) => {
  const [selectedCondition, setSelectedCondition] = useState<Condition>(Condition.EXCELLENT);
  const [hasAccessories, setHasAccessories] = useState<boolean>(true);

  // Helper to format currency
  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(amount);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Side: Wizard */}
        <div className="w-full lg:w-2/3">
          {/* Progress Stepper */}
          <div className="mb-10">
            <div className="flex items-center justify-between relative">
               <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -z-0"></div>
               <div className="absolute top-1/2 left-0 w-2/3 h-0.5 bg-primary-500 -z-0"></div>
               
               <div className="relative z-10 flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark px-2">
                 <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">1</div>
                 <span className="text-xs font-bold uppercase tracking-wider text-primary-500">Device</span>
               </div>
               
               <div className="relative z-10 flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark px-2">
                 <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">2</div>
                 <span className="text-xs font-bold uppercase tracking-wider text-primary-500">Condition</span>
               </div>
               
               <div className="relative z-10 flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark px-2">
                 <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 dark:bg-surface-dark dark:border-slate-700 text-slate-400 flex items-center justify-center font-bold">3</div>
                 <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Photos</span>
               </div>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
             <h1 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-2">How's the condition?</h1>
             <p className="text-slate-500 dark:text-slate-400 mb-8">Please be as honest as possible for an accurate quote. We'll verify this upon arrival.</p>

             {/* Condition Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: Condition.EXCELLENT, title: 'Excellent', desc: 'Like new. No scratches, scuffs, or dents.', icon: CheckCircle },
                  { id: Condition.GOOD, title: 'Good', desc: 'Normal wear. Minor faint scratches.', icon: Check },
                  { id: Condition.CRACKED, title: 'Cracked', desc: 'Cracked glass but display works.', icon: AlertCircle },
                  { id: Condition.FAULTY, title: 'Faulty', desc: 'Software issues or broken buttons.', icon: AlertTriangle },
                ].map((item) => (
                   <div 
                      key={item.id}
                      onClick={() => setSelectedCondition(item.id)}
                      className={`group relative cursor-pointer border-2 rounded-2xl p-5 transition-all ${
                        selectedCondition === item.id 
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/10' 
                        : 'border-transparent bg-slate-50 dark:bg-slate-800/50 hover:border-primary-200 dark:hover:border-primary-800'
                      }`}
                   >
                      {selectedCondition === item.id && (
                        <div className="absolute top-4 right-4 text-primary-500">
                           <CheckCircle className="w-5 h-5 fill-current" />
                        </div>
                      )}
                      <h3 className={`font-bold text-lg mb-1 ${selectedCondition === item.id ? 'text-primary-700 dark:text-primary-400' : 'text-slate-900 dark:text-white'}`}>{item.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                   </div>
                ))}
             </div>

             {/* Accessories Question */}
             <div className="mt-8 space-y-6">
                <div>
                   <label className="block font-bold text-slate-900 dark:text-white mb-3">Does it include original accessories?</label>
                   <div className="flex gap-4">
                      <button 
                        onClick={() => setHasAccessories(true)}
                        className={`px-6 py-2 rounded-full border font-medium transition-colors ${
                          hasAccessories 
                          ? 'border-primary-500 bg-primary-500 text-white' 
                          : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary-500'
                        }`}
                      >
                        Yes
                      </button>
                      <button 
                        onClick={() => setHasAccessories(false)}
                        className={`px-6 py-2 rounded-full border font-medium transition-colors ${
                          !hasAccessories 
                          ? 'border-primary-500 bg-primary-500 text-white' 
                          : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary-500'
                        }`}
                      >
                        No
                      </button>
                   </div>
                </div>

                {/* Photo Upload */}
                <div>
                   <label className="block font-bold text-slate-900 dark:text-white mb-3">Upload Device Photos</label>
                   <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center bg-slate-50 dark:bg-black/20 group hover:border-primary-400 transition-colors cursor-pointer">
                      <UploadCloud className="w-10 h-10 text-slate-300 dark:text-slate-600 group-hover:text-primary-500 mb-3 transition-colors" />
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Drag and drop photos or <span className="text-primary-500 underline">browse</span></p>
                      <p className="text-xs text-slate-400 mt-1">Upload at least 3 photos (Front, Back, Sides)</p>
                   </div>
                   
                   {/* Previews */}
                   <div className="grid grid-cols-4 gap-4 mt-4">
                      <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                         <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=200&auto=format&fit=crop" alt="Preview" className="w-full h-full object-cover" />
                         <button className="absolute top-1 right-1 bg-white/80 p-1 rounded-full text-red-500 hover:bg-white"><X className="w-3 h-3" /></button>
                      </div>
                      {[1,2,3].map(i => (
                         <div key={i} className="aspect-square rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-black/20 flex items-center justify-center">
                            <UploadCloud className="w-6 h-6 text-slate-300" />
                         </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* Actions */}
             <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
                <button onClick={() => onChangeView(ViewState.HOME)} className="flex items-center gap-2 font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors">
                   <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary-500/20 transition-all flex items-center gap-2">
                   Next Step <ArrowRight className="w-5 h-5" />
                </button>
             </div>
          </div>
        </div>

        {/* Right Sidebar: Quote */}
        <aside className="w-full lg:w-1/3 space-y-6 lg:sticky lg:top-28">
           <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="bg-primary-50 dark:bg-primary-900/10 p-6 border-b border-primary-100 dark:border-primary-900/20">
                 <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Info className="text-primary-500" /> Estimated Quote
                 </h2>
              </div>
              <div className="p-6">
                 <div className="mb-8 text-center">
                    <div className="text-sm text-slate-500 font-medium mb-1">Current Trade-in Value</div>
                    <div className="text-4xl md:text-5xl font-display font-bold text-primary-500">{formatNaira(670000)}</div>
                    <div className="text-xs text-green-600 dark:text-green-400 mt-2 font-semibold bg-green-50 dark:bg-green-900/20 inline-block px-3 py-1 rounded-full">
                       + {formatNaira(25000)} bonus for swapping today
                    </div>
                 </div>
                 
                 {/* Price Chart */}
                 <div className="h-32 w-full mb-6">
                   <p className="text-xs text-slate-400 mb-2 font-medium">Price History (6 Months)</p>
                   <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={data}>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.3} />
                       <XAxis dataKey="name" hide />
                       <Tooltip 
                         formatter={(value: number) => formatNaira(value)}
                         contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                         cursor={{fill: 'transparent'}}
                       />
                       <Bar dataKey="price" fill="#ec7f13" radius={[4, 4, 0, 0]} barSize={20} />
                     </BarChart>
                   </ResponsiveContainer>
                 </div>

                 <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm">
                       <span className="text-slate-500 dark:text-slate-400">Device</span>
                       <span className="font-bold text-slate-900 dark:text-white">Apple 13 pro max </span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-slate-500 dark:text-slate-400">Storage</span>
                       <span className="font-bold text-slate-900 dark:text-white">256 GB</span>
                    </div>
                    <div className="flex justify-between text-sm border-t border-dashed border-slate-200 dark:border-slate-700 pt-4">
                       <span className="text-slate-500 dark:text-slate-400">Condition</span>
                       <span className="font-bold text-primary-500">{selectedCondition}</span>
                    </div>
                 </div>

                 <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity mb-4 shadow-lg">
                    Lock in this Quote
                 </button>
                 <button className="w-full border-2 border-primary-500 text-primary-500 py-4 rounded-xl font-bold hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors">
                    Compare Swap Deals
                 </button>
              </div>
           </div>

           <div className="flex justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-1">
                 <Star className="w-4 h-4 text-yellow-500 fill-current" />
                 <span className="text-xs font-bold text-slate-600 dark:text-slate-400">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1">
                 <ShieldCheck className="w-4 h-4 text-blue-500" />
                 <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Secure Pay</span>
              </div>
              <div className="flex items-center gap-1">
                 <RefreshCw className="w-4 h-4 text-green-500" />
                 <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Eco Friendly</span>
              </div>
           </div>
        </aside>

      </div>
    </div>
  );
};

export default SwapFlow;