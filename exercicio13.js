

function semaforo (x) {
  
  if(x == 'Verde'){
    console.log('Pode passsar ' + x);
  } else if (x == 'Amarelo'){
    console.log('Fique atento ' + x);
  } else if (x == 'Vermelho'){
    console.log('Não pode passar ' + x)
  } else {
    console.log('tente de novo')
  }
} 

semaforo('verde')



