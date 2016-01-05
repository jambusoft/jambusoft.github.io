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
