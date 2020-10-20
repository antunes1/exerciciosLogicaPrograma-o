let pessoas = [
  {name: 'Ana', age: 18},
  {name:'Maria', age: 13}
]

function MaiorIdade(pessoa, age){
  for(let index = 0; index < pessoa.length; index++){
    if (pessoa[index].age < age){
      let pessoas = pessoa[index];
      console.log(pessoas)
    }
  }
  
}

MaiorIdade(pessoas,18);