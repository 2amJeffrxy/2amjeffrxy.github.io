import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Lock, Send, ShieldCheck, Phone } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    processDesc: '',
    software: '1С:Предприятие'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const tgLink = "https://t.me/yurasvidersky?text=Здравствуйте!%20Хочу%20заказать%20бесплатный%20аудит%20процессов";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Имитация отправки заявки
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="lead-form" className="py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto border-t border-slate-200/80 relative z-10">
      <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-white border border-slate-200 shadow-xl relative">
        
        {/* Заголовок формы */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-800 uppercase tracking-wider mb-4">
            Бесплатный предпроектный разбор
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Заказать аудит процесса компании
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Посмотрим на экране реальный процесс в вашей 1С или таблицах, найдем узкие места и покажем, как сократить ручной ввод на 80%.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Заявка успешно принята
            </h3>
            <p className="text-sm text-slate-600 max-w-md mb-5 leading-relaxed">
              Наш специалист свяжется с вами в течение 2 рабочих часов для уточнения деталей и согласования времени онлайн-встречи.
            </p>
            <a
              href={tgLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-sky-600 text-white hover:bg-sky-700 shadow-sm transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Написать напрямую в Telegram @yurasvidersky</span>
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
            
            {/* Имя */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Ваше имя *
              </label>
              <input
                type="text"
                required
                placeholder="Алексей"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
              />
            </div>

            {/* Контакт: Телефон или Telegram */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Телефон или Telegram (Беларусь / РФ) *
              </label>
              <input
                type="text"
                required
                placeholder="+375 (29) 000-00-00 или @username"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
              />
            </div>

            {/* Описание процесса для оптимизации */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Какой процесс хотите оптимизировать?
              </label>
              <textarea
                rows={3}
                placeholder="Например: разбор накладных от поставщиков в 1С, ночные заказы из Telegram, сверка прайсов..."
                value={formData.processDesc}
                onChange={(e) => setFormData({ ...formData, processDesc: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors resize-none"
              />
            </div>

            {/* Учетная система */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Основная учетная система
              </label>
              <select
                value={formData.software}
                onChange={(e) => setFormData({ ...formData, software: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
              >
                <option value="1С:Предприятие">1С:Предприятие (УТ, ERP, БП, УНФ)</option>
                <option value="Битрикс24">Битрикс24 CRM</option>
                <option value="МойСклад">МойСклад</option>
                <option value="Excel / Другое">Excel / Таблицы / Собственная СУБД</option>
              </select>
            </div>

            {/* Кнопка отправки */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3.5 px-6 rounded-xl text-sm font-bold bg-sky-600 text-white hover:bg-sky-700 shadow-md shadow-sky-600/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Отправка заявки...</span>
              ) : (
                <>
                  <span>Получить бесплатный аудит процесса</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Доверие и закон 99-З */}
            <div className="flex items-center justify-center gap-2 text-center text-xs text-slate-500 mt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Конфиденциальность гарантируется. Соблюдение закона № 99-З РБ «О защите персональных данных».</span>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}
