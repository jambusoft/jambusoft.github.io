var parallax = (function () {
    var onPageLoad = function () {
        $('nav.navbar-centered').each(function () {
            var navobj = $(this), // assigning the object
             navlogo = $('a.navbar-brand'),
             navTopInVH = 65, //defined in css -  top: 65vh;
             navlogoYInVH = -150; //defined in css - transform: translateY(-150vh);

            RepositionNavbar(navobj, navlogo, navTopInVH, navlogoYInVH);

            $(window).scroll(function () {
                RepositionNavbar(navobj, navlogo, navTopInVH, navlogoYInVH);
            });
        });
    };

    function RepositionNavbar(navobj, navlogo, navTopInVH, navlogoYInVH) {
        var PC = $(window).scrollTop() * 100 / $(window).height();
        var top = navTopInVH - navTopInVH * PC / 100;
        var y = navlogoYInVH - navlogoYInVH * 1.5 * PC / 100;

        top = top > 0 ? top : 0;
        navobj.css({ top: top + 'vh' });

        y = y < 0 ? y : 0;
        navlogo.css({ transform: 'translateY(' + (y) + 'vh)' });

        if (top == 0) {
            $('.navbar-centered').addClass('navbar-centered-transparent');
        }
        else {
            $('.navbar-centered').removeClass('navbar-centered-transparent');
        }
    }

    var initialize = function () {
        onPageLoad();
    };

    return {
        initialize: initialize
    };
})();
