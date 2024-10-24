/*****************************************************
*                                                    *
*           Jeu pierre papier cisceau                * 
*                                                    *
******************************************************/
// Import des modules
import * as readSync from "readline-sync";


//  Pierre papier cisceau
//  0 = pierre
//  1 = papier
//  2 = cisceau
function int_player(choix: string): number {

    switch (choix) {
        case 'rock':
            return 0
            break;
        case 'paper':
            return 1
            break;
        case 'scissor':
            return 2
            break;
        default:
            return -1
            break
    }
}

// determination de qui gagne
// 0 si match null donc p1=p2
// 1 si p1 gagne
// 2 si p2 gagne
function win(p1: number, p2: number): number {
    if (p1 == p2) {
        return 0
    } else if (((p1 - p2 + 3) % 3) == 1) {
        return 1
    } else {
        return 2
    }
}
enum choix {
    rock,
    paper,
    scissor
}

function RPS() {

    let player1 = readSync.question("rock paper or scissor\nEntrez votre choix:").toLocaleLowerCase()
    while (int_player(player1) == -1) {
        player1 = readSync.question("Input incorrect\nrock paper or scissor\nEntrez votre choix:").toLocaleLowerCase()
    }
    let player2 = Math.floor(Math.random() * 2)

    while (win(int_player(player1), player2) != 1) {
        if (win(int_player(player1), player2) == 0) {
            console.log("Match null egalite:p1=",player1," et p2=",choix[player2])
            player1 = readSync.question("rock paper or scissor\nEntrez votre choix:").toLocaleLowerCase()
            while (int_player(player1) == -1) {
                player1 = readSync.question("Input incorrect\nrock paper or scissor\nEntrez votre choix:").toLocaleLowerCase()
            }
            player2 = Math.floor(Math.random() * 2)
        } else {
            console.log("L'ordinateur gagne ",choix[player2], " bat ", player1)
            player1 = readSync.question("rock paper or scissor\nEntrez votre choix:").toLocaleLowerCase()
            while (int_player(player1) == -1) {
                player1 = readSync.question("Input incorrect\nrock paper or scissor\nEntrez votre choix:").toLocaleLowerCase()
            }
            player2 = Math.floor(Math.random() * 2)
        }

        if (win(int_player(player1), player2) == 1 ) console.log("Felicitation vous avez gagnez\np1=",player1," et p2=",choix[player2])
    }

}

RPS()