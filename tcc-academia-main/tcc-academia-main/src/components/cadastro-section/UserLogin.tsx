"use client"
import { ChangeEvent, useState } from 'react';
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import UsuarioService from '@/services/UsuarioService';
import { Target } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Navigate, useNavigate } from 'react-router-dom';


export default function UserCadastro() {
  const router = useRouter();
  
  const [formData, setFormData] = useState<
    { nome: string; email: string; password: string; dataNasc: Date; nivelAcesso: string; }>
      ({ nome: '', email: '', password: '',  dataNasc: new Date (), nivelAcesso: ''});
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    UsuarioService.create(formData).then(
      (response) => {
        setMessage(response.data.message);
        ('/profile')

      }, (error) => {
        const message = error.response.data.message;
        setMessage(message);
        router.push("/")
      }
    )
  }

  return (
    <section className="flex h-screen items-center justify-center bg-gradient-to-b from-[#D81313] to-white">
      <div className="flex w-full max-w-[1800px] flex-col items-center justify-center p-10">
        <form onSubmit={handleSubmit}
          className="flex h-auto w-[500px] flex-col items-center justify-center rounded-bl-[50px] rounded-br-[8px] rounded-tl-[8px] rounded-tr-[50px] border bg-white p-5 shadow-lg">
          <h2 className="pb-14 pt-12 text-2xl font-semibold text-black">
            Cadastro
          </h2>
          <div className="flex w-full flex-col items-center justify-center gap-y-4 pb-14">
            <div className="w-[350px]">
              <Input
                type="text"
                id="name"
                name="nome"
                value={formData.nome || ""}
                onChange={handleChange}
                placeholder="nome"
                className="w-full rounded-[5px] border border-none bg-[#F5F5F5] font-bold text-[#A2A7A9]" required
              />
            </div>
            <div className="w-[350px]">
              <Input
                type="email"
                id="email"
                placeholder="e-mail"
                className="w-full rounded-[5px] border border-none bg-[#F5F5F5] font-bold text-[#A2A7A9]" required
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="w-[350px]">
              <Input
                type="password"
                id="password"
                placeholder="senha"
                className="w-full rounded-[5px] border border-none bg-[#F5F5F5] font-bold text-[#A2A7A9]" required
                onChange={handleChange}
                name="senha"
              />
            </div>
          </div>
          <div className="w-[350px] mx-auto">
            <label htmlFor="confirm-password" className="block text-center mb-2 font-bold text-[#A2A7A9]">
            </label>
            <Input
              type="password"
              id="confirm-password"
              placeholder="Confirmar Senha"
              className="w-full rounded-[5px] border border-none bg-[#F5F5F5] font-bold text-[#A2A7A9] p-2" required
            />
          </div>

          <div className="w-[350px] mx-auto">
            <label htmlFor="date-of-birth" className="block text-center mb-2 font-bold text-[#A2A7A9]">
              Data de Nascimento
            </label>
            <div className="flex justify-between">
              <select
              onChange={(e)=>{formData.dataNasc.setDate(parseInt(e.target.value))
                setFormData({...formData})}}
                value={formData.dataNasc.getDate()}
                id="day"
                className="w-[30%] rounded-[5px] border border-none bg-[#F5F5F5] font-bold text-[#A2A7A9] p-2" required
              >
                <option value="">Dia</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select
                id="month"
                className="w-[30%] rounded-[5px] border border-none bg-[#F5F5F5] font-bold text-[#A2A7A9] p-2" required
                onChange={(e)=>{formData.dataNasc.setMonth(parseInt(e.target.value))
                  setFormData({...formData})}}
                  value={formData.dataNasc.getMonth()}
              >
                
                <option value="">Mês</option>
                {[
                  "Janeiro",
                  "Fevereiro",
                  "Março",
                  "Abril",
                  "Maio",
                  "Junho",
                  "Julho",
                  "Agosto",
                  "Setembro",
                  "Outubro",
                  "Novembro",
                  "Dezembro",
                ].map((month, index) => (
                  <option key={index} value={index + 1}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                id="year"
                className="w-[30%] rounded-[5px] border border-none bg-[#F5F5F5] font-bold text-[#A2A7A9] p-2" required
                onChange={(e)=>{
                  console.log(e.target.value)
                  formData.dataNasc.setFullYear(parseInt(e.target.value))
                  console.log(formData.dataNasc.getFullYear())
                  setFormData({...formData})}}
                  value={formData.dataNasc.getFullYear()}
              >
                <option value="">Ano</option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i} value={2024 - i}>
                    {2024 - i}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="pb-10">
            <Button className="h-[35px] w-[150px] rounded-[4px] bg-[#D81313] font-semibold text-white shadow-sm">
              Cadastrar
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
