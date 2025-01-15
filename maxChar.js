function maxChar(str) {
    let charCount = {};
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1
        }
    }

    let max_char = "";
    let max_count = 0;
    for (let char in charCount) {
        if (charCount[char] > max_count) {
            max_char = char;
            max_count = charCount[char];
        }
    }
    return max_char;
}

console.log(maxChar('nevada'));