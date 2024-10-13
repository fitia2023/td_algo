/*****************************************************
*                                                    *
*           Fonction de  union array                 * 
*                                                    *
******************************************************/

function union_array(a1: number[], a2: number[]): number[] {
    let res: number[] = []
    a1.forEach(t1 => {
        a2.forEach(t2 => {
            if (t1 == t2) {
                res.push(t1)
            }
        })
    })
    return res
}


console.log(union_array([0, 1, 7, 3, 5], [0, 1, 2, 3, 7]))



