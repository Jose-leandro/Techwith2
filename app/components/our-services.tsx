import { BadgeDollarSign, Megaphone, Send } from 'lucide-react';

export default function OurServices() {
  const services = [
    {
      id: 1,
      title: 'Landing Pages de Venda',
      description:
        'Páginas otimizadas para conversão de cursos e infoprodutos, com design estratégico e copy persuasiva.',
      icone: BadgeDollarSign,
    },
    {
      id: 2,
      title: 'Páginas de Captura de Leads',
      description:
        'Construa listas qualificadas de potenciais alunos com formulários e materiais gratuitos.',
      icone: Send,
    },
    {
      id: 3,
      title: 'Lançamentos e Campanhas',
      description:
        'Landing pages estratégicas para lançamentos e promoções, focadas em conversão rápida.',
      icone: Megaphone,
    },
  ];

  return (
    <section className="bg-white mt-10 mb-10 py-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center px-5 lg:px-20">
        <h2 className="text-6xl font-abril font-bold text-gray-800 mb-5 md:mb-0">
          Nossos Serviços
        </h2>

        <button className="rounded-md h-auto px-4 py-2 text-xl bg-blue-600 text-white hover:bg-blue-700 transition w-1/2 md:w-72">
          Pegar nossos serviços
        </button>
      </div>

      <p className="mt-4 px-5 text-gray-600 max-w-3xl">
        Especializados em infoprodutos e cursos online, criamos landing pages que convertem,
        capturam leads e potencializam lançamentos.
      </p>

      <div className="flex flex-col lg:flex-row justify-around mt-10 gap-8 px-5 lg:px-20">
        {services.map((service) => {
          const IconComponent = service.icone;
          return (
            <div
              key={service.id}
              className="bg-white shadow-md border border-gray-200 rounded-2xl flex flex-col lg:flex-row items-start p-6 w-full lg:w-1/4"
            >
              <IconComponent className="w-20 h-20 text-blue-600 mb-4" />

              <div className="flex flex-col mt-4 lg:mt-0 lg:ml-5">
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <button className="mt-4 text-blue-600 hover:underline">Saiba mais &gt;</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
