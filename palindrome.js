function palindrome(str) {
    const reversedStr = str.split('').reverse().join('')
    return str === reversedStr;
}

// let text = 'kayak'
// let text = 'madam'
let text = 'codingmoney'

console.log(palindrome(text));