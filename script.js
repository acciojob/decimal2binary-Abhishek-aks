function decimalToBinary(num) {
  //Write you code here for binary conversion
	let binary ="";                // Empty element
	while (num > 0){
		binary = (num%2)+ String(binary);      // adding remainder
		num =  Math.floor(num/2);      // quotient
	}
	return binary;
}

window.decimalToBinary = decimalToBinary;
