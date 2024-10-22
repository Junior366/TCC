import http from '../common/http-common';
import CriarService from './criarService';
const API_URL = "mensagem/";
const marcarComoLida = (id: number|string) => {
    return http.mainInstance.put(API_URL + `marcarComoLida/${id}`);
};
export interface Mensagem {
    id: number,
    texto: string,
    emissorMensagem: string,
    email: string,
    telefone: string,
    dataMensagem: string
}


const MensagemService = {
    ...CriarService<Mensagem>(API_URL),
    marcarComoLida,
}

export default MensagemService;