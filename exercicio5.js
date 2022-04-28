let usuarios = [
    {
    nome:"Joao felipe",
    sobrenome:"Marcelino",
    idade:"23",
    email:"joao@gmail.com",

    },
    {
        nome:"ricardo",
        sobrenome:"oliveira",
        idade:"29",
        email:"ricardo@gmail.com",
    
    },
    {
        nome:"ana",
        sobrenome:"maria",
        idade:"19",
        email:"ana@gmail.com",
    
    }
];

//pega um "usuario" dentro de uma array de objetos
for(const usuario of usuarios) {

    //pega uma propriedade contida dentro do objeto chamado usuario
    for(const propriedade in usuario) {
        console.log(usuario[propriedade])
    }
}