const elementos = []
let item = " ";
let button = document.querySelector("#envio")

button.addEventListener(clck, "Enviar");

function Enviar(){
    item = document.getElementById('itemadicionado').value;
    elementos.map((user) => user.comprar = item);
    let novoitem = document.getElementById('resposta').textContent = item + " adicionado à lista de compra."
}