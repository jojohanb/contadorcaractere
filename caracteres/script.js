const inputTexto= document.querySelector("[input-texto]")
const divContador=document.querySelector("[txt-contador]")
const btnContar=document.querySelector("[btn-contar]")

let modo = "caracteres"
function handleInputTexto(evento){
    // console.log(inputTexto.value)
    console.log(evento.target.value) 
}
function handleBtnContar(evento) {
    // console.log("click contar")
    if (modo === "caracteres") {
        modo="palavras"
        btnContar.innerText="contar palavras"
    } else {
        modo="caracteres"
        btnContar.innerText="contar caracteres"
    }

}

inputTexto.addEventListener("input", handleInputTexto)
btnContar.addEventListener("click", handleBtnContar)