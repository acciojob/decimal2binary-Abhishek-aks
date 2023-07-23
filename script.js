function decimalToBinary(num) {
  //Write you code here for binary conversion
	let b ="";                // Empty element
	for (let i =0; i<= num.length, i++){
		let d1 = Math.Floor(num/2);
		b += d1;
	}
	return b;
  
}

window.decimalToBinary = decimalToBinary;
