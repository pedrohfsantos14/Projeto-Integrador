'use client';

import React from 'react';
import { Volume2, Pause, Play } from 'lucide-react';
import { useAccessibility } from '@/context/AccessibilityContext';

interface SectionHeaderProps {
  id: string;
  number: number;
  title: string;
  fullTextToRead: string;
}

export function SectionHeader({
  id,
  number,
  title,
  fullTextToRead,
}: SectionHeaderProps) {
  const {
    isTtsSupported,
    isTtsPlaying,
    currentReadingSection,
    speakSection,
  } = useAccessibility();

  const isCurrentSection = currentReadingSection === id;
  const isPlayingThis = isCurrentSection && isTtsPlaying;

  const handleSpeakClick = () => {
    speakSection(id, title, fullTextToRead);
  };

  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b-2 border-slate-200 dark:border-slate-800 mb-6">
      <div className="flex items-baseline gap-3">
        <span
          className="inline-flex items-center justify-center font-mono font-bold text-base px-2.5 py-1 rounded bg-blue-100 text-blue-900 border border-blue-300 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-500"
          aria-hidden="true"
        >
          Capítulo {number}
        </span>
        <h2
          id={`titulo-${id}`}
          className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
        >
          {title}
        </h2>
      </div>

      {isTtsSupported && (
        <button
          onClick={handleSpeakClick}
          aria-label={
            isPlayingThis
              ? `Pausar leitura em voz alta do capítulo ${number}: ${title}`
              : `Ouvir capítulo ${number}: ${title} em voz alta`
          }
          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg font-medium text-sm transition-all focus-visible:ring-2 focus-visible:ring-offset-2 self-start sm:self-auto ${
            isPlayingThis
              ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-sm'
              : 'bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200'
          }`}
        >
          {isPlayingThis ? (
            <>
              <Pause className="w-4 h-4 animate-pulse" aria-hidden="true" />
              <span>Pausar Áudio</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-blue-700" aria-hidden="true" />
              <span>Ouvir Seção</span>
            </>
          )}
        </button>
      )}
    </header>
  );
}
