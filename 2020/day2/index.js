let part1Answer = 0;
let part2Answer = 0;

require('fs').readFileSync('./input.txt', 'utf-8').split(/\r?\n/).forEach(line => {
    const split = line.split(": ");
    const pwdChars = split[1].split("");
    const spec = split[0].split(' ');
    const range = spec[0].split('-');

    //part1
    let filteredPwdChars = pwdChars.filter((char) => {
        return char === spec[1];
    })

    if (filteredPwdChars.length >= parseInt(range[0]) && filteredPwdChars.length <= parseInt(range[1])) {
        part1Answer++;
    }


    //part2
    let index1bool, index2bool = false;

    if (pwdChars[parseInt(range[0]) - 1] === spec[1]) {
        index1bool = true
    }

    if (pwdChars[parseInt(range[1]) - 1] === spec[1]) {
        index2bool = true
    }

    if ((index1bool && !index2bool) || (!index1bool && index2bool)) {
        part2Answer++;
    }
})


console.log(part1Answer);
console.log(part2Answer);
