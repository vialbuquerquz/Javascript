let produto1 = 24.80;
let produto2 = 1.90;
let produto3 = 8.90;
let produto4 = 1.00;
let custo = 0;

// se a condição for verdadeira( o produto 1 for igual ou mais barato que 18) o produto será comprado.
if (produto1 <= 18) {
    console.log("comprei o produto 1");
    // a varivável custo acrescenta o valor do produto 1
    custo = custo + produto1    
    //se o produto 1 não obedecer a condição, retornará o seguinte comando:
} else {
    console.log("você não possui dinheiro para o produto 1")
}

// se a condição for verdadeira(o produto 2 for igual ou mais barato que 4 e mais caro do que 1.5) o produto será comprado.
if (produto2 < 4) {
    if (produto2 >= 1.5) {
        console.log("comprei o produto 2");
        // a varivável custo acrescenta o valor do produto 2
        custo = custo + produto2
    } else {
        //se o produto 1 não obedecer a condição, retornará o seguinte comando:
        console.log("tem algo errado com o produto 2")
    }
}

console.log("comprei o produto 3");
// a varivável custo acrescenta o valor do produto 3
custo = custo + produto3;

console.log("você gastou R$" + custo + " reais na sua compra.")