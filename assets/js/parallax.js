var parallax = (function () {
    var onPageLoad = function () {
        $('nav.navbar-centered').each(function () {
            var $navobj = $(this), // assigning the object
             $navlogo = $('a.navbar-brand'),
             navTopInVH = 65, //defined in css -  top: 65vh;
             navlogoYInVH = -150; //defined in css - transform: translateY(-150vh);

            $(window).scroll(function () {

                var PC = $(window).scrollTop() * 100 / $(window).height();
                var top = navTopInVH - navTopInVH * PC / 100;
                var y = navlogoYInVH - navlogoYInVH * 1.5 * PC / 100;

                top = top > 0 ? top : 0;
                $navobj.css({ top: top + 'vh' });

                y = y < 0 ? y : 0;
                $navlogo.css({ transform: 'translateY(' + (y) + 'vh)' });
            });
        });
    };

    var initialize = function () {
        onPageLoad();
    };

    return {
        initialize: initialize
    };
})();
