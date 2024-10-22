import MensagemService from "@/services/MensagemService";
import FormularioAdmin from "../FormularioAdmin";
import UsuarioService from "@/services/UsuarioService";

export default () => <FormularioAdmin 
transformarEnvio={{
    dataNasc: (valor) => valor.toISOString().substring(0, 10)
}}
service={UsuarioService}
    campos={[
        {
            label: "Email",
            name: "email"
        },
        {
            label: "Nome",
            name: "nome"
        },
        {
            label: "Senha",
            name: "senha",
            tipo: "password"
        },
        {
            label: "Nivel Acesso",
            name: "nivelAcesso",
            tipo: "select",
            opcoes: [
                {
                    texto: "Admin",
                    valor: "ADMIN"
                },
                {
                    texto: "User",
                    valor: "USER"
                },
            ]
        },
        {
            label: "Data Nascimento",
            name: "dataNasc",
            tipo: "date"
        },
        {
            label: "Status",
            name: "status",
            opcoes: [
                {
                    texto: "Ativo",
                    valor: "ATIVO"
                },
                {
                    texto: "Inativo",
                    valor: "INATIVO"
                }
            ],
            tipo: "select"
        },
        
    ]}
    padroes={{
        dataNasc: new Date()
    }}
/>