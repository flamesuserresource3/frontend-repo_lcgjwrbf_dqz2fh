import React, { useMemo, useState } from 'react';
import { Trash2, Mail } from 'lucide-react';

export default function SelectionGallery({ selection, onRemove }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const mailtoHref = useMemo(() => {
    const to = 'sales@flames-jewellery.example'; // replace with your shop email
    const subject = `Rate Enquiry (${selection.length} item${selection.length !== 1 ? 's' : ''})`;
    const lines = [
      `Name: ${name || '-'}`,
      `Phone: ${phone || '-'}`,
      '',
      'Selected Items:',
      ...selection.map(
        (p, idx) =>
          `${idx + 1}. ${p.name} (Code ${p.code})\n   Gross: ${p.grossWeight} g | Net: ${p.netWeight} g\n   Image: ${p.image}`
      ),
    ];
    const body = encodeURIComponent(lines.join('\n'));
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
  }, [name, phone, selection]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-stone-900">Your Selection</h2>
          <p className="text-stone-600">Review your shortlisted pieces and send us an enquiry for current rates.</p>
        </div>
      </div>

      {selection.length === 0 ? (
        <div className="mt-10 p-6 rounded-xl border border-dashed border-stone-300 text-center text-stone-600">
          No items added yet. Browse the catalogue and add pieces you love.
        </div>
      ) : (
        <>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {selection.map((p) => (
              <div key={p.id} className="bg-white border border-stone-200 rounded-xl overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-stone-900">{p.name}</h3>
                      <p className="text-sm text-stone-500">Code: {p.code}</p>
                    </div>
                    <button
                      onClick={() => onRemove(p)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-sm text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={16} /> Remove
                    </button>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                    <div className="p-2 rounded bg-stone-50">
                      <div className="text-stone-500">Gross</div>
                      <div className="font-semibold text-stone-800">{p.grossWeight} g</div>
                    </div>
                    <div className="p-2 rounded bg-stone-50">
                      <div className="text-stone-500">Net</div>
                      <div className="font-semibold text-stone-800">{p.netWeight} g</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-xl border border-stone-200 bg-white">
            <h3 className="text-lg font-semibold text-stone-900">Send Rate Enquiry</h3>
            <p className="text-sm text-stone-600">Share your details and we will get back to you with the best price.</p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-stone-600 mb-1">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm text-stone-600 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="e.g. +91 98XXXXXXXX"
                />
              </div>
              <div className="flex items-end">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-md bg-amber-600 text-white font-semibold hover:bg-amber-700"
                >
                  <Mail size={18} /> Enquire Rates
                </a>
              </div>
            </div>
            <p className="mt-2 text-xs text-stone-500">This will open your email app with all the details pre-filled.</p>
          </div>
        </>
      )}
    </section>
  );
}
