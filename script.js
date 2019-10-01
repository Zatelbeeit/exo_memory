var divElement = document.getElementsByTagName("div")[0];
var button = document.getElementsByTagName("button")[0];
var colInput = document.getElementById("col");
var rowInput = document.getElementById("row");

var tableElement = document.createElement("table");
//tableElement.id = "table";
divElement.appendChild(tableElement);

var click1 = null;
var click2 = null;

var score=document.getElementsByClassName("score")[0]
var count=score.innerHTML

button.addEventListener("click", function () {

    tableElement.innerHTML = ""
    count=0   

    var col = colInput.value
    var row = rowInput.value

    var nbCell = col * row

    if (nbCell % 2 == 0) {

        var numbers = []

        for (k = 1; k <= nbCell; k++) {
            numbers.push(k);
            numbers.push(k);
        }

        for (i = 0; i < nbCell; i++) {
            var random_index = Math.floor(Math.random() * (i + 1));
            var temp = numbers[i];
            numbers[i] = numbers[random_index];
            numbers[random_index] = temp;
        }

        var cpt = 0

        for (let i = 0; i < row; i++) {
            var trElement = document.createElement("tr");
            tableElement.appendChild(trElement)

            for (let j = 0; j < col; j++) {
                var cellElement = document.createElement("td");
                trElement.appendChild(cellElement);
                cellElement.innerHTML = numbers[cpt++];
                cellElement.classList.add("hidden");
                cellElement.addEventListener("click", function () {
                    this.classList.remove("hidden");

                    if(click1 == null){
                        click1 = this;
                    } else{
                        click2 = this;
                        
                        if(click1.innerHTML != click2.innerHTML){
                            setTimeout(function(){
                                click1.classList.add("hidden");
                                click2.classList.add("hidden");

                                click1 = null
                                click2 = null
                            }, 1000)
                        } else {
                            click1 = null
                            click2 = null
                            count++;
                            score.innerHTML=count
                        }

                    }

                });

            }

        }

    } else {
        colInput.style.border = "solid 1px red";
        alert("change le chiffre imbécile!!");
    }
})









