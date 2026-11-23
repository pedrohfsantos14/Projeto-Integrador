'use client';

import React from 'react';
import {
  Contrast,
  Type,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Volume2,
  Menu,
} from 'lucide-react';
import { useAccessibility } from '@/context/AccessibilityContext';

export function AccessibilityToolbar() {
  const {
    contrastMode,
    toggleContrast,
    fontScalePercent,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    isTtsSupported,
    isTtsPlaying,
    stopSpeech,
    setIsTocOpen,
  } = useAccessibility();

  return (
    <nav
      aria-label="Barra de ferramentas de acessibilidade"
      className="bg-slate-900 text-white border-b-2 border-slate-700 py-2 px-4 sm:px-6 relative z-40"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-sm">
        {/* Left: Project tag & Mobile TOC toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsTocOpen(true)}
            aria-label="Abrir sumário dos capítulos"
            className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-700 hover:bg-blue-600 rounded-md font-medium text-white border border-blue-400 focus-visible:outline-2 focus-visible:outline-white"
          >
            <Menu className="w-4 h-4" aria-hidden="true" />
            <span>Sumário (11)</span>
          </button>

          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-slate-800 rounded border border-slate-700 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true"></span>
            Acessibilidade WCAG 2.1 AAA
          </span>
        </div>

        {/* Right: Accessibility Controls */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-3">
          {/* Contrast Mode Toggle */}
          <button
            onClick={toggleContrast}
            aria-pressed={contrastMode === 'high'}
            aria-label={`Modo de alto contraste: ${
              contrastMode === 'high' ? 'Ativado' : 'Desativado'
            }. Clique para alternar.`}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md font-semibold text-xs sm:text-sm transition-colors border ${
              contrastMode === 'high'
                ? 'bg-yellow-400 text-slate-950 border-yellow-300 hover:bg-yellow-300 font-bold'
                : 'bg-slate-800 text-slate-100 border-slate-700 hover:bg-slate-700'
            }`}
          >
            <Contrast className="w-4 h-4" aria-hidden="true" />
            <span>
              {contrastMode === 'high' ? 'Alto Contraste: Ligado' : 'Alto Contraste'}
            </span>
          </button>

          {/* Font Resizing Controls */}
          <div
            role="group"
            aria-label="Controle de tamanho da fonte do texto"
            className="inline-flex items-center bg-slate-800 rounded-md border border-slate-700 p-0.5"
          >
            <button
              onClick={decreaseFontSize}
              aria-label="Diminuir tamanho da fonte"
              className="px-2.5 py-1 text-slate-200 hover:text-white hover:bg-slate-700 rounded transition-colors flex items-center gap-1 text-xs font-bold"
              title="Diminuir fonte (A-)"
            >
              <ZoomOut className="w-3.5 h-3.5" aria-hidden="true" />
              <span>A-</span>
            </button>

            <button
              onClick={resetFontSize}
              aria-label={`Tamanho da fonte atual: ${fontScalePercent}%. Clique para restaurar 100%.`}
              className="px-2 py-1 text-xs font-mono font-bold text-blue-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
              title="Restaurar tamanho original da fonte (100%)"
            >
              {fontScalePercent}%
            </button>

            <button
              onClick={increaseFontSize}
              aria-label="Aumentar tamanho da fonte"
              className="px-2.5 py-1 text-slate-200 hover:text-white hover:bg-slate-700 rounded transition-colors flex items-center gap-1 text-xs font-bold"
              title="Aumentar fonte (A+)"
            >
              <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
              <span>A+</span>
            </button>
          </div>

          {/* Audio Stop Button if TTS is active */}
          {isTtsSupported && isTtsPlaying && (
            <button
              onClick={stopSpeech}
              aria-label="Parar leitura em voz alta ativa"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-md text-xs sm:text-sm font-semibold transition-colors"
            >
              <Volume2 className="w-4 h-4 animate-bounce" aria-hidden="true" />
              <span>Parar Áudio</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
