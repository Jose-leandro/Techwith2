import { CheckIcon, X } from 'lucide-react';

export default function Garantia() {
  return (
    <section className="mt-10 px-32 bg-slate-200 py-10 flex justify-start flex-wrap  items-start">
      <div className="w-[28%] ">
        <h2 className="text-4xl font-extrabold text-gray-800 lg:text-4xl">Garantia</h2>
        <span>Garantia de 30 dias</span>
      </div>

      <div className="rounded-lg bg-slate-400 py-7 px-12 mt-5">
        <h3>
          Se você não ficar satisfeito com a qualidade técnica da landing page, faço os ajustes
          necessários ou, se preferir, posso realizar o reembolso.
        </h3>
      </div>
      <span className="mt-5">
        A garantia não se refere a resultados comerciais, número de alunos ou vendas.
      </span>
    </section>
  );
}
