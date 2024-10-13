/*****************************************************
*                                                    *
*           Fonction de  sum   array                 * 
*                                                    *
******************************************************/

function sum_array(tb: number[]) : number{
    let res:number = 0
    for (let index = 0; index < tb.length; index++) {
         res += tb[index] 
    }
    return res
}
 

console.log(sum_array([0,100,2,3]))



