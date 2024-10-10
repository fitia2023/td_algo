/**************************************************
*                                                 *
*           Fonction de reverse_ints              * 
*                                                 *
***************************************************/

function reverse_ints(n: number): string {
    let res: string = ""
    for (let index = 0; index < n; index++) {
        res += `${n - index }`
    }
    return res
}

console.log(reverse_ints(5))