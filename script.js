function stringChop(str, size) {
  // your code here
	let arr = [];
	if(str.length === 0 || size < 1) {
		return [];
	}
	if(str.length <= size) return str;
	let i = 0;
	for(i < str.length){
		arr.push(str.slice(i, i+size));
		i = i + size;
	}
	return arr;                                         
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
