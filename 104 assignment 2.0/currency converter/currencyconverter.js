function convertonNaira() {
    return (dollar* 1430);
}

//get input fromthe user
let dollar = parseFloat(prompt("ENTER THE AMOUNT--IN DOLLARS:"));
//validate input
if (isNaN(dollar)) {
    alert("please enter a valid amount")}
   else {
        //convert to naira
        let naira = convertonNaira

        //display the result
        alert(dollar +"USD is equal to " + Naira.tofixed(2) +"NGN");
    }
