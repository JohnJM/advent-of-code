const inputArr = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
];

let treesHit = 0;
let treesHitArr = [];
let txtInput = [];

require('fs').readFileSync('./input.txt', 'utf-8').split(/\r?\n/).forEach((line, i) => {
    txtInput.push(line);
})

const calcTrees = (right, down) => {

    let skipline = false;
    let counter = 1;
    let locationIndex = 0;

    txtInput.forEach((line, i) => {

        if (counter == parseInt(down) && down != 1) {
          
            skipline = true;
            counter = 0;
            
        } else {

            skipline = false;
            
        }

        console.log(`index - ${i},counter - ${counter} skip? - ${skipline}`);

        if (!skipline) {

            const grid = line.split('');
            
            if (grid[locationIndex] === '#') {
                treesHit++;
            }

            //go along a few steps
            locationIndex += parseInt(right);

            if (locationIndex > grid.length - 1) {

                locationIndex = (0 + (locationIndex - grid.length));

            }
        }
        counter++;
    })
    treesHitArr.push(treesHit);
    treesHit = 0;
}


inputArr.forEach(innerArr => {
    calcTrees(innerArr[0], innerArr[1]);
})


console.log(treesHitArr);

let answer = 1;
treesHitArr.forEach(val => {

    answer *= parseInt(val);

})

console.log(`part 2 answer => ${answer}`);
