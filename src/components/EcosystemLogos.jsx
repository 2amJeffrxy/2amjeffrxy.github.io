import React from 'react';

// Чистые векторные логотипы корпоративных платформ в светлой бизнес-палитре
export default function EcosystemLogos() {
  const ecosystems = [
    {
      name: '1С:Предприятие',
      role: 'ERP, УТ, БП, УНФ, OData',
      badge: '1С:Франчайзинг',
      svg: (
        <svg viewBox="0 0 48 32" className="h-6 w-auto text-amber-600" fill="currentColor">
          <ellipse cx="24" cy="16" rx="22" ry="14" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path
            d="M17.5 10v12h3V10h-3zm6.5 0v3.5c1.2-1.2 2.8-1.8 4.5-1.8 3.5 0 6 2.4 6 6.3 0 4-2.5 6.3-6 6.3-1.8 0-3.3-.6-4.5-1.8V22h-3V10h3zm0 8c0 2.2 1.5 3.8 3.5 3.8s3.5-1.6 3.5-3.8-1.5-3.8-3.5-3.8-3.5 1.6-3.5 3.8z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: 'Битрикс24',
      role: 'CRM, Чат-боты и Сделки',
      badge: 'Золотой партнер',
      svg: (
        <svg viewBox="0 0 36 36" className="h-6 w-auto text-sky-500" fill="currentColor">
          <circle cx="12" cy="14" r="7" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="24" cy="14" r="7" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="18" cy="23" r="7" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.85" />
        </svg>
      ),
    },
    {
      name: 'Telegram B2B',
      role: 'Прием заказов и ассистенты',
      badge: '24/7 шлюз',
      svg: (
        <svg viewBox="0 0 24 24" className="h-6 w-auto text-sky-600" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.2.14.28-.01.07-.01.21-.03.47z" />
        </svg>
      ),
    },
    {
      name: 'МойСклад',
      role: 'Торговый и складской учёт',
      badge: 'API Синхронизация',
      svg: (
        <svg viewBox="0 0 32 32" className="h-6 w-auto text-blue-500" fill="currentColor">
          <path d="M16 2l12 7v14l-12 7-12-7V9l12-7z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M16 2v14l12 7M16 16L4 23" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" cy="16" r="3" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'beCloud / Hoster.by',
      role: 'Белорусский закрытый контур',
      badge: '99-З РБ',
      svg: (
        <svg viewBox="0 0 24 24" className="h-6 w-auto text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 max-w-7xl mx-auto border-b border-slate-200/80">
      <div className="text-center mb-6">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Бесшовная интеграция с корпоративными экосистемами Беларуси
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {ecosystems.map((eco, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col items-center text-center hover:border-slate-300 transition-all"
          >
            <div className="mb-2">
              {eco.svg}
            </div>
            <div className="text-xs font-bold text-slate-800">
              {eco.name}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {eco.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
