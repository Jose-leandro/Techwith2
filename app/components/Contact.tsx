import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const contatos = [
  {
    id: 1,
    tipo: 'Instagram',
    info: '@tech_with_2',
    acao: 'Enviar mensagem no Instagram',
    href: 'https://www.instagram.com/tech_with_2/',
    icon: Instagram,
  },
  {
    id: 2,
    tipo: 'WhatsApp',
    info: '+55 88 9955-5985',
    acao: 'Conversar pelo WhatsApp',
    href: 'https://wa.me/558899555985',
    icon: MessageCircle,
  },
  {
    id: 3,
    tipo: 'LinkedIn',
    info: 'TechWith2',
    acao: 'Visitar nosso LinkedIn',
    href: 'https://www.linkedin.com/company/techwith-2/',
    icon: Linkedin,
  },
];

export default function Contato() {
  return (
    <section className="mt-10 px-5 py-10">
      <h2 className="text-4xl font-abril text-gray-800 lg:text-6xl mb-10">Contato Conosco</h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contatos */}
        <div className="flex flex-col gap-6 lg:w-1/3">
          <h3 className="text-2xl text-gray-800">Vamos Construir Algo Incrível Juntos</h3>

          <div className="flex flex-col gap-4">
            {contatos.map((contato) => {
              const Icon = contato.icon;
              return (
                <div
                  key={contato.id}
                  className="border rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300 bg-white flex items-center gap-4"
                >
                  <Icon className="w-5 h-5 text-blue-600" />
                  <div>
                    <h4 className="text-xl mb-1 text-gray-800">{contato.tipo}</h4>
                    <p className="text-gray-600 mb-3">{contato.info}</p>
                    <a
                      href={contato.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      {contato.acao}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Formulário */}
        <form className="border hover:shadow-xl transition duration-300 p-6 shadow-lg rounded-xl flex-1 space-y-4">
          <h3 className="text-xl text-gray-800">Envie Uma Mensagem</h3>

          <div className="flex flex-col">
            <label htmlFor="nome" className="mb-1 text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="mensagem" className="mb-1 text-gray-700">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
