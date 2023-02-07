let sexo = prompt(`Qual o seu sexo? 
1-feminino
2- masculino `)
let altura = prompt("Agora informe sua altura para saber seu peso ideal")
peso = 0;

switch(sexo){
    case `1`: peso = (altura * 62.1) - 44.7
        alert("Seu peso ideal é " + peso);break;
    
    case `2`: peso = (altura * 72.7) - 58 
        alert("Seu peso ideal é de: " + peso);break;
}