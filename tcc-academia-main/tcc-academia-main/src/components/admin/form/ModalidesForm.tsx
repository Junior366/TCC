import ModalidadesService from "@/services/ModalidadesService";
import FormularioAdmin from "../FormularioAdmin";

export default () => <FormularioAdmin 
    service={ModalidadesService}
    campos={[{
        label: "Nome",
        name: "nome",

    }, {
        label: "Dificuldade",
        name: "dificuldade",
        tipo: "select",
        opcoes: [
            {
                texto: "Média",
                valor: "media"
            },
            {
                texto: "Alta",
                valor: "alta",
            },
            {
                texto: "Média/Alta",
                valor: "media/alta",
            }
        ]
    }, {
        label: "Descrição",
        name: "descricao",
        
    }]}

/>