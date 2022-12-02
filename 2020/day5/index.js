//part 1
class Seat {
    constructor(inputStr) {
        this.row = calcRow(inputStr.slice(0, 7));
        this.column = calcCol(inputStr.slice(7));
    }

    getId(){
        return parseInt(this.row*8 + this.column);
    }
}

function calcRow(str) {
   
    let arrRow = [];
   
    str.split("").forEach(x => {
        x === 'B' ? arrRow.push(1) : arrRow.push(0);
    });

    return parseInt(arrRow.join(""), 2);
}

// should be in the same func!
function calcCol(str) {

    let arrCol = [];

    str.split("").forEach(x => {

        x === 'R' ? arrCol.push(1) : arrCol.push(0);
    });

    return parseInt(arrCol.join(""), 2);
}


let seatIds = [];


require('fs').readFileSync('./input.txt', 'utf-8').split(/\r?\n/).forEach((line, i) => {

    const seat = new Seat(line);

    seatIds.push(seat.getId());
})

console.log(`top id is ${ Math.max(...seatIds) }`);


//part 2
seatIds.sort((a, b) => a - b);

// console.log(seatIds);
let part2 = 0;

for(let i = 0; i < seatIds.length; i++ ) {
    if(seatIds[i] + 1 !== seatIds[i+1]) {
        part2 = seatIds[i];
        break;
    }
}

console.log(`My seat is ${part2 + 1}`);