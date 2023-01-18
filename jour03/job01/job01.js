// Script JS

// $() // pour ciblé un tag element on utilse la method $() en parametre sera une balise ou selecteurs css
$(function () {
  //Le document est ready & pret à reçevoir les methodes
  // jQuery methods
  $("#hide").click(function () {//methode ecouteur d'evenement
    $("p").hide();

    $("#show").click(function () {
      $("p").show();
    });
  });
});
