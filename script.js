var form = document.getElementById("form");
plussdekoder = document.getElementById("plussdekoder")
plussextender = document.getElementById("plussextender")
rabatter = document.getElementById("rabatter")
output = document.getElementById("output")



form.addEventListener("submit", func3);



form.dekodernum.addEventListener("click", func);
form.extendernum.addEventListener("click", func);
form.dekoder.addEventListener("click", func);
form.extender.addEventListener("click", func);
document.getElementById("again").addEventListener("click",func4)
form.rabattere.addEventListener("click", func);


for (i = 0; form.internett[i] != undefined; i++) {
    form.internett[i].addEventListener("click", func);
}


var internettvers = ["50mbit", "100mbit", "300mbit", "500mbit"]
var internettpris = [399, 599, 799, 999]

var produkter = [];
var pris = [];
var førpris = [];

var i = 1
console.log(i,i,i,i)
console.log(i+i+i+i)

function func(e) {
    produkter = [];
    pris = [];
    førpris = [];
    rabatter.innerHTML = "";

    if (internettvers[form.internett.value] != undefined) {
        produkter.push(internettvers[form.internett.value]);
        pris.push(internettpris[form.internett.value]);
        førpris.push(internettpris[form.internett.value]);
    }

    if (form.dekoder.checked == true) {
        plussdekoder.style.display = "block"
        for (i = 0; i < form.dekodernum.value; i++) {
            produkter.push("dekoder");
            pris.push(399);
            førpris.push(399);
        }

    } else {
        plussdekoder.style.display = "none"
    }

    if (form.extender.checked == true) {
        plussextender.style.display = "block"
        for (i = 0; i < form.extendernum.value; i++) {
            produkter.push("extender");
            pris.push(499);
            førpris.push(499);
        }

    } else {
        plussextender.style.display = "none"
    }

    if (form.rabattere.checked == true) {
        document.getElementById("rabatter").style.display = "block"

    } else {
        document.getElementById("rabatter").style.display = "none"
    }




    mail.style.display = "none"
    

    for (i = 0; produkter[i] != undefined; i++) {
        rabatter.innerHTML += "<h4>"+produkter[i]+"</h4>" +
            '<label for="' + i + '">0% </label>' +
            '<input type="radio" name="' + i + '" id="' + i + '1" value="00" class="rabatt" checked="checked"> ' +
            '<label for="' + i + '">20% </label>' +
            '<input type="radio" name="' + i + '" id="' + i + '2" value="20" class="rabatt"> ' +
            '<label for="' + i + '">50% </label>' +
            '<input type="radio" name="' + i + '" id="' + i + '3" value="50" class="rabatt"> ' +
            '<label for="' + i + '">70% </label>' +
            '<input type="radio" name="' + i + '" id="' + i + '4" value="70" class="rabatt"> ' +
            '<label for="' + i + '">100% </label>' +
            '<input type="radio" name="' + i + '" id="' + i + '5" value="100" class="rabatt"> <br><br>'

            document.getElementById(i+"1").addEventListener("click", func2);
            document.getElementById(i+"2").addEventListener("click", func2);
            document.getElementById(i+"3").addEventListener("click", func2);
            document.getElementById(i+"4").addEventListener("click", func2);
            document.getElementById(i+"5").addEventListener("click", func2);

    }

    console.log(produkter)
    console.log("pris "+pris)
    console.log("før " +førpris)
    for (i = 0; produkter[i] != undefined; i++) {
        console.log("før " +førpris)    
    }


}

function func2(e){
    console.log("")
    console.log("før " +førpris)
    console.log(pris)
    for (i = 0; produkter[i] != undefined; i++) {
        pris[i] = førpris[i];

        if(document.getElementById(i+"1").checked == true){
         pris[i] = pris[i]
        }
        if(document.getElementById(i+"2").checked == true){
         pris[i] = pris[i] * 80/100
        }
        if(document.getElementById(i+"3").checked == true){
         pris[i] = pris[i] * 50/100
        }
        if(document.getElementById(i+"4").checked == true){
         pris[i] = pris[i] * 30/100
        }
        if(document.getElementById(i+"5").checked == true){
         pris[i] = pris[i] * 0
        }
    }
    
    console.log(pris)

    
    console.log("")
    for(y=0; pris[y] != undefined; y++){
        console.log(produkter[y]+"  " +pris[y])
    }
}

mail= document.getElementById("mail");

function func3(e){
    var navn = form.navn.value
    var hnavn = form.hnavn.value
    var tillbudpå = []
    var tillbud = ""
    var kjøpt = ""
    var penger = 0
    var rabatpros = 0 
    var rabatkr = 0
    
    mail.style.display = "block"

    for (i = 0; produkter[i] != undefined; i++) {
        kjøpt += produkter[i] +"  "+ pris[i] +"<br>"
        penger += pris[i]
        rabatkr += førpris[i]-pris[i]
        if (førpris[i] != pris[i]){
            tillbudpå.push(produkter[i])
            tillbud = "Sender deg som avtalt tilbud på "+tillbudpå+". <br>"
        }
    }


    if (navn != "" || hnavn != ""){
    mail.innerHTML = ""+
    "Hei "+navn+" og takk for en hyggelig telefonsamtale. <br>"+
    tillbud+"<br>"+
    "Prisen vil da bli <br>"+
    kjøpt+
    "<br>Rabatt "+rabatkr+" kr <br>"+
    "Totalt "+penger+" kr <br><br>"+
    "Det er bare å svare på denne eposten hvis du har noen spørsmål. <br><br>"+
    "Med vennlig hilsen "+hnavn+" <br><br>"+
    "";
    } else {
        mail.innerHTML = "Fyll ut navn"
    }
    
    e.preventDefault()
}


function func4(){
    location.reload();
}

