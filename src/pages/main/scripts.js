var popupBtn = document.querySelector('.button_js')
var popupForm = document.querySelector('.popup')
var popupOverlay = document.querySelector('.overlay')
var popupClose = document.querySelector('.popup_close')
var input = popupForm.querySelector('input');

popupBtn.addEventListener('click',function() {
    popupForm.classList.add('popup_open');
    popupOverlay.classList.add('overlay_open');
    input.focus();
})

popupClose.addEventListener('click',function() {
    popupForm.classList.remove('popup_open');
    popupOverlay.classList.remove('overlay_open');
})

window.addEventListener('keydown', function(event) {
    if(event.code ==="Escape") {
        popupForm.classList.remove('popup_open');
        popupOverlay.classList.remove('overlay_open');
    }

})


var buttonMobileHeader = document.querySelector('.header__mobile-menu_js');
var buttonCloseMobileHeader = document.querySelector('.mobile-header_close_js');
var mobileHeader = document.querySelector('.mobile-header');

buttonMobileHeader.addEventListener('click',function() {
    mobileHeader.classList.add('mobile-header_open');
})

buttonCloseMobileHeader.addEventListener('click',function() {
    mobileHeader.classList.remove('mobile-header_open');
}) 