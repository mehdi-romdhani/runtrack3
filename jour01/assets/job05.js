//Creation du script js qui gere la logique :) 

let jourSemaine = ['lundi','mardi','mecredi','jeudi','vendredi','samedi','dimanche'];// declaration tableau; 

function affichierJoursSemaines(){

    for (let i = 0; i < jourSemaine.length; i++) {
       
       
         let array_tab=jourSemaine[i];

         console.log(array_tab);
        
    }
}

console.log(affichierJoursSemaines());