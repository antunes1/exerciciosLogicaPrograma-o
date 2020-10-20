let primas = ['carolina', 'bruna', 'nadine', 'patricia']

console.log(primas[2].toUpperCase())

//console.log(primas[0].slice(0,1))

function primeiraLetraNome (x){
  let letraNome;
  let novoArray = [];
  for(let i = 0; i < x.length; i++){
    letraNome = x[i].slice(0,1);
    novoArray = letraNome.toUpperCase();
    console.log(novoArray);
  
  }
  return novoArray;

}

console.log(primeiraLetraNome(primas));









