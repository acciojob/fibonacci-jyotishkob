function fibonacci(num) {
// your code here
	let value=0;
	let value2=1;
	let nval;
	for (let i=1; i<num; i++){
		nval = value+value2;
	}
	console.log(nval)
}

module.exports = fibonacci;
