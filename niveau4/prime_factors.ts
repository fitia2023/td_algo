/*

La décomposition en facteurs premiers consiste à chercher
à écrire un entier naturel non nul sous la forme d'un produit
de nombres premiers.

Par exemple, 160 peut décomposé sous la forme
160 = 2 * 2 * 2 * 2 * 2 * 5

L'objectif de cet exercice est de mettre en place un algorithme capable depuis
un entier donné, créer un tableau contenant les facteurs premiers qui le compose.

Pour cela on a déjà un prérequis :

- On a besoin de pouvoir constituer un tableau rempli de n nombres premiers.
    Pour cela on met en place la fonction get_primes qui prend un entier n et
    renvoie un tableau d'entiers rempli de tous les nombres premiers compris
    entre 1 et sqrt(n).

- Une fois que l'on est en capacité de produire un tableau comprenant les
    nombres premiers, on va appliquer l'algorithme suivant :

    - Parcourir le tableau des nombres entiers jusqu'à trouver un diviseur de n.
    - Stocker le diviseur en question dans notre tableau résultat puis diviser n
        par ce nombre premier.
    - réitérer jusqu'à ce que l'on atteigne comme valeur 1.

*/

function is_prime(n: number): boolean {
    let res: boolean = true
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            res = false
            break
        }
    }
    return res
}

function get_primes(n: number): number[] {
    let res: number[] = []

    for (let i = 2; i < Math.floor(Math.sqrt(n)); i++) {
        if (is_prime(i)) {
            res.push(i)
        }
    }
    return res

}

function prime_factors(n: number): number[] {
    let res: number[] = []
    let primes: number[] = get_primes(n)
    while (n != 1) {
        
        for (let i = 0; i < primes.length; i++) {

            if (n % primes[i] == 0) {
                res.push(primes[i])
                n /= primes[i]
                break
            }

        }
    }


    return res
}

console.log(prime_factors(160)); // [2,2,2,2,2,5]