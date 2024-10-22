import { Table } from "lucide-react"
import { TableBody, TableHead, TableHeader } from "../ui/table"

export default <Cabecalho extends string[]>({cabecalho}:{cabecalho: Cabecalho, endpoint: { create?: string, update?: string, delete: string },celulas: {[Celula in keyof Cabecalho]: {}}}) => {
    return (
        <div>
            <div>
                <Table>
                    <TableHeader>
                        {cabecalho.map(cabelhaco => <TableHead>{cabecalho}</TableHead>)}
                    </TableHeader>
                    <TableBody>
                        
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}