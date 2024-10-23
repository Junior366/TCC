import CriarService from "@/services/criarService"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";

export default <Data extends Record<string,any>, Cabecalho extends string[]>({cabecalho, celulas, service, consultados, rota}:{ 
    rota: string, 
    consultados: (keyof Data)[], 
    cabecalho: Cabecalho, 
    service: ReturnType<typeof CriarService<Data>>,celulas: {[Celula in keyof Cabecalho]: (keyof Data)|[keyof Data, "text"|"imagem"] }}) => {
    const [items, setItems] = useState<Data[]>([])
  const router = useRouter(); 
  const [consulta, setConsulta] = useState("")
  async function obter() {
    setItems((await service.findAll()).data)
  }

  useEffect(() => {
    obter()
  }, [])
  console.log(items)

    return (
        <div>
            <div>
                <div style={{
                    
                }}>
                    
                    <Input type="" onChange={(e) => setConsulta(e.target.value)} />
                    <Button ><Link href={rota + "/adicionar"} >adicionar</Link></Button>
                </div>

                <Table>
                    <TableHeader>
                        
                        {cabecalho.map(texto => <TableHead key={texto} >{texto}</TableHead>)}
                        <TableHead>Ações</TableHead>
                    </TableHeader>
                    <TableBody>
                        {items.filter(item => consultados.some(consultado => item[consultado].toLowerCase().includes(consulta.toLowerCase()))).map(item => <TableRow key={item.id}>
                            {celulas.map(celula => <TableCell>{item[celula instanceof Array ? celula[0] :  celula]}</TableCell>)}
                            <TableCell>
                                <Button><Link href={rota + `/editar/${item.id}`}>editar</Link></Button>
                                <Button onClick={async () => {
                                    await  service.deletar(item.id)
                                    obter()
                                }}>deletar</Button>
                            </TableCell>
                        </TableRow>)}
                        
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}