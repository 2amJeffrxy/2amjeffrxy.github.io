import React from 'react';

/**
 * Фирменный логотип SFTG AI
 */
export default function SftgLogo({ className = "w-8 h-8", glow = false }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className} group`}>
      {glow && (
        <div className="absolute inset-0 bg-sky-500/20 blur-[6px] rounded-lg -z-10 pointer-events-none group-hover:bg-sky-500/30 transition-all duration-300" />
      )}
      <img
        src="/favicon.png?v=2"
        alt="SFTG AI"
        className="w-full h-full rounded-lg object-cover border border-sky-200/50 shadow-sm select-none"
      />
    </div>
  );
}
