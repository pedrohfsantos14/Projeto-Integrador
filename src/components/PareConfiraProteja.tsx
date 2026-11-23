'use client';

import React from 'react';
import {
  AlertTriangle,
  Search,
  ShieldCheck,
  PhoneOff,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

export function PareConfiraProteja() {
  return (
    <div className="my-8">
      <div className="bg-amber-50 dark:bg-slate-950 border-2 border-amber-300 dark:border-yellow-400 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-200 text-amber-950 dark:bg-yellow-400 dark:text-slate-950 font-black text-xs uppercase tracking-wider rounded-full mb-3">
            Método de Segurança ILBES
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white">
            Três Atitudes Simples para Não Cair em Golpes
          </h3>
          <p className="text-slate-700 dark:text-slate-300 text-base mt-2">
            A prevenção é a forma mais eficaz de proteger seu patrimônio e sua privacidade. Em qualquer situação suspeita, aplique a regra dos três passos:
          </p>
        </div>

        {/* 3 Columns / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CARD 1: PARE */}
          <div
            data-card="true"
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-amber-400 dark:border-yellow-400 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-100 text-amber-950 dark:bg-yellow-400 dark:text-black">
                  Passo 1
                </span>
                <div
                  className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold"
                  aria-hidden="true"
                >
                  <AlertTriangle className="w-7 h-7" />
                </div>
              </div>
              <h4 className="text-2xl font-black text-amber-950 dark:text-yellow-300 mb-3">
                1. PARE
              </h4>
              <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                Não tome decisões sob pressão. Desconfie de mensagens que exigem urgência imediata, ameaçam bloqueio de contas, solicitam transferências financeiras para emergências ou prometem prêmios milagrosos.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-amber-200 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-yellow-400">
              <XCircle className="w-4 h-4 shrink-0 text-amber-600 dark:text-yellow-400" aria-hidden="true" />
              <span>Nunca aja por impulso!</span>
            </div>
          </div>

          {/* CARD 2: CONFIRA */}
          <div
            data-card="true"
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-blue-400 dark:border-yellow-400 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-100 text-blue-950 dark:bg-yellow-400 dark:text-black">
                  Passo 2
                </span>
                <div
                  className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold"
                  aria-hidden="true"
                >
                  <Search className="w-7 h-7" />
                </div>
              </div>
              <h4 className="text-2xl font-black text-blue-950 dark:text-yellow-300 mb-3">
                2. CONFIRA
              </h4>
              <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                Verifique a identidade de quem entrou em contato. Não confie apenas em áudios ou fotos. Ligue para o familiar em um número antigo conhecido ou contate a instituição bancária através do número impresso no verso do seu cartão.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-blue-200 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-blue-900 dark:text-yellow-400">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-blue-600 dark:text-yellow-400" aria-hidden="true" />
              <span>Use sempre outro canal oficial</span>
            </div>
          </div>

          {/* CARD 3: PROTEJA */}
          <div
            data-card="true"
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-emerald-500 dark:border-yellow-400 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-950 dark:bg-yellow-400 dark:text-black">
                  Passo 3
                </span>
                <div
                  className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold"
                  aria-hidden="true"
                >
                  <ShieldCheck className="w-7 h-7" />
                </div>
              </div>
              <h4 className="text-2xl font-black text-emerald-950 dark:text-yellow-300 mb-3">
                3. PROTEJA
              </h4>
              <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                Nunca compartilhe senhas, códigos recebidos por SMS, WhatsApp ou e-mail. Não instale aplicativos a pedido de desconhecidos nem permita acesso remoto ao seu celular ou computador.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-emerald-200 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-emerald-900 dark:text-yellow-400">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-yellow-400" aria-hidden="true" />
              <span>Senhas são pessoais e intransferíveis</span>
            </div>
          </div>
        </div>

        {/* Immediate Action Banner */}
        <div className="mt-8 bg-slate-900 text-white rounded-xl p-5 border-2 border-slate-700 dark:border-yellow-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-600 rounded-lg text-white shrink-0" aria-hidden="true">
              <PhoneOff className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Suspeita de golpe em andamento?
              </h4>
              <p className="text-sm text-slate-300 font-medium">
                Interrompa o contato imediatamente, não realize nenhum pagamento ou transferência e procure atendimento diretamente no canal oficial da empresa ou banco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
