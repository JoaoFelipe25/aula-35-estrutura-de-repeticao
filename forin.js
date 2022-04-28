
//variavel 'carro' do tipo objeto que possui as propriedades 'marca', 'modelo' e 'cor'
let carro = {
    marca: 'ford',
    modelo: 'fiesta',
    cor: 'prata',
}

// obtendo os nomes da propriedades
for (propriedade in carro){
    console.log(propriedade);
}
// resultado 'marca' , 'modelo' e 'cor'