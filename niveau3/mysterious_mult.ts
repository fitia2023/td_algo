/*****************************************************
*                                                    *
*           Fonction de  multiple   myster           * 
*                                                    *
******************************************************/

// importation des modules
import * as  readlineSync from 'readline-sync';

let max: number = 5000
let min: number = 1

const nb_deviner: number = Math.floor(Math.random() * (max - min) + min)

function mysterious_mult(nb: number) {
    let play: boolean = true

    while (play) {
        if (nb % nb_deviner == 0) {
            console.log(" True \nVous avez trouve le nomre " + nb + " divisble par " + nb_deviner)
            play = false
        } else {
            console.log("Pas trouve continue " + nb)
            nb = Number(readlineSync.question("Entrez un nombre:"))
        } 
    }

}

// input

mysterious_mult(
    Number(
        readlineSync.question(`Devinez nombre entre ${min} et ${max} 
        Entrez un nombre:`))
)



