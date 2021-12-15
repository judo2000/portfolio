$(function() {
    // target navbar elements
    let navBarSC = $('.navbar-collapse');
    let navBarNav = $('.navbar-nav');
    let footerEl = $('#footer')

    
    navBarNav.on('click', function(e) {
        navBarSC.removeClass('show');
    });

    footerEl.on('click', function(e) {
        navBarSC.removeClass('show');
    })

    
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

       // The function actually applying the offset
function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 100);
    }
  }
  
  // Captures click events of all <a> elements with href starting with #
  $(document).on('click', 'a[href^="#"]', function(event) {
    console.log(event.target);
    // Click events are captured before hashchanges. Timeout
    // causes offsetAnchor to be called after the page jump.
    window.setTimeout(function() {
      offsetAnchor();
    }, 0);
  });
  
  // Set the offset when entering page with hash present in the url
  window.setTimeout(offsetAnchor, 0);
});  
