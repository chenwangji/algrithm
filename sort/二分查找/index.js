function indexOf(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while(low <= high) {
        let middleIndex = Math.floor((low + high) / 2)
        let middle = arr[middleIndex];
        if (target === middle) {
            return low = middleIndex
        } else if (middle > target) {
            high = middleIndex - 1;
        } else {
            low = middleIndex + 1;
        }
    }

    return low
}

// test
const result = indexOf([1, 2, 3, 4, 6, 7, 8, 19], 6)
console.log(result);