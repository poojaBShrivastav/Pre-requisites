// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

let num = [4,3,6,5]

num.map((item)=>{
    console.log(item*item)
})

// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

let score = parseInt(prompt("Enter score of a student"));

// Max marks would be 500
if(score >= 450){
    console.log("Grade A")
}
else if(score >= 400){
    console.log("Grade B");
    
}
else if(score >= 350){
    console.log("Grade C");
    
}
else if(score >= 300){
    console.log("Grade D");
    
} 
else if(score >= 250){
    console.log("Grade E");
    
}
else{
    console.log("Grade F");
    
}

// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

let new_car = {
    "name" : "lambergini",
    "model" : "lmb01",
    "year" : 2020
}

new_car.UpdateCar = function(update_year){
    this.year = update_year
}

new_car.UpdateCar(2024)

const {model,year} = new_car

console.log("Model : " + model + " and year : " + year)

// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

let new_array = [5,8,9,10,11]

let prime_num = new_array.filter((num)=>{
    for(let index=2 ; index<num-1; index++){
        if(num%index!=0){
            return true
        }
        return false
    }
})

console.log(prime_num)

// Q5 -  State different use cases of map, filter and reduce functions.
// map : The map function is used to create a new array by applying a function to each element of the original array. It is useful when you want to transform data.

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);   

// filter : The filter function is used to create a new array containing only the elements that pass a specified test. It is useful for selecting a subset of data.
const number = [1, 2, 3, 4, 5, 6];
const oddNumbers = number.filter(num => num % 2 !== 0); 

// reduce : The reduce function is used to apply a function to each element of an array to reduce it to a single value. It is useful for aggregating data.
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((accumulator, currentValue) => {accumulator + currentValue}, 0);
// 15

//    Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.
async function Fetch_data(){
let url = "https://jsonplaceholder.typicode.com/users"
let data = await fetch(url);
data = await data.json()
console.log(data)
}
Fetch_data()

//    Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

const person = {
name: 'John Doe',
address: {
street: '123 Main St',
city: 'Anytown',
state: 'CA',
zip: '12345'
},
contact: {
email: 'john.doe@example.com',
phone: '555-1234'
}
};

// Another person object without the contact property
const personWithoutContact = {
name: 'Jane Smith',
address: {
street: '456 Elm St',
city: 'Othertown',
state: 'NY',
zip: '67890'
}
};

// Access phone number using optional chaining
const phoneNumber1 = person.contact?.phone;
console.log(phoneNumber1); // Output: '555-1234'

// Access phone number in the case where contact property is missing
const phoneNumber2 = personWithoutContact.contact?.phone;
console.log(phoneNumber2); // Output: undefined