import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero({ onShopNow }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
              <Sparkles size={16} /> New Festive Collection
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
              Crafted to be cherished for a lifetime
            </h1>
            <p className="mt-4 text-stone-600 text-lg leading-relaxed">
              Discover exquisite gold and diamond jewellery with impeccable craftsmanship.
              From timeless classics to modern statements — find a piece that tells your story.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button onClick={onShopNow} className="px-5 py-3 rounded-md bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors">
                Explore Catalogue
              </button>
              <a href="#about" className="px-5 py-3 rounded-md border border-stone-300 text-stone-800 font-semibold hover:bg-stone-50">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop"
              alt="Jewellery showcase"
              className="w-full h-[360px] md:h-[440px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-5 -left-5 bg-white shadow-lg rounded-xl p-4 border border-stone-200">
              <div className="text-sm font-semibold text-stone-800">Authenticity Guaranteed</div>
              <div className="text-xs text-stone-500">Hallmarked and Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
