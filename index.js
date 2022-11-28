// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
//Q1
const returnFirstTwoDrivers = function(){
    return drivers.slice(0, 2);
}
console.log(returnFirstTwoDrivers());
//Q2
const returnLastTwoDrivers = function(){
    return drivers.slice(-2);
}
console.log(returnLastTwoDrivers())
//Q3
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0])
//Q4
function createFareMultiplier(num){
    return function(fare){
        return fare * num;
    }
}
const fareMultiplier = createFareMultiplier(4);
//Q5
const fareDoubler = createFareMultiplier(2);
//Q6
const fareTripler = createFareMultiplier(3);
//Q7

function selectDifferentDrivers(drivers, cb){
    if(cb === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }else if(cb === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers)
    }
}