/**************************************************
*                                                 *
*            Fonction de nombre parfait           * 
*                                                 *
***************************************************/

function is_perfect(n:number):boolean{
     
    let sum_div:number = 0
    // diviseur de n
    for (let index = 1 ; index < n; index++) {

        if (n % index == 0) {
            sum_div += index
        }

    }


    return n ==sum_div
}

console.log(is_perfect(496))