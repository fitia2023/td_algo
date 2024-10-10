/**************************************************
*                                                 *
*        Fonction qui calcule delta               * 
*                                                 *
***************************************************/

// Imporation des modules 
import readlineSync from 'readline-sync'


// pour fonction polynome de ax²+bx+c retorne delta
function delta(a: number, b: number, c: number): number {  
    return b ** 2 - (4 * a * c)
}


// input utilisateur 
console.log("\n/************************************\n" +
                "*        Pour ax²+bx+c              *\n" +
                "*************************************/")

let a: number = Number(readlineSync.question("Entrez a:"))
let b: number = Number(readlineSync.question("Entrez b:"))
let c: number = Number(readlineSync.question("Entrez c:"))

// Resultat
let res: String = a + "x²" + ( b>0 ? "+" + b : b)  + "x" + ( c>0 ? "+" + c :c)+ 
                "\n Δ = " + delta(a,b,c)

// affichier resultat
console.log(res)
