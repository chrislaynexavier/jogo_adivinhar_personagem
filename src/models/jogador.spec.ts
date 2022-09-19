import {Jogador} from "./jogador"
import {Jogo} from "./jogo"
describe("jogador", () => {
    it("Deve cadastrar um jogador com zero pontos", () => {
        const jogador = new Jogador("Iury");
        expect(jogador.pontos).toBe(0);
    })
})