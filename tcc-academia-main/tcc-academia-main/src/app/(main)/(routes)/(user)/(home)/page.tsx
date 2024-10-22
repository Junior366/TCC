import Matricula from '@/components/home/carousel-matricula/Matricula'
import Hero from '@/components/home/hero/Hero'
import Localizacao from '@/components/home/local/Localizacao'
import Planos from '@/components/home/planos/PlanosHome'

export default function Home() {
  return (
    <>
      <Hero />
      <Matricula />
      <Planos />
      <Localizacao />
    </>
  )
}
