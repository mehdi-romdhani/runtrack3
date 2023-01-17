//Creation d'un script JS

function isPrimeNumber(number){

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }else{
        return true;
      }
    }


}
// si le divende est divisible par le diviseur alors c'est tojours egale a zero

function sommeDesNombresPremiers(nb1, nb2) {
  //verif si les deux nb sont des nombre premier ;

    if(isPrimeNumber(nb1) == true && isPrimeNumber(nb2)==true){

        a = nb1 + nb2;
        return  a ; 
    }

}


console.log(isPrimeNumber(6));