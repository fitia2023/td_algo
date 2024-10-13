/*****************************************************
*                                                    *
*           Fonction de  reverse array               * 
*                                                    *
******************************************************/

function reverse_array(arr: number[]): number[] {
    let res: number[] = []
    for (let index = 0; index < arr.length; index++) {
        
        res[index] = arr[arr.length - (index+1)]
        
    }
    return res
}


console.log(reverse_array([1,2,3,4]))



