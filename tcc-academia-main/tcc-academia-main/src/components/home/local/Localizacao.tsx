'use client'

import { Button } from '@/components/ui/button'
import { location } from '@/data/location'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Localizacao() {
  return (
    <section className="pb-8 pt-20">
      {' '}
      <div className="mx-auto flex w-full max-w-[1200px] flex-col flex-wrap md:flex-row">
        <div className="mb-9 flex w-full flex-col items-center justify-center md:mb-0 md:w-1/2 md:items-start md:justify-start">
          <div className="mb-4 flex flex-col pl-8 sm:pl-0">
            <span className="pb-4 text-2xl font-semibold text-[#D81313]">
              NOSSA LOCALIZAÇÃO
            </span>
            <span className="mb-6 text-sm font-normal text-[#888E97]">
              Distrito Anhembi - Av. Olavo Fontoura, 1209 - Santana • São Paulo
              | SP
            </span>
          </div>
          <div className="w-full items-center md:w-1/2">
            <div>
              {location?.map((item, index) => (
                <details
                  key={index}
                  className="group border-t border-zinc-500 p-7 pt-7 [&_summary::-webkit-details-marker]:hidden"
                  open={false}
                >
                  <summary className="flex w-full cursor-pointer items-center justify-between gap-5">
                    <h2 className="text-2xl font-medium text-zinc-700">
                      {item?.title}
                    </h2>

                    <span className="relative h-5 w-5 shrink-0 text-[#D81313]">
                      <Plus className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0" />

                      <Minus className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100" />
                    </span>
                  </summary>
                  {item?.items?.map((i, index) => (
                    <div key={index}>
                      <h5 className="mb-2 mt-4 text-left text-sm text-gray-400">
                        {i.titulo}
                      </h5>
                      <p className="text-left text-xs leading-relaxed text-zinc-600">
                        {i.descricao}{' '}
                        {!!i.link && (
                          <Link
                            href={i.link}
                            target="_blank"
                            className="text-left text-xs leading-relaxed text-[#D81313]"
                          >
                            aqui
                          </Link>
                        )}
                      </p>
                    </div>
                  ))}
                </details>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.455330577605!2d-46.64242468983391!3d-23.516120178742653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5879ea9ebb7d%3A0x8a1e18909cfe39d0!2sCentro%20de%20Conven%C3%A7%C3%B5es%20-%20Distrito%20Anhembi!5e0!3m2!1spt-BR!2sbr!4v1700506557149!5m2!1spt-BR!2sbr"
            width="200"
            height="400"
            className="justify-content-center w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>{' '}
      <div className="mx-auto grid w-full max-w-[1800] grid-cols-2 items-center justify-center gap-5 p-10"></div>
    </section>
  )
}
