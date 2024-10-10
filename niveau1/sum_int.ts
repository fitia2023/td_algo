/**************************************************
*                                                 *
*        Fonction qui sommme 1 a n               * 
*                                                 *
***************************************************/

function sum_int(n: number): number {
    let res: number = 0
    for (let index = 0; index < n; index++) {

        res += index + 1

    }
    return res

}


console.log(sum_int(4))


