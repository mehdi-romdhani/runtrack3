//Create Script JS with API fetch
//Set DOM
document.addEventListener("DOMContentLoaded", () => {
  // Creation d'une fonction 2 parametre : une chaine de caractere au format JSON & une clé
  function jsonKeyValue(file, value) {
    fetch(file)//il prend en parametre le fichier json
      .then((res) => {
        return res.json();
      })
      .then((text) => {//on recupere le fichier 
        console.log(text[value]);
      });
  }
  jsonKeyValue("./data.json", "city");
});
