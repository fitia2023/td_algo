/**************************************************
*                                                 *
*           Fonction de sum even                  * 
*                                                 *
***************************************************/

function sum_even(n: number): number {
    console.log(`******************************
        *  somme pair ${n} de  1 a n   *
        ******************************`)
    let res: number = 0
    for (let index = 0; index < n; index++) {

        res = (index + 1) % 2 == 0 ? res + (index + 1) : res

    }
    return res
}

console.log(sum_even(6))

