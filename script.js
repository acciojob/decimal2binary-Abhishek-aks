function decimalToBinary(num) {
  //Write you code here for binary conversion
	let binary ="";                // Empty element
	while (num > 0){
		binary = (num%2)+ binary;      // adding remainder
		num =  Math.floor(num/2);      // quotient
	}
	return b;
}

window.decimalToBinary = decimalToBinary;
