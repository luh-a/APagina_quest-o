//Pegando elementos do dom
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//Capturando o evento de submit
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let num1 = parseFloat(Form_num.get('num1'))
    let num2 = parseFloat(form_num.get('num2'))
    let num3 = parseFloat(form_num.get('num3'))

    let media = parseFloat(num1 + num2 + num3) / parseFloat(3)

    divResultado.innerHTML = `A média do s números ${média.toFixed(2).replace('.',',')}`
})