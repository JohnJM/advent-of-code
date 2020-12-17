let passportArr = [];
let lineContent = "";
const spec = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid' /*, 'cid'*/ ];

require('fs').readFileSync('./input.txt', 'utf-8').split(/\r?\n/).forEach((line, i) => {

    if (line.length != 0) {

        lineContent += (` ${line}`);

    } else {

        lineContent = "{ ".concat(lineContent.replace(/ /g, ', ').slice(2).concat(' }')).split("");
        lineContent.forEach((char, i) => {

            // add extra characters for JSON.parse on the string later.
            switch (char) {
                case " ":
                    lineContent[i] = '"';
                    break;

                case ":":
                    lineContent[i] = '":"';
                    break;

                case ",":
                    lineContent[i] = '",';
                    break;

            }
        })


        lineContent = lineContent.join('');

        passportArr.push(JSON.parse(lineContent));
        lineContent = "";
    }
})


//part `1
let part1Answer = 0;
let part1ValidPassports = [];

passportArr.forEach((item, i) => {

    let invalid = false;

    spec.forEach(specItem => {

        if (item.hasOwnProperty(specItem) === false) {
            invalid = true;
        }
    })

    if (invalid == false) {
        part1Answer++
        part1ValidPassports.push(item);
    }
})

// console.log(`Part 1 => ${part1Answer} `);



// part 2
class Part2 {

    numberOfValidPassports = 0;

    validateForPart2 = passport => {

        let valid = true;

        //step through / validate each key value pair with it's own func (below)

        //if reads false if it validates as expected -> move onto next else if
        //because if it's not equal to true it's false, we can stop there if that's the case.
        if (this.validateBYR(passport.byr) !== true) {
            valid = false;
            console.log('BYR Failed');
        } else if (this.validateIYR(passport.iyr) !== true) {
            valid = false;
            console.log('IYR Failed ');
        } else if (this.validateEYR(passport.eyr) !== true) {
            valid = false;
            console.log('EYR Failed');
        } else if (this.validateHGT(passport.hgt) !== true) {
            valid = false;
            console.log('HGT Failed');
        } else if (this.validateHCL(passport.hcl) !== true) {
            console.log('HCL Failed');
            valid = false;
        } else if (this.validateECL(passport.ecl) !== true) {
            console.log('ECL Failed');
            valid = false;
        } else if (this.validatePID(passport.pid) !== true) {
            console.log('PID Failed');
            valid = false;
        }
        return valid;
    }

    validateBYR = value => {
        
        if (value.length === 4) {
            value = parseInt(value);
            return value >= 1920 && value <= 2002 ? true : false;
        }

        return false;
    }

    validateIYR = value => {
        
        if (value.length === 4) {
            value = parseInt(value);
            return value >= 2010 && value <= 2020 ? true : false;
        }

        return false;
    }

    validateEYR = value => {
        
        if (value.length === 4) {
            value = parseInt(value);
            return value >= 2020 && value <= 2030 ? true : false;
        }
        
        return false;
    }

    validateHGT = value => {
        
        if (value.includes('cm') && !value.includes('in')) {
            let cm = parseInt(value.split('cm')[0]);
            return cm >= 150 && cm <= 193 ? true : false;
        }

        if (value.includes('in') && !value.includes('cm')) {
            let inch = parseInt(value.split('in')[0]);
            return inch >= 59 && inch <= 76 ? true : false;
        }

        return false;
    }

    validateHCL = value => {
        
        // check with regex if valid hex 
        return /^#[0-9A-F]{6}$/i.test(value) ? true : false;
    }

    validateECL = value => {
        
        const eyes = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
        return eyes.includes(value);
    }

    validatePID = value => {
        
        let valueArr = value.split("");

        //cant return out of forEach - had to use for here.
        for (let i = 0; i < valueArr.length; i++) {
            if (this.isNumeric(valueArr[i]) == false || valueArr.length !== 9) {
                return false;
            }
        }

        return true;
    }

    isNumeric = n => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }


}

let part2 = new Part2;

part1ValidPassports.forEach((item, i) => {
    part2.validateForPart2(item) ? part2.numberOfValidPassports++ : (console.log(i, ' <- passport index not valid... See below for key values'), console.log(item));
})

console.log('Total valid passports -> ', part2.numberOfValidPassports);