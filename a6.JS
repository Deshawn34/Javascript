//Object literal
const myDog = {
  name: "Beck",
  breed: "Generic",
  tvProgram: "Japanese Show Beck",
  notes: "Beck is a Ryusuke dog and the show hes on is about a teenage boy and his pursuit of a music career."
};

//Displaying object's property
document.getElementById("Demo 1").innerHTML = "Name: " +myDog.name+ " Breed: " +myDog.breed+ " Tv Program: " +myDog.tvProgram+ " Note: " +myDog.notes;

// Adding a property to an object literal
myDog.mySound = "I am meaner than I look Buster";

//An object constructor with function name myDogConst
function myDogConst(name, breed, tvProgram, notes, mySound, canTalk){
  this.name = name;
  this.breed = breed;
  this.tvProgram = tvProgram;
  this.notes = notes;
  this.mySound = mySound;
  this.canTalk = canTalk;
};

//An object created using object constructor
const myDog2 = new myDogConst("Beck" , "Generic" , "Japanese Show Beck" , "Beck is a Ryusuke dog and the show hes on is about a teenage boy and his pursuit of a music career." , "I am meaner than I look Buster" , false);

//myGreeting() method
myDog2.myGreeting = function(){
  return "Hello my name is " +this.name+ ", " +this.mySound+ ". I starred in the tv show " +this.tvProgram+ ". My Character was a " +this.breed+ ". I was " +this.notes;
}

//Calling myGreeting method of the object:
document.getElementById("Demo 2").innerHTML = myDog2.myGreeting();

function myGreeting(){
  console.log(`${this.name} is a ${this.breed} and his favorite tv show is ${this.favoriteShow}.`);

  if (canTalk == true){
    console.log(`${this.name} can talk!`);
  }
  else {
    console.log(`${this.name} cannot talk.`);
  }
};

const myDogConst = {
  name: "Max",
  breed: "Italian Greyhound",
  favoriteShow: "The Grinch",
  canTalk: "false"
};

myGreeting.call(myDogConst);

function Dog(name, breed, favoriteShow, canTalk){
  this.name = name;
  this.breed = breed;
  this.favoriteShow = favoriteShow;
  this.canTalk = canTalk;
};
const barney = new Dog("Barney" , "Old English Sheepdog" , "Barney" , true);

const bingo = new Dog("Bingo" , "Pug" , "Puppy Dog Pals" , false);

for(const property in bingo){
  console.log(`${property}:${bingo[property]}`);
}; 
