export interface ChapterItem {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  description: string;
}

export interface AssistiveTool {
  name: string;
  platform: string;
  description: string;
  badge: string;
  isFree: boolean;
}

export interface LawArticle {
  article: string;
  law: string;
  summary: string;
  fullText: string;
}

export const CHAPTERS: ChapterItem[] = [
  {
    id: "introducao",
    number: 1,
    title: "1. Introdução",
    shortTitle: "Introdução",
    description: "Inclusão digital, autonomia social e os objetivos do projeto ILBES."
  },
  {
    id: "golpes-virtuais",
    number: 2,
    title: "2. Principais golpes virtuais e formas de prevenção",
    shortTitle: "Golpes Virtuais",
    description: "Phishing, falsas promoções, falsos atendentes e táticas de manipulação."
  },
  {
    id: "whatsapp-ia",
    number: 3,
    title: "3. Golpes pelo WhatsApp e o uso de inteligência artificial",
    shortTitle: "WhatsApp e IA",
    description: "Golpe do falso parente, clonagem de voz por IA e como se proteger."
  },
  {
    id: "seguranca-bancaria-pix",
    number: 4,
    title: "4. Segurança bancária e proteção nas transações via Pix",
    shortTitle: "Bancos e Pix",
    description: "Cuidados essenciais no Pix, falsas centrais e o Mecanismo Especial de Devolução (MED)."
  },
  {
    id: "criacao-senhas",
    number: 5,
    title: "5. Criação e proteção de senhas",
    shortTitle: "Senhas Seguras",
    description: "Boas práticas para criar senhas fortes e autenticação em dois fatores (2FA)."
  },
  {
    id: "protecao-dados-lgpd",
    number: 6,
    title: "6. Proteção de dados pessoais e privacidade",
    shortTitle: "Dados e LGPD",
    description: "O que são dados pessoais, a LGPD e o direito à informação em formato acessível."
  },
  {
    id: "acessibilidade-tecnologias-assistivas",
    number: 7,
    title: "7. Acessibilidade digital e tecnologias assistivas",
    shortTitle: "Tecnologias Assistivas",
    description: "Leitores de tela (NVDA, TalkBack, VoiceOver) e aplicativos com inteligência artificial."
  },
  {
    id: "riscos-ia-acessibilidade",
    number: 8,
    title: "8. Riscos relacionados ao uso de IA e aplicativos de acessibilidade",
    shortTitle: "Riscos da IA",
    description: "Privacidade de imagens/documentos, servidores externos e acessibilidade bancária."
  },
  {
    id: "direitos-legislacao",
    number: 9,
    title: "9. Direitos das pessoas com deficiência e legislação brasileira",
    shortTitle: "Direitos e Leis",
    description: "Lei Brasileira de Inclusão (LBI), LGPD, Código de Defesa do Consumidor e Procon."
  },
  {
    id: "orientacoes-praticas",
    number: 10,
    title: "10. Orientações práticas: como agir diante de uma possível tentativa de golpe",
    shortTitle: "PARE, CONFIRA, PROTEJA",
    description: "Método de três passos para interromper fraudes e agir com segurança."
  },
  {
    id: "consideracoes-finais",
    number: 11,
    title: "11. Considerações finais",
    shortTitle: "Considerações Finais",
    description: "A inclusão digital como direito fundamental e o compromisso do projeto ILBES."
  }
];

export const SCREEN_READERS: AssistiveTool[] = [
  {
    name: "NVDA (NonVisual Desktop Access)",
    platform: "Windows",
    badge: "Computador",
    description: "Leitor de tela gratuito e de código aberto amplamente utilizado no mundo para computadores com sistema operacional Windows. Possui suporte a navegação por teclas rápidas e sínteses de voz variadas.",
    isFree: true
  },
  {
    name: "TalkBack",
    platform: "Android",
    badge: "Mobile",
    description: "Recurso nativo de acessibilidade do sistema Android que fornece retorno por voz e resposta háptica (vibração), permitindo navegar por menus, ler notificações e controlar o celular por gestos.",
    isFree: true
  },
  {
    name: "VoiceOver",
    platform: "Apple (iOS, iPadOS, macOS, watchOS)",
    badge: "Apple Ecosystem",
    description: "Leitor de tela integrado aos aparelhos da Apple (iPhone, iPad, Mac). Fornece descrição audível de tudo o que está na tela e suporte completo a gestos na tela sensível ao toque ou atalhos de teclado.",
    isFree: true
  },
  {
    name: "Orca",
    platform: "Linux",
    badge: "Código Aberto",
    description: "Leitor de tela flexível e gratuito para sistemas operacionais baseados em Linux e Unix, integrado ao ambiente gráfico GNOME com suporte a síntese de voz e displays braille.",
    isFree: true
  },
  {
    name: "DOSVOX",
    platform: "Windows / Multiplataforma",
    badge: "Pioneiro no Brasil",
    description: "Sistema computacional desenvolvido no Brasil pelo NCE/UFRJ para facilitar o acesso de pessoas com deficiência visual ao computador, oferecendo interação completa por síntese de voz em português.",
    isFree: true
  }
];

