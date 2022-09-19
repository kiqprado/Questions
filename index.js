const respostaElemento = document.querySelector('#resposta')

const inputPergunta = document.querySelector('#inputPergunta')

const buttonPerguntar = document.querySelector('#buttonPerguntar')

const respostas = [
  'Certeza!',
  'Não Tenho Tanta Certeza.',
  'Olhe lá, é um pouco arriscado.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso!',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem que não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apotam que sim.',
  'Olha, é complicado.',
  'É melhor que você nem saiba!',
]

//clique em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digita a pergunta aí meu Nobre :S')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  const totalRespotas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespotas)

  respostaElemento.innerHTML = pergunta + respostas[numeroAleatorio]

  respostaElemento.style.opacity = 1

  //Sumir com a resposta após determinado tempo.
  setTimeout(function () {
    respostaElemento.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 4000)
}
