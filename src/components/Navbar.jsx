import React from 'react';
import { Gem, ShoppingBag, Images, Home } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate, selectionCount }) {
  const linkClass = (page) =>
    `inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      currentPage === page
        ? 'text-white bg-amber-600'
        : 'text-stone-700 hover:text-amber-700 hover:bg-stone-100'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-amber-50 text-amber-700 group-hover:bg-amber-100">
            <Gem size={20} />
          </div>
          <div className="text-left">
            <div className="text-sm uppercase tracking-widest text-stone-500">Flames Jewellery</div>
            <div className="text-lg font-semibold text-stone-900 leading-5">Timeless Elegance</div>
          </div>
        </button>

        <nav className="flex items-center gap-2">
          <button className={linkClass('home')} onClick={() => onNavigate('home')}>
            <Home size={16} /> Home
          </button>
          <button className={linkClass('catalogue')} onClick={() => onNavigate('catalogue')}>
            <ShoppingBag size={16} /> Catalogue
          </button>
          <button className={linkClass('selection')} onClick={() => onNavigate('selection')}>
            <Images size={16} /> Selection
            {selectionCount > 0 && (
              <span className="ml-2 inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1 text-xs rounded-full bg-amber-600 text-white">
                {selectionCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
