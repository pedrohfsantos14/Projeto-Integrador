'use client';

import React from 'react';
import { ShieldCheck, BookOpen, Layers } from 'lucide-react';
import { useAccessibility } from '@/context/AccessibilityContext';

export function Navbar() {
  const { setIsTocOpen } = useAccessibility();

  return (
    <header className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl bg-blue-700 dark:bg-yellow-400 text-white dark:text-slate-950 flex items-center justify-center font-bold shadow-sm"
            aria-hidden="true"
          >
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <a
              href="#topo"
              className="group block text-slate-900 dark:text-white font-extrabold text-lg sm:text-xl leading-tight hover:text-blue-700 dark:hover:text-yellow-400 transition-colors"
            >
              Conectando com Segurança
            </a>
            <p className="text-xs text-slate-700 dark:text-slate-200 font-medium">
              Projeto ILBES • Instituto Luiz Braille do Espírito Santo
            </p>
          </div>
        </div>

        {/* Desktop Quick Nav Links */}
        <div className="flex items-center gap-3">
          <a
            href="#sumario-navegacao"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-yellow-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Layers className="w-4 h-4" aria-hidden="true" />
            <span>Sumário dos 11 Capítulos</span>
          </a>

          <button
            onClick={() => setIsTocOpen(true)}
            aria-label="Abrir sumário dos capítulos"
            className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg text-sm font-semibold transition-colors border border-slate-300 dark:border-slate-700"
          >
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            <span>Capítulos</span>
          </button>

          <a
            href="#secao-orientacoes-praticas"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg text-xs sm:text-sm shadow-xs transition-colors"
          >
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>PARE, CONFIRA, PROTEJA</span>
          </a>
        </div>
      </div>
    </header>
  );
}
