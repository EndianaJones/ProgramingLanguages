/*

Name:   Gerve-Endy Pluviose 
Date:   September 13,2019
  ID:   1000920726
 lab:   Lab 1

 */



 // Question 1

 var inputtable = Array.from(new Array(10), (x,i) => i+1);

 console.log(inputtable);


 // Question 2.a and b.	Set of multiples of 5 between 1 and 51. Name it fiveTable

 //fiveTable

function add1 (value1){
	return function add2(value2){
		return value1 + value2;
	};
}




var fiveTable = [];
fiveTable.push(0);

var thirteenTable = [];
thirteenTable.push(0);


var five = add1(5);
var thirteen = add1(13);

inputtable.map( function(num){
	var temp1 = fiveTable[num-1];
	var temp2 = thirteenTable[num-1];
    fiveTable.push(five(temp1));
    thirteenTable.push(thirteen(temp2));

})

fiveTable.splice(0,1);
thirteenTable.splice(0,1);

console.log("              Five Table: "+fiveTable);
console.log("          Thirteen Table: " + thirteenTable);


// Question 2.c


function square(elem){

	return elem*elem;

};

var squareTable = inputtable.map(square);

console.log("            Square Table: "+squareTable);



// Queston 3. Get the odd multiples of 5 between 1 and 100

 var oddFive = add1(5);
 var addArr = [];
 addArr.push(0);

inputtable.map( function(num){
	var temp = addArr[num-1];

	if(oddFive(temp)%2 != 0){
		addArr.push(oddFive(temp));
	} else {
		addArr.push(oddFive(temp+5));
	}


})

addArr.splice(0,1);

console.log("   Odd multiples of Five: "+ addArr);



// Question 4. Get the sum of even multiples of 7 between 1 and 100


var multOfSeven = add1(7);

function mult(arg, x){

	arg = multOfSeven(arg);

	if (arg > 100) {
		return x;
	} else {
		if(arg % 2 == 0){
			x = x + arg;
		}
		
		return mult(arg, x);
	}
}

var sum = mult(0,0);

console.log("sum of even multiples of 7: "+sum);

// Question 5. 
/*

function cylinder_volume(r, h){
	var volume = 0.0;
	volume = 3.14 * r * r * h;
	return volume;
}
*/



function cylinder_volume(r){
	return function cal(h){
		return 3.14 * r * r * h;
	}
}


var C_r = cylinder_volume(5);
console.log("The volume of the Cylinder is: " + C_r(10));









var person = prompt("Please enter your name");










