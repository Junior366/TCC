'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { Backlinks } from '@/constants'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Navbar() {
  const user = localStorage.getItem("user")
  const nivelAcesso = JSON.parse(user ?? "{}")?.nivelAcesso
  const pathname = usePathname()

  console.log(user)
  const isHome = pathname === '/'
  const isAbout = pathname === '/sobre'

  return (
    <div
      className={'absolute mb-20 mt-3 w-full bg-transparent mx-auto'}
      style={{ zIndex: 99 }}
    >
      <nav className="z-20 mx-auto flex max-w-[1400px] justify-between bg-transparent py-3 sm:px-10 sm:px-4 lg:px-0 text-white">
        <div className="flex max-w-screen-xl items-center justify-start">
          <Link href="/" className="relative flex items-center">
            <Image
              src="/logos/yellow-logo.svg"
              width={50}
              height={50}
              alt="logo Energia e Força"
            />
            
          </Link>
        </div>
        <div className="hidden h-[48px] w-full items-center justify-center lg:flex lg:w-auto">
          {Backlinks.map((link, index) => (link.nivelAdmin && nivelAcesso != "ADMIN") ? <></> : (link.requerLogin && user == null) ? <></> : (
            <Button
              asChild={true}
              key={'link_' + index}
              variant={'link'}
              className={cn(
                pathname === link.url
                  ? 'text-base font-semibold transition-all'
                  : 'text-base font-light',
                'text-white', // Cor do botão alterada para branco
              )}
            >
              <Link href={link.url}>{link.title}</Link>
            </Button>
          ))}
        </div>
        <div className="flex items-center justify-end">
          {!user  &&<><Button
            asChild={true}
            variant={'link'}
            className={cn(
              'text-[0.7rem] md:text-base',
              'text-white', // Cor do botão alterada para branco
            )}
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button
            asChild={true}
            className={'bg-white text-[0.7rem] text-black md:text-base'} // Background branco adicionado
          >
            <Link href="/cadastro">Inscreva-se</Link>
          </Button></>}
          <Sheet>
            <SheetTrigger
              className={cn(
                'ml-4 inline w-[100px] rounded-3xl border-2 bg-transparent lg:hidden',
                'text-white', // Cor do botão alterada para branco
              )}
            >
              Menu
            </SheetTrigger>
            <SheetContent>
              <div className="h-[48px] w-full flex-col items-center justify-center lg:flex lg:w-auto">
                {Backlinks.map((link, index) => (
                  <Button
                    asChild={true}
                    key={'mobile_link_' + index}
                    variant={'link'}
                    className={cn(
                      'block',
                      pathname === link?.url
                        ? 'text-base font-semibold transition-all'
                        : 'text-base font-light',
                      'text-white', // Cor do botão alterada para branco
                    )}
                  >
                    <Link href={link.url}>{link.title}</Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  )
}
