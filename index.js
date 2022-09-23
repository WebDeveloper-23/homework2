/*** 1.
შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;
***/

function sumNums (...nums) {
    let num = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(element > 0){
            num += element
        }
    }
    return num
}

console.log(sumNums(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8));




/**** 2.
ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
10, 50, 6, 7, 8, 11, 6, 3, 9
****/

const sum = (...num) => {
    let sum = 0;
    for (let i = 0; i < num.length; i += 1) {
        const item = num[i];
        sum += item
    }
    return sum
}

console.log(sum(10, 50, 6, 7, 8, 11, 6, 3, 9));




/** 3.
 let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: true
}
ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze')
თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;
**/

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
}

function nameLastname (name,lastname) {
    if(user.isloggedin === true){
        return name + ' ' + lastname
    }
}
console.log(nameLastname(user.firstname,user.lastname));




/*** 4.
შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. 
ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
***/

function highestNum(...highest) {
    let num = 0;
    for (const item of highest) {
        if(num < item){
            num = item
        }
    }
    return num
}
console.log(highestNum(5,8,9,15,39,150,999,755,1,3,77));




/*** 5.
მოცემულია მასივი let array = [1,2,4,10,34,5,7,87]
გამოიტანეთ ყველა ის რიცხვი რომელიც მეტია 0 ზე და ნაკლებია 10ზე;
***/

let nums = [1, 2, 4, 10, 34, 5, 7, 87];

nums.forEach(element => {
    if (element > 0 && element < 10) {
        console.log(element);
    }
})




/*** 6.
მოცემულია მასივი
Let numbers =[1,2,3,4,5,6,7,8,9,10]
ციკლის საშუალებით შეამოწმეთ, თუ მასივში არის რიცხვი 5 - გააჩერეთ მასივი
***/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === 5) {
        console.log(numbers[i]);
        break;
    }
}
