document.getElementById("menu").addEventListener("mouseover", function(){
  document.getElementById("dropmenu").style.display = "block";
}, false);

document.getElementById("menu").addEventListener("mouseout", function(){
  document.getElementById("dropmenu").style.display = "none";
}, false);

document.getElementById("ex_out").addEventListener("mouseover", function(){
	document.getElementById("ex_menu").style.display = 'block';
}, false);

document.getElementById("ex_out").addEventListener("mouseout", function(){
	document.getElementById("ex_menu").style.display = 'none';
}, false);