function capitalize(str) {
    const capitalizedWords = [];
    let words = str.split(" ");
    for (const word of words) {
        capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
    }
    return capitalizedWords.join(" ");
}

let text = "this is a very clean way of writing your functions"
console.log(capitalize(text));