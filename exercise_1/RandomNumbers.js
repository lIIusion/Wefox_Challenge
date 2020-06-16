function randomNumbers(){
    
    var randomNos = [];
    // Generating random Numbers between 150 to 10000
    for (var i = 0; i<500; i++){
        randomNos[i] = Math.floor(Math.random() * (10000) + 150); //Can change here the range of generating numbers
        console.log('Random Numbers are : '+ randomNos[i]);
    }

    var smallestNo = Math.min(...randomNos);
    console.log('Smallest No. : '+smallestNo);

}

randomNumbers();