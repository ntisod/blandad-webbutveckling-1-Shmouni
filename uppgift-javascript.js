function visaSoftware(){
    valet = "Software!";

    document.getElementById("dropdowntitle").innerHTML = "Välj dina val innom Software!";
  
    document.getElementById("välja1").innerHTML = "";
    document.getElementById("välja2").innerHTML = "";
  
    var list1 = document.getElementById("välja1");

  var val1 = document.createElement("option");
  val1.text = "Engelska 7";
  val1.value = "1";
  var val2 = document.createElement("option");
    val2.text = "Idrott och hälsa 2";
  val2.value = "2";
  var val3 = document.createElement("option");
  val3.text = "Entreprenörskap";
  val3.value = "3";
  var val4 = document.createElement("option");
  val4.text = "Modersmål";
  val4.value = "4";
  var val5 = document.createElement("option");
  val5.text = "Digitalt skapande 2";
  val5.value = "5";
  var val6 = document.createElement("option");
  val6.text = "Fysik 2";
  val6.value = "6";
  var val7 = document.createElement("option");
  val7.text = "Matematik 4";
  val7.value = "7";

  list1.add(val1);
  list1.add(val2);
  list1.add(val3);
  list1.add(val4);
  list1.add(val5);
  list1.add(val6);
  list1.add(val7);

var list2 = document.getElementById("välja2");

  var val2_1 = document.createElement("option");
  val2_1.text = "Engelska 7";
  val2_1.value = "1";
  var val2_2 = document.createElement("option");
  val2_2.text = "Idrott och hälsa 2";
  val2_2.value = "2";
  var val2_3 = document.createElement("option");
  val2_3.text = "Entreprenörskap";
  val2_3.value = "3";
  var val2_4 = document.createElement("option");
  val2_4.text = "Modersmål";
  val2_4.value = "4";
  var val2_5 = document.createElement("option");
  val2_5.text = "Digitalt skapande 2";
  val2_5.value = "5";
  var val2_6 = document.createElement("option");
  val2_6.text = "Fysik 2";
  val2_6.value = "6";
  var val2_7 = document.createElement("option");
  val2_7.text = "Matematik 4";
  val2_7.value = "7";

  list2.add(val2_1);
  list2.add(val2_2);
  list2.add(val2_3);
  list2.add(val2_4);
  list2.add(val2_5);
  list2.add(val2_6);
  list2.add(val2_7);

  var y = document.createElement("OPTGROUP");
  y.setAttribute("label", "Valen");
  
  y.appendChild(val1);
  y.appendChild(val2);
  y.appendChild(val3);
  y.appendChild(val4);
  y.appendChild(val5);
  y.appendChild(val6);
  y.appendChild(val7);

  list1.insertBefore(y, list1.options[0]);
  
  var y2 = document.createElement("OPTGROUP");
  y2.setAttribute("label", "Valen, 2");

  y2.appendChild(val2_1);
  y2.appendChild(val2_2);
  y2.appendChild(val2_3);
  y2.appendChild(val2_4);
  y2.appendChild(val2_5);
  y2.appendChild(val2_6);
  y2.appendChild(val2_7);

  list2.insertBefore(y2, list2.options[0]);

  document.getElementById("välja1").selectedIndex = 7;
  document.getElementById("välja2").selectedIndex = 7;
}
function visaEngineering(){
    valet = "Engineering!";

    document.getElementById("dropdowntitle").innerHTML = "Välj dina val innom Engineering!";

  document.getElementById("välja1").innerHTML = "";
  document.getElementById("välja2").innerHTML = "";

  var list1 = document.getElementById("välja1");

  var val1 = document.createElement("option");
  val1.text = "Engelska 7";
  val1.value = "1";
  var val2 = document.createElement("option");
  val2.text = "Idrott och hälsa 2";
  val2.value = "2";
  var val3 = document.createElement("option");
  val3.text = "Entreprenörskap";
  val3.value = "3";
  var val4 = document.createElement("option");
  val4.text = "Modersmål";
  val4.value = "4";
  var val5 = document.createElement("option");
  val5.text = "Digitalt skapande 1";
  val5.value = "5";
  var val6 = document.createElement("option");
  val6.text = "Matematik 5";
   val6.value = "6";
  var val7 = document.createElement("option");
  val7.text = "Webbserverprogrammering 1";
  val7.value = "7";
  
  list1.add(val1);
  list1.add(val2);
  list1.add(val3);
  list1.add(val4);
  list1.add(val5);
  list1.add(val6);
  list1.add(val7);

  
  var list2 = document.getElementById("välja2");

  var val2_1 = document.createElement("option");
  val2_1.text = "Engelska 7";
  val2_1.value = "1";
  var val2_2 = document.createElement("option");
  val2_2.text = "Idrott och hälsa 2";
  val2_2.value = "2";
  var val2_3 = document.createElement("option");
  val2_3.text = "Entreprenörskap";
  val2_3.value = "3";
  var val2_4 = document.createElement("option");
  val2_4.text = "Modersmål";
  val2_4.value = "4"; 
  var val2_5 = document.createElement("option");
  val2_5.text = "Digitalt skapande 1";
  val2_5.value = "5";
  var val2_6 = document.createElement("option");
  val2_6.text = "Matematik 5";
  val2_6.value = "6";
  var val2_7 = document.createElement("option");
  val2_7.text = "Webbserverprogrammering 1";
  val2_7.value = "7";

  list2.add(val2_1);
  list2.add(val2_2);
  list2.add(val2_3);
  list2.add(val2_4);
  list2.add(val2_5);
  list2.add(val2_6);
  list2.add(val2_7);
  var y = document.createElement("OPTGROUP");
  y.setAttribute("label", "Valen");
  
  y.appendChild(val1);
  y.appendChild(val2);
  y.appendChild(val3);
  y.appendChild(val4);
  y.appendChild(val5);
  y.appendChild(val6);
  y.appendChild(val7);

  list1.insertBefore(y, list1.options[0]);

  var y2 = document.createElement("OPTGROUP");
  y2.setAttribute("label", "Valen, 2");
  
  y2.appendChild(val2_1);
  y2.appendChild(val2_2);
  y2.appendChild(val2_3);
  y2.appendChild(val2_4);
  y2.appendChild(val2_5);
  y2.appendChild(val2_6);
  y2.appendChild(val2_7);

  list2.insertBefore(y2, list2.options[0]);

  document.getElementById("välja1").selectedIndex = 7;
  document.getElementById("välja2").selectedIndex = 7;
}
var clicks = 0;

