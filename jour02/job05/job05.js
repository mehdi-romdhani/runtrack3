//Se Declenche lorsque que le document HTML inital à étè completement chargé
document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const foot = document.querySelector("footer");

  // innerHeight est hauteur du viewport

  //console.log(body);//debogage

  //console.log(pourcentageScroll);//debogage

  window.addEventListener("scroll", () => {
    let hauteurBody = body.clientHeight; // on recupere la  valeur d'un element en javascript ici le body
    let scrollParcours = window.scrollY; // on recupere la quantite de scroll parcours en px ;
    let pourcentageScroll = scrollParcours % hauteurBody; // on recupere le pourcentage de scroll avec la division
    let viewPortHauteur = window.innerHeight; // on recupere la  hauteur du viewport qui est la hauteur de ma page
    let scroll = scrollParcours / (hauteurBody - viewPortHauteur);

    
    let scrollPercent = Math.round(scroll * 100);//console.log(Math.round(scroll * 100)); // on arrondi la somme avec math.round

    let pr = foot.style.width = scrollPercent + "%";
    console.log(pr);

    if(pr >= "45%" && pr <= "75%" ){
        foot.style.backgroundColor="blue";
    }else{
        foot.style.backgroundColor="orange";
    }

  });
});
