/*****************************************************
*                                                    *
*           Fonction de beautiful_mult               * 
*                                                    *
******************************************************/ 

function beautiful_mult(n: number):string{ 
    let res:string =""
    for (let i = 0; i < 10; i++) {

        res += `${n}x${i+1}=${n*(i+1)},`

    }
    return res
}

 console.log(beautiful_mult(5)) 