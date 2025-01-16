function chunk(arr, size) {
    const finalArr = [];
    let index = 0;
    while (index < arr.length) {
        finalArr.push(arr.slice(index, index+size));
        index += size
    }
    return finalArr;
}

console.log(chunk([1,2,3,4,5], 2))