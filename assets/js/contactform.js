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



















