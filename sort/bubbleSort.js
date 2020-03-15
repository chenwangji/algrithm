function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    return arr
}

/**
 * test
 */
const testArr = [2, 1, 4, 7, 6, 19, 3, 8]
const result = bubbleSort(testArr)
console.log(result)