import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalogue from './components/Catalogue';
import SelectionGallery from './components/SelectionGallery';

const initialProducts = [
  {
    id: 'RNG-101',
    code: 'RNG-101',
    name: 'Heritage Gold Ring',
    image:
      'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1600&auto=format&fit=crop',
    grossWeight: 7.85,
    netWeight: 7.23,
  },
  {
    id: 'NKL-204',
    code: 'NKL-204',
    name: 'Kundan Necklace Set',
    image:
      'https://images.unsplash.com/photo-1612044544293-3f19799a6ea0?q=80&w=1600&auto=format&fit=crop',
    grossWeight: 42.1,
    netWeight: 39.6,
  },
  {
    id: 'BRC-332',
    code: 'BRC-332',
    name: 'Diamond Bracelet',
    image:
      'https://images.unsplash.com/photo-1543294001-7f78e2c1e6e2?q=80&w=1600&auto=format&fit=crop',
    grossWeight: 15.4,
    netWeight: 14.9,
  },
  {
    id: 'ER-118',
    code: 'ER-118',
    name: 'Pearl Drop Earrings',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
    grossWeight: 9.2,
    netWeight: 8.7,
  },
  {
    id: 'BGL-507',
    code: 'BGL-507',
    name: 'Traditional Bangles',
    image:
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1600&auto=format&fit=crop',
    grossWeight: 28.6,
    netWeight: 27.2,
  },
  {
    id: 'SET-621',
    code: 'SET-621',
    name: 'Bridal Set',
    image:
      'https://images.unsplash.com/photo-1612046126510-9ebd23040335?q=80&w=1600&auto=format&fit=crop',
    grossWeight: 86.3,
    netWeight: 81.9,
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [products] = useState(initialProducts);
  const [selection, setSelection] = useState([]);

  const handleToggleSelect = (product) => {
    setSelection((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const removeFromSelection = (product) => {
    setSelection((prev) => prev.filter((p) => p.id !== product.id));
  };

  const content = useMemo(() => {
    switch (currentPage) {
      case 'catalogue':
        return (
          <Catalogue
            products={products}
            selection={selection}
            onToggleSelect={handleToggleSelect}
            onGoToSelection={() => setCurrentPage('selection')}
          />
        );
      case 'selection':
        return (
          <SelectionGallery selection={selection} onRemove={removeFromSelection} />
        );
      default:
        return <Hero onShopNow={() => setCurrentPage('catalogue')} />;
    }
  }, [currentPage, products, selection]);

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        selectionCount={selection.length}
      />
      {content}

      <footer className="mt-16 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-stone-600 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} Flames Jewellery. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-stone-900">Privacy</a>
            <a href="#" className="hover:text-stone-900">Terms</a>
            <a href="#" className="hover:text-stone-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
