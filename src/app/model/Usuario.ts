import { Postagem } from "./Postagem";

export class Usuario{

    public id: number;

    public nome: string;

    public 	dataNascimento: Date;

    public 	foto: string;

    public 	tipo: string;

    public 	usuario: string;

    public 	senha: string;

    //relacionamento com model postagem
    public 	postagem: Postagem[];



}