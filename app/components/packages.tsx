'use client';
import { Check, X } from 'lucide-react';
import { useState } from 'react';

export default function Packages() {
  const [packages, setPackages] = useState({
    basico: true,
    // profissional: true,
    premium: true,
  });

  // Essencial price + addons
  // const [essencialPrice, setEssencialPrice] = useState(600);
  // const [selectedAddons, setSelectedAddons] = useState({
  //   security: false,
  //   // performance: false,
  //   // seo: false,
  //   // revisoes: false,
  //   // entrega: false,
  //   // analytics: false,
  // });

  // const togglePackage = (packageName: string) => {
  //   setPackages((prev) => ({
  //     basico: false,
  //     // profissional: false,
  //     premium: false,
  //     [packageName]: prev[packageName] ? true : false, // activate clicked one if it was off
  //   }));
  // };

  // const handleAddonToggle = (addonKey: string, priceIncrease: number) => {
  //   setSelectedAddons((prev) => {
  //     const isCurrentlySelected = prev[addonKey];
  //     const updated = { ...prev, [addonKey]: !isCurrentlySelected };

  //     setEssencialPrice((currentPrice) =>
  //       isCurrentlySelected ? currentPrice - priceIncrease : currentPrice + priceIncrease
  //     );

  //     return updated;
  //   });

  //   togglePackage(addonKey);
  // };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center w-2/3">
        <h2 className="text-4xl font-extrabold text-gray-800 lg:text-4xl">Preços</h2>
        <p className="mt-2 text-base">Explore as opções de investimneto atualmente</p>
      </div>

      {/* <span className="text-lg w-3/4 text-center">
        “Quer mais controle e flexibilidade? Monte seu pacote ideal com a TechWith2! Escolha os
        recursos que seu negócio precisa, ajuste seu investimento e crie uma landing page que
        realmente funciona para você.”
      </span> */}

      {/* Packages container */}
      <section className="flex flex-col lg:flex-row gap-6 w-full justify-center">
        {/* ESSENCIAL */}
        {packages.basico && (
          <div
            className={`transition-all duration-500 overflow-hidden border border-zinc-700 bg-slate-200 rounded-lg shadow-md w-auto p-4
           
            `}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">LANDING PAGE PADRÃO</h2>
              {/* <button
                className="bg-gray-900 text-white px-2 py-1 rounded"
                onClick={() => togglePackage('essencial')}
              >
                {/* {packages.basico ? 'Ver Melhor' : 'Fechar'} */}
              {/* </button>  */}
            </div>

            <p className="mt-2">
              Landing page simples para professores de inglês, focada em clareza da oferta,
              apresentação profissional e facilidade de contato.
            </p>
            {/* <h3 className="mb-4">De R$ 125 até R$ 500</h3> */}
            <span className="text-4xl font-bold flex flex-col mt-9">
              R$ 600 à vista <span className="text-xl">Ou 2x de R$ 450</span>{' '}
            </span>

            <button className="bg-black text-white px-4 mt-2 py-2 rounded-md">Quero Este</button>

            <div className="mt-8">
              <h4 className="font-semibold mb-2">LANDING PAGE PADRÃO INCLUI:</h4>
              <ul className=" mb-4">
                <li className="flex">
                  <Check className="text-blue-600 w-5 h-5  mr-1" /> Design responsivo (celular + PC)
                </li>
                <li className="flex">
                  <Check className="text-blue-600 w-5 h-5  mr-1" />7 seções estruturadas (hero +
                  sobre + benefícios + depoimentos + preço + FAQ + CTA)
                </li>
                <li className="flex">
                  <Check className="text-blue-600 w-5 h-5  mr-1" />
                  Copywriting básico focado em conversão
                </li>
                <li className="flex">
                  <Check className="text-blue-600 w-5 h-5  mr-1" />
                  Integração WhatsApp/Email
                </li>
                <li className="flex">
                  <Check className="text-blue-600 w-5 h-5  mr-1" />1 round ajustes grátis (até 5
                  mudanças)
                </li>
                <li className="flex">
                  <Check className="text-blue-600 w-5 h-5  mr-1" />
                  Prazo entrega de 5 dias úteis após envio das informações
                </li>
                <li className="flex">
                  <Check className="text-blue-600 w-5 h-5  mr-1" />
                  30 dias suporte técnico
                </li>
                <li className="flex">
                  <Check className="text-blue-600 w-5 h-5  mr-1" />
                  Garantia de qualidade técnica
                </li>
              </ul>

              <h4 className="font-semibold mb-2">LANDING PAGE PADRÃO NÂO INCLUI:</h4>
              <ul className=" mb-4">
                <li className="flex">
                  <X className="text-red-600 w-5 h-5  mr-1" /> Hospedagem (Serviço separado)
                </li>
                <li className="flex">
                  <X className="text-red-600 w-5 h-5  mr-1" /> Domínio (Serviço separado)
                </li>
                <li className="flex">
                  <X className="text-red-600 w-5 h-5  mr-1" /> Ads/tráfego (cliente contrata)
                </li>
                <li className="flex">
                  <X className="text-red-600 w-5 h-5  mr-1" /> SEO (serviço separado)
                </li>
              </ul>

              <h4 className="font-semibold mb-2">SUPORTE OPCIONAL (R$97/mês):</h4>
              <ul className=" mb-4">
                <li className="flex">
                  <Check className="text-blue-600 w-5 h-5  mr-1" />
                  Hospedagem da landing page
                </li>
                <li className="flex">
                  <Check className="text-blue-600 w-5 h-5  mr-1" />
                  Manutenção técnica (site no ar)
                </li>
                <li className="flex">
                  <Check className="text-blue-600 w-5 h-5  mr-1" /> Pequenos ajustes de texto (1–2
                  por mês)
                </li>
                <li className="flex">
                  <Check className="text-blue-600 w-5 h-5  mr-1" /> Ajustes de botão / WhatsApp /
                  links
                </li>
                <li className="flex">
                  <Check className="text-blue-600 w-5 h-5  mr-1" /> Suporte via WhatsApp
                </li>
                <li className="flex">
                  <Check className="text-blue-600 w-5 h-5  mr-1" /> Backup + segurança básica
                </li>
                <li className="flex">
                  <Check className="text-blue-600 w-5 h-5  mr-1" /> Mínimo 3 meses
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* PREMIUM
        {packages.premium && (
          <div
            className={`transition-all duration-500 overflow-hidden border border-zinc-700 bg-stone-200 rounded-lg shadow-md w-[30%] p-4
    
    `}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Serviço de Assinatura Mensal</h2>
            </div>

            <p className="mt-2 ">
              Para manter tudo no ar, atualizado e funcionando, existe uma assinatura de R$ 97/mês,
              que cobre hospedagem, manutenção e suporte.
            </p>
            <span className="text-4xl font-bold flex flex-col mt-9">R$ 97/mês</span>
            <button className="bg-black text-white px-4 py-2 rounded-md mt-8">Quero Este</button>

            <div className="mt-4">
              {/* <h4 className="font-semibold mb-2">Incluso no preço base (R$ 1.500):</h4> */}
        {/* <ul className=" mb-4">
          <li className="flex">
            <Check className="text-blue-600 w-5 h-5  mr-1" /> Hospedagem da landing page
          </li>
          <li className="flex">
            <Check className="text-blue-600 w-5 h-5  mr-1" />
            Manutenção técnica (site no ar)
          </li>
          <li className="flex">
            <Check className="text-blue-600 w-5 h-5  mr-1" />
            Pequenos ajustes de texto (1–2 por mês)
          </li>
          <li className="flex">
            <Check className="text-blue-600 w-5 h-5  mr-1" />
            Ajustes de botão / WhatsApp / links
          </li>
          <li className="flex">
            <Check className="text-blue-600 w-5 h-5  mr-1" />
            Suporte via WhatsApp
          </li>
          <li className="flex">
            <Check className="text-blue-600 w-5 h-5  mr-1" />
            Backup + segurança básica
          </li>
        </ul> */}
      </section>
    </div>
  );
}
