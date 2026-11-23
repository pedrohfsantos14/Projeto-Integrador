'use client';

import React from 'react';
import { SCREEN_READERS, AI_VISION_TOOLS } from '@/data/contentData';
import {
  Monitor,
  Smartphone,
  Eye,
  AlertCircle,
  ExternalLink,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

export function ToolsGrid() {
  return (
    <div className="my-8 space-y-10">
      {/* 1. Leitores de Tela */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Monitor className="w-6 h-6 text-blue-700 dark:text-yellow-400" aria-hidden="true" />
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            Principais Leitores de Tela
          </h3>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base mb-6 max-w-3xl leading-relaxed">
          Essas ferramentas fundamentais verbalizam todas as informações da tela por meio de voz sintetizada ou exibição em linha braille, assegurando navegação independente em computadores e dispositivos móveis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SCREEN_READERS.map((tool, idx) => (
            <div
              key={idx}
              data-card="true"
              className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs hover:border-blue-400 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-900 dark:bg-yellow-950 dark:text-yellow-300 dark:border dark:border-yellow-500">
                    {tool.badge}
                  </span>
                  <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                    {tool.platform}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {tool.name}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400">
                <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  Gratuito / Integrado
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Aplicativos com IA e Visão Computacional */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Eye className="w-6 h-6 text-purple-700 dark:text-yellow-400" aria-hidden="true" />
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            Aplicativos com Inteligência Artificial e Reconhecimento Visual
          </h3>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base mb-6 max-w-3xl leading-relaxed">
          Aplicativos modernos que transformam a câmera do celular em uma extensão sensorial, descrevendo ambientes, lendo documentos impressos e identificando objetos em tempo real.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {AI_VISION_TOOLS.map((tool, idx) => (
            <div
              key={idx}
              data-card="true"
              className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs hover:border-purple-400 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-purple-100 text-purple-900 dark:bg-yellow-950 dark:text-yellow-300 dark:border dark:border-yellow-500">
                    {tool.badge}
                  </span>
                  <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                    {tool.platform}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {tool.name}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold">
                <span className="inline-flex items-center gap-1 text-purple-700 dark:text-yellow-400 font-bold">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  Visão Computacional
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  {tool.isFree ? 'Recursos Gratuitos' : 'Freemium / Assinatura'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Critical Caution Notice */}
      <div
        role="alert"
        className="alert-box bg-amber-50 dark:bg-slate-950 border-l-4 border-amber-600 dark:border-yellow-400 p-5 rounded-r-xl shadow-xs"
      >
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-amber-700 dark:text-yellow-400 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h4 className="text-base font-bold text-amber-950 dark:text-yellow-300 mb-1">
              Atenção com a Precisão da Inteligência Artificial:
            </h4>
            <p className="text-sm text-amber-900 dark:text-slate-200 leading-relaxed font-medium">
              Essas ferramentas podem ampliar consideravelmente a autonomia dos usuários, mas é fundamental lembrar que seus resultados podem conter erros ou alucinações. Por esse motivo, informações críticas e sensíveis — como números de contas bancárias, valores de transferências, dosagens de remédios e documentos oficiais — devem sempre ser verificadas com cautela.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
