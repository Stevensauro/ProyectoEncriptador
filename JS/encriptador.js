function strReplace(myStr){
      
    var myStr = document.getElementById("textString").value
    var newStr = myStr.replace(/e/g, "enter")
    
    // Insert modified string in paragraph
    document.getElementById("textString").value = newStr
    
    console.log(textString.value)
}