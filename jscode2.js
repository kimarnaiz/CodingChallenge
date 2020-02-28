//read input from user
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter the number: ', (answer) => {
  const input = answer;
  calculateValidationNumber(input);
  rl.close();
});

//const input = 44444;

function calculateValidationNumber(input){
	let result = Array.from(input.toString());
	
	var sum = 0;
	for(let i in result){
		var sum = sum + parseInt(result[i]);
	}
	
	//return first digit
	// let result2 = Array.from(sum.toString());
	// if (result2 > 1){
		// calculateValidationNumber(sum);
	// }
	// else {
		//console.log("Single digit number = " + sum[0]);
	// }
	
	console.log(sum);	
}

