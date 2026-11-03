import React from 'react';
import { ShieldCheck, Send, Phone, MapPin } from 'lucide-react';
import SftgLogo from './SftgLogo';

export default function Footer() {
  const tgLink = "https://t.me/yurasvidersky?text=Здравствуйте!%20Хочу%20заказать%20бесплатный%20аудит%20процессов";

  const navLinks = [
    { label: 'Возможности', href: '#processes' },
    { label: 'Примеры задач', href: '#cases' },
    { label: 'Этапы работы', href: '#stages' },
    { label: 'Безопасность данных', href: '#contour' },
    { label: 'О компании', href: '#about' },
    { label: 'Бесплатный аудит', href: '#lead-form' }
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50/80 py-12 px-4 sm:px-6 relative z-10 text-slate-600 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Основная часть: бренд, ссылки и контакты */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pb-10 border-b border-slate-200">
          
          {/* Бренд и описание */}
          <div className="flex flex-col gap-2 max-w-sm">
            <div className="flex items-center gap-2.5">
              <SftgLogo className="w-7 h-7" glow={false} />
              <span className="text-base font-bold tracking-tight text-slate-900">
                SFTG <span className="text-sky-600 font-semibold">AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mt-1">
              Белорусский разработчик и интегратор интеллектуальных систем автоматизации документов, заказов и B2B-процессов.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600 mt-2 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>Минск, Республика Беларусь</span>
            </div>
          </div>

          {/* Якорные ссылки */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-sky-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Прямые контакты */}
          <div className="flex flex-col gap-2 text-xs">
            <a
              href="tel:+375291200060"
              className="inline-flex items-center gap-2 text-slate-800 font-bold hover:text-sky-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>+375 (29) 120-00-60</span>
            </a>
            <a
              href={tgLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-bold transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Связаться</span>
            </a>
          </div>

        </div>

        {/* Нижняя часть: копирайт и Закон 99-З */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Обработка данных в строгом соответствии с Законом Республики Беларусь № 99-З «О защите персональных данных».</span>
          </div>
          <div>
            © 2026 SFTG AI (ООО «РоялСиАрЭм»). Минск, Беларусь.
          </div>
        </div>

      </div>
    </footer>
  );
}
