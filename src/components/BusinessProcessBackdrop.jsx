import React from 'react';

/**
 * BusinessProcessBackdrop — элегантный светлый фон вместо киберпанк-микропроцессоров.
 * Мягкая геометрическая сетка 3% прозрачности и деликатные контуры движения документов.
 */
export default function BusinessProcessBackdrop() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Мягкий градиент подложки */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9]" />

      {/* Едва заметная геометрическая сетка (3% непрозрачности) */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Мягкие акцентные световые пятна (нежно-голубые / сланцевые) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-sky-200/25 blur-[120px] rounded-full" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[500px] bg-blue-100/30 blur-[130px] rounded-full" />
      <div className="absolute bottom-20 left-[-5%] w-[500px] h-[450px] bg-sky-100/30 blur-[140px] rounded-full" />

      {/* Тонкие контурные линии бизнес-потоков */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        <path d="M-100,200 C300,220 500,450 900,400 C1300,350 1600,600 2000,550" fill="none" stroke="url(#streamGrad)" strokeWidth="1.5" strokeDasharray="6 8" />
        <path d="M-50,600 C400,650 700,500 1100,750 C1500,1000 1800,850 2200,900" fill="none" stroke="url(#streamGrad)" strokeWidth="1.5" strokeDasharray="4 6" />
      </svg>
    </div>
  );
}
