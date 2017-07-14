function pokemon(type,name,atk,def,hp,legend){

this.type = type;
this.name = name;
this.atk = atk;
this.def = def;
this.hp = hp;
this.legend = legend;

}

var Blaziken =new pokemon('Fire','Blaziken',60,30,30,false);
var Infernape =new pokemon('Fire','Infernape',50,30,30,false);
var Victini = new pokemon('Psychic','Victini',50,40,40,true);
var Alakazam =new pokemon('Psychic','Alakazam',30,20,20,false);
var Zoroark = new pokemon('Dark','Zoroark',50,30,30,false);
var Yveltal = new pokemon('Dark','Yveltal',70,40,50,true);


var pokecenter = [Blaziken,Infernape,Victini,Alakazam,Zoroark,Yveltal];


function printRoster(){

for (var i = 0; i <6; i++){

    console.log(pokecenter[i]);

}
};


function pokemonAttacked(){

for (var i = 0; i <6; i++){

   var damaged = pokecenter.hp - 10;
   

}
}