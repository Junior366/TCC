"use client";
import { useEffect, useState } from "react";
import MensagemService from "@/services/MensagemService";

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
    <section className="bg-zinc-50">
      <h1 className="text-2xl font-bold">Mensagens Recebidas</h1>
      <div className="flex flex-col gap-4">
        {mensagens.length > 0 ? (
          mensagens.map((mensagem, index) => (
            <div key={index} className="p-4 border shadow-md">
              <p><strong>Nome:</strong> {mensagem.emissorMensagem}</p>
              <p><strong>Email:</strong> {mensagem.email}</p>
              <p><strong>Telefone:</strong> {mensagem.telefone}</p>
              <p><strong>Mensagem:</strong> {mensagem.texto}</p>
            </div>
          ))
        ) : (
          <p>Nenhuma mensagem recebida.</p>
        )}
      </div>
    </section>
  );
}
