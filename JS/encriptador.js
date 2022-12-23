function encriptar(texto = document.getElementById("textoString").value){
    
    let htmlResultado = document.getElementById("contenedorResultado")

    let htmlResultadoChildren = document.getElementById("contenedorResultado").children

    texto = texto.replace(/(\r\n|\n|\r)/gm," ")
    const regex = /^[a-z ]+$/gm //Regular Expression
    
    let resultado = regex.test(texto)

    if( resultado == true && texto != 0 ){

      textoEncriptado = texto.replace(/e/g, "enter")

      if (htmlResultadoChildren.length < 2){

        htmlResultado.innerHTML += `<p id="resultado">${textoEncriptado}</p>`

      } else{
        htmlResultado.children[1].innerHTML = textoEncriptado
      }

    } else if (result == false && Boolean(texto) == true){
    
      alert("Error - Utiliza solamente letras minusculas!")
    
    } else{
    
      alert("Error - Necesitas escribir algo!")
    
    }

}




/*
    console.log(Boolean(texto))
    console.log(resultado)
*/

