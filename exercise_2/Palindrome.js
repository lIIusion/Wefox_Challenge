function palindromeChecker(msg){
    
    var reverse = msg.split("").reverse().join("");

        if (msg == reverse){
            console.log("Sentence is a palindrome");
        }else{
            console.log("Sentence is not a palindrome")
        }
}

//var msgString = 'Race car'
var readline = require('readline');
var prompt = readline.createInterface(process.stdin,process.stdout);
prompt.question('Enter a sentence to check if its Palindrome (for e.g: Race Car) : ', msgString => {

    // Removing spaces from the String and converting it to lower case
    var msg = msgString.replace(/\s/g,"").toLowerCase(); 
    palindromeChecker(msg);
    process.exit();

});

