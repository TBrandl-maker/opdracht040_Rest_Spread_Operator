// Gebruik Rest operator

const optellen = function (...args) {
    return args.reduce((acc, item) => {
        return acc + item;
    })
}

// console.log(optellen(1, 2, 3, 4, 5, 6)); 
// verwachte uitkomst: 21

console.log(optellen(2, 2, 6, 10, 15, 5, 5)) // 45


//Gebruik Spread operator

const optellen2 = function (num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}

const cijfers = [3, 7, 5, 10, 15];

console.log(optellen2(...cijfers));
  // verwachte uitkomst: 40

