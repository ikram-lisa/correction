function Schilderij(naam, canvasgrootte, kostprijs) {
  this.naam = naam;
  this.canvasgrootte = canvasgrootte;
  this.kostprijs = kostprijs;
}

Schilderij.prototype.printUit = function () {
  return `
  
      - Naam: ${this.naam}
      - Canvas: ${this.canvasgrootte}
      - Prijs: ${this.kostprijs.toLocaleString("nl-BE")} €
      
      `;
};
export default Schilderij;
