import http from '../common/http-common';

const getCep = (cep: string) => {
    return http.apiCep.get(`https://viacep.com.br/ws/${cep}/json/`);
};


const CepService = {
   getCep,
}

export default CepService;