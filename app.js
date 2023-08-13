//current temperature Kelvin 
const kelvin = 5;
//Kelvin to Celsius convertion
const celsius = kelvin - 273;

//Fahrenheit calculation
let fahrenheit = celsius * (9 / 5) + 32;
//round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

//Results display
console.log(`The temperature is ${fahrenheit} Fahrenheit.`);
console.log(`The temperature is ${celsius} Celsius.`);

//Newton to Celsius calculation
let newton = celsius * (33 / 100);
//Round down the Newton temperature
newton = Math.floor(newton);

//Results display
console.log(`The temperature is ${newton} degrees Newton.`);
