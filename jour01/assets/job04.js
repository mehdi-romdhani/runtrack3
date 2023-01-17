//Creation du script js qui gere la logique :) 






function bisextileYears(insertYears){

    if(insertYears % 4 == 0 && insertYears %100 !=0){

        return true;

    }else if(insertYears % 400 == 0){

        return true;

    }else{

        return false;
    }

}


console.log(bisextileYears(5000));