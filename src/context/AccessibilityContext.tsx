'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';

export type ContrastMode = 'normal' | 'high';

interface AccessibilityContextType {
  contrastMode: ContrastMode;
  toggleContrast: () => void;
  fontScale: number; // e.g. 1.0, 1.15, 1.3, 1.45
  fontScalePercent: number; // e.g. 100, 115, 130, 145
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  announcement: string;
  announce: (msg: string) => void;
  // TTS (Text-to-Speech)
  isTtsSupported: boolean;
  isTtsPlaying: boolean;
  isTtsPaused: boolean;
  currentReadingSection: string | null;
  currentReadingTitle: string | null;
  ttsRate: number;
  setTtsRate: (rate: number) => void;
  speakSection: (sectionId: string, title: string, text: string) => void;
  pauseSpeech: () => void;
  resumeSpeech: () => void;
  stopSpeech: () => void;
  // Table of Contents Mobile state
  isTocOpen: boolean;
  setIsTocOpen: (open: boolean) => void;
  activeSectionId: string;
  setActiveSectionId: (id: string) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(
  undefined
);

const FONT_SCALES = [0.9, 1.0, 1.15, 1.3, 1.45];
const DEFAULT_SCALE_INDEX = 1; // 1.0 (100%)

export function AccessibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [contrastMode, setContrastMode] = useState<ContrastMode>('normal');
  const [scaleIndex, setScaleIndex] = useState<number>(DEFAULT_SCALE_INDEX);
  const [announcement, setAnnouncement] = useState<string>('');

  // TTS State
  const [isTtsSupported, setIsTtsSupported] = useState<boolean>(false);
  const [isTtsPlaying, setIsTtsPlaying] = useState<boolean>(false);
  const [isTtsPaused, setIsTtsPaused] = useState<boolean>(false);
  const [currentReadingSection, setCurrentReadingSection] = useState<
    string | null
  >(null);
  const [currentReadingTitle, setCurrentReadingTitle] = useState<string | null>(
    null
  );
  const [ttsRate, setTtsRate] = useState<number>(1.0);

