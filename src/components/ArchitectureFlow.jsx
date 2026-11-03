import React from 'react';
import { Database, ShieldCheck, ArrowRight, Lock, Server, Cloud, Clock, Check } from 'lucide-react';

export default function ArchitectureFlow() {
  const steps = [
    {
      num: '01',
      title: 'Параллельное API-подключение',
      subtitle: 'Штатные механизмы',
      badge: 'Zero Downtime',
      icon: Database,
      accent: 'border-sky-200 text-sky-700 bg-sky-50',
      features: [
        '1С:ERP, УТ, КА, БП, УНФ и Битрикс24 CRM',
        'Штатное подключение через OData 4.0 и REST API',
        'Гарантия вендора, штатные обновления и рабочие процессы сохраняются',
      ],
    },
    {
      num: '02',
      title: 'Быстрый гибридный контур',
      subtitle: 'Для открытых данных',
      badge: 'Высокая скорость',
      icon: Cloud,
      accent: 'border-blue-200 text-blue-700 bg-blue-50',
      features: [
        'Интеграция с современными моделями для быстрой обработки входящих заказов',
        'Предварительная анонимизация и фильтрация коммерческих сведений',
        'Мгновенный отклик при пиковых нагрузках в сезонные периоды',
      ],
    },
    {
      num: '03',
      title: 'Закрытый суверенный контур',
      subtitle: '100% изоляция данных',
      badge: 'Закон № 99-З РБ',
      icon: ShieldCheck,
      accent: 'border-emerald-200 text-emerald-800 bg-emerald-50',
      features: [
        'Размещение на белорусских серверах (Hoster.by / beCloud) или локально в сети',
        'Полная изоляция от внешнего интернета и зарубежных облаков',
        '100% защита коммерческой тайны, цен закупки и персональных данных',
      ],
    },
    {
      num: '04',
      title: 'Сопровождение и гарантия 60 дней',
      subtitle: 'Инженерная поддержка',
      badge: 'SLA и калибровка',
      icon: Clock,
      accent: 'border-amber-200 text-amber-800 bg-amber-50',
      features: [
        'Бесплатная калибровка точности и дообучение правил после запуска',
        'Адаптация при добавлении новых поставщиков или смене прайс-листов',
        'Прямой контакт с разработчиками без промежуточных колл-центров',
      ],
    },
  ];

  return (
    <section id="architecture" className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200/80">
      
      {/* Заголовок */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4">
          <Server className="w-3.5 h-3.5 text-sky-600" />
          Архитектурная надежность
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Подключение без риска и остановки действующих баз
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-slate-600 font-normal">
          Работаем поверх существующих баз данных 1С и CRM через штатные интерфейсы. Никаких переделок конфигураций.
        </p>
      </div>

      {/* 4 карточки архитектуры */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-extrabold text-slate-400">
                    {step.num}
                  </span>
                  <div className={`p-2 rounded-lg border ${step.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {step.subtitle}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>

                <ul className="space-y-2.5 text-xs text-slate-600">
                  {step.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                  {step.badge}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
