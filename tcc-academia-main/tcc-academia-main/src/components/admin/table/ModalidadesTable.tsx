import Modalidades from "@/app/(main)/(routes)/(user)/modalidades/page";
import TabelaAdmin from "../TabelaAdmin";
import ModalidadesService from "@/services/ModalidadesService";

export default () => <TabelaAdmin 
    cabecalho={["Id", "Nome", "Descrição", "Dificuldade"]}
    celulas={["id", "nome", "descricao", "dificuldade"]}
    rota="/admin/Modalidades"
    consultados={["nome"]}
    service={ModalidadesService}
/>