//Creation d'un script JS
document.addEventListener('DOMContentLoaded',()=>{
    let btn = document.querySelector('#button'); // on recupere l'id du btn 
    let para = document.querySelector('p');

    btn.addEventListener('click',()=>{ // ecouteur d'evenement ; 

        fetch('expression.txt')//Get
        // la promise renvoyé par fetch se resolve avec un objet de la classe RESPONSE
        .then(response=>{// l'api fetch renvoi une promise & c'est la que le traitement ce fait 
            return response.text();// on retourne la reponse
        }).then(text=>{
            console.log(text);// on vois si la reponse
            para.innerHTML=text;// on laffiche sur le window
        })
    })
    
})


