$(function() {
    // target navbar elements
    let navBarSC = $('.navbar-collapse');
    let navBarNav = $('.navbar-nav');
    let footerEl = $('#footer')

    // Remove class of show from mobile menu 
    // forces the menu to close on click 
    navBarNav.on('click', function(e) {
        navBarSC.removeClass('show');
    });
    
    // On Click function to add active style to 
    // clicked nav item and remove from other nav items
    $("ul.navbar-nav li").click(function() {
        var anchor = $(this).find('a').attr('href')
        $('html, body').animate({
            scrollTop: $(anchor).offset().top}, 200);
        // remove classes from all
        $("ul.navbar-nav li").removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
        });
});  
