console.log('------------------------exercice 1------------------------')
/*Individual Exercise 1. You're a bartender serving drinks, but you have to make sure your 
customers are at least 18 years old. Write a program that promtpts the user for their age. 
If it's less than 18, alert them that they can't have a drink, but if it's 18 and above, 
alert them that they can drink!*/

var age = prompt('What is you age')
if(age < 18) {
  alert('You cannot have a drink')
}else {
  alert('You can have a drink')
}



console.log('------------------------exercice 2------------------------')
/*Individual Exercise 2. Now pretend you're controlling the border of Israel. 
Write a program that prompts the user for their citizenship. 
If it's "Israeli", alert that they can pass, otherwise alert that they cannot.*/

var citizenship = prompt('What is your nationality ?')

if(citizenship === 'Israeli') {
  alert('Welcome to Israel')
}else{
  alert('Access denied')
}



console.log('------------------------exercice 3------------------------')
/*Individual Exercise 3. Okay, you're a bartender again. Tonight it's ladies' night, 
all the girls drink for free. Write a program that prompts the user twice: once for their 
gender and once for their age. If they're female and above 18, alert them they get a free drink. 
If they're under 18, alert them that they can't drink anything. If they're above 18 and male, 
tell them they can drink but they must pay.*/


var gender = prompt('What is your gender ?')
var age = prompt('What is your age ?')

if (gender === 'female' && age >=18) {
  alert('Free drink for you');
}else if (genre === 'female' && age <18) {
  alert('You cannot have a drink');
}else if (genre == 'male' && age>=18) {
  alert('You can drink, but your must to pay');
}else {
  alert('You cannot have a drink');
}

console.log('------------------------Fizz Buzz Challenge------------------------')
/*Remember "fizz buzz"? With your partner, write a for loop that loops through the numbers 0 
through 20 and console.logs "fizz" if the number is divisible by 5 and buzz if it's divisible by 3. If it's divisible by both 3 and 5, log "fizzbuzz". If it's divisible by none of these, just log the number. For this you'll need the modulo or % operator.
When you're finished show an instructor your code.*/

for(var i =0; i<=20; i++) {
  if(i%5 === 0) {
    console.log('fizz');
  }if(i%3 === 0) {
    console.log('buzz')
  }if(i%5===0 && i%3===0) {
    console.log('fizzbuzz')
  }else{
    console.log(i)
  }
  
}

console.log('------------------------PARTNER EXERCISE 1------------------------')
/*Create an array called restaurants and inside it add the names of your favorite restaurants 
(at least 5). Then, create a for that loops through the array and console.logs the name of each 
restaurant.*/

var restaurant = ['sushibar', 'pankina', 'lililush', 'shine', 'pitzman']

for(var i=0; i<restaurant.length; i++) {
  console.log(restaurant[i])
}

console.log('------------------------PARTNER EXERCISE 2------------------------')
/*Write a simple JavaScript program to find the average of an array of integers. 
Use the array below:*/

var numbers = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62]

var avg=0 
for(var i=0; i<numbers.length; i++) {
  avg += numbers[i]
}

var avg = avg/numbers.length
  console.log(avg)

  console.log('------------------------PARTNER EXERCISE 3------------------------')
  /*Write a simple JavaScript program to find the average of an array of integers.
   Use the array below:*/
  
  var myColor = ["Red", "Green", "White", "Black"];
  var allColors = myColor.join(' + ')
  
  console.log(allColors)
  
   





