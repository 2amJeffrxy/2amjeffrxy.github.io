import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import EcosystemLogos from './components/EcosystemLogos';
import BusinessBenefits from './components/BusinessBenefits';
import LinearWorkflow from './components/LinearWorkflow';
import RealCases from './components/RealCases';
import GuaranteesAndTerms from './components/GuaranteesAndTerms';
import ArchitectureFlow from './components/ArchitectureFlow';
import ProcessAudit from './components/ProcessAudit';
import TeamAndExpertise from './components/TeamAndExpertise';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import BusinessProcessBackdrop from './components/BusinessProcessBackdrop';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-sky-500/20 selection:text-sky-900">
      
      {/* 1. Элегантная светлая подложка с мягкими контурами процессов и геометрической сеткой */}
      <BusinessProcessBackdrop />

      {/* 2. Плавающая светлая навигация с контактами Минск/Беларусь */}
      <Header />

      {/* 3. Основной контент */}
      <main className="relative z-10 flex flex-col">
        
        {/* Экран 1: Главный экран (Hero) по эталону Sherpa RPA с карточкой документа в BYN */}
        <Hero />

        {/* Траст-бар со стеком и надежностью в светлом стиле */}
        <TrustBar />

        {/* Поддерживаемые экосистемы (1С, Битрикс24, Telegram, МойСклад, beCloud) */}
        <EcosystemLogos />

        {/* Блок 2: Что получает бизнес (4 спокойные карточки: оцифровка, контроль цен, 1С, закрытый контур) */}
        <BusinessBenefits />

        {/* Блок 3: Линейный процесс: Вход ➔ Сверка ➔ Выход + 3 метрики сходимости */}
        <LinearWorkflow />

        {/* Блок 4: Реальные кейсы (HoReCa/Салатория, Светотехника/Прайсы, Металлообработка, AI Vision) */}
        <RealCases />

        {/* Блок 5: Условия работы и гарантии (Вместо тарифов: смета без наценок, пилот до договора, 60 дней) */}
        <GuaranteesAndTerms />

        {/* Архитектурный контур бесшовного подключения */}
        <ArchitectureFlow />

        {/* Предпроектное обследование и аудит точек потерь */}
        <ProcessAudit />

        {/* Опыт команды и инженерные стандарты */}
        <TeamAndExpertise />

        {/* Блок 6: Финальная форма захвата (Заявка на бесплатный аудит) */}
        <LeadForm />
        
      </main>

      {/* Подвал с реквизитами, контактами и законом № 99-З РБ */}
      <Footer />

    </div>
  );
}
