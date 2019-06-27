// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
  return arr.slice(0, 2);
};

const returnLastTwoDrivers = function(arr) {
  return arr.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
  return function(fare){
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
// fetchSpecifiedDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, fetchSpecifiedDrivers() will return either the first two drivers or the last two drivers.
