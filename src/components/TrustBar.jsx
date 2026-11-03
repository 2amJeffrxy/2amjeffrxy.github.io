import React from 'react';
import { ShieldCheck, Cpu, Database, CheckCircle2 } from 'lucide-react';

export default function TrustBar() {
  const points = [
    {
      icon: Cpu,
      title: '15+ лет инженерного опыта',
      desc: 'Высоконагруженные распределённые системы, B2B-платформы и отказоустойчивые интеграции.',
    },
    {
      icon: Database,
      title: 'Штатные API 1С и Битрикс24',
      desc: 'Работа через официальные OData и REST без ломки ядра и потери гарантийных обновлений.',
    },
    {
      icon: ShieldCheck,
      title: 'Контур по закону № 99-З РБ',
      desc: 'Размещение на серверах заказчика или в белорусском облаке (beCloud / Hoster.by).',
    },
    {
      icon: CheckCircle2,
      title: 'Пилот до заключения договора',
      desc: 'Проверка точности и сходимости на реальных документах компании до оплаты.',
    },
  ];

  return (
    <div className="relative z-10 border-y border-slate-200/80 bg-white/70 backdrop-blur-sm py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((pt, idx) => {
          const Icon = pt.icon;
          return (
            <div key={idx} className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0 mt-0.5">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">
                  {pt.title}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed mt-1">
                  {pt.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
