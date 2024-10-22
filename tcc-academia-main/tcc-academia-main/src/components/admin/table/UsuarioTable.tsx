import UsuarioService from "@/services/UsuarioService";
import TabelaAdmin from "../TabelaAdmin";

export default () => <TabelaAdmin 
rota="/admin/table"
consultados={["nome", "email", "nivelAcesso", "status"]}
    cabecalho={["Id", "Nome", "Email", "Nivel Acesso", "Data de Nascimento", "Status"]}
    service={UsuarioService}
    celulas={["id", "nome", "email",  "nivelAcesso", "dataNasc", "status" ]}

/>