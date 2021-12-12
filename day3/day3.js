const fs = require("fs");

const lines = fs
    .readFileSync("input.txt", {encoding: "utf-8"})
    .split("\n")
    .filter((x) => Boolean(x))

    let gammaRate = '';
    let gammaCounter;
    let epsilonRate = '';
    let powerConsumption;

    for (let i = 0; i < lines[i].length; i++) {
        gammaCounter = 0;
        for (let j = 0; j < lines.length; j++) {
            const element = lines[j].charAt(i);
            if(element == 1) {
                gammaCounter++;
            }
            else{
                gammaCounter--;
            }
        }
        gammaRate += (gammaCounter>0) ? '1' : '0'
        epsilonRate += (gammaCounter<0) ? '1' : '0'
    }

    powerConsumption = parseInt(gammaRate,2) * parseInt(epsilonRate,2);
    console.log(powerConsumption)