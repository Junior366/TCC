import MensagemService from "@/services/MensagemService";
import TabelaAdmin from "../TabelaAdmin";
import { ArrowLeft, Plus } from 'lucide-react';
import Link from 'next/link';

export default function MensagensPage() {
  return (
    <section className="bg-zinc-50">
      <nav className="flex items-center bg-white p-5 shadow-md">
        <Link href="/" className="flex items-center text-[#D81313] hover:underline">
          <ArrowLeft size={20} />
          <span className="ml-2">Voltar para Home</span>
        </Link>
        <Link href="/admin/mensagem/adicionar" className="ml-auto flex items-center bg-[#D81313] text-white p-2 rounded hover:bg-red-600">
          <Plus className="mr-2" size={18} />
          Adicionar
        </Link>
      </nav>
      <div className="flex min-h-screen w-full max-w-[1800px] flex-col items-center justify-start p-10">
        <div className="w-full bg-white rounded-lg shadow-lg p-6">
          <TabelaAdmin
            rota="/admin/mensagem"
            consultados={["texto", "emissorMensagem", "email", "telefone"]}
            cabecalho={["Id", "Texto", "Emissor", "Email", "Telefone"]}
            service={MensagemService}
            celulas={["id", "texto", "emissorMensagem", "email", "telefone"]}
          />
        </div>
      </div>
    </section>
  );
}
