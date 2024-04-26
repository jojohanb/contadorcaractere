
const inputTexto = document.querySelector("[input-texto]")
const divContador = document.querySelector("[txt-contador]")
const btnContar = document.querySelector("[btn-contar]")


inputTexto.addEventListener("input",handleInputTexto)
btnContar.addEventListener("click",handleBtnContar)
btnContar.addEventListener("click",handleInputTexto)

let modo = "caracteres"

function handleInputTexto(evento){
    let palavras
    if (modo == "caracteres"){
        divContador.innerText = inputTexto.value.length + " caracteres"
    }  else {       
        palavras = (inputTexto.value.trim() == "" ? 0 : inputTexto.value.trim().split(/\s+/).length)
        divContador.innerText = palavras + " Palavras"
    }
}
function handleBtnContar(evento){
    if (modo === "caracteres"){
        modo = "palavras"
        btnContar.innerText = "Contar caracteres"
    }else {
        modo = "caracteres"
        btnContar.innerText = "Contar palavras"
}
}