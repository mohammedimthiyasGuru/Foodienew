$(document).on('click', '.collapse-menu', function () {
    $(this).find('i').toggleClass('icon-cross2');
    $('.vertical-nav').toggleClass('vertical-nav-sm');
    $('.dashboard-wrapper').toggleClass('dashboard-wrapper-lg');
})