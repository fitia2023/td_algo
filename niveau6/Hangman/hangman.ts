
/*

Le but de l'exercice est de gérer une partie de Pendu.

Pour cela, le dictionnaire de mots pendu.txt est mis à disposition. L'objectif est de parvenir
à lire ce fichier grâce au package fs et de séléctionner un des mots aléatoirement. 
Ensuite il faut gérer la boucle de jeu, affichant au joueur autant de _ que de lettres non découvertes
Il faut gérer l'entrée utilisateur grâce au package readline-sync et se souvenir de quelles lettres sont
devinées. Si le joueur joue une lettre déjà devinée par le passé, rien ne se passe.
Autrement, si la lettre est présente dans le mot à deviner on révèle son/ses emplacement(s). Si elle n'est
pas présente, le joueur perd une vie.

La partie se termine si le joueur n'a plus de vie ou s'il a trouvé toutes les lettres du mot à deviner.

*/

// import des modules 
import * as fs from 'fs';
import { toUnicode } from 'punycode';
import * as  readlineSync from 'readline-sync';


function get_words(path: string): string[] {
    return fs.readFileSync(path, 'utf-8').split('\n')
}

function random_word(words: string[]): string {
    return words[Math.floor(
        Math.random() * words.length
    )].toLocaleLowerCase()
}

function game() {

    let word: string = random_word(
        get_words('niveau6/Hangman/pendu.txt')
    )

    let vie: number = 6

    let letter_guess: string[] = []

    let head_word = "_".repeat(word.length - 1).split('')

    let nb_restant = word.length - 1

    while (vie > 0 && head_word.includes("_")) {
        // console.clear()
        console.log("Nombre de vie:", vie)
        console.log(HANGMAN_PICS[6 - vie])
        console.log("Mot restant de ", nb_restant, " lettres:", head_word.join(' '))
        let input = readlineSync.question("Entrez une lettre:").toLocaleLowerCase()

        if (letter_guess.includes(input)) {

            console.log("\nLettre deja prise essayer une autre\n")

        } else if (word.includes(input)) {

            letter_guess.push(input)
            nb_restant--
            for (let i = 0; i < word.length; i++) {
                if (word[i] == input) {
                    head_word[i] = input
                }
            }

        } else {
            letter_guess.push(input)
            console.log("\nIncorrecte\n")
            vie--
        }

        if (nb_restant == 0) {
            console.log("\nFelicitation mot trouve:", word)
        }

        if (vie == 0) {
            console.log("Vous avez perdu")
            console.log(HANGMAN_PICS[6])
            console.log("le mot :",word)
        }
    }
}





const HANGMAN_PICS: string[] = [
    "    +---+\n        |\n        |\n        |\n       ===",
    "    +---+\n    O   |\n        |\n        |\n       ===",
    "    +---+\n    O   |\n    |   |\n        |\n       ===",
    "    +---+\n    O   |\n   /|   |\n        |\n       ===",
    "    +---+\n    O   |\n   /|\\  |\n        |\n       ===",
    "    +---+\n    O   |\n   /|\\  |\n   /    |\n       ===",
    "    +---+\n    O   |\n   /|\\  |\n   / \\  |\n       ==="]


console.log(game())