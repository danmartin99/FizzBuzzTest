function createPhoneNumber(numbers){
  
var i = 0;
var text = "";
while (numbers[i]) {
      if (numbers[i] == 0)
        text += "(";
      
      if (numbers[i] == 3)
        text += ") ";
      
      if (numbers[i] == 6)
        text += "-";
      
    text += numbers[i] ;
    i++;
	}
    return text;
}

// function createPhoneNumber(numbers){
//   numbers = numbers.join('');
//   return '(' + numbers.substring(0, 3) + ') ' 
//       + numbers.substring(3, 6) 
//       + '-' 
//       + numbers.substring(6);
// }