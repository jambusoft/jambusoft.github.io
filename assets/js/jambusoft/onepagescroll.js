
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
    };

    var initialize = function () {
        onPageLoad();
    };

    return {
        initialize: initialize
    };
})();
