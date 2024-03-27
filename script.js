function fibonacci(num) {
// your code here
  let value=0;
  let value2=1;
  let nval;
	if (num == 0){
		return 0;
	}else if (num ==1){
		return 1;
	}else{
		for (let i=2; i<num; i++){
	    nval = value+value2;
	    value = value2
	    value2=nval
	  }
	  return nval
	}
  
}


module.exports = fibonacci;
