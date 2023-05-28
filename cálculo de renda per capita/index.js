let moradores = parseInt(prompt("Insira o número de moradores da casa"));
let count = 1;
let salarios = [];
let soma = 0;
let rendapercapita = 0;

while(count <= moradores){
    let salariounid = parseFloat(prompt("Insira o salário de um morador"));
    salarios.push(salariounid);
    count++;
}

for(i=0; i < salarios.length; i++){
    soma+=salarios[i];
}

rendapercapita = soma / moradores;

alert("A renda per capita dessa família é de R$"+ rendapercapita + " reais.");
