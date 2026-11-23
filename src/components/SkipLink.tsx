'use client';

import React from 'react';

export function SkipLink() {
  return (
    <div className="relative">
      <a
        href="#conteudo-principal"
        className="skip-link focus:outline-none"
      >
        Pular para o conteúdo principal
      </a>
      <a
        href="#sumario-navegacao"
        className="skip-link !left-72 focus:outline-none"
      >
        Pular para o sumário de capítulos
      </a>
    </div>
  );
}
