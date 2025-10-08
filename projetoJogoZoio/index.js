// criar a função para gerar numeros aleatórios
//pegando os elementos do DOM 
const formulario = document.querySelector(".formulario input");
const botao = document.querySelector(".btn-enviar");
const zoio = document.getElementsByClassName("texto-zoio")[0]

botao.addEventListener("click", function(){
    // const respUsuario = formulario.value;
    const respUsuario = formulario.value;
    const numeros = geraNumeros()
    logicaConta(respUsuario, numeros);
})

function logicaConta (respUsuario, numeros){
    if (respUsuario == numeros)
        zoio.innerHTML = "Você Acertou!"
    else 
        zoio.innerHTML = `Você errou, Zoio pensou em ${numeros}`;
}

// vamos pegar a resposta do usuário


// ...existing code...
// textoZoio.innerHTMl("teste")

function geraNumeros (){
    let numeros = Math.floor(Math.random()*21)
    return numeros
}
