//Pegando elementos do dom
const formDados = document.querySelector('#formulario-tinta')
const divResultado = document.querySelector('#resultado')

//Capturando o evento de submit
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let altura = parseFloat(form_num.get('altura'))
    let largura = parseFloat(form_num.get('largura'))

    let parede = parseFloat(altura * largura) / parseFloat(2)
    let tinta = parseFloat(parede / 2) 
   
    divResultado.innerHTML = ` ${parede.toFixed(2).replace('.',',')}`
})