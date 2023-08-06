const mascara = document.querySelector('.cpf')

// addEventListener() executa a função contar quando uma tecla é pressionada
mascara.addEventListener('keypress', contar)

// funcao para contar e substituir quanado necessário
function contar() {
  let mascaraLength = mascara.value.length

  if (mascaraLength == 3 || mascaraLength == 7) {
    mascara.value += '.'
  }
  else if (mascaraLength == 11) {
    mascara.value += '-'
  }
}
