// Todos os Modals
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[1];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var span = document.getElementsByClassName("close")[2];

btn3.onclick = function() {
  modal3.style.display = "block";
}

span.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


/*Menu com dropdown*/

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Filtros */

var filtro1a = document.getElementById("200")
var filtro1h = document.getElementById("100");
var filtro1hh = document.getElementById("300");
var uso1 = document.getElementById("uso1");

uso1.onclick = function() {
  filtro1h.style.visibility = "hidden";
  filtro1hh.style.visibility = "hidden";
  filtro1a.style.visibility = "visible"
}


var filtro2h = document.getElementById("200");
var filtro2a = document.getElementById("100");
var filtro2hh = document.getElementById("300");
var uso2 = document.getElementById("uso2");

uso2.onclick = function() {
  filtro2h.style.visibility = "hidden";
  filtro2hh.style.visibility = "hidden";
  filtro2a.style.visibility = "visible"
}

var filtro3h = document.getElementById("200");
var filtro3hh = document.getElementById("100");
var filtro3a = document.getElementById("300");
var uso3 = document.getElementById("uso3");

uso3.onclick = function() {
  filtro3h.style.visibility = "hidden";
  filtro3hh.style.visibility = "hidden";
  filtro3a.style.visibility = "visible"
}

var filtro4a = document.getElementById("200");
var filtro4aa = document.getElementById("100");
var filtro4aaa = document.getElementById("300");
var uso4 = document.getElementById("uso4");

uso4.onclick = function() {
  filtro4a.style.visibility = "visible";
  filtro4aa.style.visibility = "visible";
  filtro4aaa.style.visibility = "visible"
}

var btn5 = document.getElementById("popularidade")

btn5.onclick = function (){
var id1 = document.getElementById("200")
id1.setAttribute('id', '100')
var id2 = document.getElementById("100")
id2.setAttribute('id', '200')
const main = document.querySelector('#main');
const divs = [...main.children];
divs.sort((a, b) => a.id - b.id);
divs.forEach(div => main.appendChild(div));
}