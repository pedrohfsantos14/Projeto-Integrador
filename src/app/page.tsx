'use client';

import React from 'react';
import { AccessibilityProvider } from '@/context/AccessibilityContext';
import { SkipLink } from '@/components/SkipLink';
import { LiveAnnouncer } from '@/components/LiveAnnouncer';
import { AccessibilityToolbar } from '@/components/AccessibilityToolbar';
import { Navbar } from '@/components/Navbar';
import { AudioPlayerBar } from '@/components/AudioPlayerBar';
import { Hero } from '@/components/Hero';
import { TableOfContents } from '@/components/TableOfContents';
import { ContentSections } from '@/components/ContentSections';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <AccessibilityProvider>
      {/* Screen Reader Live Region */}
      <LiveAnnouncer />

      {/* Skip Navigation Links (WCAG Requirement) */}
      <SkipLink />

      {/* Top Accessibility Controls Toolbar */}
      <AccessibilityToolbar />

      {/* Header and Branding */}
      <Navbar />

      {/* Floating Audio Player when TTS is running */}
      <AudioPlayerBar />

      {/* Main Content Landmark */}
      <main id="conteudo-principal" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* Hero Section */}
        <Hero />

        {/* Two-Column Layout: Sticky Sidebar (TOC) + 11 Content Chapters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Table of Contents (Sticky on desktop, modal on mobile) */}
            <TableOfContents />

            {/* Chapters 1 to 11 */}
            <div className="flex-1 min-w-0 w-full">
              <ContentSections />
            </div>
          </div>
        </div>
      </main>

      {/* Institutional Footer */}
      <Footer />
    </AccessibilityProvider>
  );
}
