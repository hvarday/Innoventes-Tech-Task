	var numberMap = {
		"M" : 1000,
		"CM" : 900,
		"D" : 500,
		"CD" : 400,
		"C" : 100,
		"XC" : 90,
		"L" : 50,
		"XL" : 40,
		"X" : 10,
		"IX" : 9,
		"V" : 5,
		"IV" : 4,
 		"I" : 1
	},
		allowedCombinations = Object.keys(numberMap);

function calc(number1, operator, number2){
	
	var decimalNumber1 = romanToDecimal(number1),
		decimalNumber2 = romanToDecimal(number2);
	
	switch(operator){
		case '+':
			result = decimalNumber1 + decimalNumber2;
			break;

		case '-':
			result = decimalNumber1 - decimalNumber2;
			break;

		case '/':
			result = decimalNumber1 / decimalNumber2;
			break;

		case '*':
			result = decimalNumber1 * decimalNumber2;
			break;
		default : 
			result = -1;
	}
	
	return decimalToRoman(result);
}

function romanToDecimal(romanNumber){
	
	romanNumber = romanNumber.toUpperCase();
	
	var	romanNumberArray = romanNumber.split(''), length = 0, total = 0;
	length = romanNumberArray.length;
	
	
	for(var index = 0; index < romanNumberArray.length ; index++){
		
		var literal = romanNumberArray[index];
		
// 		console.log(literal, numberMap[literal])
		
		var value = numberMap[literal], nextValue = ( numberMap[romanNumberArray[index + 1]] || -1 );
		
		if(value < nextValue && allowedCombinations.lastIndexOf(literal+romanNumberArray[index+1])!=-1 ){
// 			console.log(nextValue - value)
			total += numberMap[ literal + romanNumberArray[index + 1] ];
			index++;
		}
		else{
			total += value;
// 			console.log(value)
		}
		
	}
	
// 	console.log("total", romanNumber, "=>", total);
	
	return total;
	
}

function decimalToRoman(number){
	
	var result = "";
	
	allowedCombinations.forEach(function(key, index){
		while( number >= numberMap[key]){
			number = number - numberMap[key];
			result += key;
		}
		
	})
	
// 	console.log(result)
	
	return result;
	
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

	romanToDecimal("XXXVI");
//	XL + X = L
//	C - I = XCIX
// 	C / X = X
// 	X * X = C

console.log('XL + X = ', calc('XL', '+', 'X'));

console.log('C - I =', calc('C', '-', 'I'));

console.log('C / X = ', calc('C', '/', 'X'));

console.log('X * X =', calc('X', '*', 'X'));


decimalToRoman(958)
var flag = false;

while(flag){

	var r = getRandomIntInclusive(0, 1000000)
	r = 4233;
	var part1 = decimalToRoman(r);

	var s = romanToDecimal(part1);

	console.log(r, part1, s, r===s);

	flag = r===s;
	
}
