/**************************************************
*                                                 *
*   Fonction pour connaitre nombre premier        * 
*                                                 *
***************************************************/

function is_prime(n: number): boolean {

    let res: boolean = true
    for (let index = 2; index < n; index++) {

        if (n % index == 0) {
            res = false
            break
        }

    }
    return res
}
let n: number = 97
console.log(`******************************
    *       ${n}   est premier?         *
    ******************************`)
console.log(is_prime(n))