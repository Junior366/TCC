import criarService from "@/services/criarService";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SeletorData from "../SeletorData";
import { ArrowLeft } from 'lucide-react';

export default <Data extends Record<string, any>>(
  { campos, service, padroes, transformarEnvio }:
  {
    transformarEnvio?: { [Campo in keyof Data]?: (valor: Data[Campo]) => any },
    service: ReturnType<typeof criarService<Data>>,
    campos: ({ tipo?: "select", label: string, name: keyof Data, opcoes: { texto: string, valor: string }[] } | { label: string, name: keyof Data, tipo?: "text" | "email" | "password" | "date", })[],
    extras?: {}[],
    padroes?: Partial<Data>
  }
) => {
  const router = useRouter();
  const { id } = useParams();
  const [formData, setFormData] = useState<Data>(padroes ?? {} as Data);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (id) {
      service.findById(id as string).then(dados => setFormData(dados.data));
    }
  }, [id]);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData(formData => ({ ...formData, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dados = formData;

    Object.entries(transformarEnvio ?? {}).forEach(([campo, transformar]) => {
      dados[campo] = transformar(dados[campo]);
    });

    try {
      if (id) {
        await service.update(id as string, formData);
      } else {
        await service.create(formData);
      }
      setSuccessMessage("Dados salvos com sucesso!"); // Mensagem de sucesso
      setTimeout(() => {
        router.push('/admin/mensagem'); // Redireciona para a página de mensagens após 2 segundos
      }, 2000);
    } catch (e) {
      // Handle error
    }
  };

  return (
    <section className="bg-zinc-50">
      <nav className="flex items-center bg-white p-5 shadow-md">
        <button 
          onClick={() => router.push('/')} // Redireciona para a home
          className="flex items-center text-[#D81313] hover:underline"
        >
          <ArrowLeft size={20} />
          <span className="ml-2">Voltar para Home</span>
        </button>
      </nav>
      <div className="flex min-h-screen w-full max-w-[1800px] flex-col items-center justify-center p-10">
        {successMessage && (
          <div className="mb-4 text-green-600 font-semibold">
            {successMessage}
          </div>
        )}
        <form 
          className="border border-[#D81313] rounded-lg w-[60vw] bg-white p-6 shadow-lg" 
          onSubmit={handleSubmit}
        >
          {campos.map((campo, i) => 
            campo.tipo === "select" ? (
              <div key={i} className="mb-4">
                <label className="block font-semibold mb-2">{campo.label}</label>
                <select 
                  value={formData[campo.name]} 
                  onChange={handleChange} 
                  name={campo.name as string} 
                  className="border border-gray-300 rounded p-2 w-full"
                >
                  {campo.opcoes.map(opcao => 
                    <option key={opcao.valor} value={opcao.valor}>
                      {opcao.texto}
                    </option>
                  )}
                </select>
              </div>
            ) : campo.tipo === "date" ? (
              <SeletorData 
                key={i} 
                label={campo.label} 
                formData={formData} 
                setFormData={setFormData} 
                name={campo.name as string} 
              />
            ) : (
              <div key={i} className="mb-4">
                <label className="block font-semibold mb-2">{campo.label}</label>
                <Input 
                  name={campo.name as string} 
                  type={campo.tipo} 
                  value={formData[campo.name]} 
                  onChange={handleChange} 
                  className="border border-gray-300 rounded p-2 w-full"
                />
              </div>
            )
          )}
          <div className="flex justify-between mt-4">
            <Button 
              type="submit" 
              className="bg-[#D81313] text-white"
            >
              Salvar
            </Button>
            <Button 
              type="button" 
              onClick={() => router.back()} // Permanece como estava
              className="bg-gray-300 text-black"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
