import { Jogo } from "./jogo";

export class Jogador{
    public nome!:string
    public pontos:number = 0
    constructor(nome:string){
        this.nome = nome;
    }
}