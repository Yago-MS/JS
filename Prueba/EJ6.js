var fruits = {0: "apple", 1: "orange", 2:"banana"};
var fruit = "apple";
var located = false;
for (var i = 0;i<=2;i++){
    if(fruits[i] === fruit){
        console.log("the fruit you're looking for is at index:" + i);
        located = true;
    }
}
if(!located){
    console.log("the fruit you're looking for is not at the database");
}