function getOption() {
  
  clicks++;
  
  document.getElementById("valtext").innerHTML ="Dina val:";

  var obj = document.getElementById("fname");
  document.getElementById("fname2").innerHTML = "Namn: " + obj.value; 

  var obj1 = document.getElementById("lname");
  document.getElementById("lname2").innerHTML = "Efternamn: " + obj1.value; 

  var obj2 = document.getElementById("epost");
  document.getElementById("epost2").innerHTML = "Din E-post: " + obj2.value; 
  
  var obj3 = document.getElementById("välja1");
  document.getElementById("val1").innerHTML = "Förstahandsval: " + 
  obj3.options[obj3.selectedIndex].text;

  var obj4 = document.getElementById("välja2");
  document.getElementById("val2").innerHTML = "Andrahandsval: " + 
  obj4.options[obj4.selectedIndex].text;
  
  var x = document.getElementById("hide");
  x.style.display = "block";

  document.getElementById("goback").innerHTML = "Du kan fortfarande ändra dig!";
}

function lastcheck() {
  document.getElementById("valtext").innerHTML ="Är det här dina val??";

  var obj = document.getElementById("fname");
  document.getElementById("lastfname2").innerHTML = "Namn: " + obj.value; 

  var obj1 = document.getElementById("lname");
  document.getElementById("lastlname2").innerHTML = "Efternamn: " + obj1.value; 

  var obj2 = document.getElementById("epost");
  document.getElementById("lastepost2").innerHTML = "Din E-post: " + obj2.value; 
  
  var obj3 = document.getElementById("välja1");
  document.getElementById("lastval1").innerHTML = "Förstahandsval: " + 
  obj3.options[obj3.selectedIndex].text;

  var obj4 = document.getElementById("välja2");
  document.getElementById("lastval2").innerHTML = "Andrahandsval: " + 
  obj4.options[obj4.selectedIndex].text;

  var x = document.getElementById("lasthide");
  x.style.display = "block";
}

$(document).ready(function(){

  $('select').on('change', function(event ) {
    var prevValue = $(this).data('previous');
  
  $('select').not(this).find('option[value="'+prevValue+'"]').show();    
    var value = $(this).val();

    $(this).data('previous',value);         
    $('select').not(this).find('option[value="'+value+'"]').hide();
  
  });
  
});

function repeatchoise(){
  if(clicks > 0){
    getOption();
  }
}

$("body").css("overflow", "hidden"); 

$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$(document).ready(function(){

  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        
        window.location.hash = hash;
      });
    } 
  });
});

function changedittval(){
  document.getElementById("väljvaltxt").innerHTML = "Du kan fortfarande ändra dig mellan Software och Engineering";
  var val = document.getElementById("dropdowntitle");
  document.getElementById("dittval").innerHTML = "Du har valt: " + valet.value; 
}