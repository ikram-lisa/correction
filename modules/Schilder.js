import Schilderij from "./Schilderij.js";

function Schilder(voornaam, achternaam, stijl) {
  this.voornaam = voornaam;
  this.achternaam = achternaam;
  this.stijl = stijl;
  this.listSchilderijen = [];
}

Schilder.prototype.addPainting = function (naam, canvasgrootte, kostprijs) {
  this.listSchilderijen.push(new Schilderij(naam, canvasgrootte, kostprijs));
};

Schilder.prototype.removePainting = function (naam) {
  this.listSchilderijen = this.listSchilderijen.filter(function (schilderObj) {
    return schilderObj.naam !== naam;
  });
};

Schilder.prototype.getTotalWidth = function () {
  let som = 0;
  for (let i = 0; i < this.listSchilderijen.length; i++) {
    som += parseInt(
      this.listSchilderijen[i].canvasgrootte.substring(
        0,
        this.listSchilderijen[i].canvasgrootte.indexOf("x")
      )
    );
  }
  return som;
};

Schilder.prototype.getList = function () {
  let output = `${this.voornaam} ${this.achternaam} / ${this.stijl}`;
  output += this.listSchilderijen
    .map(function (schilderObj) {
      return schilderObj.printUit();
    })
    .join(`------------------------------`);
  return output;
};

export default Schilder;
