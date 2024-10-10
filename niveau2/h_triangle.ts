/**************************************************
*                                                 *
*           Fonction de h_triangle                * 
*                                                 *
***************************************************/

function h_triangle(h: number):string{ 
    let res:string =""
    for (let index = 0; index < h; index++) {
        res += "x".repeat(index+1) + "\n"
    }
    return res
}

console.log(h_triangle(4))