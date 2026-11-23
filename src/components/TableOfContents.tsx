'use client';

import React, { useEffect } from 'react';
import { CHAPTERS } from '@/data/contentData';
import { useAccessibility } from '@/context/AccessibilityContext';
import { X, BookOpen, ChevronRight, Volume2 } from 'lucide-react';

export function TableOfContents() {
  const {
    isTocOpen,
    setIsTocOpen,
    activeSectionId,
    setActiveSectionId,
    currentReadingSection,
  } = useAccessibility();

  // Close mobile drawer with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isTocOpen) {
        setIsTocOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTocOpen, setIsTocOpen]);

  // Observer to track which section is currently active during scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = CHAPTERS.map((ch) =>
        document.getElementById(`secao-${ch.id}`)
      ).filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          const id = sec.id.replace('secao-', '');
          setActiveSectionId(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSectionId]);

  const handleLinkClick = (id: string) => {
    setActiveSectionId(id);
    setIsTocOpen(false);
  };

  return (
    <>
      {/* =========================================================================
          DESKTOP SIDEBAR (Sticky on lg screens)
         ========================================================================= */}
      <aside
        id="sumario-navegacao"
        aria-label="Sumário dos 11 capítulos do guia"
        className="hidden lg:block w-80 shrink-0 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto bg-white dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
          <BookOpen className="w-5 h-5 text-blue-700 dark:text-yellow-400" aria-hidden="true" />
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            Sumário do Guia
          </h2>
          <span className="ml-auto text-xs font-semibold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full">
            11 tópicos
          </span>
        </div>

        <nav aria-label="Lista de capítulos">
          <ul className="space-y-1 text-sm">
            {CHAPTERS.map((chapter) => {
              const isActive = activeSectionId === chapter.id;
              const isReading = currentReadingSection === `secao-${chapter.id}`;

              return (
                <li key={chapter.id}>
                  <a
                    href={`#secao-${chapter.id}`}
                    onClick={() => handleLinkClick(chapter.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`group flex items-start gap-2.5 p-2 rounded-xl transition-all ${
                      isActive
                        ? 'bg-blue-50 dark:bg-slate-900 text-blue-900 dark:text-yellow-300 font-bold border-l-4 border-blue-700 dark:border-yellow-400 shadow-2xs'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-950 font-medium'
                    }`}
                  >
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 shrink-0 rounded-full text-xs font-bold ${
                        isActive
                          ? 'bg-blue-700 text-white dark:bg-yellow-400 dark:text-black'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {chapter.number}
                    </span>
                    <span className="leading-snug flex-1">
                      {chapter.shortTitle}
                    </span>
                    {isReading && (
                      <Volume2
                        className="w-4 h-4 text-emerald-600 animate-pulse shrink-0"
                        aria-label="Lendo esta seção agora"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* =========================================================================
          MOBILE DRAWER (Accessible Modal with Backdrop)
         ========================================================================= */}
      {isTocOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Sumário de capítulos para navegação"
          className="fixed inset-0 z-50 lg:hidden flex"
        >
          {/* Backdrop */}
          <div
            onClick={() => setIsTocOpen(false)}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-full max-w-sm bg-white dark:bg-slate-950 h-full p-5 shadow-2xl flex flex-col overflow-y-auto border-l-2 border-slate-300 dark:border-slate-800">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-700 dark:text-yellow-400" aria-hidden="true" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  Sumário dos Capítulos
                </h2>
              </div>
              <button
                onClick={() => setIsTocOpen(false)}
                aria-label="Fechar sumário de capítulos"
                className="p-2 text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Lista de capítulos mobile" className="flex-1">
              <ul className="space-y-1.5">
                {CHAPTERS.map((chapter) => {
                  const isActive = activeSectionId === chapter.id;
                  const isReading = currentReadingSection === `secao-${chapter.id}`;

                  return (
                    <li key={chapter.id}>
                      <a
                        href={`#secao-${chapter.id}`}
                        onClick={() => handleLinkClick(chapter.id)}
                        aria-current={isActive ? 'true' : undefined}
                        className={`flex items-center justify-between p-3 rounded-xl min-h-[48px] text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-blue-100 dark:bg-slate-800 text-blue-900 dark:text-yellow-300 font-bold border-l-4 border-blue-700 dark:border-yellow-400'
                            : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-bold">
                            {chapter.number}
                          </span>
                          <span>{chapter.shortTitle}</span>
                        </span>
                        {isReading ? (
                          <Volume2 className="w-5 h-5 text-emerald-600 animate-pulse" aria-hidden="true" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-slate-400" aria-hidden="true" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setIsTocOpen(false)}
                className="w-full py-3 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold rounded-xl text-center hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              >
                Fechar Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
