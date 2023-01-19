//console.log(USERS);
//console.log(NEWS);

//Creation d'une promesse asynchrone

const promiseGetUsers = new Promise(function (resolve, reject) { //deux argument ETAT INITIAL PENDING
  setTimeout(function () {//set une intervalle pour que le code soit exécuté une seconde apres
    if (USERS !== "undefined") {
      resolve(USERS); // function resolve qui recoit la value , ETAT FULLFILED ,qui resout la promesse
    //   seul est resolve est pris en compte a la fois 
    } else {
      reject("Acces aux users impossible"); // function reject qui renvoie une erreur, etat REJECTED , qui rejete la promesse
      //apeller new error pour les erreurs
    }
  }, 1000);
});

// Recuperation de la promesse ou ecouté letat de la promesse;

promiseGetUsers
  .then(function (u) { // prend en parametre deux argument result ou error
    // recupere la promesse du resolve ;
    document.querySelector('#users').innerHTML=u[0].name+" "+u[1].name;
    console.log(u[0].name +" " + u[1].name);//objet array
    console.log(promiseGetUsers.state);
    return u.length;// on retour la longeur du tableau ; 
  }).then(function(users){//ici on recupere le retour de users en passant en parametre
    console.log(`il y a ${users} users qui existe`);
  })
  .catch(function (e) {
    //recupere lerreur
    console.log(e);
  });

//   UNE PROMESSE QUI EST SOIT TENUE SOIT REJETTER EST APELLEE SETTLED (AQUITTER) 
