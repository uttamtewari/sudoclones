let navDropDowns = () => {
    let moreItem = document.querySelector('#more_item');
    let languageItem = document.querySelector('#language_item');
    
    let dropdownMore = document.querySelector('#dropdown_more');
    let dropdownLanguage = document.querySelector('#dropdown_language');
    // let links = document.querySelectorAll('.dropdown_container');
    
    moreItem.addEventListener('click', () => {
        dropdownLanguage.classList.remove('dropdown_click');
        dropdownMore.classList.toggle('dropdown_click');
    });
    languageItem.addEventListener('click', () => {
        dropdownMore.classList.remove('dropdown_click');
        dropdownLanguage.classList.toggle('dropdown_click');
    });
}

let hamburgerResponsive = () => {
    let hamburger = document.querySelector('.hamburger');
    let links = document.querySelector('.links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        links.classList.toggle('active');
    });
}

let parallaxHeader = () => {
    let moon = document.querySelector('.moon_svg');
    let headerSection = document.querySelector('.header_section');
    
    headerSection.addEventListener('mousemove', (event) => {
        let mouseX = event.pageX;
        let mouseY = event.pageY;
        moon.style.transform = 'translate(' + mouseX / -520+ 'px,' + mouseY / -60 + 'px)';
    });
}

let degress = 0;
let rotateCoins = () => {
    let coins = document.querySelectorAll('.coin_');

    let rotate = () => {
        for (const coin of coins) {
            degress++;
            coin.style.transform = 'rotateZ(' + degress + 'deg)';
        }
    }

    setInterval(rotate, 360);
}

let goSecondSection = () => {
    const heroScrollShape = document.querySelector('.hero_scroll_shape');

    heroScrollShape.addEventListener('click', () => {
        window.scrollTo({
            top: 610,
            behavior: 'smooth',
        });
    });
}

let cardCoinsShowUp = () => {
    window.addEventListener('scroll', () => {
        let coins = document.querySelectorAll('.card_coin');
        let windowSize = window.innerHeight/1.5;

        for (const iterator of coins) {
            let positionObjs = iterator.getBoundingClientRect().top;
            if (positionObjs < windowSize) {
                iterator.classList.add('animation');
            }
            console.log(`WindowSize: ${windowSize} PositionObjs: ${positionObjs}`);
        }

    });
}

navDropDowns();
hamburgerResponsive();
parallaxHeader();
rotateCoins();
goSecondSection();
cardCoinsShowUp();