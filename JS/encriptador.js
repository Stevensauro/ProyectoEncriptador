function encriptar(texto = document.getElementById("textoString").value){
    
    let contenedorResultado = document.getElementById("contenedorResultado")

    let contenedorResultadoChildren = document.getElementById("contenedorResultado").children

    texto = texto.replace(/(\r\n|\n|\r)/gm," ")

    const regex = /^[a-z ]+$/gm //Regular Expression
    
    let resultado = regex.test(texto)

    if( texto == 0 ){
      
      alert("Error - Necesitas escribir algo!")

    } else if (resultado == false && Boolean(texto) == true){
    
      alert("Error - Utiliza solamente letras minusculas!")
    
    } else{
    
        let textoEncriptado = texto
          .replaceAll('e', 'enter')
          .replaceAll('i', 'imes')
          .replaceAll('a', 'ai')
          .replaceAll('o', 'ober')
          .replaceAll('u', 'ufat')

      if (contenedorResultadoChildren.length < 3){

        contenedorResultado.innerHTML += `<div class="card-text"><p class="fs-5" id="resultado">${textoEncriptado}</p></div>
        
        <button class="btn btn-warning" type="button" onclick="copiarTexto();">Copiar Resultado</button>`

      } else{

        contenedorResultado.children[1].innerHTML = `<p class="fs-5" id="resultado">${textoEncriptado}</p>`
        
      }

    }

}


function desencriptar(texto = document.getElementById("textoString").value){

  let contenedorResultado = document.getElementById("contenedorResultado")

  let contenedorResultadoChildren = document.getElementById("contenedorResultado").children

  texto = texto.replace(/(\r\n|\n|\r)/gm," ")
  const regex = /^[a-z ]+$/gm //Regular Expression
  
  let resultado = regex.test(texto)

  if( texto == 0 ){
    
    alert("Error - Necesitas escribir algo!")

  } else if (resultado == false && Boolean(texto) == true){
  
    alert("Error - Utiliza solamente letras minusculas!")
  
  } else{
  
      let textoEncriptado = texto
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u')

      if (contenedorResultadoChildren.length < 2){

        contenedorResultado.innerHTML += `<div class="card-text"><p class="fs-5" id="resultado">${textoEncriptado}</p></div>
        
        <button class="btn btn-warning" type="button" onclick="copiarTexto();">Copiar Resultado</button>`

      } else{

        contenedorResultado.children[1].innerHTML = `<p class="fs-5" id="resultado">${textoEncriptado}</p>`
        
      }

  }

}


function copiarTexto() {
  let texto = document.getElementById("resultado").textContent 

  navigator.clipboard.writeText(texto);
  alert("Texto ha sido copiado con exito!")
}
