function findTriangle(arr) {
    let count = 0
    arr = arr.sort((a, b) => a - b)
    console.log(arr)
    for (let i = arr.length - 1; i >= 2; i--) {
        let left = 0;
        let right = i - 1
        while (left < right) {
            if (arr[left] + arr[right] > arr[i]) {
                count += right - left
                right--
            } else {
                left++
            }
        }
    }
    
    
    return count
}

findTriangle([1, 2, 3, 5, 4, 7, 11, 30, 12]) // 11