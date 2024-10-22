'use client'

import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
// import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export function Footer() {
  return (
    <section id="footer" className="w-full bg-[#D81313]">
      <div className="mx-auto max-w-[1200px] overflow-y-auto p-4 py-5 md:p-0 md:py-10">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <a href="/" className="relative flex items-center">
            <Image
              src="/logos/white-logo.svg"
              width={70}
              height={70}
              alt="Picture of the author"
            />
          </a>
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="pb-2 text-4xl font-medium text-white">
              ENERGIA E <br /> FORÇA
            </h2>
          </div>
        </div>
        <div className="mb-5">
          <nav className="py-4">
            <div className="mx-auto">
              <div className="flex flex-col items-start justify-start md:flex-row md:justify-between">
                <div className="flex flex-col items-start md:flex-row">
                  <a
                    href="/#"
                    className="text-md mr-4 font-medium text-white hover:text-gray-200"
                  >
                    Home
                  </a>
                  <a
                    href="/#"
                    className="text-md mr-4 font-medium text-white hover:text-gray-200"
                  >
                    Sobre nós
                  </a>
                  <a
                    href="/#"
                    className="text-md mr-4 font-medium text-white hover:text-gray-200"
                  >
                    Contato
                  </a>
                  <a
                    href="/#"
                    className="text-md font-medium text-white hover:text-gray-200"
                  >
                    Modalidades
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex gap-4 text-white">
            <a target="_blank" href="">
              <FaInstagram size={25} />
            </a>
            {/* <a href="https://twitter.com/">
                <FaTwitter size={25} />
              </a> */}
            <a target="_blank" href="">
              <FaFacebook size={25} />
            </a>
          </div>
        </div>
        <div className="items center flex flex-col py-5 md:py-0">
          <div className="my-5 flex h-[1px] w-full justify-center self-center bg-zinc-300" />
          <div className="flex flex-col items-center justify-center text-sm font-light text-white md:flex-row md:justify-between">
            <div>
              <a href="" target="" rel="noopener noreferrer">
                Energia e força © 2024
              </a>
            </div>
            <div className="flex gap-4">
              <a href="/privacy-policies" target="" rel="noopener noreferrer">
                Políticas de privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
