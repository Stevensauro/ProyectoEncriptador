function encriptar(texto = document.getElementById("textoString").value){
    
    texto = texto.replace(/(\r\n|\n|\r)/gm," ")
    const regex = /^[a-z ]+$/gm //Regular Expression
    
    let result = regex.test(texto)
    
   
    if( result == true && texto != 0 ){
      textoEncriptado = texto.replace(/e/g, "enter")
      document.getElementById("resultado").innerHTML = textoEncriptado
    } else if (result == false && Boolean(texto) == true){
      alert("Error - Utiliza solamente letras minusculas!")
    } else{
      alert("Error - Necesitas escribir algo!")
    }
    console.log(result)  
    console.log(Boolean(texto))
}

