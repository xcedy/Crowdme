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

const popupWrappers = document.querySelectorAll('.popup-wrapper');

const popupBecomeAMembersOpenButtons = document.querySelectorAll('.popup-Become-A-Member-open');
const popupBecomeAMembers = document.querySelector('.header-member-popup');
const popupBecomeAMembersCloseButton = popupBecomeAMembers.querySelector('.popup-close-button');

const popupBecomeAMemberAddEventListeners = function(e) {
    document.addEventListener('click', onDocumentClick);
    document.addEventListener('keydown', onPopupBecomeAMemberKeydown);
    popupBecomeAMembersCloseButton.addEventListener('click', onPopupBecomeAMemberCloseButtonClick);
}

const popupBecomeAMemberClassAdd = function(e) {
    popupBecomeAMembers.classList.add('popup-enabled');
}

popupBecomeAMembersOpenButtons.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        popupBecomeAMemberClassAdd();
        popupBecomeAMemberAddEventListeners();
    })
});

const popupBecomeAMemberClassRemove = function(e) {
    popupBecomeAMembers.classList.remove('popup-enabled');
}

const popupBecomeAMemberRemoveEventListeners = function(e) {
    popupBecomeAMembersCloseButton.removeEventListener('click', onPopupBecomeAMemberCloseButtonClick);
    document.removeEventListener('keydown', onPopupBecomeAMemberKeydown);
    document.addEventListener('click', onDocumentClick);
}

const closePopupBecomeAMember = function(e) {
    popupBecomeAMemberClassRemove();
    popupBecomeAMemberRemoveEventListeners();
}

const onPopupBecomeAMemberKeydown = function(e) {
    if (e.key === 'Escape') {
        e.preventDefault();
        closePopupBecomeAMember();
    }
}

const onPopupBecomeAMemberCloseButtonClick = function(e) {
    closePopupBecomeAMember();
}

const popupLoginOpenButtons = document.querySelectorAll('.popup-login-open');
const popupLogin = document.querySelector('.user-login-popup');
const popupLoginCloseButton = popupLogin.querySelector('.popup-close-button');

const popupLoginClassRemove = function(e) {
    popupLogin.classList.remove('popup-enabled');
}

const popupLoginRemoveEventListeners = function(e) {
    popupLoginCloseButton.removeEventListener('click', onPopupLoginCloseButtonClick);
    document.removeEventListener('keydown', onPopupLoginKeydown);
    document.removeEventListener('click', onDocumentClick);
}

const closePopupLogin = function(e) {
    popupLoginClassRemove();
    popupLoginRemoveEventListeners();
}

const onPopupLoginKeydown = function(e) {
    if (e.key === 'Escape') {
        e.preventDefault();
        closePopupLogin();
    }
}

const onPopupLoginCloseButtonClick = function(e) {
    closePopupLogin();
}
const popupLoginClassAdd = function(e) {
    popupLogin.classList.add('popup-enabled');
}

const popupLoginAddEventListeners = function(e) {
    document.addEventListener('click', onDocumentClick);
    document.addEventListener('keydown', onPopupLoginKeydown);
    popupLoginCloseButton.addEventListener('click', onPopupLoginCloseButtonClick);
}

popupLoginOpenButtons.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        popupLoginClassAdd();
        popupLoginAddEventListeners();        
    })
}) 

function onDocumentClick(e) {
    if (e.target === popupBecomeAMembers) {
        onPopupBecomeAMemberCloseButtonClick();
    }
    else if (e.target === popupLogin) {
        onPopupLoginCloseButtonClick();
    }
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

const cleaveEmail = new Cleave('#authorization-email', {
    email: true
});

const form = document.querySelector('.login-popup');
const emailField = form.querySelector('#authorization-email');
const passwordField = form.querySelector('#authorization-password');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    const isValid = true;

    if (!emailField.value) {
        isValid = false;
        showErrorMessage(emailField, 'Email is required.');
    } else {
        clearErrorMessage(emailField);
    }
    
    if (!passwordField.value) {
        isValid = false;
        showErrorMessage(passwordField, 'Password is required.');
    } else {
        clearErrorMessage(passwordField);
    }

    if (isValid) {
        form.submit();
    }
});

function showErrorMessage(field, message) {
    const errorMessage = field.parentNode.querySelector('.input-validate');
    errorMessage.textContent = message;
}

function clearErrorMessage(field) {
    const errorMessage = field.parentNode.querySelector('.input-validate');
    errorMessage.textContent = '';
}