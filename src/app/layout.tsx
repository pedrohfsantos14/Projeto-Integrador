import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Conectando com Segurança - ILBES | Inclusão Digital e Proteção de Dados',
  description:
    'Guia prático e inclusivo de segurança digital, prevenção a fraudes no WhatsApp e Pix, proteção de dados (LGPD) e tecnologias assistivas para pessoas com deficiência visual. Projeto ILBES.',
  keywords: [
    'acessibilidade visual',
    'leitores de tela',
    'NVDA',
    'TalkBack',
    'VoiceOver',
    'segurança digital',
    'golpes virtuais',
    'Pix seguro',
    'LGPD acessível',
    'ILBES',
  ],
  authors: [{ name: 'ILBES - Instituto Luiz Braille do Espírito Santo' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-blue-200 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
