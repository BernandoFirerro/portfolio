//CONSTS
const menuButton = document.querySelector('.header__mobile');
const buttonLines = document.querySelectorAll('.header__mobile-line');
const menu = document.querySelector('.header');
const mainContent = document.querySelector('.main__content')
const nav = document.querySelector('.nav');
const list = document.querySelector('.menu__mobile-list');
const wrapper = document.querySelector('.wrapper');
const form = document.querySelector('.feedback');
const sendBtn = document.querySelector('.feedback__btn-send')
const menuLinks = document.querySelectorAll('.portfolio__list-item');
const item = document.querySelectorAll('.portfolio__right-content-img')

//UP BUTTON
const upButton = document.querySelector('.up');

//PORTFOLIO MENU
const portfolioMenu = document.querySelector('.portfolio__list-content');
const portfolioMenuMobile = document.querySelector('.portfolio__list-title')
portfolioMenuMobile.addEventListener('click', function () {
    portfolioMenu.classList.toggle('active')
})
//PORTFOLIO MENU LOGIC
for (let i = 0; i <= menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
        for (el of item) {
            el.classList.remove('active')
        }

        if (i == 0) {
            item.forEach(function (el, i) {
                item[i].classList.add('active')
            })
        } else if (i == 1) {
            item[1].classList.add('active');
            item[2].classList.add('active')
            item[3].classList.add('active')
        } else if (i == 2) {
            item[4].classList.add('active')
        } else if (i == 3) {
            item[0].classList.add('active')
        }


        for (elem of menuLinks) {
            elem.classList.remove('active')
        }
        menuLinks[i].classList.toggle('active')
    })
}


//MENU LOGIC
const menuMobile = document.querySelector('.menu__mobile');
menuButton.addEventListener('click', function (event) {
    menuMobile.classList.toggle('active')
    document.body.classList.toggle('hidden');
    buttonLines.forEach(function (el, i) {
        buttonLines[i].classList.toggle('active')
    })

})

list.addEventListener('click', function (event) {
    let target = event.target;
    if (target.className = 'menu__mobile-item') {
        document.body.classList.toggle('hidden');
        menuMobile.classList.toggle('active')
        buttonLines.forEach(function (el, i) {
            buttonLines[i].classList.toggle('active')
        })
    }
})

//UP BUTTON LOGIC
function mouseCoords(e) {
    x = e.pageX; // Координата X курсора
    y = e.pageY; // Координата Y курсора
    if (y >= window.screen.height) {
        upButton.classList.remove('none')
    } else {
        upButton.classList.add('none')
    }
}
sendBtn.addEventListener('click', function (event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(form).entries());
    console.log(data.desc)

    Email.send({
        SecureToken: "fee93bdc-6d16-4de1-9fac-94edb4feab0f",
        To: 'chatgagik@gmail.com',
        From: 'chatgagik@gmail.com',
        Subject: "Site report",
        Body: data.desc
    }).then(
        message => alert('The message has been sent!')
    );
})