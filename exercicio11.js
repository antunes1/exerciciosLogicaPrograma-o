// funcao retorna o ano de nascimento maior

function maior (x){
  let ano;
  ano = 2020 - x;
  if (ano > 18){
    console.log('maior idade ' + ano)
  } else {
    console.log('de menor ' + ano)
  }

}

maior(2003)