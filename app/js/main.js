

function scrollDownInfo() {
    const buttonInfo = document.querySelector('#info');
    const elementInfo = document.querySelector('.holiday');

    buttonInfo.addEventListener('click', () => {
        elementInfo.scrollIntoView({ behavior: 'smooth' });
    });
}

function scrollDownAboutUs() {
    const buttonAbout = document.querySelector('#aboutus');
    const elementAbout = document.querySelector('.mountains');

    buttonAbout.addEventListener('click', () => {

        elementAbout.scrollIntoView({ behavior: 'smooth' });
    });
}

function scrollDownCulture() {
    const buttonCulture = document.querySelector('#culture-btn');
    const elementCulture = document.querySelector('.culture');

    buttonCulture.addEventListener('click', () => {

        elementCulture.scrollIntoView({ behavior: 'smooth' });
    });
}




// Scroll Down

function scrollDown() {
    const button = document.querySelector('#scrolldown');
    const element = document.querySelector('#holiday');

    button.addEventListener('click', () => {

        element.scrollIntoView({ behavior: 'smooth' });
    });
}
//
const $icon = document.querySelector('.page__scrolldown');
const $arrow = document.querySelector('.page__scrolldown');

$icon.addEventListener('mouseover', function () {
    $arrow.style.animation = 'arrowAnimation 2s forwards';
});

$arrow.addEventListener('animationend', function () {
    $arrow.style.animation = '';
});


const $icon2 = document.querySelector('.readmore-btn');
const $arrow2 = document.querySelector('.readmore-btn');

$icon2.addEventListener('mouseover', function () {
    $arrow2.style.animation = 'arrowRightAnimation 1s forwards ease-in-out';
});

$arrow2.addEventListener('mouseout', function () {
    $arrow2.style.animation = 'arrowLeftAnimation 1s forwards ease-in-out';
    $arrow2.addEventListener('animationend', function () {
        $arrow2.style.animation = '';
    });
});

$arrow2.addEventListener('animationiteration', function () {
    $arrow2.style.animation = '';
});










