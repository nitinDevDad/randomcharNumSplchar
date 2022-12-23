function getRandomCharacter(length) {
    var result           = '';
    var symbolss       = "!@#$%^&*(){}[]=<>/.";
    for ( var i = 0; i < length; i++ ) {
      result += symbols.charAt(Math.floor(Math.random() *symbols.length));
   }
   return result;
}
