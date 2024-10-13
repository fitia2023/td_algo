/*****************************************************
*                                                    *
*           Fonction de fizzbuzz                     * 
*                                                    *
******************************************************/


function fizzbuzz(n: number) {
    let res: string = ''
    for (let i = 0; i < n; i++) {
        res += i == 0 ? '': '-'
        if ((i + 1) % 3 == 0) {
            if ((i + 1) % 5 == 0) {
                res += 'FizzBuzz'
            } else {
                res += 'Fizz'
            }
        } else if ((i + 1) % 5 == 0) {
            res += 'Buzz'
        } else {
            res += (i + 1)
        }
    }
    console.log(res)
}

fizzbuzz(16)


