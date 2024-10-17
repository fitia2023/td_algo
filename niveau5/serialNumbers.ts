
/*

Dans cet exercices, vous allez créer une fonction qui va vérifier si un numéro de série est valide ou non.

Pour définir si un numéro de série est valide, il doit respecter plusieurs règles :

- Il est sous la forme XXXX-XXXX-XXXX-XXXX où les X sont des chiffres.
- Le 1e groupe de 4 chiffres est l'inverse du 3e groupes (Par exemple si le premier groupe est 1234, le 3e sera 4321).
- Le 2e groupe de chiffres est composé des 4 dernier chiffres du 3e groupe multiplié par 7.
- Le 3e groupe multiplié par 7 possède comme 4 derniers chiffres les mêmes que le groupe 2.
- La somme des 4 groupes de chiffres donne forcément un multiple de 10000.

Pour vous aider, voici quelques numéro de séries valides :

2806-2574-6082-8538
6730-2632-0376-0262
2223-2554-3222-2001
2415-5994-5142-6449
4212-4868-2124-8796
0441-0080-1440-8039
3210-0861-0123-5806

*/

/**
 * @param serialNumber Serial number format "XXXX-XXXX-XXXX-XXXX"
 * @returns 0 : No Error, 1 : Wrong Format, 2 : group 1 isn't group 3 reversed, 3 : group 2 isn't group 3 times 7, 4 : total sum isn't a multiple of 10000
 */
function has_error(serialNumber: string): number {

    let serial_number = serialNumber.split('-')

    // Nombre valide de 4 chiffres 
    for (let i = 0; i < serial_number.length; i++) {
        if (!Number(serial_number[i]) || serial_number[i].length < 4) return 1
    }

    // groupe 1 , inverse de groupe 3
    let inverse = ''
    for (let i = 0; i < serial_number[2].length; i++) {
        inverse += serial_number[2][serial_number[2].length - (i + 1)]
    }
    if (inverse != serial_number[0]) return 2

    // groupe 2 est les 4 derniers chiffre du groupe 3 multiplie par 7
    let group3_7 = (Number(serial_number[2]) * 7).toString()
    let ch4 = ''
    group3_7 = group3_7.length < 4 ? '0' + group3_7 : group3_7
    for (let i = 0; i < 4; i++) {
        ch4 += group3_7[(group3_7.length - 4) + i]
    }
    if (Number(ch4) != Number(serial_number[1])) return 3

    // somme des 4 groupes multiple de 10000
    let multp = 0
    for (let i = 0; i < serial_number.length; i++) {
        multp += Number(serial_number[i])
    }
    if (multp % 10000 != 0) return 4

    return 0;
}


//Quelques exemples de numéro de série avec les résultats attendus :


// 0 :

console.log(has_error("2806-2574-6082-8538"));
console.log(has_error("6730-2632-0376-0262"));
console.log(has_error("2223-2554-3222-2001"));
console.log(has_error("2415-5994-5142-6449"));
console.log(has_error("4212-4868-2124-8796"));
console.log(has_error("0441-0080-1440-8039"));
console.log(has_error("3210-0861-0123-5806"));

// 1 :
console.log(has_error("2806-2574-6082-858"));
console.log(has_error("XXXX-XXXX-XXXX-XXXX"));

// 2 :
console.log(has_error("4221-4868-2124-8796"));
console.log(has_error("1122-1111-1212-1111"));

// 3 :
console.log(has_error("1122-1111-2211-1111"));
console.log(has_error("3879-1111-9783-1111"));

// 4 :
console.log(has_error("1122-5477-2211-1111"));
console.log(has_error("3879-8481-9783-1111"));