// Two functions that take in a string as input,
// reverses it and returns the reversed string.
const reverseStr = function(str) {
    return str.split('').reverse().join('');
};

const anotherReverseStr = function(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

let text = "Serendipity";
console.log(reverseStr(text));
console.log(anotherReverseStr(text));