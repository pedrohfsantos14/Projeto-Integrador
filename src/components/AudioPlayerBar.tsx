'use client';

import React from 'react';
import { Volume2, VolumeX, Pause, Play, Square, Gauge } from 'lucide-react';
import { useAccessibility } from '@/context/AccessibilityContext';

export function AudioPlayerBar() {
  const {
    isTtsSupported,
    isTtsPlaying,
    isTtsPaused,
    currentReadingTitle,
    ttsRate,
    setTtsRate,
    pauseSpeech,
    resumeSpeech,
    stopSpeech,
  } = useAccessibility();

  if (!isTtsSupported || (!isTtsPlaying && !isTtsPaused && !currentReadingTitle)) {
    return null;
  }

  const cycleRate = () => {
    if (ttsRate === 1.0) setTtsRate(1.25);
    else if (ttsRate === 1.25) setTtsRate(1.5);
    else setTtsRate(1.0);
  };

  return (
    <aside
      aria-label="Reprodutor de áudio em voz alta"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-lg z-50 bg-slate-900 text-white p-4 rounded-xl shadow-2xl border-2 border-blue-400 dark:border-yellow-400 flex flex-col gap-2 transition-all"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="flex h-3 w-3 relative">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                isTtsPlaying ? 'bg-green-400' : 'bg-amber-400'
              } opacity-75`}
            ></span>
            <span
              className={`relative inline-flex rounded-full h-3 w-3 ${
                isTtsPlaying ? 'bg-green-500' : 'bg-amber-500'
              }`}
            ></span>
          </span>
          <p className="text-sm font-semibold truncate text-slate-100">
            {isTtsPlaying
              ? `Lendo: ${currentReadingTitle}`
              : isTtsPaused
              ? `Pausado: ${currentReadingTitle}`
              : 'Leitor em voz alta pronto'}
          </p>
        </div>

        <button
          onClick={stopSpeech}
          aria-label="Fechar leitor de áudio"
          className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-white"
        >
          <VolumeX className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-700">
        <div className="flex items-center gap-2">
          {isTtsPlaying ? (
            <button
              onClick={pauseSpeech}
              aria-label="Pausar leitura em voz alta"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg text-xs md:text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              <Pause className="w-4 h-4" aria-hidden="true" />
              <span>Pausar</span>
            </button>
          ) : (
            <button
              onClick={resumeSpeech}
              aria-label="Continuar leitura em voz alta"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500 hover:bg-green-600 text-slate-950 font-bold rounded-lg text-xs md:text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              <Play className="w-4 h-4" aria-hidden="true" />
              <span>Continuar</span>
            </button>
          )}

          <button
            onClick={stopSpeech}
            aria-label="Parar leitura em voz alta"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs md:text-sm transition-colors border border-slate-600"
          >
            <Square className="w-4 h-4" aria-hidden="true" />
            <span>Parar</span>
          </button>
        </div>

        <button
          onClick={cycleRate}
          aria-label={`Velocidade da voz atual: ${ttsRate}x. Clique para alterar.`}
          className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition-colors border border-slate-700 font-mono"
        >
          <Gauge className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{ttsRate}x</span>
        </button>
      </div>
    </aside>
  );
}
