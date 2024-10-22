import criarService from "@/services/criarService"
import { useParams, useRouter } from "next/navigation"
import { ChangeEvent, useEffect, useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import SeletorData from "../SeletorData"

export default <Data extends Record<string, any>>({campos, service, padroes, transformarEnvio }:{ 
    transformarEnvio?: {[Campo in keyof Data]?: (valor: Data[Campo]) => any},
    service: ReturnType<typeof criarService<Data>>, campos: ({ tipo?: "select", label: string, name: keyof Data, opcoes: { texto: string, valor: string }[] }|{ label: string, name: keyof Data, tipo?: "text"|"email"|"password"|"date", })[], extras?: {}[], padroes?: Partial<Data>}) => {
    const router = useRouter()

    const { id } = useParams()
    const [formData, setFormData] = useState<Data>(padroes ?? {} as Data)

    useEffect(() => {
        if (id) {
         service.findById(id as string).then(dados => setFormData(dados.data))
        }
    }, [id])

    function handleChange(e: ChangeEvent<HTMLInputElement|HTMLSelectElement>) {
        setFormData(formData => ({...formData, [e.target.name]: e.target.value}))
    }

    return (
        <div>
            <div>
                <div className="flex min-h-[100vh] justify-center align-items-center">
                    <form action="" className="border border-[#D81313] rounded w-[60vw] flex flex-col p-4 h-content" onSubmit={async (e) => {
                        e.preventDefault()
                        const dados = formData
                        Object.entries(transformarEnvio ?? {}).forEach(([campo, transformar]) => {
                            dados[campo] = transformar(dados[campo])
                        })
                        try {
                            if (id) {
                           
                            }
                            else {
                                await service.create(formData)
                            }
                            router.back()
                        }
                        catch (e) {

                        }

                    }} >
                        {campos.map(campo => campo.tipo == "select" ? <div>
                            <label htmlFor="">{campo.label}</label>
                            <select value={formData[campo.name]} onChange={handleChange} name={campo.name as string} >
                            {campo.opcoes.map(opcao => <option value={opcao.valor}> {opcao.texto}</option>)}
                        </select></div> : campo.tipo == "date" ? <SeletorData label={campo.label} formData={formData} setFormData={setFormData} name={campo.name as string} /> : <div className="flex flex-col">
                            <label>{campo.label}</label>
                            <Input name={campo.name as string} type={campo.tipo} value={formData[campo.name]} onChange={handleChange}  />
                        </div>)}
                        <div>
                            <Button type="submit">Salvar</Button>
                            <Button type="button" onClick={() => {
                                router.back()
                            }}>Cancelar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}