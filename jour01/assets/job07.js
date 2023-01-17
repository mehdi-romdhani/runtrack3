//Creation d'un script JS

//let dateString=new Date(2022, 1, 1).toLocaleDateString("de-DE", options)

const this_date = new Date();

let date = this_date.toLocaleString();
//console.log(date);

function jourTravaille(date) {

  // paramatre sous le format jour
  let jourSemaine = date.getDay();
  let mois = date.getMonth();
  let annee = date.getFullYear();
  let jourMois = date.getDate();
  

  let jourFerie = [
    "1/1/2022",
    "18/4/2022",
    "1/5/2022",
    "26/5/2022",
    "6/6/2022",
    "14/7/2022",
    "15/8/2022",
    "1/11/2022",
    "11/11/2022",
    "25/12/2022",
  ];

  let dateFerie = jourMois + " / " + mois + "/" + annee;

  if (jourFerie.includes(dateFerie)) {

    console.log(
      " le " + jourSemaine + " " + mois + " " + annee + "est un jour férié"
    );
  } else if (jourSemaine == 6 && jourSemaine == 0) {
    console.log(
      " Non le " + jourSemaine + " " + mois + " " + annee + " est un week_end"
    );
  } else {
    console.log(
      "Oui le " + jourSemaine + " " + mois + " " + annee + " est un jour travaillé"
    );
  }


  

}

dateDay = jourTravaille(date);
console.log(dateDay);

//let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
//console.log(dateDay.toLocaleDateString("de-DE", options));


