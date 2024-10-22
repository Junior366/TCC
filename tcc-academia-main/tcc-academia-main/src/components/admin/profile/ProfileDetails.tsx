"use client"
import { Button } from '@/components/ui/button';
import UsuarioService from '@/services/UsuarioService';
import { LogOut, Pen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Profile() {
  const router = useRouter()
  const userJson = localStorage.getItem("user")
  const user = JSON.parse(userJson || "{}")
  const [userData, setUserData] = useState<{ nome: string, email: string, dataNasc: string, nivelAcesso: string }|undefined>()
  const { userId = user.id } = useParams()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      }

  async function getUser() {
    const resposta = await UsuarioService.findById(userId)
    setUserData(resposta.data)
  }

  useEffect(()=> {
    getUser()
  }, [])

  return (
    <section className="bg-zinc-50">
    <nav className="flex h-auto items-center bg-[#D81313] px-5 py-3">
      <Link href={'/'}>
      <button >
        <LogOut className="text-white" size={20} />
      </button>
      </Link>
    </nav>
      <div className="flex min-h-screen w-full max-w-[1800px] flex-col items-center justify-center p-10">
        <div className="flex flex-col justify-center rounded-[8px] bg-white p-10 shadow-lg">
          <div className="flex items-center gap-5">
            <Image
              src="/profile.svg"
              width={185}
              height={185}
              alt="logo Energia e Força"
            />
            <span className="text-2xl font-semibold text-[#D81313]">
              {userData?.nome}
            </span>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-black">e-mail</span>
              <span className="text-lg font-normal text-black">
                {userData?.email}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-black">
                nível de acesso
              </span>
              <span className="text-lg font-normal text-black"> {userData?.nivelAcesso}</span>
            </div>
            <div className="flex items-center text-[#D81313]">
              <Pen size={18} />
              <span className="text-lg font-semibold">editar perfil</span>
            </div>
          </div>
        </div>
         <span onClick={() => {
          localStorage.removeItem("user")
          router.replace ("/")
          
         }} className="text-md font-medium text-[#D81313] underline"> Desconectar</span>
      </div>
    </section>
  )
}
