//Pegando elementos do dom
const formDados = document.querySelector('#formulario-aluno')
const divResultado = document.querySelector('#resultado')

//Capturando o evento de submit
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let nome = parseFloat(form_num.get('nome'))
    let nota1 = parseFloat(form_num.get('nota1'))
    let nota2 = parseFloat(form_num.get('nota2'))
    let nota3 = parseFloat(form_num.get('nota3'))

    // >=6 aprovado, <6 reprovado
    let media = parseFloat(nota1 + nota2 + nota3) / 3

    if(media >= 6){
        divResultado.innerHTML = `Sua média é: ${media}, você está Aprovado`
    } else {
        divResultado.innerHTML = `Sua média é: ${media}, você está Reprovado`
    }
})