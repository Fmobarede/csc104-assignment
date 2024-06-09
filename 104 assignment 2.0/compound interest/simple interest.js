//fuction to calculate simple interest
function
calculatesimpleinterest(principal,rate,time){
	return(principal * rate * time)/100
} 

///get your input
var principal = parseFloat(prompt("enter priciple value:"));
var rate =parseFloat(prompt("enter the annual interst rate(%)"));
var time = parseFloat(prompt("Enter the annual time" ));

//validate inputs
if (isNaN(principal)||isNaN(rate)||isNaN(time)){
	alert("please enter vald numerical value");
} else{
	//calculate simple  interest
	let interest = calculatesimpleinterest(principal,rate,time)

	//display the result
	alert("the simple interest is 0"+interest)
}