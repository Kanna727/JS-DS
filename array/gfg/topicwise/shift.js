import gcd from '../../../helpers/gcd.js';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const rotate = (arr, d) => {
    const len = arr.length;
    const steps = gcd(len, d);
    console.log(steps);
};

rotate(array, 3);
