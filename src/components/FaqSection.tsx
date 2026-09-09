'use client';

import { useTranslations, useMessages } from 'next-intl';
import { useState } from 'react';

export default function FaqSection() {
  const t = useTranslations('faq');
  const messages = useMessages() as any;
  const questions: { q: string; a: string }[] = messages?.faq?.questions || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10 mx-auto" style={{ background: 'var(--accent)' }} />

        <div className="space-y-4">
          {questions.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <span className="font-medium sm:text-lg">{item.q}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    style={{ color: 'var(--accent)' }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {isOpen && (
                  <div
                    className="px-5 sm:px-6 pb-5 text-sm sm:text-base leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
