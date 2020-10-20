// lista de tarefas

let tarefas = [
  {tarefa1:"fazer almoço", status: "iniciar"},
  {tarefa2:"Almoçando", status: "Andamento"},
  {tarefa3:"Lavando a louça", status: 'finalizado'}

]
//console.log(tarefas[0].status)


function ProgressoTarefa(x, t) {
  let tarefasStatus ;
  
  for(let i = 0; i < x.length; i++){
    tarefasStatus = x[i].status;
    //console.log(tarefasStatus);
    if((tarefasStatus.toLowerCase() && t.toLowerCase()) == 'iniciar'){
      console.log('Fazendo o almoço')
      break
    } else if ((tarefasStatus.toLowerCase() && t.toLowerCase())== 'andamento'){
      console.log('Comendo frango isso ai !!!')
      break
    }
    if((tarefasStatus.toLowerCase() && t.toLowerCase()) == "finalizada"){
      console.log('Lavar louça , pronto !!! :)')
      break
    }
  }

}

ProgressoTarefa(tarefas, 'FINALIZADA');
