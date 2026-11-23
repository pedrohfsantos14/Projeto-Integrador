'use client';

import React from 'react';
import { ArrowUp, ShieldCheck, Heart, ExternalLink, Award } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const topElement = document.getElementById('topo');
    if (topElement) {
      topElement.focus();
    }
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Rodapé institucional"
      className="bg-slate-950 text-white border-t-4 border-blue-700 dark:border-yellow-400 mt-20 pt-12 pb-16 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800">
          {/* Column 1: Institutional Project */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-lg bg-blue-700 dark:bg-yellow-400 text-white dark:text-slate-950 flex items-center justify-center font-bold"
                aria-hidden="true"
              >
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                Conectando com Segurança
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Guia Prático de Inclusão Digital, Acessibilidade e Proteção de Dados para Pessoas com Deficiência Visual.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <Award className="w-4 h-4 text-yellow-400" aria-hidden="true" />
              <span>Projeto Integrador de Acessibilidade</span>
            </div>
          </div>

          {/* Column 2: ILBES Institution */}
          <div className="space-y-3">
            <h3 className="font-bold text-white text-base">
              Instituto Luiz Braille do Espírito Santo (ILBES)
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Entidade filantrópica de referência na habilitação, reabilitação, educação especial e promoção da cidadania de pessoas com deficiência visual.
            </p>
            <p className="text-xs text-slate-500">
              Vitória — Espírito Santo • Brasil
            </p>
          </div>

          {/* Column 3: Accessibility & Standards */}
          <div className="space-y-3">
            <h3 className="font-bold text-white text-base">
              Compromisso com a Acessibilidade
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Desenvolvido seguindo as diretrizes internacionais <strong>WCAG 2.1 (nível AAA)</strong>, garantindo navegação por leitor de tela, atalhos de teclado, alto contraste e síntese de voz nativa.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-400 font-mono">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">HTML Semântico</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">WAI-ARIA</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Web Speech API</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Back to Top & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            Projeto Integrador • Conteúdo original baseado no guia informativo do ILBES. Licença aberta para fins educacionais e de inclusão social.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao início do topo da página"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-xl text-sm transition-all focus-visible:outline-2 focus-visible:outline-white shrink-0 shadow-xs"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
