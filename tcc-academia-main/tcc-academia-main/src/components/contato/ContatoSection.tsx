'use client'

import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { ChangeEvent, useState } from 'react'
import MensagemService from '@/services/MensagemService'
import { useRouter } from 'next/router'

export default function ContatoSection() {
  const [formData, setFormData] = useState<{ email: string; password: string }>({ email: '', password: '' });
  const [message, setMessage] = useState<string>(''); // Estado para a mensagem de sucesso ou erro
  const [isLoading, setIsLoading] = useState<boolean>(false); // Estado de carregamento

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(''); // Limpa mensagem de sucesso ou erro antes de nova tentativa
    setIsLoading(true); // Inicia o estado de carregamento

    try {
      const resposta = await MensagemService.create(formData); // Envia o formulário via API

      setMessage('Sua mensagem foi enviada com sucesso!'); // Define a mensagem de sucesso
    } catch (error) {
      setMessage('Ocorreu um erro ao enviar a mensagem. Tente novamente.'); // Define mensagem de erro
    } finally {
      setIsLoading(false); // Finaliza o estado de carregamento
    }
  };

  return (
    <section className="flex h-screen items-center justify-center">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center">
        <div className="grid w-full grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-2xl font-bold">
              Entre em contato conosco
            </h1>
            <div className="mb-2 flex items-center">
              <FaWhatsapp className="mr-2" /> <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2" />{' '}
              <span>contatoenergiaeforca@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit}>
              <div className="w-full">
                <Label>Nome</Label>
                <Input
                  onChange={handleChange}
                  name='emissorMensagem'
                  type="text"
                  placeholder="Nome"
                  className="mb-4 w-full rounded-[5px] border border-none bg-[#F5F5F5] font-bold text-[#A2A7A9]"
                  required
                />
              </div>
              <div className="w-full">
                <Label>E-mail</Label>
                <Input
                  onChange={handleChange}
                  name='email'
                  type="email"
                  placeholder="E-mail"
                  className="mb-4 w-full rounded-[5px] border border-none bg-[#F5F5F5] font-bold text-[#A2A7A9]"
                  required
                />
              </div>
              <div className="w-full">
                <Label>Telefone</Label>
                <Input
                  onChange={handleChange}
                  name='telefone'
                  type="tel"
                  placeholder="Número"
                  className="mb-4 w-full rounded-[5px] border border-none bg-[#F5F5F5] font-bold text-[#A2A7A9]"
                  required
                />
              </div>
              <div className="w-full">
                <Label>Mensagem</Label>
                <Input
                  onChange={handleChange}
                  name="texto"
                  type="text"
                  placeholder="Mensagem"
                  className="mb-4 w-full rounded-[5px] border border-none bg-[#F5F5F5] font-bold text-[#A2A7A9]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="h-[35px] w-[150px] rounded-[4px] bg-[#D81313] font-semibold text-white shadow-sm"
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar'}
              </Button>
            </form>

            {/* Exibir mensagem de sucesso ou erro */}
            {message && (
              <p className={`mt-4 ${message.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
