/**************************************************
*                                                 *
*           Fonction de factorial                 * 
*                                                 *
***************************************************/

function factorial(n: number):number{
    console.log(`******************************
        *      factorial de ${n}     *
        ******************************`)
        let res:number = 1
    for (let index = 0; index < n; index++) {

        res *= (index+1) 

    }
    return res
}

console.log(factorial(4))