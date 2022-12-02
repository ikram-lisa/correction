function Text(string) {
  this.str = string;
}

Text.prototype.charCount = function () {
  return this.str.length;
};
Text.prototype.left = function (x) {
  return this.str.substr(0, x);
};
Text.prototype.right = function (x) {
  return this.str.substr(Text.length - (x + 1));
};

Text.prototype.wordCount = function () {
  return this.str.replace(
    /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g,
    " "
  );
};
Text.prototype.vowelCount = function (string) {
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
  return (this.str = this.str + str);
};
Text.prototype.prepend = function (str) {
  return (this.str = str + this.str);
};
const zin = new Text("Dit Is Een Nieuw Kans!");

console.log(zin.left(15));
console.log(zin.right(2));
console.log(zin.charCount());
console.log(zin.wordCount());
console.log(zin.vowelCount());
console.log(zin.append(" en ik zal deze keer goede punten hebben"));
console.log(zin.prepend("ik heb niet geslagd"));
