/*

Exercice sur les Manipulations de Strings

Dans cet exercice, l'objectif est de recréer plusieurs fonctions de manipulation de strings sans utiliser 
les fonctions natives JavaScript correspondantes. 

Fonctions à Implémenter :

- split : Divise une chaîne de caractères en un tableau de sous-chaînes en fonction d'un séparateur.
- join : Rassemble les éléments d'un tableau en une seule chaîne de caractères en les concaténant avec 
        un séparateur.
- replace : Remplace les occurrences d'une sous-chaîne dans une chaîne de caractères par une autre sous-chaîne.
- reverse : Inverse l'ordre des caractères dans une chaîne de caractères.
- slice : Extrait une section d'une chaîne de caractères et renvoie une nouvelle chaîne de caractères.

*/

import exp from "constants"


function split(expr: string, splitter: string): string[] {

        let res: string[] = []

        let word: string = ''


        for (let i = 0; i < expr.length; i++) {
                if (expr[i] == splitter) {
                        res.push(word)
                        word = ''
                        i++
                }
                word += expr[i]
        }
        res.push(word)

        return res
}


function join(exprs: string[], jointer: string): string {
        let res: string = ''
        for (let i = 0; i < exprs.length; i++) {
                res += (i + 1) < exprs.length ? exprs[i] + jointer : exprs[i]
        }
        return res
}


function replace(expr: string, to_replace: string, replace_with: string): string {
        let res: string = ''

        let mot: string = ''

        let indice: number[][] = []

        for (let i = 0; i < expr.length; i++) {

                for (let j = 0; j < to_replace.length; j++) {

                        if (i + 1 < expr.length) {

                                mot += expr[i + j]
                                if (mot == to_replace) {
                                        // console.log('mot trouve')
                                        indice.push([i, j])
                                }

                        }

                }
                mot = ''
        }

        for (let i = 0; i < expr.length; i++) {
                for (let j = 0; j < indice.length; j++) {
                        if (i == indice[j][0]) {
                                res += replace_with
                                i += (indice[j][1] + 1)
                        }
                }
                res += i < expr.length ? expr[i] : ''
        }

        return res
}

function reverse(expr: string): string {
        let res: string = ''

        for (let i = 0; i < expr.length; i++) {
                res += expr[expr.length - (i + 1)]
        }

        return res
}

function slice(expr: string, start: number, end: number): string {
        let res: string = ''

        end = end >= 0 ? end : expr.length + end

        for (let i = 0; i < expr.length; i++) {
                if (i == start) {

                        for (let j = 0; j < end; j++) {
                                res += i + j < expr.length ? expr[i + j] : ''
                        }

                }
        }

        return res
}



// split
console.log("split");
console.log(split("Hello World", " ")); // ["Hello", "World"]
console.log(split("apple,banana,cherry", ",")); // ["apple", "banana", "cherry"]
console.log(split("abcde", ",")); // ["abcde"]


// //join
console.log("\n\njoin");
console.log(join(["apple", "banana", "cherry"], ", ")); // "apple, banana, cherry"
console.log(join(["apple", "banana", "cherry"], "")); // "applebananacherry"
console.log(join([], ", ")); // ""

// //replace
console.log("\n\nreplace");
console.log(replace("Hello World", "World", "Universe")); // "Hello Universe"
console.log(replace("Hello World", "Universe", "World")); // "Hello World"
console.log(replace("Hello World", "World", "")); // "Hello "

// //reverse
console.log("\n\nreverse");
console.log(reverse("Hello World")); // "dlroW olleH"
console.log(reverse("")); // ""
console.log(reverse("!@#$%^&*()")); // ")(*&^%$#@!"

// //slice
console.log("\n\nslice");
console.log(slice("Hello World", 6, 11)); // "World"
console.log(slice("Hello World", 0, -6)); // "Hello"
console.log(slice("Hello World", 20, 30)); // ""