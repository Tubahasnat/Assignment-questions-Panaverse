// Assignment 

//Que2
console.log("Ans 2");
let myName: string = " Tuba";
console.log("Hy pretty girl" + myName);

//Que3
console.log("Ans 3");
let newName: string = "aLiya";
console.log(newName.toUpperCase());
console.log(newName.toLowerCase());
console.log(newName.charAt(0).toUpperCase() + newName.slice(1).toLowerCase());

//Que4
console.log(
  "Albert Einstein once said, 'A person who never made a mistake never tried anything new in life' "
);

//Que5
const famousQueuote =
  "A person who never made a mistake never tried anything new in life";
const famousPerson = "Albert Einstein ";
console.log(`Once ${famousPerson} said , '${famousQueuote}'`);

// Que6
let newname: string = "\t Tuba \n";
console.log("with white spaces:", newname);
let trimmedName: string = newname.trim();
console.log("without whitespaces:", trimmedName);

// Que7
console.log("Add:", 4 + 4);
console.log("Sub:", 12 - 4);
console.log("Div:", 16 / 2);
console.log("Mul:", 2 * 4);

// Que8
console.log(4 + 4);
console.log(12 - 4);
console.log(16 / 2);
console.log(2 * 4);

// Que9
let favNum: number = 5;
let message: string = "Hi, My favourite number is ";
console.log(message + favNum);

// Que10
// declare num1 with number as value 14
let num1: number = 14;
// declare num2 as number with value 28
let num2: number = 28;
// result of num1 and num2
console.log(num1 + num2);

// Que11
let friends: string[] = ["Aliya", "Ayesha", "Anya", "Amal", "Aizal"];
console.log("My friends are " + friends);
friends.forEach((friends) => {
  console.log(friends);
});

// Que12
let specialMsg: string = "Hello, How are you ";
friends.forEach((friends) => {
  console.log(specialMsg + friends);
});

// Que13
let vehicles: string[] = ["Aeroplane", "Train", "Mercedes"];
vehicles.forEach((vehicles) => {
  console.log(`I want to travel by ${vehicles}`);
});

// Que14
let guestList: string[] = ["Maria", "Tayyaba", "Areej"];
guestList.forEach((guestList) => {
  console.log(`${guestList}, I invite you for dinner on Saturday`);
});

// Que15
console.log(
  `${guestList[1]} can't make it so as a replacement of her I'll call someone else`
);
guestList[1] = "Tuba";
console.log("Updated guest list: " + guestList);

//   Que16
// adding new guests in the guest list
console.log(
  "Adding Amna , Ali and Ammara to my guest list as I found bigger table"
);
// adding amna to the start of guest list
guestList.unshift("Amna");
// adding ali to the middle of the guest list
guestList.splice(2, 0, "Ali");
// adding ammara to the end of the guest list
guestList.push("Ammara");
// new guest list
console.log("updated guest list: ", guestList);
// message for all guests
guestList.forEach((elements) => {
  console.log(`${elements} you're invited for dinner`);
});

// Que17
console.log(guestList);
console.log(
  "I just found new dinner table won't arrive in time, so I have space for only 2 guests"
);
while (guestList.length > 2) {
  const removeGuest = guestList.pop();
  console.log(`${removeGuest} sorry I can't invite you for dinner`);
}
console.log(guestList);
guestList.forEach((element) => {
  console.log(`${element} you're still invited for dinner`);
});
// making list empty
while (guestList.length > 0) {
  guestList.pop();
}
console.log("updated list:", guestList);

// Que18
let places: string[] = ["Multan", "Lahore", "Islamabad", "Faislabad"];

/// array in its original order
console.log(places);
// array in alphabetical order
console.log("Alphabetical order");
console.log([...places].sort());
// array is still in its original order
console.log("original order");
console.log(places);
// array in reverse alphabetical order
console.log("reverse alphabetical order");
console.log([...places].sort().reverse());
// array is still in its original order
console.log("original order");
console.log(places);
// reverse order
console.log("reverse order");
places.reverse();
console.log(places);
// Reverse the order of the list again to get back to the original order
console.log(
  "Reverse the order of the list again to get back to the original order"
);
places.reverse();
console.log(places);
// sorted in alphabetical order
console.log("sorted in alphabetical order");
places.sort();
console.log(places);
//  Sort the array in reverse alphabetical order
console.log("sorted in reverse alphabetical order");
places.sort((a, b) => b.localeCompare(a));
console.log(places);

// Que19
// since the guestList is empty it will show zaro
console.log("guest list length: ", guestList.length);

