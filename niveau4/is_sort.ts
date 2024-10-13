/*****************************************************
*                                                    *
*           Fonction de  is short array              * 
*                                                    *
******************************************************/

function is_sort(tb: number[]): boolean {
    let res: boolean = true
    for (let index = 0; index < tb.length; index++) {

        if (index < (tb.length - 1)) {
            if (tb[index] > tb[index + 1]) {
                res = false
                break
            }
        }
    }
    return res
}


console.log(is_sort([99, 150, 1, 399]))



