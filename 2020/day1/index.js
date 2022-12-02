import { input } from './input.js';

let arr = [];

//part 1
input.forEach(item => {
    arr.push(item);
    arr.forEach(arritem => {
        if (arritem + item === 2020) {
            console.log('part 1 = ', arritem * item);
        }
    })

})
arr.length = 0;

//part 2
input.forEach(item => {
    arr.push(item);

    for (let i = 0; i < arr.length; i++) {
        let thirdItemArr = arr.filter((val, i) => {
            return i != arr[i] && i != arr[arr.length];
        })

        thirdItemArr.forEach(thirdItem => {
            //this loop prints it out twice... 
            if (arr[i] + item + thirdItem === 2020) {
                console.log('part 2 = ', arr[i] * item * thirdItem);
            }
        })
    }
})