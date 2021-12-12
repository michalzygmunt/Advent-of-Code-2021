const fs = require("fs");

const lines = fs
    .readFileSync("input.txt", {encoding: "utf-8"})
    .split("\n")

    let forward = 0;
    let depth = 0;
    let position;

for (let index = 0; index < lines.length; index++) {
    const element = lines[index];
    
    if(element.includes("up")){
        depth -= (Number(lines[index].match(/\d+/)))
    }
    else if(element.includes("down")){
        depth += (Number(lines[index].match(/\d+/)))
    }
    else if(element.includes("forward")){
        forward += (Number(lines[index].match(/\d+/)))
    }    
}

position = depth*forward;

console.log(position)
 

