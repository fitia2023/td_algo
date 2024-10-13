/*****************************************************
*                                                    *
*           Fonction de  rotate array                * 
*                                                    *
******************************************************/

function rotate_array(arr: number[]): number[] {
    let res: number[] = []
    for (let i = 0; i < arr.length; i++) {
        if (i + 1 == arr.length) {
            res[0] = arr[i]
        } else {
            res[i + 1] = arr[i]
        }

    }
    return res
}


console.log(rotate_array([0, 1, 2, 3, 5, 6, 7, 8, 9]))



