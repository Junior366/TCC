'use client'

export default function Hero() {
  return (
    <>
      <section
        className="z-0 flex h-[680px] w-full flex-col justify-center bg-[#10111A] pt-5 md:h-[660px] md:min-h-[95dvh] md:pt-28 lg:pt-0"
        style={{
          backgroundImage: "url('/home/hero.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="mx-auto flex h-full w-full max-w-[2000px] flex-col items-start justify-end p-[100px]">
          <div className="flex flex-col items-end justify-end">
            <div className="flex flex-col text-white md:w-[500px]">
              <span className="pb-4 text-xl font-semibold">
                ENERGIA E FORÇA
              </span>
              <h1 className="pb-4 text-5xl font-bold">
                TREINE SEU CORPO E A SUA MENTE AQUI
              </h1>
              <p className="text-md font-normal">
                respeitar acima de tudo; criar intuito de esforço; conter
                espírito de agressão; esforçar-me para a formação de caráter;
                fidelidade para com o verdadeiro caminho da razão
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
