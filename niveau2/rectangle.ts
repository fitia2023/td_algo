/**************************************************
*                                                 *
*           Fonction de rectangle                 * 
*                                                 *
***************************************************/

function rectangle(n: number, m: number): string {
    let res: string = ""
    for (let index = 0; index < m; index++) {
        res += "*".repeat(n) + "\n"
    }
    return res
}

console.log(rectangle(4, 2))