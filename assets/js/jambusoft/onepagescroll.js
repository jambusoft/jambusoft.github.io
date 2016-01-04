
/////////////////////////////////
// Single page navigation
/////////////////////////////////

var onepagescroll = (function () {
    var onPageLoad = function () {
        $('.nav.navbar-nav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 900,
            scrollOffset: 0,
            scrollThreshold: 0.3,
            filter: ':not(.no-scroll)',
            // begin and end sections - Hack to fix click other menu items after the initial click for iOS devices
            begin: function () {
                $('body').append('<div id="device-dummy" style="height: 1px;"></div>');
            },
            end: function () {
                $('#device-dummy').remove();
            }
        });

        // navigate to services section on homepage arrow click
        $('#home a.img-next').click(function(event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: Math.round($('#services').offset().top)
            }, 750, 'swing', function () {
                //window.location.hash = '#services';
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
