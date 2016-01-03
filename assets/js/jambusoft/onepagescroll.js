
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
            filter: ':not(.no-scroll)'
        });
    };

    var initialize = function () {
        onPageLoad();
    };

    return {
        initialize: initialize
    };
})();
