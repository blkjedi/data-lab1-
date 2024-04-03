console.log('running script');

const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50);

const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

console.log(isTwoOdd);

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25);

const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique);

const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(isValid);



let g1 = 30
let g2 = 28
let g3 = 23

let t1 = 55
let t2 = 60
let t3 = 75

const totalDis = 1500
const totalBud = 175
let costOfFuel = 3 

const trip1 = totalDis/g1 
console.log(trip1);

const trip2 = totalDis/g2 
console.log(trip2);

const trip3 = totalDis/g3 
console.log(trip3);

const trip1FuelCost = trip1* costOfFuel < totalBud
console.log(trip1FuelCost);

const trip2FuelCost = trip2* costOfFuel < totalBud
console.log(trip2FuelCost);

const trip3FuelCost = trip3* costOfFuel < totalBud
console.log(trip3FuelCost);

const trip1Time = totalDis/t1
console.log(trip1Time);

const trip2Time = totalDis/t2
console.log(trip2Time);

const trip3Time = totalDis/t3
console.log(trip3Time);

