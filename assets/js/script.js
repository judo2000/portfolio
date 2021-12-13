$(function() {
    // target navbar elements
    let navBarSC = $('.navbar-collapse');
    let navBarNav = $('.navbar-nav');

    
    navBarNav.on('click', function(e) {
        navBarSC.removeClass('show');
    });

    
    $("ul.navbar-nav li").click(function() {
        var anchor = $(this).find('a').attr('href')
        console.log(anchor);
        //$(scrollTo(anchor, 2000));
        $('html, body').animate({
            scrollTop: $(anchor).offset().top}, 200);
        // remove classes from all
        $("ul.navbar-nav li").removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
        });
});   