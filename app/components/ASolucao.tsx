import { CheckIcon, X } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Quem você é',
    // icone: CheckIcon,
  },
  {
    id: 2,
    title: 'Como funcionam suas aulas',
    // icone: CheckIcon,
  },
  {
    id: 3,
    title: 'Para quem elas são',
    // icone: CheckIcon,
  },
  {
    id: 4,
    title: 'Como entrar em contato com você',
    // icone: CheckIcon,
  },
];

export default function ASolucao() {
  return (
    <section className="mt-10 px-4 py-10 flex flex-col justify-center  items-center">
      <div className="w-[28%] ">
        <h2 className="text-4xl font-extrabold text-gray-800 lg:text-4xl">A SOLUÇÃO</h2>
        <span>A solução é uma landing page simples e bem organizada.</span>
      </div>

      <h2 className="mt-10 w-full text-center font-bold text-lg">
        Uma página onde o aluno entende rapidamente:
      </h2>
      <div className="flex flex-col lg:flex-row  justify-around mt-3 gap-8 px-5 lg:px-20">
        {services.map((service) => {
          {
            /* const IconComponent = service.icone netflix:///app?source_type=1
            ; */
          }
          return (
            <div
              key={service.id}
              className="bg-white shadow-md border border-gray-300 rounded-2xl m-4 flex flex-col lg:flex-row items-start lg:items-center lg:justify-center py-3 px-4 w-full lg:w-1/4 lg:h-[200px] "
            >
              {/* <IconComponent className="w-7 h-7 text-blue-600 mb-4" /> */}

              <div className="flex flex-col mt-4 lg:mt-0 lg:ml-5">
                <h3 className=" text-gray-800">
                  <span className="text-3xl text-blue-600 text-extrabold"> {service.id}.</span>{' '}
                  {service.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* <span className="flex">
        <X className="text-red-800" /> Não é para quem procura promessas mágicas ou resultados
        garantidos.
      </span> */}

      <p className="w-[30%] font-bold text-lg ml-8 mt-16">
        Nada de promessas irreais.<br></br>O foco é clareza, organização e facilidade de contato.
      </p>
    </section>
  );
}
