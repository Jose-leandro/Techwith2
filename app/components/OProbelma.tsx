import { CheckIcon, X } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Não têm um site ou página clara',
    // icone: CheckIcon,
  },
  {
    id: 2,
    title: 'Usam só mensagens soltas no WhatsApp',
    // icone: CheckIcon,
  },
  {
    id: 3,
    title: 'Cada interessado recebe uma explicação diferente',
    // icone: CheckIcon,
  },
  {
    id: 4,
    title: 'Falta um ponto único para centralizar as informações',
    // icone: CheckIcon,
  },
];

export default function OProbelma() {
  return (
    <section className="mt-10 px-32 bg-slate-200 py-10 flex justify-start flex-wrap  items-start">
      <div className="w-[28%] ">
        <h2 className="text-4xl font-extrabold text-gray-800 lg:text-4xl">O problema</h2>
        <span>Muitos professores têm dificuldade em divulgar suas aulas online porque</span>
      </div>

      {/* <div className="flex flex-col lg:flex-row justify-around mt-10 gap-8 px-5 lg:px-20"> */}
      {services.map((service) => {
        {
          /* const IconComponent = service.icone; */
        }
        return (
          <div
            key={service.id}
            className="bg-white shadow-md border border-gray-300 rounded-2xl m-4 flex flex-col lg:flex-row items-start lg:items-center lg:justify-center py-3 px-4 w-full lg:w-1/4 lg:h-[200px] "
          >
            {/* <IconComponent className="w-7 h-7 text-blue-600 mb-4" /> */}

            <div className="flex flex-col mt-4 lg:mt-0 lg:ml-5">
              <h3 className=" text-gray-800">{service.title}</h3>
            </div>
          </div>
        );
      })}
      {/* </div> */}

      {/* <span className="flex">
        <X className="text-red-800" /> Não é para quem procura promessas mágicas ou resultados
        garantidos.
      </span> */}

      <p className="w-[30%] font-bold text-lg ml-8 mt-16">
        Isso gera confusão, perda de interesse e muito tempo gasto repetindo as mesmas explicações.
      </p>
    </section>
  );
}
