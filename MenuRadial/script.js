// Definição de uma função que retorna o valor em 'int' do estilo de um elemento
// elem: elemento a ser passado, pos: propriedade desejada, unit: unidade de medida
const getPos = (elem, pos, unit) =>
  parseFloat(window.getComputedStyle(elem).getPropertyValue(pos).split(unit)[0])

// Seleção de alguns elementos
const body = document.querySelector('body')
const menuWrap = document.querySelector('.menuWrap')
const divA = document.querySelector('.a')
const divB = document.querySelector('.b')
const divC = document.querySelector('.c')
const divD = document.querySelector('.d')
const divE = document.querySelector('.e')
const divF = document.querySelector('.f')
const divG = document.querySelector('.g')
const divH = document.querySelector('.h')

// Valores da posição do mouse
let x = 0
let y = 0

// Função que constantemente atualiza a posição do mouse no ViewPort
document.addEventListener('mousemove', e => {
  x = e.clientX
  y = e.clientY
})

// Função principal para abrir o menu
function abrirMenu() {
  // Valores da altura e largura do menu
  let largura = getPos(menuWrap, 'width', 'px')
  let altura = getPos(menuWrap, 'height', 'px')
  // Pré-Calcula as novas posições do menu
  let novaAltura = x - largura / 2
  let novaLargura = y - altura / 2
  // Check para se a nova posição fica dentro do enquadramento do ViewPort (atualmente, considera apenas valores 'top' e 'left')
  if (novaAltura > -20 && novaLargura > -20) {
    // Atualiza a nova posição do menu, posicionando centralizado no mouse
    menuWrap.style.left = `${x - largura / 2}px`
    menuWrap.style.top = `${y - altura / 2}px`
  } else {
    // Posiciona o menu dentro do enquadramento, porém, não o centraliza no mouse
    menuWrap.style.left = `${x - 45}px`
    menuWrap.style.top = `${y - 45}px`
  }
  // Por fim, deixa o menu "visível" alterando o display
  menuWrap.style.display = 'block'
}

// Executa a abertura do menu ao pressionar qualquer tecla do teclado
window.onkeydown = e => {
  abrirMenu()
}
// Deixa o menu invisível ao deixar o menu
menuWrap.addEventListener('mouseleave', e => {
  menuWrap.style.display = 'none'
})

// Adiciona funcionalidade a cada um dos itens
// Ex.: Altera a cor do fundo da página
divA.addEventListener('click', e => {
  body.style.backgroundColor = '#ff0000'
})
divB.addEventListener('click', e => {
  body.style.backgroundColor = '#ff8700'
})
divC.addEventListener('click', e => {
  body.style.backgroundColor = '#ffd300'
})
divD.addEventListener('click', e => {
  body.style.backgroundColor = '#F04CD8'
})
divE.addEventListener('click', e => {
  body.style.backgroundColor = '#a1ff0a'
})
divF.addEventListener('click', e => {
  body.style.backgroundColor = '#0aff99'
})
divG.addEventListener('click', e => {
  body.style.backgroundColor = '#147df5'
})
divH.addEventListener('click', e => {
  body.style.backgroundColor = '#580aff'
})

// Quaisquer dúvidas sobre implementação ou para contato profissional:
// adrianocorreadev@gmail.com
