//Se Declenche lorsque que le document HTML inital à étè completement chargé
document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelector("#button");//recupere le btn
  let paraGraphe = document.querySelector("#compteur");// recupere la valeur du compteur
  let n = paraGraphe.innerHTML;//valeur à 0 
  console.log(n);
  console.log(btn);
  console.log(paraGraphe);

  function addDone() {//function addDone
    console.log("verif");//verif si function worked

    n++;//counter ++
    paraGraphe.innerHTML = n;//plus un au compteur
  }

  btn.addEventListener("click", () => {
    addDone();
  });
});
