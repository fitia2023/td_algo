/*****************************************************
*                                                    *
*           Fonction de  count   array                 * 
*                                                    *
******************************************************/

function count_array(tb: number[],n:number) : number{
    let nb:number = 0
    for (let index = 0; index < tb.length; index++) {
         nb = tb[index]=== n? nb+1 : nb
    }
    return nb
}
 

console.log(count_array([3,100,2,3],3))



