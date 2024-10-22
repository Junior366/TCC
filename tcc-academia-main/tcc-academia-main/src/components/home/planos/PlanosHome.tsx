'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Planos() {
  return (
    <section className="bg-zinc-50 py-14">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center">
        <div className="">
          <h1 className="pb-16 text-3xl font-bold text-[#D81313]">
            Confira os nossos planos
          </h1>
        </div>

        <div className="grid grid-cols-3 grid-rows-1 items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-[450px] w-full flex-col justify-center rounded-[12px] bg-white p-5 shadow-md">
              <div className="flex flex-col items-center ">
                <span className="text-xl font-semibold text-[#D81313]">
                  Mensal
                </span>
                <span className="text-2xl font-bold text-[#D81313]">
                  R$150,00
                </span>
              </div>
              <div className="flex w-full flex-col justify-center pt-10">
                <ul className="text-zinc-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={12} /> Escolha a uma modalidade de sua prefêrencia
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={12} />
                    direito a uma avaliação por mês
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={12} />
                    Sem restrição de horários
                  </li>
                </ul>
              </div>
              <div className="w-full pt-10">
                <Button className="w-full bg-[#D81313] text-white">
                  Matricular-se
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-[450px] w-full flex-col justify-center rounded-[12px] bg-white p-5 shadow-md">
              <div className="flex flex-col items-center ">
                <span className="text-xl font-semibold text-[#D81313]">
                  Semenstral
                </span>
                <span className="text-2xl font-bold text-[#D81313]">
                  R$350,00
                </span>
              </div>
              <div className="flex w-full flex-col justify-center pt-10">
                <ul className="text-zinc-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={12} /> Acesso total a estrutura da
                    academia
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={12} />
                    avaliação ilimitada
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={12} />
                    escolha a duas modalidades de sua prência
                  </li>

                  <li className="flex items-center gap-2">
                    <CheckCircle size={12} />
                    Sem restrição de horários
                  </li>
                </ul>
              </div>
              <div className="w-full pt-10">
                <Button className="w-full bg-[#D81313] text-white">
                  Matricular-se
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-[450px] w-full flex-col justify-center rounded-[12px] bg-white p-5 shadow-md">
              <div className="flex flex-col items-center ">
                <span className="text-xl font-semibold text-[#D81313]">
                  Anual
                </span>
                <span className="text-2xl font-bold text-[#D81313]">
                  R$1.300,00
                </span>
              </div>
              <div className="flex w-full flex-col justify-center pt-10">
                <ul className="text-zinc-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={12} /> Acesso total a estrutura da
                    academia
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={12} />
                    Acesso a todas as modalidades
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={12} />
                    Treino em todas as unidades
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={12} />
                    Sem restrição de horários
                  </li>
                </ul>
              </div>
              <div className="w-full pt-10">
                <Button className="w-full bg-[#D81313] text-white">
                  Matricular-se
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
