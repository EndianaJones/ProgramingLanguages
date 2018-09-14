console.log("hello");

/*
function add(ten){

	return function makeIt(take){
		return take+ten;

	};

}

var add13 = add(11);
console.log(add13);	

*/


var arr = [1,2,3,4,5,6,7,8,9,10];




var print_it = arr.map(function(num){

	console.log(num);
	return num * 2;

});