function ret() {
  summa = document.querySelector("#nam").value;
  pass = document.querySelector(".pass2").value;
  tepa = document.querySelector(".tepa1").value;
  if (tepa == "UZS" && pass == "USD") {
    UZS = 1;
    USD = 0.000089;
    UZS *= summa;
    natija.innerHTML = `${UZS * USD}$`;
  }
  if (tepa == "UZS" && pass == "EUR") {
    UZS = 1;
    EUR = 0.000085;
    UZS *= summa;
    natija.innerHTML = `${UZS * EUR} EUR`;
  }
  if (tepa == "UZS" && pass == "P") {
    UZS = 1;
    P = 0.0056;
    UZS *= summa;
    natija.innerHTML = `${UZS * P} P`;
  }
  if (tepa == "USD" && pass == "UZS") {
    USD = 1;
    UZS = 11286.13;
    USD *= summa;
    natija.innerHTML = `${USD * UZS} so'm`;
  }
  if (tepa == "USD" && pass == "EUR") {
    USD = 1;
    EUR = 0.96;
    USD *= summa;
    natija.innerHTML = `${USD * EUR} EUR`;
  }
  if (tepa == "USD" && pass == "P") {
    USD = 1;
    P = 63.08;
    USD *= summa;
    natija.innerHTML = `${USD * P} P`;
  }
  if (tepa == "EUR" && pass == "USD") {
    EUR = 1;
    USD = 1.05;
    EUR *= summa;
    natija.innerHTML = `${EUR * USD}$`;
  }
  if (tepa == "EUR" && pass == "P") {
    EUR = 1;
    P = 66.33;
    EUR *= summa;
    natija.innerHTML = `${EUR * P} P`;
  }
  if (tepa == "EUR" && pass == "UZS") {
    EUR = 1;
    UZS = 11764.7059;
    EUR *= summa;
    natija.innerHTML = `${EUR * UZS} so'm`;
  }

  if (tepa == "P" && pass == "UZS") {
    UZS = 178.93;
    P = 1;
    P *= summa;
    natija.innerHTML = `${P * UZS} so'm`;
  }
  if (tepa == "P" && pass == "USD") {
    USD = 0.016;
    P = 1;
    P *= summa;
    natija.innerHTML = `${P * USD}$`;
  }
  if (tepa == "P" && pass == "EUR") {
    EUR = 0.015;
    P = 1;
    P *= summa;
    natija.innerHTML = `${P * EUR} euro`;
  }
}
function letl(){
pass3 = document.querySelector(".pass2").value;
tepa3 = document.querySelector(".tepa1").value;
if (tepa3 == "UZS") {
  document.getElementById("UZ").setAttribute("class", "nen");
}
if (tepa3 == "USD") {
  document.getElementById("US").setAttribute("class", "nen");
}
if (tepa3 == "EUR") {
  document.getElementById("EU").setAttribute("class", "nen");
}
if (tepa3 == "P") {
  document.getElementById("P").setAttribute("class", "nen");
}
}