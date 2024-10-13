/*****************************************************
*                                                    *
*           Fonction de is sub string                * 
*                                                    *
******************************************************/
function sub_string(word: string, begin: number, end: number): string {
    let res: string = ''
    for (let i = begin; i <= end; i++) {
        res += word[i]
    }
    return res
}

// console.log(sub_string("hello", 3, 4))

function is_sub_string(word: string, _sub_string: string): boolean {
    let res: boolean = false

    let taille_sub: number = _sub_string.length

    let mot: string = ''

    for (let i = 0; i < word.length; i++) {

        for (let j = 0; j < taille_sub; j++) {

            if (i + 1 < word.length) {

                mot += word[i + j]
                if (mot == _sub_string) {
                    // console.log('mot trouve')
                    res = true
                    break
                }

            }

        }
        mot = ''

    }

    return res
}

console.log(is_sub_string("hello", "lo"))
