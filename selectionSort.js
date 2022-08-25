const anArray = [12, 14, -1, 11, 55, 78, 0, 656, 258, 100, 18, 19, 22, 88, 99, 101, 29, 67, 98, 37, 10]

const selectionSort = (list, sortType = 'desc') => {
    const lengthOfArray = list.length
    for (let i = 0; i < lengthOfArray; i++) {
        let minOrMax = i // min index for asc sort type and max index for desc sort type
        for (let j = i+1; j < lengthOfArray; j++) {
            if (sortType === 'desc') {
                if (list[j] > list[minOrMax]) {
                    minOrMax = j
                }
            } else {
                if (list[j] < list[minOrMax]) {
                    minOrMax = j
                }
            }
        }

        if (minOrMax != i) {
            const tmp = list[i]
            list[i] = list[minOrMax]
            list[minOrMax] = tmp
        }
    }
    return list
}

console.log(selectionSort(anArray, 'desc'))