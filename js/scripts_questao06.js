//Pegando elementos do dom
const formDados = document.querySelector('#formulario-IMC')
const divResultado = document.querySelector('#resultado')

//Capturando o evento de submit
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let nome = parseFloat(form_num.get('nome'))
    let peso = parseFloat(form_num.get('peso'))
    let altura = parseFloat(form_num.get('altura').replace('.',','))

    /* 
        IMC = peso / altura^2
        <20 = abaixo do peso
        >=20 e <=25 = normal
        >=25 e <=30 = excesso de peso
        >=30 e <=35 = obesidade
        >35 = obesidade mórbida
    */

    let IMC = parseFloat(peso / (altura * altura)) / parseFloat(2)

    if (IMC <20){
        divResultado.innerHTML = `O IMC é: ${IMC}, o indivíduo se encontra abaixo do peso`
    } else if (IMC >=20 && IMC <=25){
        divResultado.innerHTML = `O IMC é: ${IMC}, o indivíduo se encontra com peso normal`
    } else if (IMC >25 && IMC <=30){
        divResultado.innerHTML = `O IMC é: ${IMC}, o indivíduo se encontra com excesso de peso`
    } else if (IMC >30 && IMC <=35){
        divResultado.innerHTML = `O IMC é: ${IMC}, o indivíduo se encontra com obesidade`
    } else {
        divResultado.innerHTML = `O IMC é: ${IMC}, o indivíduo se encontra com obesidade mórbida`
    }
})