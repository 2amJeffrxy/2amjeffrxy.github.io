import React from 'react';
import { FileUp, Cpu, CheckCircle, ArrowRight, ShieldCheck, Clock, UserCheck } from 'lucide-react';

export default function LinearWorkflow() {
  const steps = [
    {
      num: '1',
      title: 'ВХОД',
      subtitle: 'Любой источник данных',
      desc: 'Скан накладной со штампом, PDF из почты, фото с телефона или заказ из Telegram (включая распознавание голосовых сообщений).',
      badge: 'PDF / Скан / Telegram / Фото',
      icon: FileUp,
      accent: 'border-sky-200 bg-sky-50 text-sky-700',
    },
    {
      num: '2',
      title: 'СВЕРКА',
      subtitle: 'Интеллектуальная сверка',
      desc: 'Компьютерное зрение и модель сопоставляют артикулы с номенклатурой 1С, проверяют цены по спецификации и контролируют реквизиты.',
      badge: 'Точность 95–99%',
      icon: Cpu,
      accent: 'border-blue-200 bg-blue-50 text-blue-700',
    },
    {
      num: '3',
      title: 'ВЫХОД',
      subtitle: 'Готовый результат',
      desc: 'Готовая проводка в 1С или заказ в Битрикс24. Только 5–15% документов со спорными расхождениями цен подсвечиваются человеку.',
      badge: '20 секунд на операцию',
      icon: CheckCircle,
      accent: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    },
  ];

  const metrics = [
    {
      value: '95–99%',
      label: 'Точность извлечения и сопоставления',
      sub: 'По таблицам номенклатуры, кодам и суммам НДС',
      icon: CheckCircle,
      accent: 'text-emerald-600',
    },
    {
      value: '5–15%',
      label: 'Документов уходит на контроль человеку',
      sub: 'Только реальные расхождения цен и новые контрагенты',
      icon: UserCheck,
      accent: 'text-sky-600',
    },
    {
      value: '20 сек',
      label: 'Время на обработку документа',
      sub: 'Вместо 8–15 минут ручного набора бухгалтером',
      icon: Clock,
      accent: 'text-indigo-600',
    },
  ];

  return (
    <section id="workflow" className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200/80 bg-slate-50/50 rounded-3xl my-8">
      
      {/* Заголовок */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4 shadow-sm">
          Прозрачный регламент
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Как это выглядит на практике
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          Линейный процесс без сложных терминов: от получения файла до проведенного документа в учетной системе.
        </p>
      </div>

      {/* 3 шага со стрелками */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-16">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white font-mono font-extrabold flex items-center justify-center text-sm shadow-sm">
                    0{step.num}
                  </div>
                  <div className={`p-2 rounded-lg border ${step.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {step.subtitle}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="inline-block text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                  {step.badge}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Твердые метрики доверия (по эталону Sherpa RPA) */}
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-md">
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Оцифрованные показатели сходимости процессов
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Зафиксировано на реальных массивах накладных и счетов белорусских предприятий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50/80 border border-slate-100">
                <div className="mb-2">
                  <Icon className={`w-6 h-6 ${item.accent}`} />
                </div>
                <div className={`text-4xl sm:text-5xl font-extrabold font-mono tracking-tight mb-2 ${item.accent}`}>
                  {item.value}
                </div>
                <div className="text-sm font-bold text-slate-900 mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 font-normal">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
