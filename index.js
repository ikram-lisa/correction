import readlineSync from "readline-sync";
const voornaam = readlineSync.question("Voornaam ?\n>");
const achterNaam = readlineSync.question("AchterNaam ? \n>");
const adress = readlineSync.question("adress ? \n>");
const postcode = readlineSync.question("Postcode? \n>");
const postcodeNr = parseInt(postcode);
const gemeente = readlineSync.question("Gemeente ? \n>");

if (voornaam == "" || achterNaam == "" || adress == "" || gemeente == "") {
  console.log("Minstens één van de ingevulde velden is niet geldig!");
}
if (postcodeNr < 1000 || postcodeNr > 9000) {
  console.log(" Minstens één van de ingevulde velden is niet geldig!");
}

const regel1 = voornaam.substring(0, 1) + "." + achterNaam;
const regel2 = adress;
const regel3 = postcode + " " + gemeente.toUpperCase();

if (gemeente.length > 40) {
  console.log(
    "  Kader is te breed. Gebruik afkortingen in de breedste stukken."
  );
}

const langsteRegel = Math.max(regel1.length, regel2.length, regel3.length);

console.log("-".repeat(langsteRegel + 4));
console.log(`| ${regel1}${" ".repeat(langsteRegel - regel1.length)} |`);
console.log(`| ${regel2}${" ".repeat(langsteRegel - regel2.length)} |`);
console.log(`| ${regel3}${" ".repeat(langsteRegel - regel3.length)} |`);
console.log("-".repeat(langsteRegel + 4));
