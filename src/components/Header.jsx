import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Send } from 'lucide-react';
import SftgLogo from './SftgLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Возможности', href: '#capabilities' },
    { label: 'Как это работает', href: '#workflow' },
    { label: 'Реальные кейсы', href: '#cases' },
    { label: 'Условия и гарантии', href: '#guarantees' },
    { label: 'О компании', href: '#about' },
  ];

  const tgLink = "https://t.me/yurasvidersky?text=Здравствуйте!%20Хочу%20заказать%20бесплатный%20аудит%20процессов";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 md:pt-4 pointer-events-none">
      <nav 
        className={`pointer-events-auto w-full max-w-6xl flex items-center justify-between gap-3 px-5 py-3 rounded-2xl border transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 border-slate-200/90 shadow-md shadow-slate-900/5 backdrop-blur-xl' 
            : 'bg-white/80 border-slate-200/60 shadow-sm backdrop-blur-md'
        }`}
      >
        {/* Логотип */}
        <a href="#" className="flex items-center gap-2.5 group">
          <SftgLogo className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" glow={false} />
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-900 leading-none">
              SFTG <span className="text-sky-600 font-semibold">AI</span>
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-wide mt-0.5">
              Минск · Беларусь
            </span>
          </div>
        </a>

        {/* Десктоп навигация */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Контакты (Беларусь) + CTA кнопка */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Телефон и Telegram */}
          <div className="hidden sm:flex items-center gap-3 text-xs font-medium text-slate-700 pr-2 border-r border-slate-200">
            <a 
              href="tel:+375296000000" 
              className="inline-flex items-center gap-1.5 hover:text-sky-600 transition-colors"
              title="Отдел внедрения Минск"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span className="font-semibold text-slate-900">+375 (29) 120-00-60</span>
            </a>
            <a 
              href={tgLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 font-semibold"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </a>
          </div>

          {/* Главная кнопка */}
          <a
            href="#lead-form"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-sky-600 text-white hover:bg-sky-700 shadow-sm shadow-sky-600/20 active:scale-[0.98] transition-all"
          >
            <span>Заказать аудит</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Мобильная кнопка меню */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Переключить меню"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Мобильное выпадающее меню */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 p-6 rounded-2xl bg-white border border-slate-200 shadow-xl backdrop-blur-2xl flex flex-col gap-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-sky-600 py-2 border-b border-slate-100"
            >
              {link.label}
            </a>
          ))}
          
          <div className="flex flex-col gap-2 pt-2 text-xs">
            <a href="tel:+375291200060" className="inline-flex items-center gap-2 text-slate-800 font-semibold py-1">
              <Phone className="w-4 h-4 text-sky-600" />
              <span>+375 (29) 120-00-60 (Минск)</span>
            </a>
            <a 
              href={tgLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold py-1"
            >
              <Send className="w-4 h-4" />
              <span>Написать в Telegram @yurasvidersky</span>
            </a>
          </div>

          <a
            href="#lead-form"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-sky-600 text-white hover:bg-sky-700 shadow-md transition-all mt-2"
          >
            <span>Заказать бесплатный аудит</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
