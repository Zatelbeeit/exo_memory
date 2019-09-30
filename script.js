var divElement = document.getElementsByTagName ("div")[0];

var tableElement = document.createElement("table");
//tableElement.id = "table";
divElement.appendChild (tableElement);

cpt = 1;


for (let i=1; i < 4; i++){
    var trElement = document.createElement("tr");
    tableElement.appendChild(trElement)

     

    for (let j=1; j < 4; j++){
        var cellElement = document.createElement("td");
        trElement.appendChild(cellElement);
        cellElement.innerHTML = cpt++;
       
    }   
      
}
 
 




