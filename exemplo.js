let pessoas = [
  {name: 'alexander', age: 18},
  {name:'Andrews', age: 13}
]

function MaiorIdade(pessoa, age){
  for(let index = 0; index < pessoa.length; index++){
    if (pessoa[index].age == age){
      let pessoas = pessoa[index];
      console.log(pessoas)
    }
  }
  
}

MaiorIdade(pessoas,18);


