// let ans = [];
function stringChop(str, size) {
  // your code here
	 if (str === null) {
    return []; // Return empty list for null input
  }
	let arr = [];
	let n = str.length;
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

  // const chunks = [];
  // let i = 0;
  // while (i < str.length) {
  //   chunks.push(str.slice(i, i + size)); // Use slice for efficient chunk extraction
  //   i += size;
  // }

  // // Handle the last chunk if it's smaller than the specified size
  // if (str.length % size !== 0) {
  //   chunks.push(str.slice(i)); // Get the remaining part
  // }

  // return chunks; 
	// const arr = [];
	// let n = str.length;
	
	// if(str==="" || str===null) {
	// 	return [];
	// }
	// let i = 0;
	// while(i < n){
	// 	chunk = ""
	// 	for(let j = 0; j < size; j++){
	// 		chunk += str.charAt(i);
	// 		i++;
	// 	}
	// 	arr.push(chunk);
	// }
	// if(n-i < size){
	// 	chunk = ""; 
	// 	for(let j = i; j < n; j++){
	// 		chunk += str.charAt(j);
	// 	}
	// 	if(chunk != ""){
	// 		arr.push(chunk);
	// 	}
	// } 
	// return arr;
 
	//   let n=str.length;
	// if(n===0 || size<1) return [];
	//  let i=0;
	//  let starr=[];

	//  while(i<n){
	// 	  let btr="";
	// 	  for(let j=0;j<size;j++){
	// 	    btr+=str.charAt(i);
	// 	    i++;
	// 	  }
	// 	  starr.push(btr);
	//  }
	//  if(n-i<size) {
	//   btr="";
	//  for(let j=i;j<n;j++){
	//   btr+=str.charAt(j);
	//  }
	//  if(btr!="") starr.push(btr);
	// }
	//  return starr;
	// if(str==='' || str===null){
	// return [];
 //  }
 //  for (let i = 0; i < str.length; i += size) {
 //    slice(str, i, i + size);
 //  }

 //  return ans;
	
	
	// if(str.length <= size) return str;
	// let i = 0;
	// for(i < str.length){
	// 	arr.push(str.slice(i, i+size));
	// 	i = i + size;
	// }
	// return arr;                                         
}
// function slice(str, start, end) {
//   let sliced = str.slice(start, end);
//   ans.push(sliced);
// }
// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
