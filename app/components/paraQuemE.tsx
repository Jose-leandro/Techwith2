import { CheckIcon, X } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Dá aulas particulares ou cursos de inglês',
    icone: CheckIcon,
  },
  {
    id: 2,
    title: 'Depende muito de indicação para conseguir alunos',
    icone: CheckIcon,
  },
  {
    id: 3,
    title: 'Explica suas aulas várias vezes por WhatsApp',
    icone: CheckIcon,
  },
  {
    id: 4,
    title: 'Quer um lugar único para apresentar seu trabalho',
    icone: CheckIcon,
  },
];

export default function ParaQuemE() {
  return (
    <section className="mt-10 px-5 py-10">
      <h2 className="text-4xl font-extrabold text-gray-800 lg:text-4xl">Para Quem É</h2>
      <span>Essa landing page é para me se</span>

      <div className="flex flex-col lg:flex-row justify-around mt-10 gap-8 px-5 lg:px-20">
        {services.map((service) => {
          const IconComponent = service.icone;
          return (
            <div
              key={service.id}
              className="bg-white shadow-md border border-gray-200 rounded-2xl flex flex-col lg:flex-row items-start py-3 px-4 w-full lg:w-1/4"
            >
              <IconComponent className="w-7 h-7 text-blue-600 mb-4" />

              <div className="flex flex-col mt-4 lg:mt-0 lg:ml-5">
                <h3 className=" text-gray-800">{service.title}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* <span className="flex">
        <X className="text-red-800" /> Não é para quem procura promessas mágicas ou resultados
        garantidos.
      </span> */}
    </section>
  );
}
