new Swiper('.main-slider', {
    navigation: {
        nextEl: '.slide-next',
        prevEl: '.slide-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: true,
    loop: true
});

AOS.init();

AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});

const popupBecomeAMembersOpenButtons = document.querySelectorAll('.popup-Become-A-Member-open');
const popupBecomeAMembers = document.querySelector('.header-member-popup');
const popupBecomeAMembersCloseButton = popupBecomeAMembers.querySelector('.member-popup-close-button');


document.addEventListener('click', outModalClick);

for (let i = 0; i < popupBecomeAMembersOpenButtons.length; i++) {
        popupBecomeAMembersOpenButtons[i].addEventListener('click', function(e) {
        e.preventDefault();
        popupBecomeAMembers.classList.add('popup-enabled');
        
        document.addEventListener('keydown', CloseByKeyPopupBecomeAMember);
        popupBecomeAMembersCloseButton.addEventListener('click', ClosePopupBecomeAMember);
    });
}

const CloseByKeyPopupBecomeAMember = function(e) {
    if (e.key === 'Escape') {
        popupBecomeAMembers.classList.remove('popup-enabled');
    }
}

const ClosePopupBecomeAMember = function(e) {
    popupBecomeAMembers.classList.remove('popup-enabled');

    popupBecomeAMembersCloseButton.removeEventListener('click', ClosePopupBecomeAMember);
    document.removeEventListener('keydown', CloseByKeyPopupBecomeAMember);
}

const popupLoginOpenButtons = document.querySelectorAll('.popup-login-open');
const popupLogin = document.querySelector('.user-login-popup');
const popupLoginCloseButton = document.querySelector('.login-popup-close-button');

for (let i = 0; i < popupLoginOpenButtons.length; i++) {
    popupLoginOpenButtons[i].addEventListener('click', function(e) {
        e.preventDefault();
        popupLogin.classList.add('popup-enabled');

        document.addEventListener('keydown', CloseByKeyPopupLogin);
        popupLoginCloseButton.addEventListener('click', ClosePopupLogin);
    });
}

function outModalClick(e) {
    if (e.target === popupBecomeAMembers) {
        ClosePopupBecomeAMember();
    }
    else if (e.target === popupLogin) {
        ClosePopupLogin();
    }
}

const CloseByKeyPopupLogin = function(e) {
    if (e.key === 'Escape') {
        popupLogin.classList.remove('popup-enabled');
    }
}

const ClosePopupLogin = function(e) {
    popupLogin.classList.remove('popup-enabled');

    popupLoginCloseButton.removeEventListener('click', ClosePopupLogin);
    document.removeEventListener('keydown', CloseByKeyPopupLogin);
}

const menuItems = document.querySelectorAll('.main-menu-item');
const tabs = document.querySelectorAll('.main-menu-tab');

const switchTab = (e) => {
    e.preventDefault();
    
    menuItems.forEach(item => {
        item.classList.remove('menu-tab-active');
    });
    
    const menuItem = e.target.closest('.main-menu-item');
    menuItem.classList.add('menu-tab-active');
    
    tabs.forEach(tab => {
        tab.classList.remove('menu-data-active');
    });
    
    const selectedIndex = Array.from(menuItems).indexOf(menuItem);
    
    tabs[selectedIndex].classList.add('menu-data-active');
};

menuItems.forEach(item => {
    item.addEventListener('click', switchTab);
});