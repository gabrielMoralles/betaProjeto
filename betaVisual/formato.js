

function printa(qtd,nome,preco,dataFab,dataVal){



    var form= [qtd,nome,preco,dataFab,dataVal]

    var tr= document.createElement("tr")

    for(x=0;x<=4;x+=1 ){
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
    var qtd = document.createTextNode(parseInt(document.querySelector(".inputQtd").value))
    var nome = document.createTextNode(document.querySelector(".inputProd").value)
    var preco = document.createTextNode(parseFloat(document.querySelector(".inputPrec").value))
    var dataFab = document.createTextNode(document.querySelector(".inputFab").value)
    var dataVal = document.createTextNode(document.querySelector(".inputVal").value)
    printa(qtd,nome,preco,dataFab,dataVal)


}
