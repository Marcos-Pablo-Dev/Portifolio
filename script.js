
    /* ativar e fechar menu */

let navMenu = document.querySelectorAll('.d-icon ion-icon');

navMenu.forEach(iconMenu => {
    let idIconMenu = iconMenu.getAttribute('id');
    console.log(idIconMenu)
    
    iconMenu.addEventListener('click', () => {
        const nav = document.querySelector('.navegation');
        nav.classList.toggle('active');
        let openMenu = document.querySelector('#open-menu');
        let closeMenu = document.querySelector('#close-menu')

        if (openMenu.classList.contains('active')){
            openMenu.classList.remove('active');
            closeMenu.classList.add('active');
        } else {
            openMenu.classList.add('active');
            closeMenu.classList.remove('active');
        }
    })
})

    /* escrita */

function writer(n){
    const textArray = n.innerHTML.split('');
    n.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => {n.innerHTML += letra}, 100 * (i+1))
    });
    n.innerHTML = '';
}

writer(document.querySelector('.strong-name'))

    /* window scroll */

let sections = document.querySelectorAll('.secoes');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 600;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

    /* Botão "Entre Em Contato"  e "Ver repositório"*/

let btnContact = document.querySelector('.s-contact-me');
let btnRepository = document.querySelector('.s-ver-repositorio');

        /* btn contact */

btnContact.addEventListener('mouseenter', () => {
    btnContact.classList.add('active');
})

btnContact.addEventListener('mouseout', () => {
    btnContact.classList.remove('active');
})

btnContact.addEventListener('click', () => {
    btnContact.classList.add('active');

    setTimeout(() => {
        btnContact.classList.remove('active')
    }, 130);
})

        /* btn repository */

btnRepository.addEventListener('mouseenter', () => {
    btnRepository.classList.add('active');
})
btnRepository.addEventListener('mouseout', () => {
    btnRepository.classList.remove('active');
})

btnRepository.addEventListener('click', () => {
    btnRepository.classList.add('active');

    setTimeout(() => {
        btnRepository.classList.remove('active')
    }, 150);
})

/* Detalhes Portifólio */

let projects = document.querySelectorAll('.fig-project');
var openDescription = false;
var projectActive = '';

projects.forEach(pjt => {
    var idp = pjt.getAttribute('id')

    pjt.addEventListener('click', () => {
        if(openDescription == false){

            document.querySelector('#'+ idp).classList.add('active');
            openDescription = true;
            projectActive = idp;
            
        } else if(openDescription == true) {
            if (idp === projectActive) {

                document.querySelector('#' + projectActive).classList.remove('active');
                openDescription = false;  

            } else {

                document.querySelector('#' + projectActive).classList.remove('active');
                document.querySelector('#' + idp).classList.add('active');
                projectActive = idp;

            }
        }
    })

    pjt.addEventListener('mousemove', () => {
            document.querySelector('#'+ idp).classList.add('active');
    })

    pjt.addEventListener('mouseout', () => {
            document.querySelector('#'+ idp).classList.remove('active');
    })
})
