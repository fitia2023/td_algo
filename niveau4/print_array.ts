/*****************************************************
*                                                    *
*           Fonction de  print array                 * 
*                                                    *
******************************************************/

function print_array(tb: number[]) {
    console.log("Contenu du tableau:")
    for (let index = 0; index < tb.length; index++) {
         console.log(`${tb[index]}`)
    }
}
 

print_array([0,1,2,3])



