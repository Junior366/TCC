import http from '../common/http-common';

export default <Data extends Record<string, any>>(prefixo: string) => {
    
const API_URL = prefixo;



const findAll = () => {
    return http.mainInstance.get<Data[]>(API_URL + 'findAll');
};

const findById = (id: number|string) => {
    return http.mainInstance.get<Data>(API_URL + `findById/${id}`);
};

const create = (data: Data) => {
   
    return http.mainInstance.post<Data>(API_URL + "create", data);
};

const inativar = (id: number) => {
    return http.mainInstance.put<Data>(API_URL + `inativar/${id}`);
};

const update =(id: number|string, data: Data) => {
    return http.mainInstance.put<Data>(API_URL + "update/" + id, data)
};

const deletar = (id: number|string) => {
    return http.mainInstance.delete(API_URL + "deletar/" + id)
};


const MensagemService = {
    findAll,
    findById,
    create,
    update,
    inativar,
    deletar
}

return  MensagemService;
} 