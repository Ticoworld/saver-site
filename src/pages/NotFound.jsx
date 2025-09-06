import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 py-16">
      <div className="text-center max-w-xl">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 mb-6 shadow-inner">
          <span className="text-3xl font-extrabold">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">Page not found</h1>
        <p className="text-neutral-600 mb-8">The page you’re looking for doesn’t exist or has been moved.</p>
        <div className="flex items-center justify-center gap-3">
          <Link to="/" className="px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition">Back to Home</Link>
          <a href="/" className="px-5 py-2.5 rounded-lg border border-neutral-200 text-neutral-700 font-medium hover:bg-neutral-50 transition">Report an issue</a>
        </div>
      </div>
    </section>
  );
}