export const AI_VISION_TOOLS: AssistiveTool[] = [
  {
    name: "Seeing AI",
    platform: "iOS e Android",
    badge: "Reconhecimento Visual",
    description: "Aplicativo da Microsoft que utiliza inteligência artificial para descrever textos curtos, ler documentos impressos, identificar produtos por código de barras, cédulas de dinheiro e descrever pessoas e ambientes.",
    isFree: true
  },
  {
    name: "Be My Eyes",
    platform: "iOS e Android",
    badge: "Comunidade + IA",
    description: "Plataforma global que conecta pessoas cegas ou com baixa visão a voluntários videntes via vídeo ao vivo, além de contar com o recurso 'Be My AI' (assistente virtual com visão computacional para descrever imagens em detalhes).",
    isFree: true
  },
  {
    name: "Envision AI",
    platform: "iOS e Android / Envision Glasses",
    badge: "OCR e Reconhecimento",
    description: "Ferramenta avançada que utiliza reconhecimento de imagem e leitura óptica de caracteres (OCR) para ler textos em mais de 60 idiomas, identificar cores, escanear códigos de barras e reconhecer rostos salvos.",
    isFree: false
  },
  {
    name: "Lookout do Google",
    platform: "Android",
    badge: "Visão Computacional",
    description: "Aplicativo do Google que utiliza a câmera do dispositivo móvel para ajudar no dia a dia: leitura rápida de rótulos de alimentos, identificação de cédulas, leitura de documentos e descrição de objetos ao redor.",
    isFree: true
  }
];

export const LEGISLATION_ITEMS: LawArticle[] = [
  {
    law: "Lei Brasileira de Inclusão (LBI) - Lei nº 13.146/2015",
    article: "Artigo 63",
    summary: "Obrigatoriedade de acessibilidade em sítios da internet",
    fullText: "Determina a obrigatoriedade de acessibilidade nos sítios da internet mantidos por empresas com sede ou representação comercial no Brasil e por órgãos de governo, garantindo que pessoas com deficiência tenham pleno acesso à informação."
  },
  {
    law: "Lei Brasileira de Inclusão (LBI) - Lei nº 13.146/2015",
    article: "Artigo 65",
    summary: "Acesso a serviços de telecomunicações",
    fullText: "Trata do acesso das pessoas com deficiência aos serviços de telecomunicações, exigindo das operadoras e prestadoras condições técnicas e tarifárias para fruição autônoma dos serviços."
  },
  {
    law: "Lei Brasileira de Inclusão (LBI) - Lei nº 13.146/2015",
    article: "Artigo 67",
    summary: "Recursos de acessibilidade na radiodifusão",
    fullText: "Estabelece requisitos de acessibilidade nos serviços de radiodifusão de sons e imagens, incluindo recursos fundamentais como audiodescrição, janela com intérprete de Libras e legenda oculta (closed caption)."
  },
  {
    law: "Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018",
    article: "Artigo 9º, § 6º",
    summary: "Acessibilidade e transparência no tratamento de dados",
    fullText: "Prevê expressamente que as informações sobre o tratamento de dados pessoais devem considerar as características físico-motoras, perceptivas, sensoriais, intelectuais e mentais do titular, assegurando formatos acessíveis e linguagem clara."
  },
  {
    law: "Código de Defesa do Consumidor (CDC) - Lei nº 8.078/1990",
    article: "Artigos 6º e 39",
    summary: "Direito à informação clara e proteção contra práticas abusivas",
    fullText: "Assegura ao consumidor a proteção contra fraudes, publicidade enganosa e práticas abusivas, garantindo o direito à informação adequada e clara sobre produtos e serviços, com suporte ativo dos órgãos de proteção como o Procon."
  }
];
