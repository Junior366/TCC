"use client";
import { useEffect, useState } from "react";
import MensagemService from "@/services/MensagemService";
import Link from "next/link";

interface Mensagem {
  emissorMensagem: string;
  email: string;
  telefone: string;
  texto: string;
}

export default function Mensagens() {
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);

  useEffect(() => {
    async function fetchMensagens() {
      try {
        const resposta = await MensagemService.findAll();
        setMensagens(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar mensagens:", error);
      }
    }

    fetchMensagens();
  }, []);

  return (
    <section className="min-h-screen bg-zinc-50 p-10">
      {/* Título */}
      <h1 className="mb-8 text-center text-4xl font-bold text-[#D81313]">
        Mensagens Recebidas
      </h1>

      {/* Container das mensagens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {mensagens.length > 0 ? (
          mensagens.map((mensagem, index) => (
            <div
              key={index}
              className="rounded-lg border border-zinc-200 bg-white p-6 shadow-md"
            >
              <p className="mb-2 text-lg font-semibold text-[#D81313]">
                <strong>Nome:</strong> {mensagem.emissorMensagem}
              </p>
              <p className="mb-2 text-lg font-normal text-zinc-700">
                <strong>Email:</strong> {mensagem.email}
              </p>
              <p className="mb-2 text-lg font-normal text-zinc-700">
                <strong>Telefone:</strong> {mensagem.telefone}
              </p>
              <p className="text-lg font-normal text-zinc-700">
                <strong>Mensagem:</strong> {mensagem.texto}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-zinc-700">
            Nenhuma mensagem recebida.
          </p>
        )}
      </div>

      {/* Botão de Voltar para Home */}
      <div className="flex justify-center">
        <Link href="/">
          <button className="h-[45px] w-[200px] rounded-md bg-[#D81313] text-white font-semibold shadow-lg hover:bg-[#bb1010] transition-all">
            Voltar para Home
          </button>
        </Link>
      </div>
    </section>
  );
}
