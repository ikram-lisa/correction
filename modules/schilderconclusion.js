import Schilder from "./Schilder.js";
import Schilderij from "./Schilderij.js";

const schilder = new Schilder("Vincent", "van Gogh", "Postimpressionisme");

schilder.addPainting("Zonnebloemen", "123x72", "39.921.750 €");
schilder.addPainting("De aardappeleters", "82x114", "21.152.154 €");
schilder.addPainting("Slaapkamer te Arles", "61x81", "19.127.784 €");
// schilder.removePainting("Slaapkamer te Arles");
console.log(schilder.getTotalWidth());
console.log(schilder.getList());
// console.log(schilder);
