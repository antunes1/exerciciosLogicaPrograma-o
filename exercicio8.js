let jogadores = [
  { name: "Apache", score: 5 },
  { name: "Andre", score: 3 },
  { name: "Arliton", score: 2 },
  { name: "Lindomar", score: 1 },
];

function ordeDePlayers(a,b) {
  if (a.score < b.score)
     return -1;
  if (a.score > b.score)
    return 1;
  return 0;
}
jogadores.sort(ordeDePlayers);
console.log(jogadores)

function jogadorVencedor (x){
  let vencedor = [];

  
for (let i = 0; i < x.length; i++){

vencedor = Math.max(x[i].score);

}
   
  return console.log(vencedor)
}

jogadorVencedor(jogadores)
