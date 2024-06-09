function calculatecompoundinterest(){
    var principal = parseFloat(prompt("ENTER THE PRINCIPAL VALUE"));
    var rate = parseFloat(prompt("ENTER THE ANNUAL interst rate in %"));
    var time = parseFloat(prompt("ENTER THE ANNUAL TIME"))
    var compoundfrequency = parseFloat(prompt("ENTER THE NUMBER OF TIME INTEREST IS COMPOUNDED PER YEAR"));
    
    var amount = principal * Math.pow((1 + rate/compoundfrequency),(compoundfrequency * time));
    var interest = amount - principal;

alert("the compound interest is:"+ interest.toFixed(2));
alert("the total amount is:" + amount.toFixed(2))
}

calculatecompoundinterest()