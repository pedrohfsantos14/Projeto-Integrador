'use client';

import React from 'react';
import { SectionHeader } from './SectionHeader';
import { ToolsGrid } from './ToolsGrid';
import { LegislationSection } from './LegislationSection';
import { PareConfiraProteja } from './PareConfiraProteja';
import {
  ShieldAlert,
  Smartphone,
  CreditCard,
  KeyRound,
  Lock,
  Eye,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  FileText,
  Building,
  UserCheck,
  Brain,
  Lightbulb,
  Info,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export function ContentSections() {
  return (
    <div className="space-y-16">
      {/* =========================================================================
          CAPÍTULO 1: INTRODUÇÃO
         ========================================================================= */}
      <section
        id="secao-introducao"
        aria-labelledby="titulo-introducao"
        className="scroll-mt-28 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs"
      >
        <SectionHeader
          id="secao-introducao"
          number={1}
          title="Introdução"
          fullTextToRead={`1. Introdução. A inclusão digital é fundamental para garantir que todas as pessoas tenham acesso à informação, à comunicação e aos serviços disponíveis na sociedade. Para as pessoas com deficiência visual, a tecnologia representa uma importante ferramenta de autonomia e participação social, possibilitando o acesso a aplicativos, redes sociais, serviços bancários, plataformas educacionais e diversos outros recursos. Entretanto, o uso dessas tecnologias também apresenta desafios. A falta de acessibilidade em aplicativos e sites, somada ao aumento de golpes virtuais e à exposição indevida de dados pessoais, pode colocar esse público em situações de vulnerabilidade. Diante desse cenário, o projeto Conectando com Segurança: Inclusão Digital, Acessibilidade e Proteção de Dados para Pessoas com Deficiência Visual no ILBES busca promover a conscientização sobre o uso seguro e acessível da internet, apresentando orientações práticas para prevenir fraudes, proteger informações pessoais e utilizar recursos de tecnologia assistiva.`}
        />

        <div className="reading-measure space-y-4 text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
          <p>
            A <strong className="font-bold text-slate-950 dark:text-white">inclusão digital</strong> é fundamental para garantir que todas as pessoas tenham acesso irrestrito à informação, à comunicação e aos serviços essenciais disponíveis na sociedade moderna.
          </p>
          <p>
            Para as pessoas com deficiência visual, a tecnologia representa uma importante ferramenta de <strong>autonomia e participação social</strong>, possibilitando o acesso independente a aplicativos, redes sociais, serviços bancários digitais, plataformas educacionais e de trabalho.
          </p>
          <p>
            Entretanto, o uso cotidiano dessas tecnologias também apresenta desafios consideráveis. A persistente <strong>falta de acessibilidade</strong> em muitos aplicativos e sites governamentais e comerciais, somada ao aumento vertiginoso de <strong>golpes virtuais</strong> e à exposição indevida de dados pessoais, pode colocar esse público em situações de vulnerabilidade e risco financeiro.
          </p>
        </div>

        {/* Institutional Mission Callout */}
        <div className="mt-6 p-5 rounded-xl bg-blue-50 dark:bg-slate-900 border-l-4 border-blue-700 dark:border-yellow-400">
          <div className="flex items-start gap-3">
            <Building className="w-6 h-6 text-blue-700 dark:text-yellow-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="text-base font-bold text-blue-950 dark:text-yellow-300 mb-1">
                O Projeto no ILBES (Instituto Luiz Braille do Espírito Santo)
              </h3>
              <p className="text-sm sm:text-base text-blue-900 dark:text-slate-200 leading-relaxed">
                O projeto <strong>&ldquo;Conectando com Segurança: Inclusão Digital, Acessibilidade e Proteção de Dados para Pessoas com Deficiência Visual no ILBES&rdquo;</strong> foi concebido para promover a conscientização e a soberania digital, apresentando orientações claras para prevenir fraudes, proteger dados sensíveis e tirar o melhor proveito dos recursos de tecnologia assistiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAPÍTULO 2: PRINCIPAIS GOLPES VIRTUAIS
         ========================================================================= */}
      <section
        id="secao-golpes-virtuais"
        aria-labelledby="titulo-golpes-virtuais"
        className="scroll-mt-28 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs"
      >
        <SectionHeader
          id="secao-golpes-virtuais"
          number={2}
          title="Principais golpes virtuais e formas de prevenção"
          fullTextToRead={`2. Principais golpes virtuais e formas de prevenção. Os golpes virtuais são práticas criminosas realizadas por meio da internet, aplicativos de mensagens, redes sociais, ligações telefônicas e outros canais digitais. Muitas dessas fraudes utilizam estratégias de manipulação psicológica para convencer a vítima a fornecer informações pessoais, compartilhar códigos de segurança ou realizar transferências financeiras. Entre os golpes mais comuns estão: Phishing, com o envio de links falsos imitando instituições conhecidas; Falsas promoções e premiações; Falsos atendentes de bancos; e Falsas cobranças com boletos fraudulentos. Dica de prevenção: Desconfie de mensagens inesperadas, não clique em links desconhecidos e nunca compartilhe senhas ou códigos de autenticação. Sempre que houver dúvida, procure diretamente os canais oficiais da instituição envolvida.`}
        />

        <div className="reading-measure mb-6 text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed">
          <p>
            Os golpes virtuais são práticas criminosas realizadas por meio da internet, aplicativos de mensagens instantâneas, redes sociais, ligações telefônicas e outros canais digitais.
          </p>
          <p className="mt-3">
            Muitas dessas fraudes utilizam estratégias de <strong>engenharia social e manipulação psicológica</strong> (criando falso senso de urgência, medo de bloqueio de contas ou promessas irresistíveis de ganhos financeiros) para convencer a vítima a fornecer informações pessoais, compartilhar códigos de segurança ou realizar transferências monetárias imediatas.
          </p>
        </div>

        {/* 4 Cards of Common Scams */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div data-card="true" className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-100 text-red-900 dark:bg-red-950 dark:text-red-300 border border-red-200 dark:border-red-800">
                Ameaça Comum
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Phishing (Mensagens e Links Falsos)
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Consiste no envio de mensagens por e-mail, SMS ou redes sociais contendo links que imitam perfeitamente páginas de instituições conhecidas (como bancos, correios, lojas e órgãos públicos). O objetivo é induzir a vítima a digitar senhas, dados de cartão ou CPF em um site clonado.
            </p>
          </div>

          <div data-card="true" className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                Engenharia Social
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Falsas Promoções e Premiações
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Mensagens que prometem brindes, sorteios, descontos inacreditáveis ou benefícios sociais em troca do preenchimento de cadastros, pagamento prévio de taxas ou compartilhamento com grupos de amigos.
            </p>
          </div>

          <div data-card="true" className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                Falsa Autoridade
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Falsos Atendentes (Falsa Central)
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Criminosos ligam ou mandam mensagens fingindo ser funcionários de agências bancárias ou operadoras. Alegam compras suspeitas na conta e induzem a vítima a &ldquo;cancelar a transação&rdquo;, quando na verdade estão fazendo uma transferência ou instalando aplicativos espiões.
            </p>
          </div>

          <div data-card="true" className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-900 dark:bg-purple-950 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                Falso Alerta
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Falsas Cobranças e Boletos Falsificados
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Mensagens e e-mails contendo faturas adulteradas, dívidas prescritas ou taxas inexistentes com ameaça de negativação no SPC/Serasa, utilizando o medo e a urgência para que o boleto seja pago sem conferência.
            </p>
          </div>
        </div>

        {/* Callout Prevention Tip */}
        <div className="p-5 rounded-xl bg-emerald-50 dark:bg-slate-900 border-l-4 border-emerald-600 dark:border-yellow-400">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-700 dark:text-yellow-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="text-base font-bold text-emerald-950 dark:text-yellow-300 mb-1">
                Dica Fundamental de Prevenção:
              </h3>
              <p className="text-sm sm:text-base text-emerald-900 dark:text-slate-200 leading-relaxed">
                Desconfie sempre de mensagens inesperadas, não clique em links recebidos de números desconhecidos e nunca compartilhe senhas ou códigos de autenticação. Sempre que houver qualquer dúvida, procure diretamente os canais oficiais de atendimento da instituição envolvida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAPÍTULO 3: WHATSAPP E INTELIGÊNCIA ARTIFICIAL
         ========================================================================= */}
      <section
        id="secao-whatsapp-ia"
        aria-labelledby="titulo-whatsapp-ia"
        className="scroll-mt-28 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs"
      >
        <SectionHeader
          id="secao-whatsapp-ia"
          number={3}
          title="Golpes pelo WhatsApp e o uso de inteligência artificial"
          fullTextToRead={`3. Golpes pelo WhatsApp e o uso de inteligência artificial. O WhatsApp é amplamente utilizado para comunicação entre familiares, amigos e instituições. Por essa razão, também se tornou um dos meios mais utilizados por criminosos para aplicar golpes. Uma prática recorrente é o golpe do falso familiar, no qual o criminoso utiliza uma foto e um número desconhecido para se passar por um parente ou conhecido. Em seguida, afirma que trocou de telefone ou está enfrentando uma emergência e solicita uma transferência financeira. Com o avanço da inteligência artificial, esses golpes podem se tornar ainda mais convincentes. Ferramentas de clonagem de voz e geração de imagens permitem criar conteúdos que imitam a aparência ou a voz de outras pessoas. Para se proteger: Desconfie de pedidos inesperados de dinheiro; Confirme a identidade por ligação telefônica para o número antigo já salvo; Não confie exclusivamente em áudios ou fotos; Nunca compartilhe códigos recebidos por SMS; Evite expor dados pessoais nas redes sociais. A principal orientação é: Não agir por impulso.`}
        />

        <div className="reading-measure mb-6 text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed">
          <p>
            O WhatsApp é uma das ferramentas de comunicação mais populares no Brasil. Por sua enorme facilidade de troca de áudios, textos e documentos, tornou-se também o canal predileto de criminosos virtuais.
          </p>
          <p className="mt-3">
            Uma prática recorrente é o <strong>golpe do falso familiar</strong>: o golpista utiliza uma foto pública da vítima obtida nas redes sociais e envia mensagens a partir de um número novo alegando: <em>&ldquo;Oi mãe/pai, troquei de número, anota o novo contato&rdquo;</em>. Logo após, inventa um imprevisto (como conta a pagar, pneu furado ou limite bancário estourado) e pede uma transferência via Pix.
          </p>
        </div>

        {/* Deepfake & Voice Cloning Box */}
        <div className="mb-6 p-5 rounded-xl bg-purple-50 dark:bg-slate-900 border-2 border-purple-200 dark:border-slate-800">
          <div className="flex items-start gap-3">
            <Brain className="w-6 h-6 text-purple-700 dark:text-yellow-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="text-base font-bold text-purple-950 dark:text-yellow-300 mb-1">
                Ameaça Emergente: Clonagem de Voz por Inteligência Artificial
              </h3>
              <p className="text-sm sm:text-base text-purple-900 dark:text-slate-200 leading-relaxed">
                Com o avanço veloz da inteligência artificial generativa, ferramentas conseguem reproduzir o tom, timbre e sotaque de uma pessoa com base em pequenos trechos de áudio postados na internet. Golpistas enviam áudios falsificados pelo WhatsApp com a voz exata de filhos, netos ou amigos pedindo socorro financeiro.
              </p>
            </div>
          </div>
        </div>

        {/* Checklist: Para se proteger */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            Como se proteger de golpes no WhatsApp:
          </h3>
          <ul className="space-y-3" role="list">
            {[
              {
                title: 'Desconfie de pedidos inesperados de dinheiro',
                desc: 'Mesmo que a mensagem pareça vir de pessoas queridas ou muito próximas.',
              },
              {
                title: 'Confirme por ligação para o número original antigo',
                desc: 'Nunca faça a transferência antes de ligar para o número que você já tinha salvo em sua agenda.',
              },
              {
                title: 'Não confie cegamente em áudios, fotografias ou vídeos',
                desc: 'Lembre-se de que vozes e fotos podem ser manipuladas por inteligência artificial.',
              },
              {
                title: 'Nunca compartilhe códigos de 6 dígitos recebidos por SMS',
                desc: 'Esse código é a chave de ativação do seu WhatsApp; se você entregar, sua conta será clonada.',
              },
              {
                title: 'Evite divulgar detalhes de sua rotina nas redes sociais',
                desc: 'Informações como onde estuda, rotinas familiares e telefones facilitam a abordagem dos criminosos.',
              },
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-yellow-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 dark:text-white block font-bold text-sm sm:text-base">
                    {item.title}
                  </strong>
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {item.desc}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Golden Rule Highlight */}
        <div className="p-5 rounded-xl bg-amber-500 text-slate-950 font-bold border-2 border-amber-600 dark:border-yellow-300 shadow-xs flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 shrink-0" aria-hidden="true" />
          <p className="text-base sm:text-lg leading-snug">
            <strong>A regra de ouro: Não agir por impulso.</strong> Criminosos sempre tentam impedir que você pense com calma. Respire, pare e verifique antes de tomar qualquer atitude.
          </p>
        </div>
      </section>

      {/* =========================================================================
          CAPÍTULO 4: SEGURANÇA BANCÁRIA E TRANSAÇÕES VIA PIX
         ========================================================================= */}
      <section
        id="secao-seguranca-bancaria-pix"
        aria-labelledby="titulo-seguranca-bancaria-pix"
        className="scroll-mt-28 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs"
      >
        <SectionHeader
          id="secao-seguranca-bancaria-pix"
          number={4}
          title="Segurança bancária e proteção nas transações via Pix"
          fullTextToRead={`4. Segurança bancária e proteção nas transações via Pix. Os serviços bancários digitais facilitam o acesso a operações financeiras, mas também exigem atenção constante aos riscos de fraude. Golpistas podem utilizar falsas centrais de atendimento, mensagens sobre bloqueios de contas, supostos problemas de segurança e pedidos de atualização cadastral para obter informações das vítimas. No caso do Pix, é importante conferir cuidadosamente os dados do destinatário antes de confirmar qualquer transferência: nome completo, instituição financeira e valor. Medidas de segurança: Utilizar somente os aplicativos oficiais dos bancos; Nunca fornecer senhas ou códigos de segurança; Não instalar aplicativos indicados por desconhecidos; Não permitir controle remoto do celular; Conferir todos os dados antes de confirmar o Pix; Ativar limites de segurança diários e noturnos. Em caso de fraude, entre em contato imediatamente com o banco e solicite a abertura do Mecanismo Especial de Devolução (MED), registre um boletim de ocorrência e guarde todos os comprovantes.`}
        />

        <div className="reading-measure mb-6 text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed">
          <p>
            O Pix revolucionou as operações financeiras no Brasil pela sua agilidade instantânea em qualquer dia e horário. Contudo, essa mesma instantaneidade exige atenção redobrada antes do clique final de confirmação.
          </p>
          <p className="mt-3">
            Para pessoas com deficiência visual que utilizam leitores de tela, é essencial solicitar que o leitor soletre ou leia em detalhes a tela de confirmação do aplicativo bancário, conferindo{' '}
            <strong>o nome completo do destinatário, os dígitos do CPF/CNPJ, o banco de destino e o valor exato</strong>.
          </p>
        </div>

        {/* 6 Medidas de Segurança Bancária */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            6 Medidas de Proteção Bancária:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: '1',
                title: 'Apenas canais e aplicativos oficiais',
                desc: 'Baixe o aplicativo bancário exclusivamente pela Google Play Store ou Apple App Store oficiais.',
              },
              {
                num: '2',
                title: 'Nunca forneça senhas nem códigos',
                desc: 'Nem funcionários do banco têm autorização para pedir sua senha eletrônica ou código de segurança.',
              },
              {
                num: '3',
                title: 'Recuse instalar apps indicados por terceiros',
                desc: 'Golpistas pedem para instalar &ldquo;módulos de segurança&rdquo; que na verdade dão controle total do aparelho.',
              },
              {
                num: '4',
                title: 'Sem controle remoto do aparelho',
                desc: 'Nunca permita que desconhecidos instalem AnyDesk, TeamViewer ou similares em seu smartphone.',
              },
              {
                num: '5',
                title: 'Conferência total do Pix',
                desc: 'Certifique-se de que o titular da conta que vai receber o Pix é exatamente quem você pretendia pagar.',
              },
              {
                num: '6',
                title: 'Ajuste limites de transferência',
                desc: 'Reduza o limite do Pix noturno e configure contatos de confiança para transferências maiores.',
              },
            ].map((item) => (
              <div
                key={item.num}
                data-card="true"
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3"
              >
                <span className="w-8 h-8 rounded-lg bg-blue-700 text-white dark:bg-yellow-400 dark:text-slate-950 flex items-center justify-center font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção MED (Mecanismo Especial de Devolução) */}
        <div className="p-6 rounded-2xl bg-blue-50 dark:bg-slate-900 border-2 border-blue-400 dark:border-yellow-400">
          <div className="flex items-start gap-3">
            <CreditCard className="w-6 h-6 text-blue-700 dark:text-yellow-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-black text-blue-950 dark:text-yellow-300 mb-2">
                Caiu em um golpe no Pix? O que fazer imediatamente:
              </h3>
              <ol className="space-y-3 text-sm sm:text-base text-blue-950 dark:text-slate-200 leading-relaxed list-decimal list-inside">
                <li>
                  <strong>Acione o seu banco imediatamente pelo SAC oficial:</strong> Comunique a fraude e peça a abertura do <strong>Mecanismo Especial de Devolução (MED)</strong>, ferramenta criada pelo Banco Central para bloquear o dinheiro na conta de destino caso ainda haja saldo.
                </li>
                <li>
                  <strong>Registre Boletim de Ocorrência (B.O.):</strong> Pode ser feito online na Delegacia Eletrônica da Polícia Civil do seu Estado ou presencialmente.
                </li>
                <li>
                  <strong>Guarde todas as provas:</strong> Salve comprovantes da transferência, histórico de conversas no WhatsApp, números de telefone envolvidos e protocolos de atendimento.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAPÍTULO 5: CRIAÇÃO E PROTEÇÃO DE SENHAS
         ========================================================================= */}
      <section
        id="secao-criacao-senhas"
        aria-labelledby="titulo-criacao-senhas"
        className="scroll-mt-28 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs"
      >
        <SectionHeader
          id="secao-criacao-senhas"
          number={5}
          title="Criação e proteção de senhas"
          fullTextToRead={`5. Criação e proteção de senhas. As senhas são uma das principais formas de proteção de contas e informações pessoais na internet. Entretanto, senhas fracas ou repetidas em diferentes serviços podem facilitar o acesso indevido por criminosos. Para criar senhas mais seguras, recomenda-se: Utilizar combinações longas e difíceis de adivinhar; Evitar informações óbvias como datas de aniversário e sequências numéricas; Não utilizar a mesma senha em diferentes contas; Não compartilhar senhas com outras pessoas; Ativar a autenticação em dois fatores sempre que disponível; Evitar salvar senhas em papéis ou locais desprotegidos. Instituições legítimas nunca pedem sua senha completa.`}
        />

        <div className="reading-measure mb-6 text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed">
          <p>
            As senhas funcionam como as chaves digitais da sua residência. Quando uma senha é fraca ou reutilizada em todos os sites e redes sociais, o vazamento de um único serviço pode comprometer todas as suas contas, incluindo e-mails e serviços financeiros.
          </p>
        </div>

        {/* 6 Recomendações de Senhas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {[
            {
              title: 'Combinações Longas (Passphrases)',
              desc: 'Em vez de palavras curtas, use frases com 4 ou mais palavras com letras maiúsculas, minúsculas, números e símbolos.',
            },
            {
              title: 'Evite Dados Óbvios',
              desc: 'Nunca use datas de nascimento, nomes de filhos, placas de carro ou sequências como 123456.',
            },
            {
              title: 'Uma Senha para Cada Serviço',
              desc: 'Tenha senhas exclusivas para contas importantes (banco, e-mail principal, gov.br).',
            },
            {
              title: 'Autenticação em 2 Fatores (2FA)',
              desc: 'Ative a verificação em duas etapas por aplicativo autenticador ou SMS em todas as contas.',
            },
            {
              title: 'Não Compartilhe',
              desc: 'Senhas não devem ser repassadas a atendentes, nem mesmo por telefone ou e-mail.',
            },
            {
              title: 'Gerenciadores Acessíveis',
              desc: 'Utilize gerenciadores de senha compatíveis com leitores de tela (como Bitwarden) para memorizar com segurança.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              data-card="true"
              className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 dark:bg-yellow-950 dark:text-yellow-400 flex items-center justify-center mb-3">
                  <KeyRound className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Alert Callout */}
        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 flex items-center gap-3">
          <Lock className="w-5 h-5 text-blue-700 dark:text-yellow-400 shrink-0" aria-hidden="true" />
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            Lembrete essencial: Nenhuma instituição legítima ou empresa de suporte técnico tem autorização para solicitar que você digite ou fale sua senha completa.
          </p>
        </div>
      </section>

      {/* =========================================================================
          CAPÍTULO 6: PROTEÇÃO DE DADOS PESSOAIS E PRIVACIDADE (LGPD)
         ========================================================================= */}
      <section
        id="secao-protecao-dados-lgpd"
        aria-labelledby="titulo-protecao-dados-lgpd"
        className="scroll-mt-28 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs"
      >
        <SectionHeader
          id="secao-protecao-dados-lgpd"
          number={6}
          title="Proteção de dados pessoais e privacidade"
          fullTextToRead={`6. Proteção de dados pessoais e privacidade. Os dados pessoais são informações que identificam ou podem identificar uma pessoa, como nome, endereço, telefone, CPF, fotografias, informações bancárias e outros registros. No ambiente digital, esses dados podem ser coletados por aplicativos, sites, redes sociais e serviços online. A Lei Geral de Proteção de Dados Pessoais, a LGPD, Lei nº 13.709/2018, estabelece regras para o tratamento de dados pessoais no Brasil, assegurando direitos de privacidade e transparência. Cuidados recomendados: Compartilhar apenas os dados necessários; Verificar as permissões dos aplicativos; Evitar publicar documentos em redes sociais; Desconfiar de formulários de links desconhecidos; Ler as informações de privacidade; e solicitar apoio quando necessário. A LGPD determina ainda, em seu artigo 9º, parágrafo 6º, que as informações sobre o tratamento de dados devem ser disponibilizadas em formato acessível a pessoas com deficiência.`}
        />

        <div className="reading-measure mb-6 text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed space-y-3">
          <p>
            Os <strong>dados pessoais</strong> englobam qualquer dado que identifique ou possa identificar você: nome, endereço residencial, CPF, RG, número de telefone celular, fotografias, biometria facial e histórico financeiro.
          </p>
          <p>
            A <strong>Lei Geral de Proteção de Dados Pessoais (LGPD)</strong>, Lei Federal nº 13.709/2018, veio para proteger os direitos fundamentais de liberdade e de privacidade, criando regras claras para empresas e órgãos públicos sobre como coletar, guardar e descartar esses dados.
          </p>
        </div>

        {/* Destaque Artigo 9, § 6 da LGPD */}
        <div className="mb-8 p-6 rounded-2xl bg-blue-50 dark:bg-slate-900 border-2 border-blue-600 dark:border-yellow-400">
          <div className="flex items-start gap-3">
            <FileText className="w-6 h-6 text-blue-700 dark:text-yellow-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-yellow-400">
                Acessibilidade na Lei Geral de Proteção de Dados
              </span>
              <h3 className="text-lg font-black text-blue-950 dark:text-yellow-300 mt-1 mb-2">
                Artigo 9º, § 6º da LGPD: Informações Acessíveis
              </h3>
              <p className="text-sm sm:text-base text-blue-900 dark:text-slate-200 leading-relaxed italic">
                &ldquo;A eventual dispensa da exigência do consentimento não desobriga os agentes de tratamento das demais obrigações previstas nesta Lei, especialmente da observância dos princípios gerais e da garantia dos direitos do titular. As informações sobre o tratamento de dados pessoais devem ser disponibilizadas de forma clara, adequada e acessível, inclusive para pessoas com deficiência, considerando suas características sensoriais e perceptivas.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* 6 Cuidados Recomendados */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            Cuidados práticos com seus dados no dia a dia:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {[
              'Compartilhe apenas os dados estritamente necessários para o serviço.',
              'Revise as permissões de aplicativos (não autorize microfone/câmera se o app não precisa).',
              'Nunca publique fotos de documentos, passaportes ou ingressos em redes sociais.',
              'Desconfie de questionários ou cadastros recebidos por links encurtados.',
              'Informe-se sobre as políticas de privacidade antes de aderir a novos serviços.',
              'Peça ajuda a uma pessoa de sua confiança quando um termo de consentimento parecer confuso.',
            ].map((text, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3 text-sm text-slate-800 dark:text-slate-200 font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-yellow-400 shrink-0" aria-hidden="true" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAPÍTULO 7: ACESSIBILIDADE DIGITAL E TECNOLOGIAS ASSISTIVAS
         ========================================================================= */}
      <section
        id="secao-acessibilidade-tecnologias-assistivas"
        aria-labelledby="titulo-acessibilidade-tecnologias-assistivas"
        className="scroll-mt-28 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs"
      >
        <SectionHeader
          id="secao-acessibilidade-tecnologias-assistivas"
          number={7}
          title="Acessibilidade digital e tecnologias assistivas"
          fullTextToRead={`7. Acessibilidade digital e tecnologias assistivas. A acessibilidade digital permite que pessoas com diferentes características e necessidades consigam utilizar sites, aplicativos, computadores e dispositivos móveis com total autonomia. Para pessoas cegas ou com baixa visão, os leitores de tela são recursos fundamentais, verbalizando informações da tela e viabilizando a navegação. Os principais leitores de tela são: NVDA para Windows, TalkBack para Android, VoiceOver para aparelhos Apple, Orca para Linux e DOSVOX. Além deles, aplicativos que utilizam inteligência artificial como Seeing AI, Be My Eyes, Envision AI e Lookout do Google auxiliam na descrição de ambientes e leitura de documentos. Atenção: essas ferramentas ampliam a autonomia, mas podem apresentar erros e devem ser usadas com cautela para dados sensíveis.`}
        />

        <div className="reading-measure mb-6 text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed">
          <p>
            A <strong>acessibilidade digital</strong> é a garantia de que as barreiras tecnológicas foram eliminadas, permitindo que todas as pessoas — independentemente de suas condições sensoriais, motoras ou cognitivas — naveguem, compreendam e interajam na web com plena dignidade.
          </p>
        </div>

        {/* ToolsGrid Component (Renderiza leitores de tela e ferramentas de IA) */}
        <ToolsGrid />
      </section>

      {/* =========================================================================
          CAPÍTULO 8: RISCOS DE IA E APLICATIVOS DE ACESSIBILIDADE
         ========================================================================= */}
      <section
        id="secao-riscos-ia-acessibilidade"
        aria-labelledby="titulo-riscos-ia-acessibilidade"
        className="scroll-mt-28 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs"
      >
        <SectionHeader
          id="secao-riscos-ia-acessibilidade"
          number={8}
          title="Riscos relacionados ao uso de IA e aplicativos de acessibilidade"
          fullTextToRead={`8. Riscos relacionados ao uso de inteligência artificial e aplicativos de acessibilidade. Embora a inteligência artificial ofereça benefícios importantes para a acessibilidade, seu uso também exige atenção à privacidade e à segurança. Aplicativos que realizam leitura de documentos, reconhecimento de imagens ou descrição de ambientes podem processar informações pessoais em servidores externos. Por esse motivo, é importante verificar as condições de privacidade e quais informações serão compartilhadas. Outro risco está relacionado ao uso da IA por criminosos para clonagem de voz e golpes personalizados. Além disso, problemas de acessibilidade em aplicativos bancários podem criar barreiras. A segurança digital deve caminhar junto com a acessibilidade.`}
        />

        <div className="reading-measure space-y-4 text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed">
          <p>
            Embora as soluções baseadas em inteligência artificial representem um salto monumental na autonomia de pessoas cegas, seu uso requer discernimento em relação à <strong>privacidade dos dados e à segurança da informação</strong>.
          </p>
          <p>
            Quando apontamos a câmera de um aplicativo assistivo para ler uma fatura bancária, um contrato médico ou a tela de um caixa eletrônico, essas imagens são frequentemente enviadas para <strong>servidores na nuvem</strong>, onde algoritmos de visão computacional processam os caracteres. É crucial saber se a empresa desenvolvedora armazena essas fotos ou as utiliza para treinamento de novos modelos de IA sem o seu consentimento.
          </p>
        </div>

        {/* 3 Critical Risk Angles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div data-card="true" className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-red-100 text-red-700 dark:bg-red-950 dark:text-yellow-400 flex items-center justify-center font-bold mb-3">
              <Lock className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">
              Privacidade em Nuvem
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Documentos com CPF, valores salariais ou laudos médicos não devem ser enviados indiscriminadamente para aplicativos sem política clara de descarte imediato dos dados.
            </p>
          </div>

          <div data-card="true" className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-yellow-400 flex items-center justify-center font-bold mb-3">
              <Brain className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">
              IA Utilizada por Criminosos
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Áudios manipulados e fraudes hiper-personalizadas tornam a identificação de golpes mais sutil, exigindo validação por múltiplos canais.
            </p>
          </div>

          <div data-card="true" className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-yellow-400 flex items-center justify-center font-bold mb-3">
              <AlertTriangle className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">
              Barreiras em Apps Bancários
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Botões sem rótulos e falhas de acessibilidade em bancos forçam a pessoa com deficiência a pedir ajuda a terceiros, expondo senhas e saldos.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-slate-900 text-white border-2 border-slate-700 dark:border-yellow-400 font-medium text-base sm:text-lg">
          <p>
            <strong>Conclusão fundamental:</strong> A segurança digital deve caminhar de mãos dadas com a acessibilidade. Não basta que uma tecnologia seja segura para videntes; ela precisa permitir que todas as pessoas a utilizem com privacidade e autonomia.
          </p>
        </div>
      </section>

      {/* =========================================================================
          CAPÍTULO 9: DIREITOS E LEGISLAÇÃO BRASILEIRA (CAIXA INSTITUCIONAL)
         ========================================================================= */}
      <section
        id="secao-direitos-legislacao"
        aria-labelledby="titulo-direitos-legislacao"
        className="scroll-mt-28"
      >
        <SectionHeader
          id="secao-direitos-legislacao"
          number={9}
          title="Direitos das pessoas com deficiência e legislação brasileira"
          fullTextToRead={`9. Direitos das pessoas com deficiência e legislação brasileira. A legislação brasileira estabelece garantias importantes para promover a inclusão e a acessibilidade das pessoas com deficiência. A Lei Brasileira de Inclusão da Pessoa com Deficiência, a LBI, Lei nº 13.146/2015, conhecida como Estatuto da Pessoa com Deficiência, assegura direitos fundamentais. Destaques da LBI: Artigo 63, determina a obrigatoriedade de sites acessíveis em empresas com sede no Brasil e órgãos de governo; Artigo 65, trata do acesso aos serviços de telecomunicações; Artigo 67, estabelece acessibilidade na radiodifusão com audiodescrição, Libras e legenda oculta. Além disso, a LGPD reforça a transparência e o Código de Defesa do Consumidor protege contra fraudes e práticas abusivas, com suporte ativo do Procon.`}
        />

        {/* Institutional Highlight Box */}
        <LegislationSection />
      </section>

      {/* =========================================================================
          CAPÍTULO 10: ORIENTAÇÕES PRÁTICAS: PARE, CONFIRA, PROTEJA
         ========================================================================= */}
      <section
        id="secao-orientacoes-praticas"
        aria-labelledby="titulo-orientacoes-praticas"
        className="scroll-mt-28"
      >
        <SectionHeader
          id="secao-orientacoes-praticas"
          number={10}
          title="Orientações práticas: como agir diante de uma possível tentativa de golpe"
          fullTextToRead={`10. Orientações práticas: como agir diante de uma possível tentativa de golpe. A prevenção é uma das formas mais eficazes de reduzir os riscos no ambiente digital. Uma maneira simples de lembrar os principais cuidados é adotar três atitudes: Primeiro: PARE. Não tome decisões sob pressão. Desconfie de mensagens urgentes, ameaças, pedidos inesperados de dinheiro ou ofertas muito vantajosas. Segundo: CONFIRA. Verifique a identidade de quem entrou em contato. Utilize outro canal de comunicação e procure os contatos oficiais da instituição ou da pessoa envolvida. Terceiro: PROTEJA. Não compartilhe senhas, códigos ou dados pessoais. Mantenha seus dispositivos atualizados e utilize recursos de segurança disponíveis. Se houver suspeita de golpe, interrompa o contato, não realize pagamentos e procure orientação pelos canais oficiais.`}
        />

        {/* 3-Column Visual Alert Block */}
        <PareConfiraProteja />
      </section>

      {/* =========================================================================
          CAPÍTULO 11: CONSIDERAÇÕES FINAIS
         ========================================================================= */}
      <section
        id="secao-consideracoes-finais"
        aria-labelledby="titulo-consideracoes-finais"
        className="scroll-mt-28 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs"
      >
        <SectionHeader
          id="secao-consideracoes-finais"
          number={11}
          title="Considerações finais"
          fullTextToRead={`11. Considerações finais. A inclusão digital é um direito importante para a construção de uma sociedade mais justa, acessível e participativa. Para as pessoas com deficiência visual, o acesso seguro às tecnologias pode ampliar a independência, facilitar a comunicação e proporcionar novas oportunidades de aprendizagem, trabalho e convivência social. Entretanto, para que esses benefícios sejam plenamente aproveitados, é necessário conhecer os riscos presentes no ambiente digital e desenvolver hábitos de segurança. A utilização de leitores de tela e aplicativos assistivos deve estar acompanhada de informações claras sobre privacidade, proteção de dados e prevenção de golpes. Dessa forma, o projeto Conectando com Segurança busca contribuir para que as pessoas com deficiência visual tenham mais conhecimento e confiança no uso das tecnologias, fortalecendo sua autonomia e seu direito de participar do mundo digital com segurança, acessibilidade e respeito.`}
        />

        <div className="reading-measure space-y-4 text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
          <p>
            A <strong>inclusão digital</strong> não é um privilégio transitório: é um direito humano fundamental para a construção de uma sociedade genuinamente justa, acessível e participativa.
          </p>
          <p>
            Para as pessoas com deficiência visual, o acesso pleno e seguro às ferramentas digitais amplia a independência cotidiana, desfaz barreiras geográficas, facilita a comunicação e multiplica as oportunidades no mercado de trabalho e na vida acadêmica.
          </p>
          <p>
            Entretanto, para que tais benefícios sejam plenamente aproveitados, o domínio dos leitores de tela e dos recursos de inteligência artificial precisa caminhar junto com o <strong>hábito da segurança preventiva</strong> e o conhecimento dos direitos assegurados pela legislação brasileira.
          </p>
        </div>

        {/* Final Institutional Box */}
        <div className="mt-8 p-6 rounded-2xl bg-linear-to-r from-blue-700 to-indigo-800 text-white shadow-md">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0" aria-hidden="true">
              <ShieldCheck className="w-10 h-10 text-yellow-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Conectando com Segurança no ILBES
              </h3>
              <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
                Fortalecer a autonomia, a segurança da informação e a dignidade de cada indivíduo no mundo digital. O conhecimento é a nossa melhor proteção.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
