window.addEventListener('scroll', function () {
    let image = document.querySelector('.holiday img');
    let holidayContent = this.document.querySelector('.holiday-content');
    let imageTop = image.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (imageTop < windowHeight) {
        image.classList.add('slide-in');
        holidayContent.classList.add('slide-in');
    }
});
