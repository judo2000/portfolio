$().ready(function() {
    // target navbar elements
    let navBarSC = $('.navbar-collapse');
    let navBarNav = $('.navbar-nav');

    
    navBarNav.on('click', function(e) {
        navBarSC.removeClass('show');
    });
});   