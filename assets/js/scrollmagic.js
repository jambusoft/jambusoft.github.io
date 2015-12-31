var scrollmagic = (function () {
    var onPageLoad = function () {
        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                reverse: true   // allows the effect to trigger when scrolled in the reverse direction
            }
        });

        SetupStickyNav(controller);
        //SetupSmoothScrollForSections(controller);

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

                // If supported by the browser we can also update the URL
                if (window.history && window.history.pushState) {
                    history.pushState("", document.title, id);
                }
            }
        });
    }


    function SetupStickyNav(controller) {
        // Change menu color once we reach services
        //var scenex = new ScrollMagic.Scene({triggerElement: "#services"})
        //                .setClassToggle("#main-nav", "dark")
        //                .addTo(controller);


        //// stick menu to the top
        //var scene = new ScrollMagic.Scene({
        //    triggerElement: '#main-nav',
        //    duration: $(document).height() - $('#main-nav').top // pin element for the entire page
        //})
		//.setPin('#main-nav')
		//.addTo(controller);
    }

    //function ResetActiveNavItems() {
    //    $('#main-nav ul a').removeClass('active');
    //}

    function SetupSmoothScrollForSections(controller) {
        //var scene1 = new ScrollMagic.Scene({ triggerElement: '#home' })
        //                                .on("enter", function (event) {
        //                                    ResetActiveNavItems();
        //                                })
        //                                .setClassToggle('#nav-home', 'active')
        //                                .addTo(controller);
        //var scene2 = new ScrollMagic.Scene({ triggerElement: '#services' })
        //                                .on("enter", function (event) {
        //                                    ResetActiveNavItems();
        //                                })
        //                                .setClassToggle('#nav-services', 'active')
        //                                .addTo(controller);
        //var scene3 = new ScrollMagic.Scene({ triggerElement: '#technologies' })
        //                                .on("enter", function (event) {
        //                                    ResetActiveNavItems();
        //                                })
        //                                .setClassToggle('#nav-technologies', 'active')
        //                                .addTo(controller);
        //var scene4 = new ScrollMagic.Scene({ triggerElement: '#get-in-touch' })
        //                                .on("enter", function (event) {
        //                                    ResetActiveNavItems();
        //                                })
        //                                .setClassToggle('#nav-footer', 'active')
        //                                .addTo(controller);

        //// Change behaviour of controller
        //// to animate scroll instead of jump
        //controller.scrollTo(function (target) {
        //    TweenMax.to(window, 1, {
        //        scrollTo: {
        //            y: target,
        //            autoKill: true // Allow scroll position to change outside itself
        //        },
        //        ease: Cubic.easeInOut
        //    });
        //});


        //  Bind scroll to anchor links
        $(document).on("click", "a[href^=#]", function (e) {
            //var id = $(this).attr("href");

            //if ($(id).length > 0) {
            //    e.preventDefault();

            //    alert('scrollto test');
            //    TweenLite.to(window, 2, { scrollTo: { y: 400 }, ease: Power2.easeOut });

            //    // trigger scroll
            //    //controller.scrollTo(id);
            //    //TweenMax.to(window, 1, {
            //    //    scrollTo: {
            //    //        y: 600,
            //    //        autoKill: true // Allow scroll position to change outside itself
            //    //    },
            //    //    ease: Cubic.easeInOut
            //    //});

            //    // If supported by the browser we can also update the URL
            //    if (window.history && window.history.pushState) {
            //        history.pushState("", document.title, id);
            //    }
            //}
        });
    }
})();
