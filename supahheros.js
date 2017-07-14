var Superman = {
"realname" : 'Kal-el',
"ability" : 'Flight',
"archenemy" : 'Lex Luthor'
};

console.log(Superman.realname);

var Batman = {
"realname" : 'Bruce Wayne',
};

function superhero(realname,ability,gender,archenemy){
this.realname = realname;
this.ability = ability;
this.gender = gender;
this.archenemy = archenemy;
//setting a new ability
this.newability = function(ability2){
this.ability = ability2;
};
};

var statitcShock = new superhero('Virgil','electricty','male','Ebon');

console.log(Batman.ability)
Batman.newability('Stun');
