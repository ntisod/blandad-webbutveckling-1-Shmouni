function authorDialog(){
   alert("Shmouni har skapat sidan den 22/3/2021") 
}
function färg(){ 
    document.getElementById("rubrik").innerHTML = "Johannes";
    document.getElementById("rubrik").style.backgroundColor = "lightblue"; 
    document.getElementById("rubrik").style.color = "black"
    document.getElementById("stycke2").style.color = "black";
    document.getElementById("stycke2").style.backgroundColor = "lightblue";   
    document.getElementById("stycke").style.color = "black";
    document.getElementById("stycke").style.backgroundColor = "lightblue";   
    document.getElementById("body").style.backgroundColor = "green"
  }
  function bild() {
    if (document.getElementById("myImage").src == "https://www.dossinet.me/coverage_pics/j17042058f94bda6dae5.jpg"){
        document.getElementById("undertext").innerHTML = "Black ops cold war, Hade en internationell premiärvisning visades 26 augusti 2020.";
        document.getElementById("myImage").src = "https://varvat.se/wp-content/uploads/2020/08/Black_Ops_Cold_War.jpeg"
    }
    else{
        document.getElementById("myImage").src = "https://www.dossinet.me/coverage_pics/j17042058f94bda6dae5.jpg"
        document.getElementById("undertext").innerHTML = "Black ops 1, Spelet tillkännagavs officiellt den 30 april 2010 och släpptes den 9 november 2010.";
    }
}