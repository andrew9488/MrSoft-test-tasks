export const lengthFilter = (value: string | number, array: string[]) => {
    let filteredArray = []
    if (value) {
        if (!isNaN(+value)) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].length > value) {
                    filteredArray.push(array[i])
                }
            }
        }
    }
    return filteredArray
}