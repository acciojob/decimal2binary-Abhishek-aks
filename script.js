function decimalToBinary(num) {
  //Write you code here for binary conversion
	let b ="";                // Empty element
	while (num > 0){
		let d1 = num%2;            // remainder
		// console.log(d1);
		num =  Math.Floor(num/2);  // quotient
		// console.log(num);
		b = d1 +b;
		// console.log(b);
	}
	return b;
  
}

window.decimalToBinary = decimalToBinary;
