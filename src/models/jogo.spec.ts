import { Jogador } from "./jogador";
import {Jogo} from "./jogo"
describe("jogo", () => {
    it("Deve ter 3 personagens",() => {
        const jogo = new Jogo();
        jogo.iniciar();
        expect(jogo.qtdPersonagens()).toBe(3)
    })
    it("Deve iniciar o jogo",() => {
        const jogo = new Jogo();
        jogo.iniciar();
        expect(jogo.jogoIniciado()).toBe(true)
    })
    it("Deve ter um personagem escolhido aleatoriamente", () => {
        const jogo = new Jogo();
        jogo.iniciar();
        expect(jogo.gerarEscolhido()).toBeDefined()
    })
    it("Deve chutar o personagem errado", () =>{
        const jogo = new Jogo();
        jogo.iniciar();
        const chute = "Hermione";
        expect(jogo.comparar(chute)).toBe(false);
    })
    it("Deve chutar o personagem certo", () =>{
        const jogo = new Jogo();
        jogo.iniciar();
        const personagem = jogo.personagemEscolhido;
        expect(jogo.comparar(personagem.nome)).toBe(true);
    })
    it("Deve finalizar o jogo após 3 tentativas erradas", () => {
        const jogo = new Jogo();
        jogo.iniciar();
        jogo.comparar("Hermione");
        jogo.comparar("Hagrid");
        jogo.comparar("branca de neve");
        expect(jogo.tentativas).toBe(3);
        expect(jogo.jogoIniciado()).toBe(false);
    }) 
    it("Deve finalizar o jogo quando acerta", () => {
        const jogo = new Jogo();
        jogo.iniciar();
        jogo.comparar(jogo.personagemEscolhido.nome);
        expect(jogo.jogoIniciado()).toBe(false);
    })
    it("Não deve finalizar o jogo quando errar um personagem", () =>{
        const jogo = new Jogo();
        jogo.iniciar();
        jogo.comparar("Hermione");
        expect(jogo.jogoIniciado()).toBe(true);
    })
    it("Deve dar uma dica para o personagem escolhido", () => {
        const jogo = new Jogo();
        jogo.iniciar();
        expect(jogo.dica()).toBeDefined()
    })
    it("Deve iniciar um jogo com um jogador", () => {
        const jogo = new Jogo();
        jogo.iniciar(new Jogador("Iury"));
        expect(jogo.jogador).toBeDefined();
    })
    it("Deve dar 10 pontos por acerto", () => {
        const jogo = new Jogo();
        jogo.iniciar(new Jogador("Iury"));
        jogo.comparar(jogo.personagemEscolhido.nome);
        expect(jogo.jogador.pontos).toBe(10) 
     })
     it("Não deve ter menos que 0 pontos", () => {
        const jogo = new Jogo();
        jogo.iniciar(new Jogador("Iury"));
        jogo.comparar("Hermione");
        expect(jogo.jogador.pontos).toBe(0) 
     })
     it("Deve ter 5 pontos quando acertar 2 e errar 1", () => {
        const jogo1 = new Jogo();
        const jogador1 = new Jogador("Iury")
        jogo1.iniciar(jogador1);
        jogo1.comparar(jogo1.personagemEscolhido.nome);

        const jogo2 = new Jogo();
        jogo2.iniciar(jogador1);
        jogo2.comparar(jogo2.personagemEscolhido.nome);

        const jogo3 = new Jogo();
        jogo3.iniciar(jogador1);
        jogo3.comparar("Hermione");

        expect(jogador1.pontos).toBe(5) 
     })
})