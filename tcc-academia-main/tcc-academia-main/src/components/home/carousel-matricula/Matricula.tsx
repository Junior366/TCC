'use client'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Matricula() {
  const peopleData = [
    {
      name: 'Musculação',
      image: '/matricula/musculacao.jpg',
      description:
        'A musculação é uma modalidade de exercício que oferece uma série de vantagens significativas para a saúde e o bem-estar. Ao utilizar pesos e equipamentos, ela permite o desenvolvimento da força e da massa muscular, o que resulta em um corpo mais tonificado e definido. ',
    },
    {
      name: 'Crossfit',
      image: '/matricula/crossfit.png',
      description:
        'O CrossFit é uma modalidade de treinamento que combina exercícios funcionais de alta intensidade, proporcionando uma série de vantagens para quem busca melhorar a forma física. Uma das principais características do CrossFit é sua abordagem variada, que inclui levantamento de pesos, ginástica e cardio, garantindo que os praticantes trabalhem diferentes grupos musculares de maneira dinâmica.',
    },
    {
      name: 'Àrea cardio',
      image: '/matricula/cardio.jpg',
      description:
      'Os exercícios de cardio, como correr, pedalar etc. são essenciais para a saúde física e mental. Eles fortalecem o coração, melhoram a resistência e ajudam na queima de calorias, contribuindo para a perda de peso. Além disso, a prática regular de cardio libera endorfinas, promovendo uma sensação de bem-estar e reduzindo o estresse. Com benefícios que vão desde a melhora da qualidade do sono até o fortalecimento do sistema imunológico, incorporar o cardio na rotina é uma excelente maneira de garantir um estilo de vida saudável e ativo.',
    },
  ]

  const [showDetails, setShowDetails] = useState(
    Array(peopleData.length).fill(false),
  )

  const toggleDetails = (index: number) => {
    setShowDetails((prev) => {
      const newDetails = [...prev]
      newDetails[index] = !newDetails[index]
      return newDetails
    })
  }

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  )

  const [api, setApi] = React.useState<CarouselApi>()

  return (
    <section className="">
      <div className="mx-auto grid w-full max-w-[1800] grid-cols-2 items-center justify-center gap-5 p-10">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-start">
            <span className="text-lg font-medium text-black">Vantagens em</span>
            <h3 className="pb-4 text-2xl font-bold text-[#D81313]">
              se matricular
            </h3>
            <div className="w-[300px]">
              <p className="text-md text-[#6C6262]">
              Matricular-se vai te oferecer diversas vantagens que vão além da simples atividade física.
               Em primeiro lugar, a prática regular de exercícios melhora a saúde cardiovascular, aumenta a força muscular e ajuda na perda de peso.
               Além disso, o ambiente motivador das academias estimula o comprometimento com os treinos, promovendo a disciplina e a consistência.

            Outro benefício é a socialização: academias 
            são espaços ideais para conhecer novas pessoas e formar amizades,
            tornando o exercício mais agradável.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Carousel
            plugins={[plugin.current]}
            className="p-8"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            setApi={setApi}
          >
            <CarouselContent>
              {peopleData.map((person, index) => (
                <CarouselItem key={index}>
                  <div
                    className={`relative mb-5 w-full overflow-hidden rounded-[10px] ${
                      showDetails[index] ? 'bg-[#D81313]' : ''
                    }`}
                  >
                    <div className="relative h-[400px] w-full">
                      <Image
                        src={person.image}
                        alt={person.name}
                        layout="fill"
                        objectFit="cover"
                        style={{
                          display: showDetails[index] ? 'none' : 'block',
                        }}
                      />

                      {!showDetails[index] && (
                        <div className="absolute bottom-5 left-5 flex flex-col items-start p-5 font-semibold text-white">
                          <h2 className="text-xl md:text-2xl">{person.name}</h2>
                        </div>
                      )}
                    </div>

                    {showDetails[index] && (
                      <div className="absolute bottom-4 left-4 right-4 flex flex-col items-start p-5 font-normal text-white">
                        <span className="text-xl md:text-3xl">
                          {person.name}
                        </span>
                        <p className="md:text-md text-sm">
                          {person.description}
                        </p>
                      </div>
                    )}
                    <Button
                      onClick={() => toggleDetails(index)}
                      className={cn(
                        'text-md absolute right-5 top-5 rounded-full text-white',
                        showDetails[index] ? 'bg-[#D81313]' : 'bg-[#212121]',
                      )}
                    >
                      {showDetails[index] ? 'Ver menos' : 'Ver mais'}
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex gap-5">
              <div
                className="flex h-[30px] w-[35px] items-center justify-center rounded-[4px] border border-[#D81313] bg-[#D81313] bg-transparent p-2 text-white"
                onClick={() => api?.scrollPrev()}
              >
                <ChevronLeft className="text-[#D81313]" size={16} />
              </div>
              <div
                className="flex h-[30px] w-[35px] items-center justify-center rounded-[4px] border border-[#D81313] bg-[#D81313] bg-transparent p-2 text-white"
                onClick={() => api?.scrollNext()}
              >
                <ChevronRight className="text-[#D81313]" size={16} />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
