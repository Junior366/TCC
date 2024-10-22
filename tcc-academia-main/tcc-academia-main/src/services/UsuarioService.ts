import http from '../common/http-common';
import CriarService from './criarService';
const API_URL = "usuario/";

const signup = (nome: string, email: string, password: string) => {
    return http.mainInstance.post(API_URL + "signup", {
        nome,
        email,
        password,
    });
};

const signin = async (email: string, senha: string) => {
    const response = await http.mainInstance
        .post(API_URL + "signin", {
            email,
            senha,
        });
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user") ?? "{}");
};

const update = (id: string|number, data: any) => {
    return http.multipartInstance.put(API_URL + `update/${id}`, data);
};

const alterarSenha = (id: number|string, data: any) => {
    const formData = new FormData();
    formData.append('senha', data.senha);
 
    return http.mainInstance.put(API_URL + `alterarSenha/${id}`, formData);
};

const findByNome = (nome: string) => {
    return http.mainInstance.get(API_URL + `findByNome?nome=${nome}`);
};


const findByEmail = (email: string) => {
    return http.mainInstance.get(API_URL + `findByEmail?email=${email}`);
};

export interface Usuario {
    email: string,
    nome: string,
    senha: string,
    id: number, dataNasc: Date, nivelAcesso: string, status: string
}

const UsuarioService = {
    ...CriarService<Usuario>(API_URL),
    signup,
    signin,
    logout,
    findByEmail,
    getCurrentUser,
    update,
    alterarSenha,
    findByNome,
}

export default UsuarioService;