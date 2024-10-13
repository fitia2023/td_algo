/*****************************************************
*                                                    *
*           Fonction de  sort array                  * 
*                                                    *
******************************************************/

function sort_array(arr: number[]): number[] {
    let res: number[] = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let tmp:number = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr
}


console.log(sort_array([4,3,6,1,0]))