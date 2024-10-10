/**************************************************
*                                                 *
*        Fonction qui permet de connaitre si      *
*        une année est bissextile ou non          *
*                                                 *
***************************************************/

// Imporation des modules 
import readlineSync from 'readline-sync'

// renvoi true si une annee est bissextile
function is_leap(annee: number): boolean {
    let res: boolean = false
    if (annee % 4 == 0) {
        if (annee % 100 == 0) {
            res = annee % 400 == 0
        } else {
            res = true
        }

    }
    return res
}

// input utilisateur
let i_annee: number = Number(
    readlineSync.question("/**************************************************\n" +
        "*        une annee est bissextile ?               *\n" +
        "***************************************************/\n" +
        "Entrez l\'annee:"))

// Resultat
let res: String = is_leap(i_annee) ? "bissextile" : "n'\est pas bissextile"

// affichier resultat
console.log(
    "L'\annee " + i_annee + " est " + res
)
