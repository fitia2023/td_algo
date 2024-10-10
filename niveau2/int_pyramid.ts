/**************************************************
*                                                 *
*           Fonction de int_pyramid               * 
*                                                 *
***************************************************/

import { count, table } from "console"

function int_pyramid(n: number):string{ 
    let res:string =""
    for (let index = 0; index <= n; index++) {
        for (let i = 0; i < index; i++) {
            res += i+1 
        }
        res += "\n"
    }
    return res
}

 console.log(int_pyramid(5)) 