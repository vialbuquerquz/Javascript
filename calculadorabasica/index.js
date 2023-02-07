let number1 = "";//declarando varáveis que vão ser definidas pelo usuário
let number2 = "";

function somar(){//criando função somar
    number1 = document.getElementById("primeironumero").value;//definindo valor do input como definição da variável
    number2 = document.getElementById("segundonumero").value;
    document.getElementById("resultado").innerHTML = number(number1) + number(number2);//arrumar o cálculo definido que está concatenando
}

function subtracao(){
    primeirovalor = document.getElementById("primeironumero").value;
    segundovalor = document.getElementById("segundonumero").value;
    document.getElementById("resultado").innerHTML = primeirovalor - segundovalor;// realiza operação e mostra em tela
}

function multiplicacao(){
    primeirovalor = document.getElementById("primeironumero").value;
    segundovalor = document.getElementById("segundonumero").value;
    document.getElementById("resultado").innerHTML = primeirovalor * segundovalor;
}

function divisao(){
    primeirovalor = document.getElementById("primeironumero").value;
    segundovalor = document.getElementById("segundonumero").value;
    document.getElementById("resultado").innerHTML = primeirovalor / segundovalor;
}