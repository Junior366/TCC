import http from '../common/http-common';
import CriarService from './criarService';
const API_URL = "Modalidades/";
export interface Modalidades {
    id: number,
    nome: string,
    dificuldade: string;
    descricao: string,
}


const ModalidadesService = {
    ...CriarService<Modalidades>(API_URL),
}

export default ModalidadesService;