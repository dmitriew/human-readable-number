module.exports = function toReadable (number) {
  let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
  'eighteen', 'nineteen','twenty'];
 let doz = [
 '0',
 '1',
 'twenty',
 'thirty',
 'forty',
 'fifty',
 'sixty',
 'seventy',
 'eighty',
 'ninety']
 let root = '';
 if (number < 20) {
     return num[number];
     
 } else if (number < 100) {
    if (number.toString().substr(1,2) === '0') {
      return `${doz[number.toString().substr(0,1)]}`
    } else {
      return `${doz[number.toString().substr(0,1)]} ${num[number.toString().substr(1,2)]}`;
    }
 } else {
     let hundred = num[number.toString().substr(0,1)];
     if (number % 100 === 0) {
         return `${hundred} hundred`;
     } 
     else {
     root = number.toString().substr(1,2);
      if (+root < 21) {
        return `${hundred} hundred ${num[+root]}`;
      } else if (root.toString().substr(1,2) === '0') {
        return `${hundred} hundred ${doz[root.substr(0,1)]}`
      } else {
        return `${hundred} hundred ${doz[root.substr(0,1)]} ${num[root.substr(1,2)]}`;
      }
    };
};
};

