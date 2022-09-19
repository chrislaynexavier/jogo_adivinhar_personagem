
export class Personagem {
    public nome:string;
    public dicas:string[]=[];
    public contador:number = 0;
    constructor(nome:string){
        this.nome = nome;
    }

    adicionarDica(dica: string){
        if(this.dicas.length < 3){
            this.dicas.push(dica);
        }
    }
    exibirDica(){     
        this.contador+=1;
        return this.dicas[this.contador - 1];       
    }
}