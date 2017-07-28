    var HP = 100; 
    var gold = 0;
    var slain = 0;

function updateStats(){

    $('#status').text("HP: " + HP + "Gold: " + gold +"Ogres Slain: " + slain);

}

function attack(){
    if(HP > 0){
if(Math.random()*100>gold){

    gold += 10;

    slain++;

    $('#ogres').prepend('<p style="color:green">You won + 10 gold</p>');

}else{
    gold--;
    HP--;
    $('#ogres').prepend('<p style="color:red"> You lost -1 gold</p>')
} updateStats();
    }
    else {
        $('#ogres').prepend("<h1>GAME OVER!</h1>")
    }

}


function setup(){
//top title
$('body').append('<h1>Welcome to Ogre fighter v.1.0</h1>');
//status
$('body').append('<div> <h3>Status</h3> <p id="status"> </p> </div>');
//button
$('body').append('<button onclick="attack()">Attack the Ogre</button>');
//
$('body').append('<div id="ogres"> </div>');
}

$(document).ready(setup);