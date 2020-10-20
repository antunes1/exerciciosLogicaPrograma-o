//  retorne que tem e no nome

let primos = {nome1: "jose", nome2: 'Matheus', nome3:'lucas'}

console.log(primos.nome2.substring(1,0))
//primos.nome1.subString(1,0)s
//console.log(primos.nome1.subString(1,0))

for (const y in primos){
  console.log(`${y}: ${primos[y]}`)
    
}


function nomes(y, x) {
 let NomeComALetra = nomes;
 let nome; 
 for (const nome in y){
  console.log(`${nome}: ${y[nome]}`)
    if (n == x){
      NomeComALetra = nome[y];
    }
}
}


nomes(primos, 'a')
