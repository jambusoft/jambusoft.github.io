var waypoints = (function () {
    var onPageLoad = function () {

        new Waypoint.Inview({
            element: $('#main-nav')[0],
            entered: function(direction) {
                if (direction == 'up') {
                    //$('#main-nav').removeClass('stuck');

                    $('.navbar-fixed-top').addClass('hidden');
                    $('.navbar-main').removeClass('hidden');
                }
            },
            exit: function (direction) {
                if (direction == 'down') {
                    //$('#main-nav').addClass('stuck');

                    $('.navbar-fixed-top').removeClass('hidden');
                    $('.navbar-main').addClass('hidden');
                }
            }
        });

        // section - services
        new Waypoint.Inview({
            element: $('#services')[0],
            entered: function (direction) {
                if (direction == 'up') {
                    $('#main-nav').removeClass('dark');

                    $('#main-nav a.active').removeClass('active');
                    $('#nav-home').addClass('active');
                }
            },
            exit: function (direction) {
                if (direction == 'down') {
                    $('#main-nav').addClass('dark');

                    $('#main-nav a.active').removeClass('active');
                    $('#nav-services').addClass('active');
                }
            },
        });


        // section - technologies
        new Waypoint.Inview({
            element: $('#technologies')[0],
            entered: function (direction) {
                if (direction == 'up') {
                    $('#main-nav').addClass('dark');

                    $('#main-nav a.active').removeClass('active');
                    $('#nav-services').addClass('active');
                }
            },
            exit: function (direction) {
                if (direction == 'down') {
                    $('#main-nav').removeClass('dark');

                    $('#main-nav a.active').removeClass('active');
                    $('#nav-technologies').addClass('active');
                }
            },
        });


        // section - get-in-touch
        new Waypoint.Inview({
            element: $('#get-in-touch')[0],
            entered: function (direction) {
                if (direction == 'up') {
                    $('#main-nav a.active').removeClass('active');
                    $('#nav-technologies').addClass('active');
                }
            },
            exit: function (direction) {
                if (direction == 'down') {
                    $('#main-nav').removeClass('dark');

                    $('#main-nav a.active').removeClass('active');
                    $('#nav-footer').addClass('active');
                }
            },
        });
    };

    var initialize = function () {
        onPageLoad();
    };

    return {
        initialize: initialize
    };
})();
