let alku = "https://www.google.com/maps?q="
let osoite = ""
let kaupunki = ""
let loppu = "&output=embed"

function myFunction() {
    osoite = document.getElementById("osoiteArvo").value;
    kaupunki = document.getElementById("kaupunkiArvo").value;

    (document.getElementById("inlineFrameExample").src) = alku + osoite + kaupunki + loppu;
}
