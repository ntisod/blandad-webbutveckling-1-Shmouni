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
    if (document.getElementById("myImage").src == "https://cdn.discordapp.com/attachments/414475912617263104/823931376394567710/image0.jpg"){
        document.getElementById("undertext").innerHTML = "27 februari 2021, at 84 kg and not the end.";
        document.getElementById("myImage").src = "https://cdn.discordapp.com/attachments/414475912617263104/823931451236941844/image0.jpg"
    }
    else{
        document.getElementById("myImage").src = "https://cdn.discordapp.com/attachments/414475912617263104/823931376394567710/image0.jpg"
        document.getElementById("undertext").innerHTML = "26 maj 2020, at 100 kg the start.";
    }
}