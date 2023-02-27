function myFunction() {
  var txt;
  if (confirm("Gracias por visualizar el contenido de este proyecto")) {
    txt = "Gracias por visualizar el contenido";
  } else {
    txt = "Gracias por su tiempo";
  }
  document.getElementById("demo").innerHTML = txt;
}
