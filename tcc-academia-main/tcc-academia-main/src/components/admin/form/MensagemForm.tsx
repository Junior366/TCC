import MensagemService from "@/services/MensagemService";
import FormularioAdmin from "../FormularioAdmin";

export default () => <FormularioAdmin 
service={MensagemService}
    campos={[
        {
            label: "Texto",
            name: "texto"
        },
        {
            label: "Emissor Mensagem",
            name: "emissorMensagem"
        },
        {
            label: "email",
            name: "email"
        },
        {
            label: "telefone",
            name: "telefone"
        },
        
    ]}

/>