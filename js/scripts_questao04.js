//Pegando elementos do dom
const formDados = document.querySelector('#formulario-carro')
const divResultado = document.querySelector('#resultado')

//Capturando o evento de submit
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let distancia = parseFloat(form_num.get('distancia'))
    let consumo = parseFloat(form_num.get('consumo'))
    let preco = parseFloat(form_num.get('preco'))

    //Distância = 100, consumo = 10km/L, preço = R$10,00
    let combustivel = parseFloat(distancia / consumo)
    let valor = parseFloat(combustivel * preco)

    divResultado.innerHTML = `A quantidade de litros necessários é: ${combustivel} e o valor total será: ${valor}`
})