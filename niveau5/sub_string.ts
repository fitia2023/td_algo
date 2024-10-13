/*****************************************************
*                                                    *
*           Fonction de sub string                   * 
*                                                    *
******************************************************/ 
 

function sub_string(word:string,begin:number,end:number):string{  
    let res:string = ''
    for (let i = begin; i <= end; i++) {
        res += word[i]
    }
    return res
}
 
console.log(sub_string("hello",0,2))


