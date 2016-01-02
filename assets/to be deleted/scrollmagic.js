var scrollmagic = (function () {
    var onPageLoad = function () {
        SetupSmoothScrollForNavigation();
    };

    var initialize = function () {
        onPageLoad();
    };

    return {
        initialize: initialize
    };

    function SetupSmoothScrollForNavigation() {
        $(document).on("click", "a[href^=#]", function (e) {
            var id = $(this).attr("href");

            if ($(id).length > 0) {
                e.preventDefault();

                TweenLite.to(window, 1, {
                    scrollTo: {
                        y: $(id).position().top + parseInt($(id).css('marginTop').replace('px', '')),
                        autoKill: true // Allow scroll position to change outside itself
                    },
                    ease: Cubic.easeInOut //Power2.easeOut
                });
                $('li > a.active ').removeClass('active');
                $(this).addClass('active');

                // If supported by the browser we can also update the URL
                if (window.history && window.history.pushState) {
                    history.pushState("", document.title, id);
                }
            }
        });
    }
})();
