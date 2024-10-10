/*****************************************************
*                                                    *
*           Fonction de  Gues   nb                   * 
*                                                    *
******************************************************/

// importation des modules
import * as  readlineSync from 'readline-sync';

let max: number = 1
let min: number = 1000

const nb_deviner: number = Math.floor(Math.random() * (max - min) + min)

function guess_nb(nb: number) {
    let play: boolean = true

    while (play) {
        if (nb === nb_deviner) {
            console.log("Vous avez trouve le nomre " + nb)
            play = false
        } else if (nb > nb_deviner) {
            console.log("Nombre trop grand " + nb)
            nb = Number(readlineSync.question("Entrez un nombre:"))
        } else if (nb < nb_deviner) {
            console.log("Nombre trop petit " + nb)
            nb = Number(readlineSync.question("Entrez un nombre:"))
        }
    }

}

// input

guess_nb(
    Number(
        readlineSync.question(`Devinez nombre entre ${min} et ${max} 
        Entrez un nombre:`))
)



