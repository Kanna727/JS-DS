// https://www.geeksforgeeks.org/euclidean-algorithms-basic-and-extended

/**
 * Finds GCD of two numbers
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
export default function (a, b) {
    let r;
    while (a !== 0) {
        r = b % a;
        b = a;
        a = r;
    }
    return b < 0 ? -b : b;
};

/**
 * Recursion method
 * const gcdRec = (a,b) => a === 0 ? b : gcd(b % a, a);
 * disadvantages:
 * 1) Function call overhead
 * 2) increasing memory to store return values
 * 3) call stack overflow on large numbers
 */
