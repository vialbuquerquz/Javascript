//código que conta a quantidade de vogais de uma palavra
//consultando os elementos de uma coleção

const palavra = "joaozinho"

let numerodevogais = 0;

// o for adiciona a variavel letra para a palavra e verifica quantas vogais existem, adicionando um incremento
//na variavel numerodevogais
for (const letra of palavra){
    if(letra === "a"){ numerodevogais += 1;}
    if(letra === "e"){ numerodevogais += 1;}
    if(letra === "i"){ numerodevogais += 1;}
    if(letra === "o"){ numerodevogais += 1;}
    if(letra === "u"){ numerodevogais += 1;}

    console.log(numerodevogais)

}

