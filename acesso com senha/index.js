let senha;
do {
    senha = prompt("Para utilizar, digite a senha abaixo: ")

    if (senha == 1234) {
        alert("ACESSO PERMITIDO")
    } else {
        alert("ACESSO NEGADO, TENTE NOVAMENTE")
    }
} while (senha != 1234);// o código continuará repetindo enquanto a condição for verdadeira(senha diferente de 1234)