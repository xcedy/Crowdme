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
    
new Swiper('.main-slider', {
    navigation: {
        nextEl: '.slide-next',
        prevEl: '.slide-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

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