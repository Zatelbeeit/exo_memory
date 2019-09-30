var divElement = document.getElementsByTagName ("div")[0];

var tableElement = document.createElement("table");
//tableElement.id = "table";
divElement.appendChild (tableElement);

var nbCell = 16;
var numbers=[]



// var numbers = ["1","2","3","4","5","6","7","8", "1","2","3","4","5","6","7","8"]
for (k=1; k <= nbCell/2; k++){
    numbers.push(2*(k))
}

for (i = 0; i < nbCell; i++) {
    var random_index = Math.floor(Math.random() * (i + 1));
    var temp = numbers[i];
    numbers[i] = numbers[random_index];
    numbers[random_index] = temp;
}


var cpt = 0

for (let i=1; i < 5; i++){
    var trElement = document.createElement("tr");
    tableElement.appendChild(trElement)
    
    for (let j=1; j < 5; j++){
        var cellElement = document.createElement("td");
        trElement.appendChild(cellElement);
        cellElement.innerHTML = numbers[cpt++];
        // cellElement.classList.add("hidden");
        // cellElement.addEventListener("click",function(){
            //     this.classList.remove("hidden")
            // });
            
        }   
        
    }
    
    
    
    



