/*****************************************************
*                                                    *
*           Fonction de  combine array               * 
*                                                    *
******************************************************/

function combine_array(a1: number[], a2: number[]): number[] {
    let res: number[] = []
    let taille = a1.length >= a2.length ? a1.length : a2.length
    for (let index = 0; index < taille; index++) {
        let t1: number = a1[index] != null ? a1[index] : 0
        let t2: number = a2[index] != null ? a2[index] : 0
        res[index] = t1 + t2;

    }
    return res
}


console.log(combine_array([99, 150, 1, 399], [0, 1, 2, 3, 4]))



