export const substringFilter = (value: string | number, check: boolean, array: string[]) => {
    let filteredArray = []
    if (value) {
        if (check) {
            if (typeof value === "string") {
                for (let i = 0; i < array.length; i++) {
                    if (array[i].includes(value)) {
                        filteredArray.push(array[i])
                    }
                }
            }
        } else {
            if (typeof value === "string") {
                for (let i = 0; i < array.length; i++) {
                    if (array[i].toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
                        filteredArray.push(array[i])
                    }
                }
            }
        }
    }
    return filteredArray
}