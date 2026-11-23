'use client';

import React from 'react';
import { LEGISLATION_ITEMS } from '@/data/contentData';
import { Scale, BookCheck, Shield, FileText } from 'lucide-react';

export function LegislationSection() {
  return (
    <div className="my-8">
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border-2 border-blue-500 dark:border-yellow-400 shadow-md">
        {/* Header box */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-700 dark:bg-yellow-400 dark:text-slate-950 rounded-xl" aria-hidden="true">
              <Scale className="w-7 h-7 text-white dark:text-slate-950" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300 dark:text-yellow-400">
                Marco Legal Brasileiro
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Legislação, Direitos e Cidadania
              </h3>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800 text-slate-200 border border-slate-700 rounded-lg text-xs font-semibold">
            <Shield className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            <span>Garantias Fundamentais</span>
          </div>
        </div>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
          A inclusão digital e a proteção de dados não são favores ou cortesias corporativas:{' '}
          <strong className="text-white font-bold">
            são direitos expressamente estabelecidos na legislação brasileira
          </strong>
          . Órgãos públicos, bancos e empresas privadas têm o dever legal de oferecer ambientes acessíveis e seguros.
        </p>

        {/* Cards of Laws */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LEGISLATION_ITEMS.map((item, index) => (
            <div
              key={index}
              data-card="true"
              className="bg-slate-800/80 rounded-xl p-5 border border-slate-700 dark:border-yellow-400/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-blue-400 dark:text-yellow-400">
                    {item.law}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 font-bold">
                    {item.article}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {item.summary}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.fullText}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-xs text-slate-400">
                <BookCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                <span>Norma Federal em Vigor</span>
              </div>
            </div>
          ))}
        </div>

        {/* Procon / CDC Note */}
        <div className="mt-6 p-4 rounded-xl bg-slate-800 border border-slate-700 flex items-start gap-3">
          <FileText className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-slate-300 leading-relaxed">
            <strong className="text-white">Defesa do Consumidor:</strong> Em casos de fraudes bancárias, contratação de serviços não autorizados ou ausência de acessibilidade digital, o consumidor com deficiência visual pode e deve registrar reclamação formal junto ao <strong className="text-white">Procon</strong> ou recorrer ao Poder Judiciário com apoio da Defensoria Pública.
          </p>
        </div>
      </div>
    </div>
  );
}
