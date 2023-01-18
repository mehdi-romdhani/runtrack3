//Se Declenche lorsque que le document HTML inital à étè completement chargé
document.addEventListener("DOMContentLoaded", () => {
    let foot = document.querySelector('footer');
    let beginScroll = foot.scrollTop;
    console.log(foot);

        console.log(beginScroll);

        //const navbar = document.querySelector('#nav')

        window.addEventListener('scroll',()=>{
            var scroll = window.pageYOffset;
            if (scroll < 300) {
                // green
                foot.style.backgroundColor = 'green';
            } else if (scroll >= 300 && scroll < 600) {
                // yellow
                foot.style.backgroundColor = 'yellow';
            } else if (scroll >= 600 && scroll < 1200) {
                // blue
                foot.style.backgroundColor = 'blue';
            } else if (scroll >= 1200 && scroll < 1800) {
                // orange
                foot.style.backgroundColor = 'orange';
            } else if (scroll >= 1800 && scroll < 3000) {
                // red
                foot.style.backgroundColor = 'red';
            } else {
                // purple
                foot.style.backgroundColor = 'brown';
            }
        })
    
  });
  