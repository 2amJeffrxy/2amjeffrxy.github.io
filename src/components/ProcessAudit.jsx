import React from 'react';
import { Compass, BarChart3, Clock, ShieldCheck, ArrowRight, Zap, Check } from 'lucide-react';

export default function ProcessAudit() {
  const deliverables = [
    {
      icon: Compass,
      title: 'Карта точек потерь времени',
      desc: 'Наглядная фиксация операций, где сотрудники тратят до 70% рабочего дня на ручной ввод и перепроверку данных в 1С и таблицах.',
      accent: 'text-sky-600 bg-sky-50 border-sky-200'
    },
    {
      icon: BarChart3,
      title: 'Финансовый расчет окупаемости',
      desc: 'Понятный расчет в белорусских рублях (BYN): сколько компания сэкономит за счет исключения переплат поставщикам и рутинных часов.',
      accent: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    {
      icon: Clock,
      title: 'План быстрого запуска (14 дней)',
      desc: 'Выделяем один ключевой участок с максимальной отдачей, который можно оцифровать и запустить за первые 2 недели.',
      accent: 'text-amber-600 bg-amber-50 border-amber-200'
    },
    {
      icon: ShieldCheck,
      title: 'Рекомендации по контуру безопасности',
      desc: 'Определяем необходимость изоляции данных: On-Premise внутри периметра компании или локальный белорусский хостинг.',
      accent: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    }
  ];

  return (
    <section id="diagnostics" className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200/80">
      <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-slate-50/70 border border-slate-200 shadow-sm relative">
        
        {/* Заголовок */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4 shadow-sm">
            Предпроектное обследование
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Бесплатный аудит процесса: находим узкие места до старта разработки
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Инженеры-практики с реальным опытом внедрения 1С и Битрикс24 подключаются к 30-минутному онлайн-разбору, анализируют структуру входящих документов и показывают расчет эффекта.
          </p>
        </div>

        {/* 4 карточки результатов аудита */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${item.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Фиксация результатов пилота */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Пилотный прототип на ваших накладных до заключения договора
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Вы передаете 3–5 обезличенных типовых накладных и видите реальное время и точность авто-ввода в 1С.
              </div>
            </div>
          </div>

          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-sky-600 text-white hover:bg-sky-700 shadow-sm shrink-0 transition-all"
          >
            <span>Заказать аудит</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
