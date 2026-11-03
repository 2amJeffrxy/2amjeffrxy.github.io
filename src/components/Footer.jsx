import React from 'react';
import { ShieldCheck, Send, Phone, MapPin, Mail } from 'lucide-react';
import SftgLogo from './SftgLogo';

export default function Footer() {
  const tgLink = "https://t.me/yurasvidersky?text=Здравствуйте!%20Хочу%20заказать%20бесплатный%20аудит%20процессов";

  return (
    <footer className="border-t border-slate-200 bg-slate-50/80 py-16 px-4 sm:px-6 relative z-10 text-slate-600">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-200">
        
        {/* Бренд и локация */}
        <div className="flex flex-col gap-2 max-w-sm">
          <div className="flex items-center gap-2.5">
            <SftgLogo className="w-7 h-7" glow={false} />
            <span className="text-base font-bold tracking-tight text-slate-900">
              SFTG <span className="text-sky-600 font-semibold">AI</span>
            </span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-1">
            Белорусский разработчик и интегратор интеллектуальных систем автоматизации документов, заказов и B2B-контуров.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-600 mt-2 font-medium">
            <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>Минск, Республика Беларусь</span>
          </div>
        </div>

        {/* Навигация */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-600">
          <a href="#capabilities" className="hover:text-sky-600 transition-colors">Возможности</a>
          <a href="#workflow" className="hover:text-sky-600 transition-colors">Как это работает</a>
          <a href="#cases" className="hover:text-sky-600 transition-colors">Кейсы</a>
          <a href="#guarantees" className="hover:text-sky-600 transition-colors">Гарантии</a>
          <a href="#lead-form" className="hover:text-sky-600 transition-colors">Бесплатный аудит</a>
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
            <span>Telegram: @yurasvidersky</span>
          </a>
        </div>

      </div>

      {/* Копирайт и законодательство 99-З */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Обработка данных в строгом соответствии с Законом Республики Беларусь № 99-З «О защите персональных данных».</span>
        </div>
        <div>
          © {new Date().getFullYear()} SFTG AI (ООО «РоялСиАрЭм»). Минск, Беларусь.
        </div>
      </div>
    </footer>
  );
}
