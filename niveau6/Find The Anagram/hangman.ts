
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
import * as  readlineSync from 'readline-sync';


function get_words(path: string): string[] {
    return fs.readFileSync(path, 'utf-8').split('\n')
}

function word_melange(word: string): string {
    let res: string = ''
    let w = word.split('', word.length - 1)
    for (let i = 0; i < w.length; i++) {
        let index = Math.floor(Math.random() * (w.length - i) + i)
        res += w[index]

        let tmps = w[i]
        w[i] = w[index]
        w[index] = tmps
    }

    return res
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
    let w = word_melange(word)

    let word_guess: string[] = []

    while (vie > 0) {
        // console.clear()
        console.log("Nombre de vie:", vie)
        console.log(HANGMAN_PICS[6 - vie])
        console.log("Mot melange:", w)
        let input: string = readlineSync.question("Entrez le mot:").toLocaleLowerCase()

        if (word_guess.includes(input)) {
            console.log("Mot deja ecrit")
        } else if (input == word.trim()) {
            console.log("Felicitation le mot est trouve:", word)
            break
        } else {
            console.log("\nIncorrect essaye encore\n")
            word_guess.push(input)
            vie--
        }
        if (vie == 0) console.log("\nPerdu le mot est ", word)
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

game()