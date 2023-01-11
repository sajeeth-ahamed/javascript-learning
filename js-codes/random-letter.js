// Write code that will return  a random letter from your name

const myName = "Sajeeth"
const randVar1 = Math.random();
const randVar2 = Math.floor(randVar1 * myName.length);
console.log(randVar2);

console.log(myName[randVar2]);