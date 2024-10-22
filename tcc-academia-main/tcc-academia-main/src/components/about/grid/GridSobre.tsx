'use client'

import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.9 },
        },
        hidden: {
          opacity: 0,
          y: 50,
          filter: 'blur(3px)',
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Grid() {
  return (
    <>
      <section className="px-4 pb-10 pt-10 md:pb-20">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:grid-rows-3">
            <FadeInSection>
              <div className="flex h-auto w-full flex-col justify-center p-12 text-left lg:h-[500px]">
                {/* <h2 className="pb-4 text-left text-4xl font-bold">Missão</h2> */}
                <p className="text-md">
                  Na Energia e Força, nossa missão é transformar vidas por meio
                  da atividade física e do bem-estar. Oferecemos um ambiente
                  inclusivo e motivador, com treinos personalizados e uma
                  abordagem holística para saúde e qualidade de vida. Nosso
                  objetivo é ajudar cada cliente a superar seus limites,
                  adotando hábitos saudáveis que promovam um corpo e mente
                  equilibrados. Seja você iniciante ou atleta, estamos aqui para
                  guiá-lo em sua jornada de transformação física e mental.
                  Junte-se a nós para viver uma experiência fitness única e
                  elevar sua saúde a um novo patamar.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="relative mx-auto hidden h-[500px] w-full items-center justify-center self-center overflow-hidden md:flex">
                <Image
                  priority
                  fill
                  objectFit="cover"
                  alt="Fitness class image"
                  src="/modalidades/grid1.svg"
                />
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="relative mx-auto hidden h-[500px] w-full items-center justify-center self-center overflow-hidden md:flex">
                <Image
                  priority
                  fill
                  objectFit="cover"
                  alt="Strength training image"
                  src="/modalidades/grid2.svg"
                />
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="flex h-auto w-full flex-col justify-center p-12 text-left lg:h-[500px]">
                {/* <h2 className="pb-4 text-left text-4xl font-bold">Visão</h2> */}
                <p className="text-md">
                  Visualizamos a Energia e Força como referência em estilo de
                  vida saudável, onde cada pessoa encontra o suporte necessário
                  para alcançar suas metas fitness e de bem-estar. Queremos ser
                  reconhecidos como líderes na criação de programas inovadores
                  que combinam treino, nutrição e equilíbrio mental. Nossa visão
                  é criar uma comunidade forte e ativa, onde todos sintam-se
                  encorajados a viver com mais saúde, energia e autoestima,
                  promovendo uma vida equilibrada e com propósito.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="flex h-auto w-full flex-col justify-center p-12 text-left lg:h-[500px]">
                {/* <h2 className="pb-4 text-left text-4xl font-bold">Valores</h2> */}
                <p className="text-md">
                  Compromisso com resultados: Nossa prioridade é ajudar nossos
                  clientes a alcançar seus objetivos, oferecendo planos de
                  treino e acompanhamento individualizado. Inclusividade e
                  comunidade: Criamos um ambiente onde todos são bem-vindos,
                  independentemente do nível de experiência ou condicionamento
                  físico. Excelência em saúde e bem-estar: Priorizamos a saúde
                  integral, com foco em equilíbrio entre corpo e mente. Ética e
                  transparência: Mantemos um relacionamento claro e honesto com
                  nossos clientes, parceiros e equipe, sempre prezando pela
                  qualidade dos serviços prestados.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="relative mx-auto hidden h-[500px] w-full items-center justify-center self-center overflow-hidden md:flex">
                <Image
                  priority
                  fill
                  objectFit="cover"
                  alt="Group workout session image"
                  src="/modalidades/grid3.svg"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  )
}
