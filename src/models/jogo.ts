import { Jogador } from "./jogador"
import { Personagem } from "./personagem"

export class Jogo {
    public iniciado!: boolean
    private personagens: Personagem[] = []
    public personagemEscolhido!: Personagem
    public tentativas: number = 0
    public jogador!: Jogador

    constructor(){

    }
    iniciar(jogador?:Jogador){
        this.iniciado = true
        const harry = new Personagem("Harry Potter")
        const naruto = new Personagem("Naruto")
        const vader = new Personagem("Dart Vader")
        harry.adicionarDica("é um bruxo")
        harry.adicionarDica("é orfao")
        naruto.adicionarDica("é um ninja")
        naruto.adicionarDica("é burro")
        vader.adicionarDica("é um vilão")
        vader.adicionarDica("é pai")
        this.personagens.push(harry, naruto, vader)
        this.gerarEscolhido()
        if(jogador){
            this.jogador = jogador
        }
    }

    jogoIniciado(){
        return this.tentativas < 3 && this.iniciado;
        //this.iniciado
    }

    qtdPersonagens(): number{
        return this.personagens.length
    }
    
    gerarEscolhido(): Personagem{
        const numero = Math.floor(Math.random() * this.qtdPersonagens());
        this.personagemEscolhido = this.personagens[numero]
        return this.personagemEscolhido
    }

    comparar(nomePersonagem:string) : boolean{
        this.tentativas = this.tentativas+1;
        const personagemIgual = nomePersonagem === this.personagemEscolhido.nome;
        if(personagemIgual){
            this.iniciado = false;
            if(this.jogador){
                this.jogador.pontos += 10; 
            }
        }else{
            if(this.jogador && this.jogador.pontos>0){
                this.jogador.pontos -= 15; 
            }
        }   
            return personagemIgual;
    }
    dica(){
        return this.personagemEscolhido.exibirDica()
    }
}