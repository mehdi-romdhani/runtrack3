//Se Declenche lorsque que le document HTML inital à étè completement chargé
document.addEventListener("DOMContentLoaded", () => {
  let textArea = document.querySelector("#keylogger"); //recuperation de l'id du tag textArea;
  //console.log(window.event);
  //textArea.innerHTML = "lol" ;
  
  window.addEventListener("keypress", (event) => {//Evenement sur le clavier


    let x = event.key;// stockage de la valeur de la touche dans une variable
    textArea.innerHTML = x; // ecriture de la valeur de la touche dans text area 
      if(document.activeElement === textArea){ // condition si un focus est detecter
            textArea.innerHTML = x+x;//concatenation des lettres
      }
  
    
    console.log(event.key); // debogage
          
  });
});
