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

const inputEmail = document.querySelector('#email');
const inputUsername = document.querySelector('#username');
const usernameValidateLog = document.querySelector('.username-validate');
const emailValidateLog = document.querySelector('.email-validate');

inputEmail.addEventListener("input", function(e) {
    if (inputEmail.validity.valid) {
        emailValidateLog.textContent = '';
    } else {
        inputEmail.setCustomValidity("E-mail addres is incorrect!");
        emailShowValidateError();
    }
});

inputUsername.addEventListener("input", function(e) {
    if (inputUsername.validity.typeMismatch) {
        inputUsername.setCustomValidity("Username is incorrect!");
    } else {
        inputUsername.setCustomValidity("");
    }
});

function emailShowValidateError() {
    if(inputEmail.value === '') {
        emailValidateLog.textContent = 'Email is empty!';
    } else if(inputEmail.validity.typeMismatch) {
        emailValidateLog.textContent = 'Entered not an Email!';
    } else if(inputEmail.validity.tooShort) {
        emailValidateLog.textContent = `Email should be at least ${ inputEmail.minLength } characters; you entered ${ inputEmail.value.length }.`;
    }
}

popupBecomeAMembers.addEventListener('submit', function(e) {
    alert('submit!');
    if(!inputEmail.validity.valid) {
        alert('Asdgfdhfd');
        emailShowValidateError();
        e.preventDefault();
    }
});