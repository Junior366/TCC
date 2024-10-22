'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function GridModalidades() {
  return (
    <section className="bg-zinc-50 py-14">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center">
        <div className='flex flex-col gap-5 w-full'>
          <div className="flex flex-row h-auto gap-5 justify-between p-5 shadow-md w-full rounded-[8px] border border-zinc-100">
            <Image 
             src="/modalidades/musculacao.jpg"
             alt="modalidade img"
             width={400}
             height={400}
            />
             <div className='flex flex-col justify-end items-end max-w-[500px]'>
              <p>Treinamento resistido ou treinamento contra a resistência, sendo a principal modalidade praticada nas academias, tem como objetivos a: hipertrofia muscular, resistência muscular, fortalecimento e prevenção da musculatura a fim de evitar lesões</p>
             </div>
            <div className='flex flex-col justify-end items-end'>
              <span>Musculação</span>
              <span>Dificuldade: média</span>
              <span>Disponivél 05 ás 23</span>
              <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-blue-700 transition">
            Inscrever-se para período teste
            </button>
            </div>
          </div>
          <div className="flex flex-row h-auto gap-5 justify-between p-5 shadow-md w-full rounded-[8px] border border-zinc-100">
            <Image 
             src="/modalidades/crossfit.jpg"
             alt="modalidade img"
             width={400}
             height={400}
            />
             <div className='flex flex-col justify-end items-end max-w-[500px]'>
              <p>O CrossFit é uma modalidade de treinamento físico que combina exercícios de alta intensidade, envolvendo movimentos funcionais como levantamento de peso, corrida, saltos, ginástica e mais. Com foco na variação constante dos treinos, o CrossFit melhora a força, resistência cardiovascular, flexibilidade, agilidade e coordenação.</p>
             </div>
            <div className='flex flex-col justify-end items-end'>
              <span>Crossfit</span>
              <span>Dificuldade: média</span>
              <span>Disponivél 05 ás 23</span>
              <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-blue-700 transition">
            Inscrever-se para período teste
            </button>
            </div>
          </div>
             <div className="flex flex-row h-auto gap-5 justify-between p-5 shadow-md w-full rounded-[8px] border border-zinc-100">
            <Image 
             src="/modalidades/boxe.jpg"
             alt="modalidade img"
             width={400}
             height={400}
            />
             <div className='flex flex-col justify-end items-end max-w-[500px]'>
              <p>O boxe é um esporte de combate que envolve a troca de golpes utilizando apenas os punhos, com foco em técnica, velocidade e força. Além de ser uma atividade física intensa, que melhora o condicionamento cardiovascular, a resistência e a coordenação motora, o boxe também promove o desenvolvimento da disciplina e da autoconfiança.</p>
             </div>
            <div className='flex flex-col justify-end items-end'>
              <span>Boxe</span>
              <span>Dificuldade: média/alta</span>
              <span>Disponivél 19 ás 20:30</span>
              <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-blue-700 transition">
            Inscrever-se para período teste
            </button>
            </div>
          </div>
          <div className="flex flex-row h-auto gap-5 justify-between p-5 shadow-md w-full rounded-[8px] border border-zinc-100">
            <Image 
             src="/modalidades/karate.jpg"
             alt="modalidade img"
             width={400}
             height={400}
            />
             <div className='flex flex-col justify-end items-end max-w-[500px]'>
              <p>O karatê é uma arte marcial japonesa que combina técnicas de defesa pessoal, disciplina física e mental. Caracterizado por golpes precisos com as mãos, cotovelos, joelhos e pés, o karatê desenvolve força, flexibilidade e agilidade. Além dos aspectos físicos, ele valoriza princípios como respeito, autocontrole e superação pessoal.</p>
             </div>
            <div className='flex flex-col justify-end items-end'>
              <span>karate</span>
              <span>Dificuldade: média</span>
              <span>Disponivél 18 ás 19</span>
              <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-blue-700 transition">
            Inscrever-se para período teste
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
