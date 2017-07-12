//Generates number between 0 and a number of your choosing

function rand(num){
    var randDec = Math.random()* num;
    var randint = Math.floor(randDec);
    console.log(randint);
    return randint;
}

rand(100);

// 100 is the number I choose