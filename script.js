function stringChop(str, size) {
  // your code here
	let arr = [];
	if(str.length === 0 || size < 1) {
		return [];
	}
	let i = 0;
	while(i < n){
		let chunk = ""
		for(let j = 0; j < size; j++){
			chunk += str.charAt(i);
			i++;
		}
		arr.push(chunk);
	}
	if(n-i < size){
		chunk = "";
		for(let j = i; j < n; j++){
			chunk += str.charAt(j);
		}
		if(chunk != ""){
			arr.push(chunk);
		}
	}
	return arr;
	
	
	// if(str.length <= size) return str;
	// let i = 0;
	// for(i < str.length){
	// 	arr.push(str.slice(i, i+size));
	// 	i = i + size;
	// }
	// return arr;                                         
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
