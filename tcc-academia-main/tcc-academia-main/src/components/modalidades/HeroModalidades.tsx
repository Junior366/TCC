'use client'

export default function HeroModalidades() {
  return (
    <>
      <section
        className="z-0 flex h-[680px] w-full flex-col justify-center bg-[#10111A] pt-5 md:h-[660px] md:min-h-[95dvh] md:pt-28 lg:pt-0"
        style={{
          backgroundImage: "url('/modalidades/hero-modalidades.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="mx-auto flex h-full w-full max-w-[2000px] flex-col items-start justify-end p-[100px]">
          <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-7xl font-bold text-white">Nossas modalidades</h1>
          </div>
        </div>
      </section>
    </>
  )
}
