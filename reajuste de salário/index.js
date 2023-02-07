let salario = prompt("Reajuste de salário. Qual o seu salário atual?")
novosalario = 0;

if(salario <= 280){
    novosalario = (salario * 1.20)
    alert("Seu salário que era de "+ salario + " teve aumento de 20% e agora é R$" + novosalario + " reais.")
}

else if(280 < salario <= 700){
    novosalario = (salario * 1.15)
    alert("Seu salário que era de "+ salario + " teve aumento de 15% e agora é R$" + novosalario + " reais.")
}

else if(700 < salario <= 1500){
    novosalario = (salario * 1.10)
    alert("Seu salário que era de "+ salario + " teve aumento de 10% e agora é R$" + novosalario + " reais.")
}

else if(salario > 1500){
    novosalario = (salario * 1.5)
    alert("Seu salário que era de "+ salario + " teve aumento de 5% e agora é R$" + novosalario + " reais.")
}