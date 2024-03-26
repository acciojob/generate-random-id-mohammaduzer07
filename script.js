function makeid(l) {
  // write your code here

	const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	const charLen = str.length
	 let count = 0
	 let ans = '';
	while(count < l ) {
		ans += str.charAt(Math.random() * charLen)   
	    count += 1 
	}
	return ans 
	
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
