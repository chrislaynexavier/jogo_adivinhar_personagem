import {Personagem} from "./personagem"

describe("personagem", () => {
    it("Deve criar um personagem", () => {
        let personagem1 = new Personagem("Harry Potter");
        expect(personagem1.nome).toBe("Harry Potter");
    })
    it("Deve criar uma dica", () => {
        let personagem1 = new Personagem("Harry");
        personagem1.adicionarDica("É um bruxo");
        expect(personagem1.dicas).toContain("É um bruxo");
    })
    it("Deve exibir uma dica diferente", () => {
        let personagem1 = new Personagem("Harry");
        const dica1 = "é um bruxo";
        const dica2 = "é orfão";
        personagem1.adicionarDica(dica1);
        personagem1.adicionarDica(dica2);
        expect(personagem1.exibirDica()).toBe(dica1)
        expect(personagem1.exibirDica()).toBe(dica2)
    })
    it("Dever ter no máximo 3 dicas", () => {
        let personagem1 = new Personagem("Harry");
        const dica1 = "é um bruxo";
        const dica2 = "é orfão";
        const dica3 = "é orfão";
        const dica4 = "é orfão";
        personagem1.adicionarDica(dica1);
        personagem1.adicionarDica(dica2);
        personagem1.adicionarDica(dica3);
        personagem1.adicionarDica(dica4);
        expect(personagem1.dicas.length).toBe(3);

    })

})

