console.log("hello");


function add(ten){

	return function makeIt(take){
		return take+ten;

	};

}

var add13 = add(13);
console.log(add13(13));	
console.log(add13(13));





/*
var arr = [1,2,3,4,5];

arr.concat([1,2,3]);


var print_it = arr.map(function(num){

	console.log(num-13);
	return num * 2;

});

console.log(print_it);

*/