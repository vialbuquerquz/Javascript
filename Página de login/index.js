let usuario = "";
let senha = " ";
const button = document.querySelector("enviar")

button.addEventListenner(click, "Envio")

function Envio(){
    usuario = document.querySelector("#infos").value;
    senha = document.querySelector("#senha").value;
    if(usuario == "vitoria@gmail.com" && senha == "1234"){
        alert("Login efetuado.")
    } else {
        alert("Usuário não encontrado, tente novamente.")
        
    }
}

