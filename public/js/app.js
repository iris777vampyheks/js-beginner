let phrase = `Bonjour tout le monde` ;

// 1- Pour trouver la longueur
let longueur = phrase.length ;
console.log(longueur);

// 2- Pour cibler un caractère unique à travers son index
let caractere_unique = phrase.charAt(3);
console.log(caractere_unique);
console.log(phrase[3]);

// 3- Pour trouver l'index d'un caractère
let index_caractere = phrase.indexOf("o");
console.log(index_caractere);

// 4- Pour couper une chaine de caractère d'un string
let chaine_caractere_1 = phrase.substring(0 , 7);
console.log(chaine_caractere_1);
// let chaine_caractere_2 = phrase.slice(-5)
let chaine_caractere_2 = phrase.slice(0 , 7);
console.log(chaine_caractere_2);

// 5- Pour remplacer une chaine de caractère par une autre 
let remplacer = phrase.replace("Bonjour" , "Bonsoir");
console.log(remplacer);

// 6- Pour mettre en majuscule 
let majuscule = phrase.toUpperCase();
let miniscule = majuscule.toLowerCase();
console.log(majuscule , miniscule);

// 7- Pour diviser en Tableau
let diviseur = phrase.split(` `);
console.log(diviseur);

// 8- Vérification du 1er mot 
let verif_first_word = phrase.startsWith("Bonjour");
console.log(verif_first_word);
// 9- Vérification du dernier mot 
let verif_last_word = phrase.endsWith("seul");
console.log(verif_last_word);

// 10- vérification d'un mot dans le string
let verif_mot = phrase.includes("tout");
console.log(verif_mot);

// 11- Concaténation 
let phrase2 = "Hello";
let phrase3 = "world";

// let concatenation = phrase2 + " " + phrase3;
// let concatenation = `${phrase2} ${phrase3}`;
let concatenation = phrase2.concat(" " , phrase3 , " ", phrase);
console.log(concatenation);