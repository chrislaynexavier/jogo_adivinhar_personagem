import { Jogador } from "./models/jogador";
import { Jogo } from "./models/jogo";

const express = require('express');
const app = express();
const port = 3000;
const jogadores : Jogador[] = [];
const jogo = new Jogo();

app.use(express.json());
app.use(function (req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next()
})

app.get('/',(req:any, res:any) => {
    res.json({req: 'aaa'})
})

app.get('/jogadores',(req:any, res:any) => {
    res.json({jogadores: jogadores})
})

app.post('/jogadores', (req:any, res:any) => {
    console.log('req', req.body.idade);
    const jogador1 = new Jogador(req.body.name);
    jogadores.push(jogador1);
    res.json({msg: 'Adicionado com sucesso'})
})

app.delete('/jogadores', (req:any, res:any) => {
  jogadores.forEach((jogador, index) => {
      if(jogador.nome === req.body.name){
          jogadores.splice(index,1)
      }
  })
  res.json({msg: 'delete'})
})

app.put('/jogadores', (req:any, res:any) => {
    jogadores.forEach((jogador) => {
        if(jogador.nome === req.body.name){
            jogador.nome = req.body.new_name;
        }
    })
  res.json({jogadores})

})

app.post('/jogo', (req:any, res:any) => {
    jogo.iniciar();
    const dica = jogo.dica();
    res.json({msg: 'Iniciado com sucesso', dica: dica})
})

app.post('/chutar', (req:any, res:any) =>{
    const personagamChute = req.body.chute
    const acertou = jogo.comparar(personagamChute)
    let dica
    if(!acertou){
        dica = jogo.dica();
        console.log(dica)
    }
    res.json({acertou: acertou, dica:dica})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })