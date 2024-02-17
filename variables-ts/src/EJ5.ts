type types = number | string | boolean;

let array : types[] = [1,2,3,"4","5","6", true, false];

array.forEach((e)=>{
    if(typeof e === "number"){
        console.log("number: "+ e);
    }else if(typeof e === "string"){
        console.log("string: " + e);
    } else if(typeof e === "boolean"){
        console.log("boolean: "+ e);
    }else{
        console.log("what?")
    }
});

//------------Opcion mejor------------//
const mixedData: (number | string | boolean)[] = [-12, "one", 10, false, "two", 34, true, "three"];
console.log("Original array elements:", mixedData);

// Use type assertion to extract only numbers
const numbersOnly: number[] = mixedData.filter((item): item is number => typeof item === "number");
// Print the extracted numbers
console.log("Numbers Only:", numbersOnly);

// Use type assertion to extract only booleans
const booleanOnly: boolean[] = mixedData.filter((item): item is boolean => typeof item === "boolean");
// Print the extracted numbers
console.log("Boolean Only:", booleanOnly);

// Use type assertion to extract only booleans
const stringOnly: string[] = mixedData.filter((item): item is string => typeof item === "string");
// Print the extracted numbers
console.log("String Only:", stringOnly);