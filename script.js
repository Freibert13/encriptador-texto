const textArea = document.querySelector (".area_texto");
const mensaje = document.querySelector (".mensaje");
const fraseMuñeco = document.getElementById ("frase_muñeco");

textArea.addEventListener('input', function() {
    this.value = this.value.replace(/[^a-z\s]/g, '');
});

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    fraseMuñeco.style.display = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];
    

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    fraseMuñeco.style.display = "none";
   
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];
    

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll( matrizCodigo[i][1], matrizCodigo[i][0] )

        }
    }
    return stringDesencriptada
}

function btnCopiar(){

    if(mensaje.value.trim() === "" ) {
        alert("No hay texto para copiar");
        return;
    }
    navigator.clipboard.writeText(mensaje.value).then(() => {
        alert("Texto copiado con Exito");
    }).catch(err =>{
        console.error("Error al copiar el texto",err);
    } )
    mensaje.value = ""

}