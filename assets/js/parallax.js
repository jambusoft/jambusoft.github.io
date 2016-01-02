var parallax = (function () {
    var onPageLoad = function () {

        $(window).resize(function () {
            RepositionNav();
        });

        RepositionNav();
    };

    function RepositionNav() {
        $('nav.navbar-centered').each(function () {
            var navobj = $(this), // assigning the object
             navlogo = $('div.navbar-header'),
             navTopInVH = 65, //defined in css -  top: 65vh;
             navlogoYInVH = -150; //defined in css - transform: translateY(-150vh);

            //Set menu top different in mobile view 
            if ($(window).width() <= 767) {
                navTopInVH = 15;
                $('#navbar-collapse-menu').addClass('in').css({ 'height': 'auto' });
            }

            RepositionNavbar(navobj, navlogo, navTopInVH, navlogoYInVH);

            $(window).scroll(function () {
                RepositionNavbar(navobj, navlogo, navTopInVH, navlogoYInVH);
            });
        });
    }

    function RepositionNavbar(navobj, navlogo, navTopInVH, navlogoYInVH) {
        var PC = $(window).scrollTop() * 100 / $(window).height();
        var top = navTopInVH - navTopInVH * PC / 100;
        var y = navlogoYInVH - navlogoYInVH * 1.5 * PC / 100;

        // Parallax effect for the nav
        top = top > 0 ? top : 0;
        navobj.css({ top: top + 'vh' });

        // Make the smaller logo fly from top
        y = y < 0 ? y : 0;
        navlogo.css({ transform: 'translateY(' + (y) + 'vh)' });

        // Make top menu transparent to have a better screen area
        if (top == 0) {
            $('.navbar-centered').addClass('navbar-centered-transparent');
        }
        else {
            $('.navbar-centered').removeClass('navbar-centered-transparent');
        }

        // Hide menu for mobile view once we start scrolling from homepage
        if ($(window).width() <= 767 && top > 9) {
            $('#navbar-collapse-menu').addClass('in').css({ 'height': 'auto' });
        }
        else {
            $('#navbar-collapse-menu').removeClass('in').css({ 'height': '1px' });
        }
    }

    var initialize = function () {
        onPageLoad();

    };

    return {
        initialize: initialize
    };
})();
