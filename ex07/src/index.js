function myFunction(param1) {
    // Only change code below this line 
        var lion = {
            name: "Simba",
            legs: 4,
            tails: 1,
            roar: "roar-roar"
        };
        delete lion[param1];
        return lion;
    // Only change code above this line 
    }
myFunction("roar");
module.exports = { myFunction};