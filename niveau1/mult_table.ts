/**************************************************
*                                                 *
*        Fonction qui donne multiple de n         * 
*                   1   a   10                    *
*                                                 *
***************************************************/

function mult_table(n: number) {
    console.log(`******************************
        *      multiple de ${n}      *
        ******************************`)
    for (let index = 0; index < 10; index++) {

            console.log(
                ` ${index+1} x ${n} = ${n*(index+1)} `
            )

    }
}

mult_table(4)