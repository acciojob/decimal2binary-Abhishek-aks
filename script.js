function decimalToBinary(num) {
  //Write you code here for binary conversion
	let b ="";                // Empty element
	while (num > 0){
		let d1 = num%2;            // remainder
		num =  Math.Floor(num/2);  // quotient
		b += d1;
	}
	return b;
  
}

window.decimalToBinary = decimalToBinary;
