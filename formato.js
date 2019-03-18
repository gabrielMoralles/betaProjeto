

function printa(nome,preco,dataFab,dataVal){

    
    
    var form= [nome,preco,dataFab,dataVal]

    var tr= document.createElement("tr")

    for(x=0;x<=3;x+=1 ){
            var table = document.querySelector("table")
            var td= document.createElement("td")

            
            td.appendChild(form[x])
            tr.appendChild(td)
            table.appendChild(tr)
            
    }

}
function valida(nome,preco,dataFab,dataVal){


    if (preco==NaN){

        alert("preco invalido")

    }
      else{  printa(nome,preco,dataFab,dataVal)

      }
}

function main(){

    var nome = document.createTextNode(document.querySelector(".inputProd").value)
    var preco = document.createTextNode(parseFloat(document.querySelector(".inputPrec").value))
    var dataFab = document.createTextNode(document.querySelector(".inputFab").value)
    var dataVal = document.createTextNode(document.querySelector(".inputVal").value)
    printa(nome,preco,dataFab,dataVal)


}

var btn= decodeURIComponent.querySelector("button")

btn.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.printa()
      // Trigger the button element with a click
      document.getElementById("myBtn").click();
    }
  });