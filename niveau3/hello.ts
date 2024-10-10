/*****************************************************
*                                                    *
*           Fonction de hello                        * 
*                                                    *
******************************************************/ 

// importation des modules
import * as  readlineSync from 'readline-sync';

function hello(nom:string){ 
    console.log(`Hello ${nom}`)
}

// Input utilisateur
hello(
    readlineSync.question("Entrez votre nom:")
)


