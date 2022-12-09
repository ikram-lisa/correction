function Text(string) {
  this.str = string;
}

Text.prototype.charCount = function () {
  return this.str.length;
};
Text.prototype.left = function (links) {
  return this.str.substr(0, links);
};
Text.prototype.right = function (richt) {
  return this.str.substr(Text.length - (richt + 1));
};

Text.prototype.wordCount = function () {
  return this.str.replace(
    /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g,
    " "
  );
};
Text.prototype.vowelCount = function () {
  let vowelsCount = 0;

  let str = this.str.toString();

  for (let i = 0; i <= str.length - 1; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
};
Text.prototype.capitalCount = function () {
  return this.str.replace(/[^A-Z]/g, "").length;
};

Text.prototype.append = function (str) {
  return (this.str += str);
  // let strAppend = " en ik zal deze keer goede punten hebben";
  // let result = strAppend.concat(" ", this.str);

  // return result;
};
Text.prototype.prepend = function (str) {
  // return (this.str = str + this.str);
  let strPreppend = "Ik heb niet geslagd,";
  let result = strPreppend.concat(" ", this.str);

  return result;
};
const zin = new Text("Dit Is Een Nieuw Kans!");

console.log(zin.left(15));
console.log(zin.right(2));
console.log(zin.charCount());
console.log(zin.wordCount());
console.log(zin.vowelCount());
console.log(zin.capitalCount());
// console.log(zin.append());

console.log(zin.append(" en ik zal deze keer goede punten hebben"));
console.log(zin.prepend());
// console.log(zin.prepend("Ik heb niet geslagd"));
