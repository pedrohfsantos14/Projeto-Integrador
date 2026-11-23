'use client';

import React from 'react';
import {
  BookOpen,
  Volume2,
  ShieldCheck,
  Award,
  Layers,
  ArrowDown,
  Sparkles,
} from 'lucide-react';
import { useAccessibility } from '@/context/AccessibilityContext';

export function Hero() {
  const { speakSection, isTtsSupported } = useAccessibility();

  const handleListenIntro = () => {
    const introText =
      'Conectando com Segurança: Inclusão Digital, Acessibilidade e Proteção de Dados para Pessoas com Deficiência Visual no ILBES. A inclusão digital é fundamental para garantir que todas as pessoas tenham acesso à informação, à comunicação e aos serviços disponíveis na sociedade. Para as pessoas com deficiência visual, a tecnologia representa uma importante ferramenta de autonomia e participação social. Este guia apresenta orientações práticas para prevenir fraudes, proteger informações pessoais e utilizar recursos de tecnologia assistiva.';
    speakSection(
      'secao-introducao',
      '1. Introdução ao Guia Conectando com Segurança',
      introText
    );
  };

  return (
    <section
      id="topo"
      aria-labelledby="titulo-principal"
      className="bg-linear-to-b from-blue-50 via-white to-slate-50 dark:from-slate-950 dark:via-black dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 py-12 md:py-16 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Project Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 dark:bg-yellow-950 dark:text-yellow-300 dark:border dark:border-yellow-500 font-semibold text-xs sm:text-sm mb-6 shadow-2xs">
          <Award className="w-4 h-4 text-blue-700 dark:text-yellow-400" aria-hidden="true" />
          <span>Projeto Integrador • Instituto Luiz Braille do Espírito Santo (ILBES)</span>
        </div>

        {/* Main H1 Title (single H1 for strict hierarchy) */}
        <h1
          id="titulo-principal"
          className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight mb-6"
        >
          Conectando com Segurança:{' '}
          <span className="text-blue-700 dark:text-yellow-400 block mt-2">
            Inclusão Digital, Acessibilidade e Proteção de Dados para Pessoas com Deficiência Visual
          </span>
        </h1>

        {/* Subtitle / Project Context */}
        <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-normal leading-relaxed max-w-3xl mb-8">
          Um guia prático e inclusivo desenvolvido para capacitar pessoas cegas ou com baixa visão no uso seguro da tecnologia, prevenindo fraudes digitais, protegendo dados pessoais e explorando o potencial dos leitores de tela e da inteligência artificial.
        </p>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <a
            href="#secao-introducao"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all focus-visible:ring-4 focus-visible:ring-blue-300 text-base"
          >
            <BookOpen className="w-5 h-5" aria-hidden="true" />
            <span>Iniciar Leitura</span>
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </a>

          <a
            href="#sumario-navegacao"
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-bold rounded-xl border-2 border-slate-300 dark:border-slate-700 transition-all text-base"
          >
            <Layers className="w-5 h-5 text-blue-600 dark:text-yellow-400" aria-hidden="true" />
            <span>Navegar pelo Sumário</span>
          </a>

          {isTtsSupported && (
            <button
              onClick={handleListenIntro}
              aria-label="Ouvir a introdução do guia em voz alta"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-all shadow-sm text-base focus-visible:ring-4 focus-visible:ring-emerald-300"
            >
              <Volume2 className="w-5 h-5" aria-hidden="true" />
              <span>Ouvir Introdução</span>
            </button>
          )}
        </div>

        {/* Feature Badges / Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="block text-2xl font-black text-blue-700 dark:text-yellow-400">11</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">Capítulos Completos</span>
          </div>
          <div className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="block text-2xl font-black text-emerald-600 dark:text-yellow-400">100%</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">WCAG 2.1 Acessível</span>
          </div>
          <div className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="block text-2xl font-black text-purple-600 dark:text-yellow-400">IA + Voz</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">Text-to-Speech Nativo</span>
          </div>
          <div className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="block text-2xl font-black text-amber-600 dark:text-yellow-400">Leis</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">LBI, LGPD e CDC</span>
          </div>
        </div>
      </div>
    </section>
  );
}
