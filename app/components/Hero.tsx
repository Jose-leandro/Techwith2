import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="flex-col h-auto flex justify-around items-center bg-gray-100 text-black text-center px-4 py-6 lg:flex lg:items-center lg:justify-center">
      <div className="flex flex-col items-center w-auto lg:items-center lg:w-[90%] ">
        {/* <span className="text-5xl lg:text-9xl font-abril font-normal">TechWith2 - </span> */}

        <h1 className="text-4xl w-2/3 sm:text-5xl font-bold mb-4 lg:text-7xl lg:w-auto ">
          Landing pages simples para professores de inglês divulgarem suas aulas com clareza
        </h1>
      </div>

      <div className="flex justify-around items-start w-full mt-12">
        <div className="flex flex-col">
          <a
            href="https://wa.me/5588999555985"
            target="_blank"
            className="sm:text-base text-white flex justify-around  px-6 py-3 bg-black hover:bg-blue-900 mb-1 rounded-2xl font-medium shadow-lg transition-all"
          >
            Falar comigo no WhatsApp <ArrowUpRight className="ml-0" />
          </a>

          <p>Sem compromisso • Conversa rápida • Sem promessa de resultados</p>
        </div>

        <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mb-8">
          Organize sua divulgação online em uma página profissional, direta e fácil de compartilhar
          no WhatsApp, Instagram e outros canais.
        </p>
      </div>
    </section>
  );
}
