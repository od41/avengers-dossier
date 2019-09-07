// listen for stuff
// should I use jquery?? YES

// when you click a hero
// load it's image on the image pane
// change the background to the heroe's image


let heroes = document.getElementsByTagName('button');

heroes = Array.from(heroes);

heroes.map((hero) => {
    hero.addEventListener('click', () => {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        // this.className += ' active';
        hero.classList.add('active');
        updateHero(hero.id);
    });
})


function updateHero(key) {
    console.log('update hero function!');
    photoFrame = document.getElementById('hero-photo-frame');
    bgFrame = document.getElementById('bg-image' );
    
    // change hero photo
    switch(key) {
        case 'iron-man':
            photoFrame.firstElementChild.src = '';
            photoFrame.firstElementChild.src = './img/iron-man.png';
            bgFrame.style = 'background: top center / cover no-repeat fixed url("./img/iron-man-bg.jpg");';
            break;

        case 'captain-america':
            photoFrame.firstElementChild.src = '';
            photoFrame.firstElementChild.src = './img/captain-america.png';
            bgFrame.style.background = "";
            bgFrame.style = 'background: top center / cover no-repeat fixed url("./img/captain-america-bg.jpg"); ';
            break;            

        case 'black-widow':
                photoFrame.firstElementChild.src = '';
                photoFrame.firstElementChild.src = './img/black-widow.png';
                bgFrame.style.background = "";
                bgFrame.style = 'background: top center / cover no-repeat fixed url("./img/black-widow-bg.jpg"); ';
                break;            
    
        case 'spider-man':
                photoFrame.firstElementChild.src = '';
                photoFrame.firstElementChild.src = './img/spider-man.png';
                bgFrame.style.background = "";
                bgFrame.style = 'background: top center / cover no-repeat fixed url("./img/spider-man-bg.jpg"); ';
                break;
        
        default:
            return key;
    }

    // change background photo
}