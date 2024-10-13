/*****************************************************
*                                                    *
*           Fonction de  max   array                 * 
*                                                    *
******************************************************/

function max_array(tb: number[]) : number{
    let max:number = 0
    for (let index = 0; index < tb.length; index++) {
         max = tb[index] > max ? tb[index] : max
    }
    return max
}
 

console.log(max_array([0,100,2,3]))



