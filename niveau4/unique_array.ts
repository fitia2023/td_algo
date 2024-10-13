/*****************************************************
*                                                    *
*           Fonction de  unique array                * 
*                                                    *
******************************************************/

function unique_array(arr: number[]): number[] {
    let res: number[] = []
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            res[i] = arr[i]
        } else {
            let unique: boolean = true
            for (let j = 0; j < res.length; j++) {
                if (res[j] == arr[i]) {
                    unique = false
                }
            }
            if (unique) {
                res.push(arr[i])
            }
        }
    }
    return res
}


console.log(unique_array([1, 1, 5, 1, 8, 9, 6, 5]))