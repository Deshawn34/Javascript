// object literal
const myDog = {
  name: "Beck",
  breed: "Generic",
  tvProgram: "Japanese Show Beck",
  notes: "Beck is a Ryusuke dog and the show hes on is about a teenage boy and his pursuit of a music career."
};

//displaying object's property
document.getElementById("Demo 1").innerHTML = "Name: " +myDog.name+ " Breed: " +myDog.breed+ " Tv Program: " +myDog.tvProgram+ " Note: " +myDog.notes;

//Adding a property to an Object literal
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
