// Creat lion object here 
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};
// End of lion object

function myFunction(param1, param2) {
    // Only change code below this line 
    lion[param1] = param2;
    return lion;
    // Only change code below this line 
}

myFunction("roar", "roar-roar");
module.exports = myFunction;