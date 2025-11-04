import React from 'react';
import { PlusCircle, CheckCircle2 } from 'lucide-react';

function ProductCard({ product, selected, onToggle }) {
  return (
    <div className="group bg-white border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
        <button
          onClick={() => onToggle(product)}
          className={`absolute top-3 right-3 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium shadow ${
            selected ? 'bg-green-600 text-white' : 'bg-white text-stone-800'
          }`}
        >
          {selected ? <CheckCircle2 size={16} /> : <PlusCircle size={16} />}
          {selected ? 'Added' : 'Add'}
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-stone-900">{product.name}</h3>
            <p className="text-sm text-stone-500">Code: {product.code}</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
          <div className="p-2 rounded bg-stone-50">
            <div className="text-stone-500">Gross</div>
            <div className="font-semibold text-stone-800">{product.grossWeight} g</div>
          </div>
          <div className="p-2 rounded bg-stone-50">
            <div className="text-stone-500">Net</div>
            <div className="font-semibold text-stone-800">{product.netWeight} g</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Catalogue({ products, selection, onToggleSelect, onGoToSelection }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-stone-900">Catalogue</h2>
          <p className="text-stone-600">Browse our curated collection and add items to your selection.</p>
        </div>
        <button
          onClick={onGoToSelection}
          className="px-4 py-2 rounded-md bg-stone-900 text-white hover:bg-stone-800"
        >
          View Selection ({selection.length})
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            selected={selection.some((s) => s.id === p.id)}
            onToggle={onToggleSelect}
          />)
        )}
      </div>
    </section>
  );
}
