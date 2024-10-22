import MensagemService from "@/services/MensagemService";
import TabelaAdmin from "../TabelaAdmin";

export default () => <TabelaAdmin 
rota="/admin/mensagem"
consultados={["texto", "emissorMensagem", "email", "telefone"]}
    cabecalho={["Id", "Texto", "Emissor", "Email", "Telefone"]}
    service={MensagemService}
    celulas={["id", "texto", "emissorMensagem",  "email" , "telefone" ]}

/>