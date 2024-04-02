function stringChop(str, size) {
  // your code here
	let arr = {};
	let chunk = "";
	let len = 0;
	if(str.length < size){
		return str;
	}
	for(int i = 0; i < str.length; i++){
		chunk += str.charAt(i);
		if(chunk.length === size){
			arr[len] = chunk;
			chunk = "";
			len++;
		}
	}
	return arr;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
