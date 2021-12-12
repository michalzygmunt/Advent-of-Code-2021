const fs = require("fs");

const lines = fs
    .readFileSync("input.txt", {encoding: "utf-8"})
    .split("\n")
    .filter((x) => Boolean(x))
    .map((x) => parseInt(x));

    //console.log(lines);

let minElement = lines[0];
let currentElement;
let counter = 0;

for (let index = 1; index < lines.length; index++) {
    const element = lines[index];
    minElement = (element > minElement) ? minElement : element; 
    if(element > minElement){
        counter++;
        minElement = element;
    }else{
        minElement = element;
    }
    //console.log(element)
}
