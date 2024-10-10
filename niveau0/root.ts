/************************************************************
*                                                           *
*        Fonction qui calcule root en fonction delta        *
*                                                           *
*************************************************************/

// Imporation des modules 
// NB: besoin du fichier delta.ts
import readlineSync from 'readline-sync'
import { delta } from './delta'


// ax²+bx+c , retourn soit vide ou valeur
function root(a: number, b: number, c: number): number[] {
    const d = delta(a, b, c)
    if (d > 0) {
        let x1 = (-b - Math.sqrt(d)) / (2 * a)
        let x2 = (-b + Math.sqrt(d)) / (2 * a)
        return [x1, x2]
    } else {
        if (d == 0) {
            return [-b / (2 * a)]
        } else {
            return []
        }
    }
}

// input utilisateur 
console.log("\n/************************************\n" +
    "*        Pour ax²+bx+c              *\n" +
    "*************************************/")

let a: number = Number(readlineSync.question("Entrez a:"))
let b: number = Number(readlineSync.question("Entrez b:"))
let c: number = Number(readlineSync.question("Entrez c:"))

// Resultat
let res: String = a + "x²" + (b > 0 ? "+" + b : b) + "x" + (c > 0 ? "+" + c : c) +
    "\n Δ = " + delta(a, b, c)

res += `\n Resultat: ${root(a,b,c)}`

// affichier resultat
console.log(res)

