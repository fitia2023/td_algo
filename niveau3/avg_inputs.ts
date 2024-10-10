/*****************************************************
*                                                    *
*           Fonction de avg_input                    * 
*                                                    *
******************************************************/

// importation des modules
import * as  readlineSync from 'readline-sync';

function avg_input(n: number): number {

    let res: number = 0
    while (n > 0) {
        res += n

        n = Number(readlineSync.question("Entrez un nombre:"))


    }
    return res
}

// input utilisateur
console.log(
    avg_input(
        Number(
            readlineSync.question("Entrez un nombre:")
        )
    )
)




