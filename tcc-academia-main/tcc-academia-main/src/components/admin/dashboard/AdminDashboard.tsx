import { NotebookPen, User, UserPlus2, UsersRound } from 'lucide-react'
import Link from 'next/link'
import { FaMoneyBillAlt } from 'react-icons/fa'

export default function DashboardAdmin() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-[1800px] flex-col items-center justify-center p-10">
        <div className="grid w-full grid-cols-3 grid-rows-3 items-center justify-center gap-5 self-center">
          <div className="flex w-full flex-row items-center justify-center p-5 shadow-lg">
            <Link
              href={'/profile'}
              className="flex w-full flex-row items-center justify-center gap-2"
            >
              <User className="text-[#D81313]" size={24} />
              <span className="text-lg font-medium text-[#D81313]">Perfil</span>
            </Link>
          </div>
          <div className="flex w-full flex-row items-center justify-center p-5 shadow-lg">
            <Link
              href={''}
              className="flex w-full flex-row items-center justify-center gap-2"
            >
              <User className="text-[#D81313]" size={24} />
              <span className="text-lg font-medium text-[#D81313]">
                Cadastro ADM
              </span>
            </Link>
          </div>
          <div className="flex w-full flex-row items-center justify-center p-5 shadow-lg">
            <Link
              href={'/table'}
              className="flex w-full flex-row items-center justify-center gap-2"
            >
              <User className="text-[#D81313]" size={24} />
              <span className="text-lg font-medium text-[#D81313]">
                Usuarios
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
