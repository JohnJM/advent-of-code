let treesHit = 0;
let locationIndex = 0;

require('fs').readFileSync('./input.txt', 'utf-8').split(/\r?\n/).forEach((line, i) => {
    // console.log(line);    
    const grid  = line.split('');


    if(grid[locationIndex] === '#' ){
        treesHit++;
    }

    locationIndex += 3;

    if(locationIndex > grid.length-1) {

        locationIndex = (0 + (locationIndex - grid.length));
        
    }
})

console.log(treesHit);