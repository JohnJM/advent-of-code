//part 1 needs reworked to use the class instead of global vars. (more like part 2!)
let arrGroups = [];
let counter = 0;
let charArr = [];

let arrG = [];
let arrGHolder = [];

class Group {
    constructor(arrOfStrings){
        this.answers = arrOfStrings;
        this.commonAnswers = this.calcCommonAnswers();
    }

    //part 1 - need to rework so it uses this / uses the class.
    addToAnswer = (arr) => {
        this.answers.push(arr);
    }

    //for part 2
    calcCommonAnswers = () => {
        return this.answers.reduce((prev,curr) => prev.filter(e => curr.includes(e)));
    }
}

require('fs').readFileSync('./input.txt', 'utf-8').split(/\r?\n/).forEach((line, i) => {
//part 1
    if (line !== '') {
        line = line.split("");


        arrGHolder.push(line);


        line.forEach(char => {

          
            if(!charArr.includes(char)){
              charArr.push(char);
            }      
        })

    } else {
        arrGroups.push(charArr.length);
        
        const g = new Group(arrGHolder);
        arrG.push(g);

        counter = 0;
        charArr = [];
        arrGHolder = [];
    }

});

let part1Answer = 0; 

arrGroups.forEach(g => {
    part1Answer += parseInt(g);
})

console.log(`Part 1 -> ${part1Answer}`);

let part2Answer = 0;
arrG.forEach(group => {
   part2Answer += group.commonAnswers.length;
})

console.log(`Part 2 -> ${part2Answer}`);
