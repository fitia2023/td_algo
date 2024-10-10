/**************************************************
*                                                 *
*            Fonction de pgcd                     * 
*                                                 *
***************************************************/

function pgcd(a: number,b:number):number{
    
    while (a%b != 0) {
        let tmp:number = a
        a = b
        b = tmp % b
    }


    return b
}

console.log(pgcd(135,120))