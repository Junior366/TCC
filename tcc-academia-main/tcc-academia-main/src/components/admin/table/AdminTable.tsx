'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import UsuarioService, { Usuario } from "@/services/UsuarioService"
import { LogOut } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

  // const invoices = [
  //   {
  //     invoice: "INV001",
  //     paymentStatus: "Paid",
  //     totalAmount: "$250.00",
  //     paymentMethod: "Credit Card",
  //   },
  //   {
  //     invoice: "INV002",
  //     paymentStatus: "Pending",
  //     totalAmount: "$150.00",
  //     paymentMethod: "PayPal",
  //   },
  //   {
  //     invoice: "INV003",
  //     paymentStatus: "Unpaid",
  //     totalAmount: "$350.00",
  //     paymentMethod: "Bank Transfer",
  //   },
  //   {
  //     invoice: "INV004",
  //     paymentStatus: "Paid",
  //     totalAmount: "$450.00",
  //     paymentMethod: "Credit Card",
  //   },
  //   {
  //     invoice: "INV005",
  //     paymentStatus: "Paid",
  //     totalAmount: "$550.00",
  //     paymentMethod: "PayPal",
  //   },
  //   {
  //     invoice: "INV006",
  //     paymentStatus: "Pending",
  //     totalAmount: "$200.00",
  //     paymentMethod: "Bank Transfer",
  //   },
  //   {
  //     invoice: "INV007",
  //     paymentStatus: "Unpaid",
  //     totalAmount: "$300.00",
  //     paymentMethod: "Credit Card",
  //   },
  // ]
  
export default function AdminTable() {
  const [usuarios, setUsuarios] = useState<Usuario[]|undefined>()
  const router = useRouter(); 
  async function obter() {
    setUsuarios((await UsuarioService.findAll()).data)
  }

  useEffect(() => {
    obter()
  }, [])
    return (

      <section className="bg-zinc-50">
        <nav className="flex h-auto items-center bg-[#D81313] px-5 py-3">
          <Link href={'/'}>
          <button >
            <LogOut className="text-white" size={20} />
          </button>
          </Link>
        </nav>
      <div className="flex min-h-screen w-full max-w-[1800px] flex-col items-center justify-center self-center p-10">
        <div className="flex flex-col max-w-[1000px] w-full items-center justify-center bg-white border border-zinc-100 shadow-lg rounded-[10px]">
          <Table className="text-center"> {/* Adicione a classe text-center aqui */}
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">nome</TableHead>
                <TableHead>email</TableHead>
                <TableHead>data nascimento</TableHead>
                <TableHead className="text-right">Nivel de acesso</TableHead>
                <TableHead>status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usuarios?.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.nome}</TableCell>
                  <TableCell>{invoice.email}</TableCell>
                  <TableCell className="text-right">{invoice.nivelAcesso}</TableCell>
                  <TableCell>
  {new Date(invoice.dataNasc).getDate()}/
  {new Date(invoice.dataNasc).getMonth() + 1}/
  {new Date(invoice.dataNasc).getFullYear()}
</TableCell>

                  <TableCell>{invoice.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} className="text-center">Total</TableCell> {/* Justifique ao centro */}
                <TableCell className="text-right"></TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </section>
  )
}
