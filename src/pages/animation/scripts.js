var buttonMobileHeader = document.querySelector('.header__mobile-menu_js');
var buttonCloseMobileHeader = document.querySelector('.mobile-header_close_js');
var mobileHeader = document.querySelector('.mobile-header');

buttonMobileHeader.addEventListener('click',function() {
    mobileHeader.classList.add('mobile-header_open');
})

buttonCloseMobileHeader.addEventListener('click',function() {
    mobileHeader.classList.remove('mobile-header_open');
}) 