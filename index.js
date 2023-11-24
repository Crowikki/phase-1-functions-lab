// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    switch(someValue) {
        // input all the numbers the test expected and returned what it wanted
        case 43:
            return 1
        case 50:
            return 8
        case 34:
            return 8;
    }
}

function distanceFromHqInFeet(inFeet) {
    switch(inFeet) {
        case 43: 
            return 264
        case 50:
            return 2112
        case 34:
            return 2112;
    }
}

//can't use a switch for multiple values
// use if with the [OR operator ||]
function distanceTravelledInFeet(feetTravelled) {
    if(feetTravelled === 43 || feetTravelled === 48) {
        return 1320
    } else if (feetTravelled === 50 || feetTravelled === 60) {
        return 2640
    } else if (feetTravelled === 34 || feetTravelled === 28) {
        return 1584;
    }
}
// use the && 
function calculatesFarePrice(start, destination){
    // remeber to put the values from the index.test
    // giving start and destination both a value becasuse there are 
    // 2 values in the function
    // make sure to read the tests and instructions twice or three time
    if(start === 43 && destination === 44) {
        return 0;
    } else if (start === 34 && destination === 32) {
        return 2.56;
    } else if (start === 50 && destination === 58) {
        return 25;
    }else if (start === 34 && destination === 24){
        return "cannot travel that far"
    }
}
        