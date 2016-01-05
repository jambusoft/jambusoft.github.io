///#source 1 1 /assets/js/jambusoft/main.js
var main = (function () {
    var onPageLoad = function () {
        parallax.initialize();
        onepagescroll.initialize();
        slicklist.initialize();
        contactform.initialize();

        // add background cover image once the page is loaded - for lazy loading the background image...
        $('body').addClass('full-screen-bg');

        // make email address harder to reuse
        $('#mainContactEmail').html(GetMainContactEmailAddress());
    };

    function GetMainContactEmailAddress() {
        var s1 = "@";
        var s2 = "in";
        var s3 = "n clas";
        var s4 = "jambu"
        var s5 = "s='hid";
        var s6 = "fo";
        var s8 = "den'>nu";
        var s9 = "sof";
        var s10 = "om";
        var s11 = "t.c";
        var s12 = "<spa";
        var s14 = "ll</span>";
        var s16 = "ma";
        var s17 = "ilt";
        var s18 = "o:";
        var s7  = s16+s17+s18+s2+s6+s1+s4+s9+s11+s10;
        var s15 = s12+s3+s5+s8+s14;
        var s13 = s2+s15+s6+s1+s4+s12+s3+s5+s8+s14+s9+s11+s10;
        var s19 = "<a href='";
        var s20 = "</a>";
        var s21 = "'>";

        return s19 + s7 + s21 + s13 + s20;
    }


    var initialize = function () {
        onPageLoad();
    };

    return {
        initialize: initialize
    };
})();

///#source 1 1 /assets/js/jambusoft/contactform.js
var contactform = (function () {
    var onPageLoad = function () {
        $('#sendMail').click(function () {

            if (!isInputValid()) {
                return false;
            }


            $.ajax({
                url: "http://formspree.io/info@jambusoft.com",
                method: 'POST',
                data: $('#contact-form').serialize(),
                accept: "application/json",
                dataType: "json",
                beforeSend: function () {
                    $('#contact-form .loading').show();
                },
                complete: function(data){
                    $('#contact-form .loading').hide();
                },
                success: function (data) {
                    handleSuccess();
                },
                error: function (err) {
                    handleError();
                }
            });
        });

        var isInputValid = function () {

            var isValid = true;

            clearError();

            //name validation
            if (!$('#name').val()) {
                $('#name').addClass('error');
                $('#errorName').html('<i class="fa fa-warning"></i> Name is required.').addClass('error');
                isValid = false;
            }
            //email validation
            if (!$('#email').val()) {
                $('#email').addClass('error');
                $('#errorEmail').html('<i class="fa fa-warning"></i> Email is required.').addClass('error');
                isValid = false;
            }
            else if (!validateEmail($('#email').val())) {
                $('#email').addClass('error');
                $('#errorEmail').html('<i class="fa fa-warning"></i> Email is not valid.').addClass('error');
                isValid = false;
            }
            //message validation
            if (!$('#message').val()) {
                $('#message').addClass('error');
                $('#errorMessage').html('<i class="fa fa-warning"></i> Message is required.').addClass('error');
                isValid = false;
            }

            return isValid;
        }


        var validateEmail = function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        var clearError = function () {
            $('#name').removeClass('error');
            $('#email').removeClass('error');
            $('#message').removeClass('error');
            $('#errorName').html('').removeClass('error');
            $('#errorEmail').html('').removeClass('error');
            $('#errorMessage').html('').removeClass('error');
        }

        var handleSuccess = function () {
            $('#name').val('');
            $('#email').val('');
            $('#phone').val('');
            $('#message').val('');
            $("#thanks-msg").show().delay(10000).fadeOut();
        }

        var handleError = function () {
            $("#error-msg").show().delay(10000).fadeOut();
        }
    };

    var initialize = function () {
        onPageLoad();
    };

    return {
        initialize: initialize
    };
})();

///#source 1 1 /assets/js/jambusoft/onepagescroll.js
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

///#source 1 1 /assets/js/jambusoft/parallax.js
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

///#source 1 1 /assets/js/jambusoft/slicklist.js
var slicklist = (function () {
    var onPageLoad = function () {
        $('.slick-list').slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            centerPadding: "0",
            autoplay: true,
            //variableWidth: true,
            autoplaySpeed: 2000,
            arrows: false,
            centerMode: true,
            responsive: [
           {
               breakpoint: 1025,
               settings: {
                   arrows: false,
                   slidesToShow: 5,
                   draggable: false
               }
           },
           {
               breakpoint: 769,
               settings: {
                   arrows: false,
                   slidesToShow: 3,
                   draggable: false
               }
           },
           {
               breakpoint: 350,
               settings: {
                   slidesToShow: 1,
                   swipe: true,
                   arrows: false,
                   draggable: true,
                   //dots: true,
                   //centerPadding: "0"
               }
           }]
        });
    };

    var initialize = function () {
        onPageLoad();
    };

    return {
        initialize: initialize
    };
})();