// Que20
// Define array of landmarks
let landmarks = [
  "Eiffel Tower",
  "Statue of Liberty",
  "Taj Mahal",
  "Great Wall of China",
  "Machu Picchu",
  "Pyramids of Giza",
  "Colosseum",
  "Sydney Opera House",
  "Petra",
  "Christ the Redeemer",
];

// Print the array of landmarks
let landmark = [
  "Eiffel Tower",
  "Taj Mahal",
  "Great Wall of China",
  "Faisal MosQueue",
];
console.log("List of famous landmarks:");
console.log(landmark);

// Que21
const items: object[] = [
  {
    name: "Laptop",
    description: "A powerful computing device",
    price: 999,
  },
  {
    name: "Book",
    description: "A source of knowledge and entertainment",
    price: 20,
  },
  {
    name: "Headphones",
    description: "Audio output devices worn on the head",
    price: 100,
  },
];
console.log(items);

// Que22
let colors: string[] = ["Green", "Blue", "White"];
//  intensional index error
colors[4] = "Pink";
console.log(colors);
// solve the error
colors.pop();
colors[3] = "Pink";
console.log(colors);

// Que23 & Que24
let car = "blue";
console.log('is car == "black "?| predict false');
console.log(car == "black");

console.log('is car == "blue"?| predict true');
console.log(car == "blue");

let house = "green";
console.log('is house == "red"? | predict false');
console.log(house == "red");

console.log('is house == "green"? | predict true');
console.log(house == "green");

let number = 20;
console.log("is number < 30? | predict true");
console.log(number < 30);

console.log("is number >= 30? | predict false");
console.log(number >= 30);

console.log("is 4+4 ===8 | predict true");
console.log(4 + 4 === 8);

console.log("is 4+4 !=8 | predict false");
console.log(4 + 4 != 8);

let x = 5;
let y = 10;
console.log("is x == 5 && y == 10? | predict true");
console.log(x == 5 && y == 10);

console.log("is x == 10 || y == 15? | predict false");
console.log(x == 10 || y == 5);

let friendss = ["Ayesha", "Amna", "Alina"];
console.log("is ayesha in the array | predict true");
console.log(friendss.includes("Ayesha"));

console.log("is Ali in the array | predict true");
console.log(friendss.includes("Ali"));

// Que25
let alian_color = "Green";
if (alian_color == "Green") {
  console.log("You earned 5 point");
}

// failed Condition will result no output
alian_color = "Red";
if (alian_color == "Green") {
  console.log("You earned 5 point");
}

// Que26
alian_color = "Green";
if (alian_color == "Green") {
  console.log("You earned 5 points");
} else {
  console.log("You earned 10 points");
}

// Que27
if (alian_color == "Green") {
  console.log("You earned 5 pointss");
} else if (alian_color == "Yellow") {
  console.log("You earned 10 points");
} else if (alian_color == "Red") {
  console.log("You earned 15 points");
}

// Que28
let age = 45

// Check the age and print the corresponding stage of life
if (age < 2) {
  console.log("You are a baby.");
} 
else if (age >= 2 && age < 4) {
  console.log("You are a toddler.");
} 
else if (age >= 4 && age < 13) {
  console.log("You are a kid.");
} 
else if (age >= 13 && age < 20) {
  console.log("You are a teenager.");
} 
else if (age >= 20 && age < 65) {
  console.log("You are an adult.");
} 
else {
  console.log("You are an elder.");
}


// Que29
let favFruit : string[] = ['Kiwi' , 'Mango' , 'Strawberry' ]
if (favFruit.includes("Kiwi")) {
  console.log("I really like Kiwi");
} 
 if (favFruit.includes("Strawberry")) {
  console.log("I really like Strawberry");
}
 if (favFruit.includes("Mango")) {
  console.log("I really like Mango");
}
if (favFruit.includes("Banana")) {
  console.log("I dont like Banana");
} 
 if (favFruit.includes("Apple")) {
  console.log("I don't like Apple");
}

else{
    console.log('Not included in favorite fruits list');
}


// Que30
let userName : string[] = ['John' , 'Admin' , 'Jane' , 'Doe' ]
userName.forEach((element) =>{
    if(element == 'Admin'){
        console.log("Hey admin would you like to see report");
    }
    else{
        console.log(`Hello ${element} Thanks for loggin in again`);
    }
})


// Que31
// empty list
while(userName.length > 0 ){
  userName.pop();
}
console.log(userName)
if(userName.length == 0){
  console.log('we find more users')
}

