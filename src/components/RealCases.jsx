import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Lightbulb, 
  Factory, 
  Camera, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  MessageSquare,
  FileSpreadsheet,
  Zap,
  TrendingUp
} from 'lucide-react';

export default function RealCases() {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      id: 'horeca',
      icon: UtensilsCrossed,
      title: 'Оптовые поставки и HoReCa (Продукты питания / Салатная продукция)',
      shortTitle: 'HoReCa и продукты',
      problemTitle: 'Сложность рутины:',
      problem: 'Рестораны и кулинарные сети сбрасывают заказы поздно вечером в Telegram (голосовыми сообщениями, неровными списками). Операторы тратят до 3 часов ночи на перебивку позиций в 1С.',
      solutionTitle: 'Решение и сходимость:',
      solution: 'Telegram-ассистент распознает голосовые сообщения поваров, сопоставляет номенклатуру (салаты, полуфабрикаты, фасовку), мгновенно создает заказ в 1С/Битрикс24 и формирует производственный лист к 06:00 утра для утренней смены цеха.',
      resultMetrics: [
        { label: 'Скорость формирования листа', value: 'к 06:00', note: 'Без ночного дежурства оператора' },
        { label: 'Ошибки в фасовке', value: '0 сбоев', note: 'Авто-сверка с матрицей клиента' },
        { label: 'Экономия фонда оплаты', value: '2.5 ставки', note: 'Перераспределение на контроль качества' }
      ],
      badge: 'Кейс: HoReCa Беларусь'
    },
    {
      id: 'lighting',
      icon: Lightbulb,
      title: 'Торговля и дистрибуция (Светотехника, кабель, комплектующие)',
      shortTitle: 'Дистрибуция и кабель',
      problemTitle: 'Сложность рутины:',
      problem: 'Каждый поставщик присылает прайс-листы в своем формате Excel с разными наименованиями одного и того же светильника или кабеля. Подготовка коммерческого предложения на 50 позиций занимала у менеджера до 2 дней.',
      solutionTitle: 'Решение и сходимость:',
      solution: 'Сведение разнородных прайс-листов от десятков поставщиков в единую аналитическую таблицу. Автоматический расчет лучшей цены закупки с учетом скидок и подготовка КП клиенту с маржой за 2 минуты.',
      resultMetrics: [
        { label: 'Подготовка КП клиенту', value: '2 минуты', note: 'Вместо 2 рабочих дней' },
        { label: 'Сверка цен поставщиков', value: '100%', note: 'Опрос 12 прайс-листов параллельно' },
        { label: 'Рост конверсии в сделку', value: '+28%', note: 'Клиент получает расчёт первым' }
      ],
      badge: 'Кейс: Оптовая дистрибуция'
    },
    {
      id: 'production',
      icon: Factory,
      title: 'Производство и металлообработка (Учёт машинного времени и стадий)',
      shortTitle: 'Металлообработка и станки',
      problemTitle: 'Сложность рутины:',
      problem: 'Непрозрачный расчет себестоимости нестандартных изделий: технологи вручную оценивали нормативное время резки, гибки и сварки, а фактические простои станков оставались вне учета.',
      solutionTitle: 'Решение и сходимость:',
      solution: 'При входящей заявке система рассчитывает нормативное время оборудования по параметрам чертежа, создает технологическую карту изделия в учетной системе и отслеживает узкие места по цепочке в цеху.',
      resultMetrics: [
        { label: 'Точность расчёта смены', value: '98%', note: 'Сходимость с реальным временем ЧПУ' },
        { label: 'Выявление простоев', value: '-35%', note: 'Оперативная диспетчеризация' },
        { label: 'Срок запуска в работу', value: 'В день заказа', note: 'Без задержки на согласование' }
      ],
      badge: 'Кейс: Производственный цех'
    },
    {
      id: 'vision',
      icon: Camera,
      title: 'Компьютерное зрение (AI Vision) на контроле выпуска продукции',
      shortTitle: 'AI Vision контроль',
      problemTitle: 'Сложность рутины:',
      problem: 'Человеческий фактор при комплектации отгрузочных лотков и коробок: пересортица, недовложения или отправка бракованной единицы приводили к штрафам от торговых сетей.',
      solutionTitle: 'Решение и сходимость:',
      solution: 'Камера на выходе с упаковочной линии регистрирует готовые изделия или лотки, сверяет визуальное соответствие заказу и автоматически обновляет фактический статус отгрузки в учетной системе.',
      resultMetrics: [
        { label: 'Исключение пересортицы', value: '100%', note: 'Защита от отправки не того артикула' },
        { label: 'Время фиксации места', value: '0.4 сек', note: 'Кадр лотка на роликовом конвейере' },
        { label: 'Штрафы от сетей', value: '0 BYN', note: 'Фотофиксация каждой партии' }
      ],
      badge: 'Кейс: Контроль качества'
    }
  ];

  const current = cases[activeCase];

  return (
    <section id="cases" className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200/80">
      
      {/* Заголовок */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4">
          Опыт внедрения в Беларуси
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Реальные кейсы: оптимизация и сходимость аналитики
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          Практические сценарии, где внедрение устранило задержки, исключило ошибки и высвободило сотни рабочих часов.
        </p>
      </div>

      {/* Табы выбора кейса */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {cases.map((c, idx) => {
          const Icon = c.icon;
          const isActive = activeCase === idx;
          return (
            <button
              key={c.id}
              onClick={() => setActiveCase(idx)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{c.shortTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Карточка развернутого кейса */}
      <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
        
        {/* Шапка кейса */}
        <div className="p-6 sm:p-8 bg-slate-50/80 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-white border border-slate-200 text-sky-600 shadow-sm shrink-0">
              <current.icon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-700 bg-sky-100/70 px-2.5 py-0.5 rounded-md inline-block mb-1.5">
                {current.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {current.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Тело кейса: До vs После */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-slate-100">
          
          {/* Было (Сложность) */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>{current.problemTitle}</span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {current.problem}
            </p>
          </div>

          {/* Стало (Решение) */}
          <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-200">
            <div className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              <span>{current.solutionTitle}</span>
            </div>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
              {current.solution}
            </p>
          </div>

        </div>

        {/* Метрики результата кейса */}
        <div className="p-6 sm:p-8 bg-white">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            Зафиксированный финансовый и операционный эффект:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {current.resultMetrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 mb-1">
                  {m.value}
                </div>
                <div className="text-xs font-bold text-slate-700 mb-0.5">
                  {m.label}
                </div>
                <div className="text-[11px] text-slate-500">
                  {m.note}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
