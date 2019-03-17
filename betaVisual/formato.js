
function printa(){

    var nome = document.createTextNode(document.querySelector(".inputProd").value)
    var preco = document.createTextNode(parseFloat(document.querySelector(".inputPrec").value))
    var dataFab = document.createTextNode(document.querySelector(".inputFab").value)
    var dataVal = document.createTextNode(document.querySelector(".inputVal").value)

    
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





function atualizaLista(){

    var btn = document.createElement("t");        
    var t = document.createTextNode(prompt("Escreva seu nome"));       
    btn.appendChild(t);                                
    document.body.appendChild(btn);      
    
    
    }
    
