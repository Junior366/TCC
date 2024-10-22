"use client"; // Adicione esta linha

import { ChangeEvent, useState } from 'react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import UsuarioService from '../../services/UsuarioService';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';

export default function UserLogin() {
    const router = useRouter();
    
    const [formData, setFormData] = useState<{ email: string; password: string }>({ email: '', password: '' });
    const [message, setMessage] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage("");

        try {
            await UsuarioService.signin(formData.email, formData.password);
            const userJson = localStorage.getItem("user");
            console.log(userJson);
            const user = JSON.parse(userJson || '{}');

            if (user.statusUsuario === 'ATIVO') {
                alert("Usuario Aceito com Sucesso");
                router.replace("/");
            } else if (user.statusUsuario === 'TROCAR_SENHA') {
              alert("Usuario Recusado");
            }
        } catch (error) {
            const respMessage =
                console.log("Erros");
                
        }
    };

    return (
        <section className="flex h-screen items-center justify-center bg-gradient-to-b from-[#D81313] to-white">
            <div className="flex w-full max-w-[1800px] flex-col items-center justify-center p-10">
                <div className="flex h-auto w-[500px] flex-col items-center justify-center rounded-bl-[8px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[8px] border bg-white p-5 shadow-lg">
                    <h2 className="pb-14 pt-12 text-2xl font-semibold text-black">
                        Login
                    </h2>
                    <form className="flex w-full flex-col items-center justify-center gap-y-4 pb-14" onSubmit={handleSubmit}>
                        <div className="w-[350px]">
                            <Input
                                type="email"
                                name="email"
                                placeholder="e-mail"
                                className="w-full rounded-[5px] border border-none bg-[#F5F5F5] font-bold text-[#A2A7A9]"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-[350px]">
                            <Input
                                type="password"
                                name="password"
                                placeholder="senha"
                                className="w-full rounded-[5px] border border-none bg-[#F5F5F5] font-bold text-[#A2A7A9]"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="pb-10">
                            <Button type="submit" className="h-[35px] w-[150px] rounded-[4px] bg-[#D81313] font-semibold text-white shadow-sm">
                                Entrar
                            </Button>
                        </div>
                    </form>
                    <div className="flex flex-col items-center justify-center pt-2">
                        <a
                            className="text-sm text-[#7C7C8A] underline hover:text-[#666676]"
                            href="/cadastro"
                        >
                            Faça cadastro
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