// Que32
// List of current users
let currentUsers = ["john", "mary", "alice", "peter", "emma"];

// List of new users
let newUsers = ["sarah", "john", "joe", "alice", "mike"];

newUsers.forEach(user =>{
  if(currentUsers.includes(user)){
      console.log(`The username '${user}' is not available. Please choose a different one.`);
  }
  else{
     console.log(`The username '${user}' is available.`);
  }
})


// Que33
let numbers : number[] = [1,2,3,4,5,6,7,8,9]

numbers.forEach((number) =>{
  let ordinalEnding : string;
  if(number === 1){
    ordinalEnding = 'st';
  }
  else if(number === 2){
    ordinalEnding = 'nd';
  }
  else if(number === 3){
    ordinalEnding = 'rd';
  }
  else{
    ordinalEnding = 'th';
  }
  console.log(`${number}${ordinalEnding}`)
})

// Que34
let fav_pizza =  ['Pepperoni','Grill' ,'Supreme']
for (let i = 0 ; i < fav_pizza.length ; i++) {
  console.log(fav_pizza[i])
}

console.log('Sentence about favorite pizza')
fav_pizza.forEach((item) =>{
  console.log(`I love ${item} pizza`)
})

console.log('I really love PIZZA')

// Que35
let fav_animal : string[] = ['Cat', 'Horse' , 'Dog']
// print only the animal names
fav_animal.forEach((item) =>{
    console.log(item)
});
// print animal names with statements
fav_animal.forEach((item) =>{
    console.log(`A ${item} would make a great pet.`);
})

console.log("Any of these animals would make a great pet!");


// Que36
let make_shirt = (size:string, text:string) =>{
  console.log(`Making shirt of ${size} size and written '${text}' on it`)
}

make_shirt('large', 'Be your own BOSS')


// Que37
function make_shirts(size:string = 'large', message:string = 'I love Typescript'){
  console.log(`Making shirt of ${size} size with  message '${message}'`)
}
//  Make a large shirt with default message
make_shirts()
//  Make a medium shirt with default message
make_shirts('medium')
// Make a shirt of any size with a different message
make_shirts('small' , 'Typescript is awesome')

// Que38
function describe_cities(city:string = 'Karachi', county:string = 'Pakistan'){
  console.log(`${city} is a city of ${county}`)
}
describe_cities()
describe_cities('Sidney', 'Australia')


// Que39
function city_country(city:string = 'Lahore', country:string = 'Pakistan' ){
  return `${city},${country}`
  
}
console.log(city_country('Lahore', 'Pakistan'))
console.log(city_country('Sidney', 'Australia'))
console.log(city_country('Tokyo', 'Japan'))

// Que40
interface album{
artist:string ,
 title:string ,
 tracks?:number

}
function makeAlbum(artist:string , title:string , tracks?:number){
  let album : album = {
    artist,
    title
  }
  if(tracks){
    album.tracks = tracks
  }
  return album;
}
console.log(makeAlbum('Artist1', 'Album1'))
console.log(makeAlbum("Artist2", "Album2"));
console.log(makeAlbum("Artist3", "Album3"));


// Que41
let magicians: string[] = ['Umar' , 'Ali' , 'Faisal']
function show_magicians(magicians:string[]){
  for(let i = 0; i < magicians.length; i++){
    console.log(magicians[i])
  }
}
show_magicians(magicians)

// Que42
function make_great(magicians:string[]){
  for(let i = 0; i < magicians.length; i++){
    magicians[i] = 'The Great magician ' + magicians[i]
    console.log(magicians[i])
  }
}

make_great(magicians)


// Que43
function make_great2(magicians: string[]) {
  let newMagicians : string[] = [] 
  for (let i = 0; i < magicians.length; i++) {
    newMagicians.push("Great " + magicians[i]);
  }
  return newMagicians
}

console.log(make_great2(magicians));
show_magicians(magicians)

// Que44
function makeSandwich(...items:string[]){
  console.log('We are making sandwich with your favorite items')
  items.forEach((items) =>{
    console.log('. ' + items)
  })
}

// Call the function with different number of arguments
makeSandwich("bread", "cheese", "lettuce");
makeSandwich("black pepper", "chicken", "mayonnaise");
makeSandwich("brown bread", "tomato", "mustard sauce");


// Que45
let make_car = (manufacturer:string,model_name:string,color?:string,extra_feature?:string) =>{
  let carInfo = {
    manufacturer,
    model_name,
    color

  }
  return carInfo
}
console.log(make_car('Toyota','Camry','White'))



