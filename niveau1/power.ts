/**************************************************
*                                                 *
*           Fonction de puissance                 * 
*                                                 *
***************************************************/

function power(x: number, n: number): number {
    console.log(`******************************
        *      ${x} puissance ${n}    *
        ******************************`)
    let res: number = 1
    for (let index = 0; index < n; index++) {

        res *= x

    }
    return res
}

console.log(power(2, 4))