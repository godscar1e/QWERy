const darkbg = document.querySelector('.darkbg');

function disableBurgerMenuToggle() {
    setTimeout(() => {
        const burgerMenuToggle = document.querySelector('.burger-menu__toggle');
        burgerMenuToggle.checked = false;
    }, 300);
}

function darkDisable() {
    darkbg.style.display = "none";
}

function scrollDownInfoBurger() {
    const buttonInfoBurger = document.querySelector('#info-burger');
    const elementInfoBurger = document.querySelector('.holiday');

    buttonInfoBurger.addEventListener('click', () => {
        disableBurgerMenuToggle();
        elementInfoBurger.scrollIntoView({ behavior: 'smooth' });
        darkDisable();
    });
}

function scrollDownAboutUsBurger() {
    const buttonAboutBurger = document.querySelector('#aboutus-burger');
    const elementAboutBurger = document.querySelector('.mountains');

    buttonAboutBurger.addEventListener('click', () => {
        disableBurgerMenuToggle();
        elementAboutBurger.scrollIntoView({ behavior: 'smooth' });
        darkDisable()
    });
}

function scrollDownCultureBurger() {
    const buttonCultureBurger = document.querySelector('#culture-burger');
    const elementCultureBurger = document.querySelector('.culture');

    buttonCultureBurger.addEventListener('click', () => {
        disableBurgerMenuToggle();
        elementCultureBurger.scrollIntoView({ behavior: 'smooth' });
        darkDisable()
    });
}

// Получаем ссылку на чекбокс и элемент <body>
const checkbox = document.querySelector('#burger-menu__toggle');
const bg = document.querySelector('.darkbg');
const title = document.querySelector(' .pagebody__main-title');


function handleCheckboxChange() {
    if (checkbox.checked) {
        bg.style.display = "block";
        title.style.animation = "none";
        title.style.opacity = "1";
    } else {
        bg.style.display = "none";
        title.style.animationFillMode = "forwards";
        title.style.opacity = "1";
    }
}

// Добавляем обработчик события изменения состояния чекбокса
checkbox.addEventListener('change', handleCheckboxChange);
