/* a sorted array for testing */
const sortedArray = [-20, -12, -11, -10, -7, -5, -3, -1, 2, 5, 6, 8, 12, 13, 14, 16, 18, 19, 23, 30, 38, 40, 41, 56, 72, 80, 91, 96, 102, 120, 143, 150, 155]

const binarySearch = (list, item) => {
    let low = 0
    let high = list.length - 1

    while (low <= high) {
        const index = Math.floor((low + high) / 2)
        const value = list[index]

        if (value === item) {
            return index
        }
        if (value > item) {
            high = index - 1
        } else {
            low = index + 1
        }
    }

    return null
}


console.log(binarySearch(sortedArray, 23))