  // TOC State
  const [isTocOpen, setIsTocOpen] = useState<boolean>(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('introducao');

  // Ref to cancel ongoing speech chunks queue
  const speechQueueRef = useRef<string[]>([]);
  const isCanceledRef = useRef<boolean>(false);

  const announce = useCallback((msg: string) => {
    // Clear first to trigger change if message is identical
    setAnnouncement('');
    setTimeout(() => {
      setAnnouncement(msg);
    }, 50);
  }, []);

  // Initialize from localStorage & check TTS support
  useEffect(() => {
    try {
      const savedContrast = localStorage.getItem('ilbes_contrast');
      if (savedContrast === 'high') {
        setContrastMode('high');
        document.documentElement.classList.add('high-contrast');
      }

      const savedScale = localStorage.getItem('ilbes_scale_index');
      if (savedScale !== null) {
        const idx = parseInt(savedScale, 10);
        if (!isNaN(idx) && idx >= 0 && idx < FONT_SCALES.length) {
          setScaleIndex(idx);
          document.documentElement.style.setProperty(
            '--font-scale',
            `${FONT_SCALES[idx]}rem`
          );
        }
      }
    } catch {
      // Local storage not accessible
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsTtsSupported(true);
    }
  }, []);

  // Contrast toggle
  const toggleContrast = useCallback(() => {
    setContrastMode((prev) => {
      const next = prev === 'normal' ? 'high' : 'normal';
      try {
        localStorage.setItem('ilbes_contrast', next);
      } catch {
        // Ignore
      }
      if (next === 'high') {
        document.documentElement.classList.add('high-contrast');
        announce('Modo de alto contraste ativado com sucesso.');
      } else {
        document.documentElement.classList.remove('high-contrast');
        announce('Modo normal ativado com sucesso.');
      }
      return next;
    });
  }, [announce]);

  // Font Size Controls
  const applyScale = useCallback(
    (index: number) => {
      const safeIndex = Math.max(0, Math.min(index, FONT_SCALES.length - 1));
      setScaleIndex(safeIndex);
      const scale = FONT_SCALES[safeIndex] ?? 1.0;
      document.documentElement.style.setProperty('--font-scale', `${scale}rem`);
      try {
        localStorage.setItem('ilbes_scale_index', safeIndex.toString());
      } catch {
        // Ignore
      }
      announce(`Tamanho do texto ajustado para ${Math.round(scale * 100)} porcento.`);
    },
    [announce]
  );

  const increaseFontSize = useCallback(() => {
    if (scaleIndex < FONT_SCALES.length - 1) {
      applyScale(scaleIndex + 1);
    } else {
      announce('Tamanho máximo de texto já atingido.');
    }
  }, [scaleIndex, applyScale, announce]);

  const decreaseFontSize = useCallback(() => {
    if (scaleIndex > 0) {
      applyScale(scaleIndex - 1);
    } else {
      announce('Tamanho mínimo de texto já atingido.');
    }
  }, [scaleIndex, applyScale, announce]);

  const resetFontSize = useCallback(() => {
    applyScale(DEFAULT_SCALE_INDEX);
  }, [applyScale]);

  // TTS Helper: stop all utterances
  const stopSpeech = useCallback(() => {
    isCanceledRef.current = true;
    speechQueueRef.current = [];
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsTtsPlaying(false);
    setIsTtsPaused(false);
    setCurrentReadingSection(null);
    setCurrentReadingTitle(null);
    announce('Leitura em voz alta interrompida.');
  }, [announce]);

  const pauseSpeech = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
      setIsTtsPaused(true);
      setIsTtsPlaying(false);
      announce('Leitura em voz alta pausada.');
    }
  }, [announce]);

  const resumeSpeech = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
      setIsTtsPaused(false);
      setIsTtsPlaying(true);
      announce('Retomando leitura em voz alta.');
    }
  }, [announce]);

  // TTS Engine: split text into paragraphs for browser speech synthesis reliability
  const speakSection = useCallback(
    (sectionId: string, title: string, fullText: string) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        announce('Seu navegador não oferece suporte à síntese de voz.');
        return;
      }

      // If already playing this section, toggle pause/play
      if (currentReadingSection === sectionId && isTtsPlaying) {
        pauseSpeech();
        return;
      }
      if (currentReadingSection === sectionId && isTtsPaused) {
        resumeSpeech();
        return;
      }

      // Cancel previous playback
      window.speechSynthesis.cancel();
      isCanceledRef.current = false;

      // Clean up text chunks (split by paragraphs or double newlines)
      const rawParagraphs = fullText
        .split(/\n\n+/)
        .map((p) => p.replace(/[#*`_>]/g, '').trim())
        .filter((p) => p.length > 0);

      // Prepend title so it's announced first
      const chunks = [`Iniciando leitura da seção: ${title}.`, ...rawParagraphs];
      speechQueueRef.current = chunks;

      setCurrentReadingSection(sectionId);
      setCurrentReadingTitle(title);
      setIsTtsPlaying(true);
      setIsTtsPaused(false);

      // Focus / scroll smoothly into section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      announce(`Iniciando leitura em voz alta de: ${title}`);

      // Find Portuguese voice
      const voices = window.speechSynthesis.getVoices();
      const ptVoice =
        voices.find((v) => v.lang.startsWith('pt-BR')) ||
        voices.find((v) => v.lang.startsWith('pt')) ||
        null;

      const playNextChunk = (index: number) => {
        if (isCanceledRef.current) return;
        if (index >= chunks.length) {
          setIsTtsPlaying(false);
          setIsTtsPaused(false);
          setCurrentReadingSection(null);
          setCurrentReadingTitle(null);
          announce(`Leitura de ${title} concluída.`);
          return;
        }

        const chunk = chunks[index];
        if (!chunk) return;

        const utterance = new SpeechSynthesisUtterance(chunk);
        if (ptVoice) utterance.voice = ptVoice;
        utterance.lang = 'pt-BR';
        utterance.rate = ttsRate;

        utterance.onend = () => {
          if (!isCanceledRef.current) {
            playNextChunk(index + 1);
          }
        };

        utterance.onerror = (e) => {
          // If canceled externally, ignore
          if (e.error === 'canceled' || e.error === 'interrupted') return;
          console.error('Speech synthesis error:', e);
          if (!isCanceledRef.current) {
            playNextChunk(index + 1);
          }
        };

        window.speechSynthesis.speak(utterance);
      };

      playNextChunk(0);
    },
    [
      currentReadingSection,
      isTtsPlaying,
      isTtsPaused,
      pauseSpeech,
      resumeSpeech,
      announce,
      ttsRate,
    ]
  );

  // Stop speech when page unmounts or reloads
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const fontScale = FONT_SCALES[scaleIndex] ?? 1.0;
  const fontScalePercent = Math.round(fontScale * 100);

  return (
    <AccessibilityContext.Provider
      value={{
        contrastMode,
        toggleContrast,
        fontScale,
        fontScalePercent,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        announcement,
        announce,
        isTtsSupported,
        isTtsPlaying,
        isTtsPaused,
        currentReadingSection,
        currentReadingTitle,
        ttsRate,
        setTtsRate,
        speakSection,
        pauseSpeech,
        resumeSpeech,
        stopSpeech,
        isTocOpen,
        setIsTocOpen,
        activeSectionId,
        setActiveSectionId,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      'useAccessibility must be used within an AccessibilityProvider'
    );
  }
  return context;
}
