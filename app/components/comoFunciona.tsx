import {
  CardSim,
  CheckIcon,
  ChevronRight,
  ChevronsLeftRightEllipsis,
  FileStack,
  MessageSquareMore,
  PackageCheck,
  X,
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Conversamos rapidamente para alinhar o que você precisa ',
    icone: MessageSquareMore,
  },
  {
    id: 2,
    title: 'Você preenche um briefing simples',
    icone: CardSim,
  },
  {
    id: 3,
    title: 'Crio a landing page em até 5 dias úteis',
    icone: ChevronsLeftRightEllipsis,
  },
  {
    id: 4,
    title: 'Você revisa e pede ajustes (1 rodada incluída)',
    icone: FileStack,
  },
  {
    id: 5,
    title: 'Entrego a versão final e explico como usar',
    icone: PackageCheck,
  },
];

export default function ComoFunciona() {
  return (
    <section className="mt-10 px-4 py-10 flex flex-col justify-center  items-center">
      <div className="w-[28%] ">
        <h2 className="text-4xl font-extrabold text-gray-800 lg:text-4xl">Como Funciona</h2>
        <span>O processo é direto e sem complicação</span>
      </div>

      {/* <h2 className="mt-10 w-full text-center font-bold text-lg">
        Uma página onde o aluno entende rapidamente:
      </h2> */}
      <div className="flex flex-col lg:flex-row  justify-around mt-6 gap-8 px-5 lg:px-20">
        {services.map((service) => {
          const IconComponent = service.icone;

          return (
            <div key={service.id} className="flex justify-evenly items-center">
              <div className="bg-white shadow-md border border-gray-300 rounded-2xl m-1 flex flex-col lg:flex-row items-start lg:items-center lg:justify-center py-3 px-4 w-full lg:w-auto lg:h-[200px] ">
                <div className="flex flex-col mt-4 lg:mt-0 lg:ml-5">
                  <h3 className=" text-gray-800">
                    {IconComponent && <IconComponent className="w-7 h-7 text-blue-600 mb-4 ml-4" />}{' '}
                    {service.title}
                  </h3>
                </div>
              </div>

              {service.id <= 4 ? (
                <ChevronRight className="w-16 h-16 text-blue-600 mb-4 ml-4" />
              ) : null}
            </div>
          );
        })}
      </div>

      {/* <span className="flex">
        <X className="text-red-800" /> Não é para quem procura promessas mágicas ou resultados
        garantidos.
      </span> */}

      {/* <p className="w-[30%] font-bold text-lg ml-8 mt-16">
        Nada de promessas irreais.<br></br>O foco é clareza, organização e facilidade de contato.
      </p> */}
    </section>
  );
}
