const input = 123;

function calculateValidationNumber(input){
	let result = Array.from(input.toString());
	
	var sum = 0;
	for(let i in result){
		var sum = sum + parseInt(result[i]);
	}
	
	console.log(sum);
	
	//return first digit
	//let result2 = Array.from(input.toString());
	
}

calculateValidationNumber(input);
