//Pegando elementos do dom
const formDados = document.querySelector('#formulario-triangulo')
const divResultado = document.querySelector('#resultado')

//Capturando o evento de submit
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let lado1 = parseFloat(form_num.get('lado1'))
    let lado2 = parseFloat(form_num.get('lado2'))
    let lado3 = parseFloat(form_num.get('lado3'))

    /*
        Equilátero = os 3 lados são iguais
        Isóceles = possui dois lados iguais
        Escaleno = possui 3 lados diferentes
    */

    if(lado1 === lado2 && lado2 === lado3){
        divResultado.innerHTML = `O triângulo é equilátero (apresenta todos os lados iguais)`
    } else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        divResultado.innerHTML = `O triângulo é isóceles (apresenta dois lados iguais)`
    } else {
        divResultado.innerHTML = `O triângulo é escaleno (apresenta todos os lados diferentes)`
    }
})