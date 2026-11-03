import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle, 
  FileText, 
  Check, 
  Clock, 
  Building2, 
  ShieldCheck, 
  FileCheck2,
  Filter
} from 'lucide-react';

const PROCESS_PILLS = [
  { id: 'all', label: 'Все процессы' },
  { id: 'docs', label: 'Накладные и счета' },
  { id: 'procurement', label: 'Закупки и сверка цен' },
  { id: 'orders', label: 'Заказы клиентов' },
  { id: 'contracts', label: 'Договоры' },
  { id: 'estimates', label: 'Сметы и план-факт' },
];

export default function Hero() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      
      {/* 1. Плашка локации и специализации */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-xs font-semibold text-sky-800 mb-6 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
        <span>Автоматизация документооборота и заказов · Беларусь</span>
      </div>

      {/* 2. Главный заголовок H1 — по ТЗ */}
      <h1 className="max-w-4xl text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
        ИИ-ассистенты для документов и заказов:{' '}
        <span className="text-sky-600">рутина уходит системе, спорные моменты — человеку</span>
      </h1>

      {/* 3. Буллеты доверия: Аудит бесплатно + Пилот до договора */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-6 text-xs sm:text-sm font-semibold text-slate-700">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800">
          <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
          <span>Аудит процесса — бесплатно</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800">
          <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
          <span>Пилот на ваших документах — до заключения договора</span>
        </div>
      </div>

      {/* 4. Подзаголовок по ТЗ */}
      <p className="max-w-3xl text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8">
        Оцифровка PDF, актов и сканов за 10–20 секунд с прямой записью в 1С и Битрикс24. Приём входящих заказов из Telegram и почты, автоматическое сопоставление номенклатуры и цен поставщиков.
      </p>

      {/* 5. Пилюли-фильтры по ТЗ */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl">
        {PROCESS_PILLS.map((pill) => {
          const isActive = activeFilter === pill.id;
          return (
            <button
              key={pill.id}
              onClick={() => setActiveFilter(pill.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {pill.label}
            </button>
          );
        })}
      </div>

      {/* 6. Кнопки действия */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <a
          href="#lead-form"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-sky-600 text-white hover:bg-sky-700 shadow-lg shadow-sky-600/25 active:scale-[0.98] transition-all"
        >
          <span>Получить бесплатный аудит</span>
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#capabilities"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all"
        >
          <span>Выбрать свой процесс</span>
          <span className="text-sky-600 font-bold">➔</span>
        </a>
      </div>

      {/* 7. ИНТЕРАКТИВНАЯ B2B-КАРТОЧКА ДОКУМЕНТА (ШЕРПА-СТИЛЬ В ВАЛЮТЕ BYN) */}
      <div className="w-full max-w-3xl mx-auto text-left">
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">
          
          {/* Верхняя строка статуса карточки */}
          <div className="bg-slate-50/90 px-4 sm:px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-sky-600" />
              <span className="font-bold text-slate-800">
                Счёт на оплату от поставщика № 412/Б
              </span>
              <span className="px-2 py-0.5 rounded-md bg-slate-200/70 text-slate-700 font-medium text-[11px]">
                PDF · 10.4 Кб
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-600 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Обработан за 14 секунд</span>
            </div>
          </div>

          {/* Тело карточки */}
          <div className="p-4 sm:p-6 space-y-4">
            
            {/* Реквизиты и итоговая сумма */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
              <div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                  Контрагент в 1С
                </div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">
                  ООО «БелСнабКомплект» (УНП 193248102)
                </div>
                <div className="text-xs text-slate-500">
                  Договор поставки № 12/2026 от 15.01.2026
                </div>
              </div>

              <div className="sm:text-right">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                  Итоговая сумма счёта
                </div>
                <div className="text-xl font-extrabold text-slate-900 mt-0.5">
                  14 850,00 BYN
                </div>
                <div className="text-xs text-emerald-600 font-semibold flex sm:justify-end items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Реквизиты и НДС совпадают</span>
                </div>
              </div>
            </div>

            {/* Таблица сверки позиций с подсветкой спорного момента */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Результат автоматической сверки со спецификацией:
              </div>

              {/* Позиция 1: Успешно */}
              <div className="p-3 rounded-xl bg-white border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <div className="font-semibold text-slate-800">
                    1. Кабель силовой ВВГнг-LS 3x2.5 (бухты по 100м)
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Количество: 12 бухт · Цена: 310,00 BYN/бухта
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-semibold text-[11px] shrink-0">
                  <Check className="w-3 h-3" />
                  <span>Цена соответствует договору</span>
                </div>
              </div>

              {/* Позиция 2: СПОРНЫЙ МОМЕНТ (+240 BYN) */}
              <div className="p-3 rounded-xl bg-amber-50/80 border-2 border-amber-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <div className="font-bold text-amber-950 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>2. Автоматический выключатель C16 (3-полюсный)</span>
                  </div>
                  <div className="text-[11px] text-amber-900/80">
                    В счёте: 45,00 BYN/шт · По договору: 37,00 BYN/шт (30 шт.)
                  </div>
                  <div className="text-[11px] font-bold text-amber-800">
                    Расхождение цены: +240,00 BYN требует подтверждения снабженца
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-200/60 border border-amber-400 text-amber-900 font-bold text-[11px] shrink-0">
                  <span>Передано человеку</span>
                </div>
              </div>
            </div>

            {/* Статус-плашка: остальные накладные проведены */}
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-emerald-900">
                  Остальные 42 накладные проведены в 1С без ручного ввода
                </span>
              </div>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                100% авто-проводка
              </span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
