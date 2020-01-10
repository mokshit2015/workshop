
function doubleAll(numbers)
{
	let result = [];	
	numbers.map(num => {
		result.push(num*2);
	})
	return result;
}


	module.exports = doubleAll;
