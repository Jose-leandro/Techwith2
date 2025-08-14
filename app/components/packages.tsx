'use client';
import { useState } from 'react';

export default function Packages() {
  const [packages, setPackages] = useState({
    essencial: true,
    profissional: true,
    premium: true,
  });

  // Essencial price + addons
  const [essencialPrice, setEssencialPrice] = useState(125);
  const [selectedAddons, setSelectedAddons] = useState({
    security: false,
    performance: false,
    seo: false,
    revisoes: false,
    entrega: false,
    analytics: false,
  });

  const togglePackage = (packageName) => {
    setPackages((prev) => ({
      essencial: false,
      profissional: false,
      premium: false,
      [packageName]: prev[packageName] ? true : false, // activate clicked one if it was off
    }));
  };

  const handleAddonToggle = (addonKey, priceIncrease) => {
    setSelectedAddons((prev) => {
      const isCurrentlySelected = prev[addonKey];
      const updated = { ...prev, [addonKey]: !isCurrentlySelected };

      setEssencialPrice((currentPrice) =>
        isCurrentlySelected ? currentPrice - priceIncrease : currentPrice + priceIncrease
      );

      return updated;
    });

    togglePackage(addonKey);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center w-2/3">
        <h1 className="text-6xl font-abril">
          Nossos Pacotes de Landing Pages — Design, Estratégia e Resultados
        </h1>
        <p className="mt-2 text-base">
          Pacotes personalizados para elevar sua presença digital e aumentar suas vendas.
        </p>
      </div>

      <span className="text-lg w-3/4 text-center">
        “Quer mais controle e flexibilidade? Monte seu pacote ideal com a TechWith2! Escolha os
        recursos que seu negócio precisa, ajuste seu investimento e crie uma landing page que
        realmente funciona para você.”
      </span>

      {/* Packages container */}
      <section className="flex flex-col lg:flex-row gap-6 w-full justify-center">
        {/* ESSENCIAL */}
        {packages.essencial && (
          <div
            className={`transition-all duration-500 overflow-hidden border border-zinc-700 bg-slate-200 rounded-lg shadow-md
            ${packages.essencial ? 'w-full max-w-4xl p-8' : 'w-auto p-4'}`}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Pacote Essencial</h2>
              <button
                className="bg-gray-900 text-white px-2 py-1 rounded"
                onClick={() => togglePackage('essencial')}
              >
                {packages.essencial ? 'Ver Melhor' : 'Fechar'}
              </button>
            </div>

            <p className="mt-2">Básico, limpo, responsivo e acessível.</p>
            <h3 className="mb-4">De R$ 125 até R$ 500</h3>
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Quero Este Por R$ {essencialPrice}
            </button>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Incluso no preço base (R$ 125):</h4>
              <ul className="list-disc list-inside mb-4">
                <li>Layout visual limpo e profissional.</li>
                <li>Design responsivo para todos os dispositivos.</li>
                <li>Configuração e implantação básicas.</li>
                <li>Suporte básico adaptado às suas necessidades.</li>
                <li>Personalização focada no seu negócio.</li>
                <li>Transparência e feedback durante todo o desenvolvimento.</li>
              </ul>

              <h4 className="font-semibold mb-2">Complementos opcionais:</h4>
              {[
                { key: 'security', label: 'Segurança', price: 50 },
                { key: 'performance', label: 'Performance', price: 60 },
                { key: 'seo', label: 'SEO', price: 80 },
                { key: 'revisoes', label: 'Revisões', price: 80 },
                { key: 'entrega', label: 'Entrega Rápida', price: 50 },
                { key: 'analytics', label: 'Analytics & Relatórios', price: 15 },
              ].map((addon) => (
                <div key={addon.key} className="mb-2">
                  <span>{addon.label}</span>
                  <button
                    className="ml-2 text-sm bg-gray-200 px-2 py-1 rounded"
                    onClick={() => handleAddonToggle(addon.key, addon.price)}
                  >
                    {selectedAddons[addon.key] ? 'Remover' : 'Deseja incluir?'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROFISSIONAL */}

        {packages.profissional && (
          <div
            className={`transition-all duration-500 overflow-hidden border border-zinc-700 bg-slate-300 rounded-lg shadow-md
    ${packages.profissional ? 'w-full max-w-4xl p-8 visible' : 'w-auto p-4'}`}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Pacote Profissional</h2>
              <button
                className="bg-gray-900 text-white px-2 py-1 rounded"
                onClick={() => togglePackage('profissional')}
              >
                {packages.profissional ? 'Fechar' : 'Ver Melhor'}
              </button>
            </div>

            <p className="mt-2">Design refinado, otimização de conversão e automações simples.</p>
            <h3 className="mb-4">De R$ 550 até R$ 1.000</h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Quero Este</button>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Incluso no preço base (R$ 550):</h4>
              <ul className="list-disc list-inside mb-4">
                <li>Layout refinado alinhado à identidade da marca.</li>
                <li>Otimização básica para conversão (CTAs claros e layout estratégico).</li>
                <li>Integração de formulários com e-mail.</li>
                <li>Melhoria de usabilidade e navegação.</li>
                <li>Suporte e personalização avançada.</li>
                <li>Transparência e feedback contínuo.</li>
              </ul>

              <h4 className="font-semibold mb-2">Complementos opcionais:</h4>
              {[
                { key: 'security', label: 'Segurança avançada', price: 50 },
                { key: 'performance', label: 'Performance intermediária', price: 60 },
                { key: 'seo', label: 'SEO intermediário', price: 40 },
                { key: 'revisoes', label: 'Revisões adicionais', price: 60 },
                { key: 'entrega', label: 'Entrega rápida (2 dias)', price: 200 },
                { key: 'analytics', label: 'Analytics completo', price: 30 },
              ].map((addon) => (
                <div key={addon.key} className="mb-2">
                  <span>{addon.label}</span>
                  <button
                    className="ml-2 text-sm bg-gray-200 px-2 py-1 rounded"
                    onClick={() => handleAddonToggle(addon.key, addon.price)}
                  >
                    {selectedAddons[addon.key] ? 'Remover' : 'Deseja incluir?'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PREMIUM */}
        {packages.premium && (
          <div
            className={`transition-all duration-500 overflow-hidden border border-zinc-700 bg-stone-200 rounded-lg shadow-md
    ${packages.profissional ? 'w-full max-w-4xl p-8 visible' : ' w-auto p-4'}`}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Pacote Premium</h2>
              <button
                className="bg-gray-900 text-white px-2 py-1 rounded"
                onClick={() => togglePackage('premium')}
              >
                {packages.premium ? 'Fechar' : 'Ver Melhor'}
              </button>
            </div>

            <p className="mt-2">Design exclusivo, integrações avançadas e otimização contínua.</p>
            <h3 className="mb-4">De R$ 1.500 até R$ 2.500</h3>
            <button className="bg-black text-white px-4 py-2 rounded-md">Quero Este</button>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Incluso no preço base (R$ 1.500):</h4>
              <ul className="list-disc list-inside mb-4">
                <li>Design exclusivo e altamente personalizado.</li>
                <li>Integrações com CRM, e-mail marketing e pagamentos online.</li>
                <li>Testes A/B básicos para otimização contínua.</li>
                <li>SEO técnico avançado e performance máxima.</li>
                <li>Suporte completo e 30 dias de acompanhamento.</li>
                <li>Personalização estratégica para seu negócio.</li>
              </ul>

              <h4 className="font-semibold mb-2">Complementos opcionais:</h4>
              {[
                { key: 'security', label: 'Segurança avançada', price: 100 },
                { key: 'performance', label: 'Performance máxima', price: 100 },
                { key: 'seo', label: 'SEO completo', price: 100 },
                { key: 'revisoes', label: 'Revisões adicionais', price: 80 },
                { key: 'entrega', label: 'Entrega super rápida (1 dia)', price: 400 },
                { key: 'analytics', label: 'Analytics avançado + relatórios', price: 50 },
              ].map((addon) => (
                <div key={addon.key} className="mb-2">
                  <span>{addon.label}</span>
                  <button
                    className="ml-2 text-sm bg-gray-200 px-2 py-1 rounded"
                    onClick={() => handleAddonToggle(addon.key, addon.price)}
                  >
                    {selectedAddons[addon.key] ? 'Remover' : 'Deseja incluir?'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
