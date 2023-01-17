//Se Declenche lorsque que le document HTML inital à étè completement chargé
document.addEventListener("DOMContentLoaded", () => {
  const citation = document.querySelector("#hidden"); // set variable pour hidde l'article au chargement de la page
  const btn = document.querySelector("#button"); //on recupere le btn
  citation.style.display = "none"; //on change la valeur de la propriété à none

  console.log(citation); //debogage de la variable citation dont sa valeur est égale à none

  function showHide() {
    // fonction qui vas hidde le text
    console.log("verif"); //pour verifié si notre fonction marche
    if (citation.style.display === "none") {
      // condition pour comparé la valeur de la variable
      citation.style.display = "block";
    } else {
      citation.style.display = "none";
    }
  }

  btn.addEventListener("click", () => {
    showHide();
    console.log("click");
  });
});

//console.log(document);
//console.log(Element);
//console.log(window);
