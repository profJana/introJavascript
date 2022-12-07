function alterarTexto(){
    document.getElementById("atividade1").innerHTML = "E provavelmente você é meu aluno :D!"
}

function resultado(){
    window.alert(500 + 499)
}

function resultadoConsole(){
    console.log("2 x 2 é igual a : " + 2 * 2)
}

function alterarCorFundo(){
    document.getElementById("body").style.backgroundColor = "pink"
}

// var - Declara uma variável
// Variáveis são caixas que armazenam valores de dados.
var x = 30;
var y = 10;
var z = "Prof Jana";
var resultadoSoma = x + y;

//pegando o valor de um input e mostrando na tela:
var nome = document.getElementById("nomeUsuario");
var saudacoes = document.getElementById("saudacao");

function enviarNome(){
    saudacoes.innerHTML = "Olá, seja bem vindo(a) " + nome.value;
}
