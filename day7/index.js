class Bag {
    constructor(str){
        this.colour = this.parseColour(str);
        this.contains = this.parseRules(str);
    }

    parseRules(input){
        if(input.split(" ").splice(4)[0] === 'no'){
           return 0;
        }

        let contains =  input.split(" ").splice(4);
        
        // removes "bag" values from the array
        contains.forEach((item, i, obj) => {
            if(['bags.','bags,', 'bag.', 'bag,'].includes(item)) {
                obj.splice(i, 1);
            }
        }) 

        //needs to be in one loop with the above really...
        contains = contains.reduce((resultArray, item, index) => { 
            const chunkIndex = Math.floor(index/3)
          
            if(!resultArray[chunkIndex]) {
              resultArray[chunkIndex] = []
            }
          
            resultArray[chunkIndex].push(item)
        
            return resultArray
          }, [])

        let containsRules = [];
        contains.forEach(containsRule => {
            containsRules.push({"color": containsRule.splice(1).join(" "), "frequency": containsRule[0]});
        })

        return containsRules;


    }

    parseColour(input){
      return input.split(" ").splice(0, 2).join(" ");
    }

    containsShinyGold(){
        // return Boolean;
    }
}

let bArr = [];
require('fs').readFileSync('./input.txt', 'utf-8').split(/\r?\n/).forEach((line, i) => {
    const b = new Bag(line);
    bArr.push(b);
})

bArr.forEach(bag => {
    console.log(bag);
})

// part1 (to do!)
