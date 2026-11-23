# Conectando com Segurança - ILBES

Página web moderna, responsiva e de alta acessibilidade (compatível com as diretrizes **WCAG 2.1 nível AA/AAA**) desenvolvida para o projeto:
> **"Conectando com Segurança: Inclusão Digital, Acessibilidade e Proteção de Dados para Pessoas com Deficiência Visual no ILBES"**

---

## ♿ Recursos de Acessibilidade Implementados

1. **HTML Semântico Rigoroso**:
   - Estrutura hierárquica respeitada: apenas um `<h1>` para o título principal da página, `<h2>` para cada um dos 11 capítulos e `<h3>`/`<h4>` para subtópicos e cards.
   - Tags estruturais corretas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).

2. **Navegação por Teclado e Leitores de Tela**:
   - **Skip Links** no topo da página: *Pular para o conteúdo principal* e *Pular para o sumário de capítulos*.
   - Estados de foco claros e evidentes com anel duplo de alto contraste (`:focus-visible`).
   - Atributos ARIA adequados (`aria-label`, `aria-expanded`, `aria-current`, `aria-live`, `aria-modal`).
   - Região viva com `aria-live="polite"` que verbaliza alterações de estado (modo de contraste, ajuste de fonte, início/fim de áudio).

3. **Barra de Ferramentas de Acessibilidade (Topo)**:
   - **Modo de Alto Contraste**: Inversão para fundo preto puro com texto amarelo/branco de alto contraste e bordas destacadas, persistido no navegador via `localStorage`.
   - **Ajuste de Fonte Relativo**: Controles de Aumentar (A+), Diminuir (A-) e Redefinir (100%), utilizando unidades relativas (`rem`) e CSS variables.
   - **Leitura em Voz Alta (Text-to-Speech)**: Integração com a Web Speech API nativa do navegador, permitindo ouvir o guia completo ou cada capítulo individualmente com voz em Português do Brasil (`pt-BR`), além de barra de reprodução com controle de velocidade (1.0x, 1.25x, 1.5x) e destaque da seção lida.

4. **Legibilidade e Conforto Visual**:
   - Tipografia limpa sem serifa (`system-ui` / `Inter`).
   - Espaçamento entre linhas superior a `1.65` (`leading-relaxed`).
   - Largura máxima de leitura limitada a `70ch` para evitar fadiga ocular e facilitar o acompanhamento em leitores de baixa visão com ampliação.

5. **Estrutura do Conteúdo (`content.md`)**:
   - **Hero Section**: Apresentação institucional, métricas e atalhos rápidos.
   - **Sumário Navegável (TOC)**: Menu lateral fixo no desktop com detecção automática do capítulo visível (*scroll spy*) e menu gaveta responsivo para dispositivos móveis.
   - **Cards Escaneáveis**: Golpes virtuais comuns, medidas de segurança no Pix e boas práticas de senhas.
   - **Seção 7 (Tecnologias Assistivas)**: Catálogo com cards dos principais leitores de tela (NVDA, TalkBack, VoiceOver, Orca, DOSVOX) e aplicativos de IA/visão computacional (Seeing AI, Be My Eyes, Envision AI, Lookout).
   - **Seção 9 (Legislação)**: Caixa institucional destacando a Lei Brasileira de Inclusão (LBI - Arts. 63, 65 e 67), LGPD (Art. 9º, § 6º) e Código de Defesa do Consumidor.
   - **Seção 10 (PARE, CONFIRA, PROTEJA)**: Bloco de alerta em 3 colunas visualmente distintas com ícones e orientações imediatas contra golpes.
   - **Rodapé Institucional**: Informações sobre o ILBES, declaração de acessibilidade e botão "Voltar ao topo" com restauração de foco.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Bun](https://bun.sh/) ou [Node.js](https://nodejs.org/) (versão 18+)

### Instalação e Execução
```bash
# Instalar dependências (caso necessário)
bun install
# ou: npm install

# Executar em modo de desenvolvimento
bun run dev
# ou: npm run dev

# Gerar build de produção
bun run build
# ou: npm run build

# Iniciar servidor de produção
bun run start
# ou: npm run start
```

O aplicativo estará acessível em: `http://localhost:3000`.
