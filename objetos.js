let jogador = {
    nome: `Renato Augusto`,
    idade: 34,
    numGol : 81,
    Gol(g=0){
        console.log(`Renato fez gol!`)
        this.numGol += g
    }
}

// console.log(jogador.nome)
// //console.log(jogador.idade + " anos")
// console.log(jogador.numGol + " gols")
// jogador.Gol(1)
// console.log(jogador.numGol + " gols")

jogador.posicao = `Meio Campo`
console.log(jogador)


delete jogador.idade
console.log(jogador)