//Se Declenche lorsque que le document HTML inital à étè completement chargé
document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector("body"); //On recupere le body pour pouvoir afficher par la suite la couleur
  let messageWIn = document.querySelector('.container');
  messageWIn.style.display="none";//au chargement de la page , le message n'apparait pas
 
 
  let array_code = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ]; //array qui comporte les commandes à comparer au moment de la saisi du code konami

  let array_vide = []; // array vide dans lequels on vas stocker la valeur d'entrer du code konami pour pouvoir les comparer par la suite

  body.addEventListener("keydown", (event) => {
    let x = event.key; // stock la saisi du clavier dans une variable pour voir en console si la saisi est bien recuper par l'evenement 
    //console.log(x);

    let compareArray = array_vide.push(x); // on ajoute les valeurs lors de la saisie clavier dans l'array vide
    //console.log(compareArray);
    console.log(array_vide);

    if (array_vide.length !== array_code.length) { // on compare si la longueur des array sont les memes 
      //console.log("no");
      return false;//si non le code s'arrete & ne check pas la suite
    }

    if (array_vide.sort().toString() !== array_code.sort().toString()) {// on verifie avec une condition si le trie ce fais dans l'ordre croissant
      return false;// si non le code s'arrete 
    }
    body.style.backgroundColor = "blue"; // si toute les etapes de verif sont passés, le code est pret à etre exécuté
    messageWIn.style.display='block';// si victoire , le display repasse à block et le message s'affiche

  });
});
